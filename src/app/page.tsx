"use client";
import { Input } from "@/components/atoms/input";
import { PasswordInput } from "@/components/atoms/password-input";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <div className="font-vazir bg-">
      <p>Hello world</p>
      {/* <Input placeholder="تنظیمات" value={value} onChange={(e) => setValue(e.target.value)} /> */}
      <PasswordInput placeholder="تنظیمات" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
