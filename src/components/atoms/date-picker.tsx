import React, { useState } from "react";
import { default as ReactDatePicker } from "react-multi-date-picker";
import Toolbar from "react-multi-date-picker/plugins/toolbar";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import DateObject from "react-date-object";

function DatePicker() {
  const [values, setValues] = useState([
    new DateObject({ calendar: persian }).subtract(4, "days"),
    new DateObject({ calendar: persian }).add(4, "days"),
  ]);
  return (
    <ReactDatePicker
      value={values}
      onChange={setValues}
      range
      plugins={[
        weekends(),
        <Toolbar
          position="bottom"
          names={{
            today: "امروز",
            deselect: "",
            close: "بستن",
          }}
        />,
      ]}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
    />
  );
}

export default DatePicker;
