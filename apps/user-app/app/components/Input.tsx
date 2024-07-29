"use client";

import { Input } from "@repo/ui";
import { ChangeEvent, useState } from "react";

export default function ({ onChange }: { onChange: any }) {
  // console.log(data);

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
