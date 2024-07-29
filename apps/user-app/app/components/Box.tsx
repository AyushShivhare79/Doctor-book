"use client";

import Input from "./Input";
import { Button } from "@repo/ui";

import SearchInput from "@repo/ui/searchInput";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui";
import { ChangeEvent, useState } from "react";
import { string } from "zod";
import DoctorCard from "./DoctorCard";

export default function () {
  const [text, setText] = useState<string>("");

  return (
    <>
      <div className="  bg-blue-950 border border-red-600 flex flex-col justify-center items-center gap-5 md:flex md:flex-row md:justify-center md:gap-5 min-h-80 max-h-80">
        <SelectData />
        <SelectData />
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
      </div>
      <DoctorCard text={text} />
    </>
  );
}
export function SelectData() {
  return (
    <>
      <div>
        <Select>
          <SelectTrigger className="w-[180px] text-white">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="text-white">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
