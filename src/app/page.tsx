"use client";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { DrawerDialog } from "@/components/atoms/ResponsiveDialog";
import { EditIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  return (
    <div className="font-vazir flex justify-center ">
      {/* <Input placeholder="تنظیمات" value={value} onChange={(e) => setValue(e.target.value)} /> */}
      {/* <PasswordInput placeholder="تنظیمات" value={value} onChange={(e) => setValue(e.target.value)} /> */}
      {/* <DatePicker /> */}
      {/* <PaginationTable
        totalCount={100}
        page={page}
        onPageChange={(page) => setPage(page)}
      /> */}
      <DrawerDialog
        trigger={
          <Button variant="outline" className="gap-2">
            <EditIcon className="w-4 h-4" />
            ویرایش پیشرفته
          </Button>
        }
        title={
          <div className="text-xl font-bold border-b pb-2 mb-4">
            تنظیمات حرفه‌ای
          </div>
        }
        content={
          <div className="space-y-4">
            <Input
              placeholder="تنظیمات"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        }
      />
    </div>
  );
}
