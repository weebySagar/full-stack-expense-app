const express = require('express');
const router = express.Router();

const {authenticate} = require('../auth/authenticate')

const {createOrder,verifyPayment} = require('../controllers/payment-controller')

router.post('/create-order',createOrder);

router.post('/verifyPayment',authenticate,verifyPayment);

module.exports =router