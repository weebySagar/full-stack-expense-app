import { CustomTable } from "@/components/customtable/CustomTable";
import DatePicker from "@/components/datepicker/DatePicker";
import Button from "@/components/ui/button/Button";
import React, { useState } from "react";
import { DateTime } from "luxon";
import Select from "@/components/select/Select";
// import Slider from "rc-slider";
import Slider from "@/components/slider/Slider";
export default function Expenses() {
  const fetchExpenses = () => {
    try {
    } catch (error) {}
  };
  const [startDate, setStartDate] = useState(DateTime.now());
  const [endDate, setEndDate] = useState(DateTime.now().plus({ days: 7 }));
  const [dateRange, setDateRange] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [amountRange, setAmountRange] = useState([10, 80]);

  const categories = [
    { label: "Groceries", values: "groceries" },
    { label: "Healthcare", values: "healthcare" },
    { label: "Education", values: "education" },
    { label: "Clothing", values: "clothing" },
    { label: "Entertainment", values: "entertainment" },
    { label: "Travel", values: "travel" },
    { label: "Miscellaneous", values: "miscellaneous" },
  ];

  const payments = [
    { label: "Cash", values: "cash" },
    { label: "Debit Card", values: "debit_card" },
    { label: "Credit Card", values: "credit_card" },
    { label: "Net Banking", values: "net_banking" },
    { label: "Online (UPI,Wallet)", values: "upi_wallet" },
  ];

  const handleDateChange = (range) => {
    const startDate = range.selection.startDate;
    const endDate = range.selection.endDate;
    setStartDate(startDate);
    setEndDate(endDate);

    const startD = DateTime.fromJSDate(startDate);
    const endD = DateTime.fromJSDate(endDate);

    const rangeText = `From ${startD.toFormat("dd-MM-yyyy")} To ${endD.toFormat(
      "dd-MM-yyyy"
    )}`;
    setDateRange(rangeText);
  };

  const handleCategoryChange = (value) => {
    if (!value) setSelectedCategory("");
    else setSelectedCategory(value.values);
  };

  const handlePaymentChange = (value) => {
    if (!value) setSelectedPayment("");
    else setSelectedPayment(value.values);
  };
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-3">
          <div className="p-4 rounded bg-7">
            <DatePicker
              startDate={startDate}
              endDate={endDate}
              handleDateChange={handleDateChange}
              dateRangeText={dateRange}
            />
            <Select
              options={categories}
              placeholder={"Select Category"}
              onChange={handleCategoryChange}
              value={
                categories?.find(
                  (category) => category.values === selectedCategory
                ) || null
              }
            />
            <Select
              options={payments}
              placeholder={"Select Payment Type"}
              onChange={handlePaymentChange}
              value={
                payments?.find(
                  (payment) => payment.values === selectedPayment
                ) || null
              }
            />
            {/* <Slider range={[0, 80]} min={0} max={100} /> */}
            <Slider
              min={0}
              max={100}
              range={amountRange}
              setRange={setAmountRange}
              label={"Select Amount Range"}
            />
          </div>
        </div>
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
