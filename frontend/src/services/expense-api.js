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

export const getAllExpenses = async(page)=>{
    try {
        const {data} = await axios.get(baseUrl+'/getAllExpenses?page='+page,{
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

export const getExpensesByWeekly = async ()=>{
    try {
        const {data} = await axios.get(baseUrl+'/weeklydata',
        {
            headers:{
                Authorization:localStorage.getItem('token')
            }
        });
        // if(data.expenseThisWeek.length>0){
            return data
        // }
    } catch (error) {
        throw error.response.data
    }
}

export const getExpensesByMonthly = async ()=>{
    try {
        const {data} = await axios.get(baseUrl+'/monthlydata',{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        });
        return data;
    } catch (error) {
        throw error.response.data
    }
}