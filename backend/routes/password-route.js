const express = require('express');
const router = express.Router();

const {sendForgotPasswordMail,getResetPassword,postResetPassword} = require('../controllers/password-controller');

router.post('/forgotpassword',sendForgotPasswordMail);

router.get('/resetpassword/:id',getResetPassword);

router.post('/resetpassword/:uuid',postResetPassword);


module.exports = router