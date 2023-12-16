import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllExpenses } from "../services/expense-api";

const ExpenseOverviewTable = () => {
  const [expenseData, setExpenseData] = useState({expenses:[]});

  useEffect(() => {
    getAllExpenses(1,5).then((data) =>{

        setExpenseData({ expenses: data.expenses, totalPages: data.totalPages });
    }
    );
  }, []);

  return (
    <div className="expense-data my-4">
      <div className="text d-flex align-items-center justify-content-between">
        <h5>Recent Expenses</h5>
        <Link to="/dashboard/expense" style={{color:'#27c9d8'}}>View all</Link>
      </div>

      {
        expenseData.expenses.length > 0 
        ?  <div className="expense-table">
        <table>
          <thead>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Date</th>
          </thead>
          <tbody>
          {expenseData.expenses.map((item,index) => (
              <tr key={item.id}
              >
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>₹ {item.amount}</td>
                <td>{item.paymentMethod}</td>
                <td className="date">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      :
      <div className="text-wrapper text-center content-wrapper flex-grow-1">
        <h5>You don't have any Expenses</h5>
            <Link className="btn btn-primary" to="expense/addExpense">Add Expense</Link>
      </div>
      }
     
    </div>
  );
};

export default ExpenseOverviewTable;
