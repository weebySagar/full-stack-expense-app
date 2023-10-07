import axios from 'axios';

const baseUrl ='http://localhost:3000/premium';

export const getLeaderboard = async()=>{
    try {
        const {data} =  await axios.get(baseUrl+'/getLeaderboard',{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        });
        return data;
        
    } catch (error) {
        throw error.response.data
    }
}