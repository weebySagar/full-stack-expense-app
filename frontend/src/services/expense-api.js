import axios from "axios";


const baseUrl = 'http://localhost:3000/expense';

export const addExpense = async(expenseData)=>{
    try {
        await axios.post(baseUrl+'/addExpense',expenseData,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
    } catch (error) {
        throw error.response.data
    }
}

export const getAllExpenses = async(page,limit)=>{
        try {
        const {data} = await axios.get(baseUrl+`/getAllExpenses?page=${page}&limit=${limit}`,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        });
        return data
    } catch (error) {
        throw error.response.data
    }
}

export const deleteExpense = async(id)=>{
    try {
       const {data} = await axios.delete(baseUrl+'/'+id,{
        headers:{
            Authorization:localStorage.getItem('token')
        }
       });
    } catch (error) {
        throw error.response.data
 
    }
}

export const getExpensesByWeekly = async (page,limit)=>{
    try {
        const {data} = await axios.get(baseUrl+`/weeklydata?page=${page}&limit=${limit}`,
        {
            headers:{
                Authorization:localStorage.getItem('token')
            }
        });
        console.log(data);
        // if(data.expenseThisWeek.length>0){
            return data
        // }
    } catch (error) {
        throw error.response.data
    }
}

export const getExpensesByMonthly = async (page,limit)=>{
    try {
        const {data} = await axios.get(baseUrl+`/monthlydata?page=${page}&limit=${limit}`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        });
        return data;
    } catch (error) {
        throw error.response.data
    }
}