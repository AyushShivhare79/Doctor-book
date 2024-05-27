"use client";

import { Button } from "@repo/ui/button";
import { storeData } from "../lib/actions/getAdminData";
import { toast } from "react-toastify";

export default function ({ id, btnName }: any) {
  return (
    <>
      <Button
        onClick={async () => await storeData(id)}
        className="border bg-blue-600 text-white"
      >
        {btnName}
      </Button>
    </>
  );
}
