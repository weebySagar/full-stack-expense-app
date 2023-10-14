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
        
        localStorage.setItem('token',data.token)
        return data
    } catch (error) {
        throw error.response.data.error
    }
}

export const getUserDetails = async()=>{
    try {
        const {data} = await axios.get(baseUrl,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        });
        if(!data){
            return
        }
        return data
    } catch (error) {
        throw error.response.data.error
    }
}

export const updateUserDetails = async(userData)=>{
    try {
        const {data} = await axios.put(baseUrl+'/update',userData,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        });
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
        throw error.response.data
    }
}