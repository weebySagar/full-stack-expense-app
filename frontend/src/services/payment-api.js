import axios from "axios";
import toast from 'react-hot-toast'

const baseUrl = '/api/user'

export const createPaymentOrder =async()=>{
const {data} = await axios.post(baseUrl+'/create-order',{amount:20});
const token = localStorage.getItem('token');
const {razorpayId ,order} = data;
const options ={
    key :  razorpayId,
    amount : order.amount,
    currency: order.currency,
    name : "Track Wise",
    order_id : order.id,
    handler:async function(response){
        await axios.post(baseUrl+'/verifyPayment',{
            razorpay_payment_id:response.razorpay_payment_id,
            razorpay_order_id:response.razorpay_order_id,
            razorpay_signature:response.razorpay_signature
        },{
            headers:{
                'Authorization':token
            }
        }
            
        )
    }
}
const razorpay = new Razorpay(options);
razorpay.open()

razorpay.on('payment.failed',()=>{
    toast.error('Payment failed')
})
}