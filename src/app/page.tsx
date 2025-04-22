"use client";
import DatePicker from "@/components/atoms/date-picker/date-picker";
import { Input } from "@/components/atoms/input";
import { PasswordInput } from "@/components/atoms/password-input";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <div className="font-vazir flex justify-center ">
      <p>Hello world</p>
      {/* <Input placeholder="تنظیمات" value={value} onChange={(e) => setValue(e.target.value)} /> */}
      {/* <PasswordInput placeholder="تنظیمات" value={value} onChange={(e) => setValue(e.target.value)} /> */}
      <DatePicker />
      {/* <CustomDatePicker /> */}
      {/* <DynamicPagination currentPage={3} totalPages={10}  /> */}
    </div>
  );
}
