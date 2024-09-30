import { CustomTable } from "@/components/customtable/CustomTable";
import Button from "@/components/ui/button/Button";
import React from "react";
import { AiOutlineWallet } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Expenses() {
  const fetchExpenses = () => {
    try {
    } catch (error) {}
  };
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-3">{/*  */}</div>
        <div className="col-9">
          <div className="row">
            <div className="col-9">
              <h3>Expenses</h3>
              <p>Create/Manage your expenses</p>
            </div>
            <div className="col-3">
              <Button href={"/expenses/new"} title={"Add new expense"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
