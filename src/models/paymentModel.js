const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['Initiated', 'Completed', 'Refunded'], default: 'Initiated' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', paymentSchema);
