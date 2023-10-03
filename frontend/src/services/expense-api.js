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

export const getAllExpenses = async(setData)=>{
    try {
        const {data} = await axios.get(baseUrl+'/getAllExpenses',{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        });
        setData(data)
    } catch (error) {
        throw error.response.data
    }
}

export const deleteExpense = async(id)=>{
    try {
       const {data} = await axios.delete(baseUrl+'/'+id);
       console.log(data);
    } catch (error) {
        throw error.response.data
 
    }
}