import React, { useState, useEffect } from "react";
import DatePickerLib from "react-multi-date-picker";
import Toolbar from "react-multi-date-picker/plugins/toolbar";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import DateObject from "react-date-object";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import CustomHeader from "./CustomHeader"; // پلاگین سربرگ

import "react-multi-date-picker/styles/layouts/mobile.css";

const fullWeekDays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

function DatePicker() {
  const [value, setValue] = useState(new DateObject());

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (date: DateObject | null) => {
    if (date) setValue(date);
  };

  return (
    <DatePickerLib
      value={value}
      onChange={handleChange}
      calendar={persian}
      locale={persian_fa}
      weekDays={fullWeekDays}
      className={isMobile ? "rmdp-mobile" : "rmdp-prime"}
      plugins={[
        weekends(),
        <Toolbar
          key="toolbar"
          position="bottom"
          names={{
            today: "امروز",
            deselect: "",
            close: "بستن",
          }}
        />,
        <CustomHeader key="custom-header" />
      ]}
    />
  );
}

export default DatePicker;
