import React from "react";
import "../styles/expense-data/expense-data.scss";
import {
  getAllExpenses,
  deleteExpense,
  getExpensesByWeekly,
  getExpensesByMonthly,
} from "../services/expense-api";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import toast from "react-hot-toast";
import { downloadFile } from "../services/user-api";
import Pagination from "./Pagination";

const ExpenseData = () => {
  const { user } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);

  const [expenseData, setExpenseData] = useState({
    expenses: [],
    totalExpense: 0,
    totalPages: 1,
  });
  const [expenseTime, setExpenseTime] = useState("");

  useEffect(() => {
    getAllExpenses(currentPage).then((data) =>
      setExpenseData({ expenses: data.expenses, totalPages: data.totalPages })
    );
    if (expenseTime == "weekly") {
      const expenseByWeekly = getExpensesByWeekly();
      toast.promise(expenseByWeekly, {
        success: (data) => {
          setExpenseData({
            expenses: data.expensesThisWeek,
            totalExpense: data.totalExpenseThisWeek[0].totalExpense,
          });
          return "Weekly Data";
        },
        error: (err) => {
          setExpenseTime("");
          return err;
        },
      });
    }
    if (expenseTime == "monthly") {
      const expenseByMonthly = getExpensesByMonthly();
      toast.promise(expenseByMonthly, {
        success: (data) => {
          setExpenseData({
            expenses: data.expensesThisMonth,
            totalExpense: data.totalExpenseThisMonth[0].totalExpense,
          });
          return "Monthly Data";
        },
        error: (err) => {
          setExpenseTime("");
          return err;
        },
      });
    }
  }, [expenseTime, currentPage]);

  const handleSelectChange = (e) => {
    setExpenseTime(e.target.value);
  };

  const handleDelete = (id) => {
    deleteExpense(id).then(() =>
      setExpenseData((prevExpense) =>
        prevExpense.filter((expense) => expense.id !== id)
      )
    );
  };

  const handleDownload = () => {
    const fileUrl = downloadFile(expenseTime);
    toast.promise(fileUrl, {
      success: (file) => {
        window.location.href = file;
        return "Successfully downloaded file";
      },
      error: (err) => err,
    });
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < expenseData.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPagination = () => {
    const buttons = [];
    for (let i = 1; i <= expenseData.totalPages; i++) {
      buttons.push(
          <li className={`page-item ${i == currentPage ? "active" :""}`}>

        <button class="page-link" onClick={() => goToPage(i)} key={i}>
          {i}
        </button>
          </li>
      );
    }
    return buttons;
  };

  if (expenseData.expenses.length == 0) {
    return (
      <div className="expense-data h-100">
        <div className="title">
          <h4>Expenses</h4>
        </div>
        <div className="inner-wrapper">
          <div className="card text-center  mb-3 bg-7">
            <div className="card-body">
              <h5 className="card-title">No Expenses</h5>
              <p className="card-text subheading">
                Click below button to add some expenses
              </p>
              <Link
                className="btn-secondary"
                to="/dashboard/expense/addExpense"
              >
                Add Expense
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="expense-data h-100">
      <div className="title d-flex justify-content-between">
        <h4>Expenses</h4>
        <Link to="/dashboard/expense/addExpense" className="btn-secondary">
          Add Expense
        </Link>
      </div>
      {user.premiumUser && (
        <div className="d-flex justify-content-between content-wrapper align-items-center">
          <div className="menu  d-flex">
            <div className="select-menu">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleSelectChange}
                value={expenseTime}
              >
                <option selected value="">
                  Select{" "}
                </option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <div className="download-btn mx-4">
              <button className="btn-secondary" onClick={handleDownload}>
                Download File
              </button>
            </div>
          </div>
          <div className="downloaded-files-btn">
            <Link to="downloadedfiles" className="btn-secondary">
              Downloaded Files
            </Link>
          </div>
        </div>
      )}

      <div className="expense-table content-wrapper">
        <table className="position-relative">
          <thead>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Date</th>
            <th>Action</th>
          </thead>
          <tbody className="mt-4">
            {expenseData.expenses.map((item) => (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>₹ {item.amount}</td>
                <td>{item.paymentMethod}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* <hr className='w-100 '/> */}
            <tr className="border-top">
              <td colspan="2">
                <h5>Total Expense</h5>
              </td>
              <td>
                <h5>₹ {expenseData.totalExpense}</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {
        expenseData.totalPages > 1 &&
      <div className="expense-pagination">
        <Pagination
          previousPage={previousPage}
          nextPage={nextPage}
          renderPagination={renderPagination}
          currentPage={currentPage}
          totalPages={expenseData.totalPages}
          />
      </div>
        }
    </div>
  );
};

export default ExpenseData;
