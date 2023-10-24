import React, { useEffect, useState } from 'react'
import ExpenseOverviewContainerData from './ExpenseOverviewContainerData'
import { getAllExpenses } from '../services/expense-api'

const ExpenseOverviewContainer = () => {
    const [expenseData ,setExpenseData] = useState([
        {
            title:'Total Income',
            amount:'50,000',

        },
        {
            title:'Total Expenses',
            amount:0,

        },
        {
            title:'Total Balance',
            amount:'50,000',

        },
    ])

    useEffect(()=>{
        getAllExpenses().then(data=>{
            setExpenseData(prevData=>{
                const updatedData = [...prevData];
                updatedData[1] = {...updatedData[1],amount:data.totalExpense}
                return updatedData
            })
            })
    },[])

    return (
    <div className='expense-overview-container'>
        <div className="inner-wrapper">
            <div className="row">
                {   
                    expenseData?.map(item=> <ExpenseOverviewContainerData item={item}/>)
                }
            </div>
        </div>
    </div>
  )
}


export default ExpenseOverviewContainer