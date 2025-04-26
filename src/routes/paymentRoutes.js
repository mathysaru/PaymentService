const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/initiate', paymentController.initiatePayment);
router.get('/:paymentId', paymentController.retrievePaymentDetails);
router.post('/refund/:paymentId', paymentController.refundPayment);
router.get('/user/:userId', paymentController.getUserPayments);

module.exports = router;
