import React from 'react'
import ExpenseOverviewContainerData from './ExpenseOverviewContainerData'

const ExpenseOverviewContainer = () => {
    const data =[
        {
            title:'Total Income',
            amount:'50,000',

        },
        {
            title:'Total Expenses',
            amount:'20,000',

        },
        {
            title:'Total Balance',
            amount:'50,000',

        },
    ]
  return (
    <div className='expense-overview-container'>
        <div className="inner-wrapper">
            <div className="row">
                {   
                    data.map(item=> <ExpenseOverviewContainerData item={item}/>)
                }
            </div>
        </div>
    </div>
  )
}


export default ExpenseOverviewContainer