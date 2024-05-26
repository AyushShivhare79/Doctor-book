import { Input } from "@repo/ui/input";
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
      <div className="flex border justify-center flex-col h-80 bg-blue-950">
        <div className="border flex justify-center gap-5 ">
          <SelectData value="State" item="MadhyaPradesh" />
          <SelectData value="City" item="Damoh" />

          <InputWithButton />
        </div>
      </div>
    </>
  );
}

export function InputWithButton() {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        type="text"
        placeholder="Search Doctor..."
        className="text-white"
      />
      <Button
        type="submit"
        className="border border-black text-white bg-blue-600"
      >
        Search
      </Button>
    </div>
  );
}

export function SelectData({ value, item }: any) {
  return (
    <Select>
      <SelectTrigger className="w-[180px] text-white">
        <SelectValue placeholder={value} />
      </SelectTrigger>
      <SelectContent className=" text-white ">
        <SelectItem value="light">{item}</SelectItem>
        <SelectItem value="dark">Test 2</SelectItem>
        <SelectItem value="system">Test 3</SelectItem>
      </SelectContent>
    </Select>
  );
}
