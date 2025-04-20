// components/CustomHeader.tsx
import React, { useState } from "react";
import { getAllDatesInRange } from "react-multi-date-picker";
import DateObject from "react-date-object";
import { PluginProps } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";

const CustomHeader = ({ date, handleChange }: PluginProps) => {
  const [mode, setMode] = useState<"days" | "months" | "years">("days");

  const currentYear = date.year;
  const currentMonth = date.month.index;

  const handleMonthClick = () => setMode("months");
  const handleYearClick = () => setMode("years");

  const selectMonth = (month: number) => {
    handleChange(date.set("month", month));
    setMode("days");
  };

  const selectYear = (year: number) => {
    handleChange(date.set("year", year));
    setMode("months");
  };

  const renderMonths = () => {
    return (
      <div className="rmdp-ep-container">
        {Array.from({ length: 12 }, (_, i) => (
          <button key={i} onClick={() => selectMonth(i + 1)} className="rmdp-button">
            {new DateObject({ calendar: persian }).set("month", i + 1).format("MMMM")}
          </button>
        ))}
      </div>
    );
  };

  const renderYears = () => {
    const startYear = currentYear - 6;
    return (
      <div className="rmdp-ep-container">
        {Array.from({ length: 12 }, (_, i) => (
          <button key={i} onClick={() => selectYear(startYear + i)} className="rmdp-button">
            {startYear + i}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="rmdp-header">
      <div className="rmdp-header-values">
        <span className="rmdp-header-month" onClick={handleMonthClick}>
          {date.format("MMMM")}
        </span>
        <span className="rmdp-header-year" onClick={handleYearClick}>
          {date.year}
        </span>
      </div>
      {mode === "months" && renderMonths()}
      {mode === "years" && renderYears()}
    </div>
  );
};

export default CustomHeader;
