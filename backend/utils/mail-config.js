const Brevo = require('@getbrevo/brevo');
const htmlContent = require('./htmlTemplate');
require('dotenv').config();
const client = Brevo.ApiClient.instance;

const apiKey = client.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_APIKEY;

const transactEmailApi = new Brevo.TransactionalEmailsApi();

const sender = {
    name:'Track Wise',
    email:'sagarmaurya814@gmail.com'
}





exports.sendForgotPasswordMail =async(email)=>{
    const recievers = [
        {
            email : email
        }
    ]
   return transactEmailApi.sendTransacEmail( {
    sender,
    to: recievers,
    subject : 'Reset Password Link',
    textContent : 'forgot your password ? dont worry click here on this',
    htmlContent: htmlContent
})
}