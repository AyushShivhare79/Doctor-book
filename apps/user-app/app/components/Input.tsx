"use client";

import { Input } from "@repo/ui";
export default function ({ onChange }: { onChange: any }) {
  return (
    <>
      <Input
        className="text-white w-auto"
        placeholder="Search Doctor..."
        onChange={onChange}
      />
    </>
  );
}
