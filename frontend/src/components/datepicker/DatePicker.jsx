import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import Input from "../input/Input";
import "@styles/daterange/daterange.scss";

export default function DatePicker({
  startDate,
  endDate,
  show = false,
  handleDateChange,
  dateRangeText,
}) {
  const [showDatePicker, setShowDatePicker] = useState(show);

  return (
    <div className="daterange">
      <Input
        // disabled={true}
        type={"text"}
        placeholder="Date Range"
        // label={"Select Date"}
        value={dateRangeText}
      />
      <div
        className="button"
        onClick={() => setShowDatePicker(!showDatePicker)}
      ></div>
      {showDatePicker && (
        <div className="dropdown">
          <DateRangePicker
            ranges={[{ startDate, endDate, key: "selection" }]}
            months={1}
            rangeColors={["#27c9d8"]}
            onChange={handleDateChange}
            inputRanges={[]}
            color="#000"
          />
          <div
            className="offset"
            onClick={() => setShowDatePicker(false)}
          ></div>
        </div>
      )}
    </div>
  );
}
