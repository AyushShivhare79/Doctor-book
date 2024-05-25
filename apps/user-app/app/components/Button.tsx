"use client";

import { storeData } from "../lib/actions/getAdminData";

export default function ({ id, btnName }: any) {
  return (
    <>
      <button
        onClick={() => storeData(id)}
        className="flex justify-center items-center border rounded-lg bg-blue-700 text-white h-8 w-28"
      >
        {btnName}
      </button>
    </>
  );
}
