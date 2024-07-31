"use client";

import { Button } from "@repo/ui";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "./Doctor.png";
import Image from "next/image";
export default function ({
  user,
  onSignin,
  onSignout,
}: {
  onSignin: any;
  onSignout: any;
  user: any;
}) {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();
  const handleClick = () => {
    setOpen(!open);
  };

  //You can improve this

  // const handleResize = () => {
  //   if (window.innerWidth < 720) {
  //       setOpen(false)
  //   }
  // }

  // // create an event listener
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize)
  // }, [])

  return (
    <>
      <div className="flex justify-between items-center pr-10 pt-2 pb-2 border-b-2">
        {/* <div className="text-2xl font-medium"> */}
          {/* <img src={logo} alt="HERE" /> */}
          <Image
            src={logo}
            alt="LOGO"
            className="max-w-[200px] min-w-[200px] max-h-[40px] min-h-[40px] object-cover"
          />
        {/* </div> */}

        <div className="hidden md:flex md:gap-3 md:items-center">
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
            onClick={user ? onSignout : onSignin}
          >
            {user ? "Logout" : "Login"}
          </Button>
        </div>

        {/* This will only shown in mobile view */}
        <div className=" md:hidden" onClick={handleClick}>
          {open ? <XMark /> : <MenuIcon />}
        </div>
      </div>

      {open && (
        <div className="flex flex-col justify-center gap-5 items-center border border-black h-screen md:hidden">
          <div
            className="hover:cursor-pointer"
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
            className=" border border-black bg-black text-white w-20"
            // className="flex justify-center items-center bg-black text-white rounded-lg w-24 h-8"
            onClick={user ? onSignout : onSignin}
          >
            {user ? "Logout" : "Login"}
          </Button>
        </div>
      )}
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function XMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
