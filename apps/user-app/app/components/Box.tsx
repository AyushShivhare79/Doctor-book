import Input from "./Input";
import { Button } from "@repo/ui/button";

import SearchInput from "@repo/ui/searchInput";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/select";

export default function () {
  return (
    <>
      <div className="flex justify-center flex-col h-80 bg-blue-950">
        <div className="flex justify-center gap-5">
          <SelectData />
          <SelectData />
          <Input />
        </div>
      </div>
    </>
  );
}

// export function InputWithButton() {
//   return (
//     <>
//       <Input className="text-white" placeholder="Search Doctor..." />
//       <Button className="bg-blue-600 text-white ">Search</Button>
//     </>
//   );
// }

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
