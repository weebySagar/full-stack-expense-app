import axios from "axios";

const baseUrl = 'http://localhost:3000/user';


export const addUser =async(userData)=>{
try {
    const {data} =await axios.post(baseUrl+'/signup',userData);
    return data
} catch (error) {
    throw error.response.data.error
    
}
}

export const loginUser = async(userData)=>{
    try {
        const {data} =await axios.post(baseUrl+'/login',userData);
        return data
    } catch (error) {
        throw error.response.data.error
    }
}