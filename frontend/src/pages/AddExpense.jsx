import React from 'react'
import AddExpenseForm from '../components/AddExpenseForm';
import "../styles/add-expense/add-expense.scss"

const AddExpense = () => {
  return (
    <div className='expense mt-4'>
        <div className="expense-form">
            <div className="title mt-2">
              <h3>Add Expense</h3>
            </div>
            <div className="content-wrapper">

            <AddExpenseForm/>
            </div>
        </div>
    </div>
  )
}

export default AddExpense