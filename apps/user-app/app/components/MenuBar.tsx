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
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex justify-between items-center px-10 pt-2 pb-2 border-b-2">
        <div className="text-2xl font-medium">Medico</div>

        <div className="hidden sm:flex sm:gap-3 sm:items-center">
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
        </div>

        {/* This will only shown in mobile view */}
        <div className=" sm:hidden" onClick={handleClick}>
          {open ? <XMark /> : <MenuIcon />}
        </div>
      </div>

      {open && (
        <div className=" flex flex-col justify-center gap-5 items-center border border-black h-screen">
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
