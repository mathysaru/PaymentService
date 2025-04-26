const Payment = require('../models/paymentModel');

exports.initiatePayment = async (req, res) => {
    const { userId, amount } = req.body;
    try {
        let payment = await Payment.create({ userId, amount });
        payment.status = 'Completed';
        await payment.save();
        res.status(201).json(payment);  
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.retrievePaymentDetails = async (req, res) => {
    const { paymentId } = req.params;
    try {
        const payment = await Payment.findById(paymentId);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.refundPayment = async (req, res) => {
    const { paymentId } = req.params;
    try {
        const payment = await Payment.findByIdAndUpdate(paymentId, { status: 'Refunded' }, { new: true });
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserPayments = async (req, res) => {
    const { userId } = req.params;
    try {
        const payments = await Payment.find({ userId });
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
