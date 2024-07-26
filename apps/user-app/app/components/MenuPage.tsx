"use client";

import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ({
  user,
  onSignin,
  onSignout, 
}: {
  onSignin: any;
  onSignout: any;
  user: any;
}) {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {/* <div className="flex gap-3 items-center">
          <div
            className=" hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </div>
          <div
            className=" hover:cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            Panel
          </div>
          <Button
            className="border border-black bg-black text-white w-20"
            // className="flex justify-center items-center bg-black text-white rounded-lg w-24 h-8"
            onClick={user ? onSignout : onSignin}
          >
            {user ? "Logout" : "Login"}
          </Button>
        </div> */}
      {/* 
      <div className="flex justify-center flex-col items-center bg-black border border-black h-screen">
        <ul className="flex flex-col gap-5 font-sans text-white text-5xl hover:cursor-pointer border border-black"> */}

      {/* <div className="flex gap-3 items-center">
        <div className=" hover:cursor-pointer" onClick={() => router.push("/")}>
          Home
        </div>
        <div
          className=" hover:cursor-pointer"
          onClick={() => router.push("/dashboard")}
        >
          Panel
        </div>
        <Button
          className="border border-black bg-black text-white w-20"
          // className="flex justify-center items-center bg-black text-white rounded-lg w-24 h-8"
          onClick={user ? onSignout : onSignin}
        >
          {user ? "Logout" : "Login"}
        </Button>

        <li>Home</li>
        <li>Panel</li>
        <li>Signup</li>
        </ul> */}
      {/* </div> */}
    </>
  );
}
