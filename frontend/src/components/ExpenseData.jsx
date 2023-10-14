import React from 'react';
import "../styles/expense-data/expense-data.scss";
import { getAllExpenses, deleteExpense, getExpensesByWeekly ,getExpensesByMonthly} from "../services/expense-api"
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import toast from 'react-hot-toast';

const ExpenseData = () => {
  const [expenseData, setExpenseData] = useState({
    expenses: [],
    totalExpense: 0
  });
  const [expenseTime, setExpenseTime] = useState('');

  useEffect(() => {
    getAllExpenses().then(data => setExpenseData({ expenses: data }));
    if (expenseTime == 'weekly') {
      const expenseByWeekly = getExpensesByWeekly();
      toast.promise(expenseByWeekly,{
        success:(data)=>{
          setExpenseData({ expenses: data.expensesThisWeek, totalExpense: data.totalExpenseThisWeek[0].totalExpense });
          return 'Weekly Data'
        },
        error:(err)=>{
          setExpenseTime('')
          return err}
      }
        )
    }
    if (expenseTime == 'monthly') {
      const expenseByMonthly= getExpensesByMonthly();
      toast.promise(expenseByMonthly,{
        success:(data)=>{
          setExpenseData({ expenses: data.expensesThisMonth, totalExpense: data.totalExpenseThisMonth[0].totalExpense });
          return 'Monthly Data'
        },
        error:(err)=>{
          setExpenseTime('')
          return err
        }
      }
        )
    }
  }, [expenseTime])

  const handleSelectChange = (e) => {
    setExpenseTime(e.target.value);
  }

  const handleDelete = (id) => {
    deleteExpense(id).then(() => setExpenseData(prevExpense => prevExpense.filter(expense => expense.id !== id)))
  }

  if (expenseData.length == 0) {
    return (
      <div className="expense-data h-100">
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
    <div className='expense-data h-100'>
      <div className="title d-flex justify-content-between">
        <h4>Expenses</h4>
        <Link to='/dashboard/expense/addExpense' className='btn-secondary'>Add Expense</Link>
      </div>
      <div className="expense-table content-wrapper">
        <select className="form-select" aria-label="Default select example" onChange={handleSelectChange} value={expenseTime}>
          <option selected value="">Select </option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <table className='position-relative'>

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
              expenseData.expenses.map(item => <tr key={item.id}>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>₹ {item.amount}</td>
                <td>{item.paymentMethod}</td>
                <td>{item.date}</td>
                <td><button className='btn btn-danger btn-sm' onClick={() => handleDelete(item.id)}>Delete</button></td>
              </tr>)

            }
            {/* <hr className='w-100 '/> */}
            <tr className='border-top'>
              <td colspan="2"><h5>
                Total Expense
                </h5>
                </td>
              <td>
                <h5>

                {expenseData.totalExpense}
                </h5>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default ExpenseData