import axios from "axios";

const baseUrl = "https://trackwise-api.vercel.app/api/password";


export const forgotpassword =async(email)=>{
try {
    const {data} = await axios.post(baseUrl+'/forgotpassword',{email});
    return data
} catch (error) {
    throw error.response.data
}
}