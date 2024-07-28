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

export default function () {
  return (
    <>
      <div className="  bg-blue-950 border border-red-600 flex flex-col justify-center items-center gap-5 sm:flex sm:flex-row sm:justify-center sm:gap-5 min-h-80 max-h-80">
        <SelectData />
        <SelectData />
        {/* <Input /> */}
      </div>
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
