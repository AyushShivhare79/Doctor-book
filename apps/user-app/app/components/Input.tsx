"use client";

import { Input } from "@repo/ui";
import { ChangeEvent, useState } from "react";

export default function ({ data }: { data: any }) {
  const [text, setText] = useState<string>();

  console.log(data);

  return (
    <>
      <Input
        className="text-white w-auto"
        placeholder="Search Doctor..."
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
    </>
  );
}
