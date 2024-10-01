import React from "react";
import AddExpenseForm from "@/components/form/AddExpenseForm";
import "@/styles/add-expense/add-expense.scss";

const AddExpense = () => {
  return (
    <div className="add-expense h-100">
      <div className="expense-form h-100">
        <div className="title mt-2">
          <h3>Add Expense</h3>
        </div>
        <div className="content-wrapper">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
