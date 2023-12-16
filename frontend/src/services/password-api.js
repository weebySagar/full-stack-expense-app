import axios from "axios";

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/password`;


export const forgotpassword =async(email)=>{
try {
    const {data} = await axios.post(baseUrl+'/forgotpassword',{email});
    return data
} catch (error) {
    throw error.response.data
}
}