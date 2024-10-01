import { CustomTable } from "@/components/customtable/CustomTable";
import DatePicker from "@/components/datepicker/DatePicker";
import Button from "@/components/ui/button/Button";
import React, { useState } from "react";
import { DateTime } from "luxon";

export default function Expenses() {
  const fetchExpenses = () => {
    try {
    } catch (error) {}
  };
  const [startDate, setStartDate] = useState(DateTime.now());
  const [endDate, setEndDate] = useState(DateTime.now().plus({ days: 7 }));
  const [dateRange, setDateRange] = useState("");

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
