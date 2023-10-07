import React from 'react';
import "../styles/expense-data/expense-data.scss";
import { getAllExpenses, deleteExpense } from "../services/expense-api"
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ExpenseData = () => {
  const [expenseData, setExpenseData] = useState([])

  useEffect(() => {
    getAllExpenses(setExpenseData)
  }, [])



  const handleDelete = (id) => {
    deleteExpense(id).then(() => setExpenseData(prevExpense => prevExpense.filter(expense => expense.id !== id)))
  }

  if (expenseData.length == 0) {
    return (
      <div className="expense-data">
        <div className="title">
          <h4>Expenses</h4>
        </div>
        <div className="inner-wrapper">


          <div className="card text-center  mb-3 bg-7" >
            <div className="card-body">
              <h5 className="card-title">No Expenses</h5>
              <p className="card-text subheading">Click below button to add some expenses</p>
              <Link className="btn-secondary" to="/dashboard/expense/addExpense">Add Expense</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='expense-data'>
      <div className="title d-flex justify-content-between">
        <h4>Expenses</h4>
        <Link to='/dashboard/expense/addExpense' className='btn-secondary'>Add Expense</Link>
      </div>
      <div className="expense-table content-wrapper">
        <table>
          <thead>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Date</th>
            <th>Action</th>
          </thead>
          <tbody className='mt-4'>
            {
              expenseData.map(item => <tr key={item.id}>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>₹ {item.amount}</td>
                <td>{item.paymentMethod}</td>
                <td>{item.date}</td>
                <td><button className='btn btn-danger btn-sm' onClick={() => handleDelete(item.id)}>Delete</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ExpenseData