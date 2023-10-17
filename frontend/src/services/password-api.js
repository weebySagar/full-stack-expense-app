import axios from "axios";

const baseUrl = "http://localhost:3000/password";


export const forgotpassword =async(email)=>{
try {
    const {data} = await axios.post(baseUrl+'/forgotpassword',{email});
    return data
} catch (error) {
    throw error.response.data
}
}