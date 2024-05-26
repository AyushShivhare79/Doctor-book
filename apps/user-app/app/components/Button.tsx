"use client";

import { Button } from "@repo/ui/button";
import { storeData } from "../lib/actions/getAdminData";

export default function ({ id, btnName }: any) {
  return (
    <>
      <Button
        onClick={() => storeData(id)}
        className="border bg-blue-600 text-white"
      >
        {btnName}
      </Button>
    </>
  );
}
