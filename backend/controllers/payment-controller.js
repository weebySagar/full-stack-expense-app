const crypto = require('crypto');

const razorpayInstance = require('../utils/payment-config');

exports.createOrder =async(req,res)=>{

const options = {
    amount : req.body.amount * 100,
    currency: 'INR'
}
try {
    const order =await razorpayInstance.orders.create(options);
    res.json({order :order,razorpayId:process.env.RAZORPAY_ID})
} catch (error) {
    res.status(400).send('Something went wrong')
}
}


exports.verifyPayment = async(req,res)=>{
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {

   await req.user.update({premiumUser:true})
    res.redirect(
      `http://localhost:5173/dashboard`
    );
    
  } else {
    res.status(400).send('Payment failed');
  }
}