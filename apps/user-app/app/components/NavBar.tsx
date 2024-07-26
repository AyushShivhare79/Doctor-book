"use client";

import { Button } from "@repo/ui/button"; 
import { useRouter } from "next/navigation";
import MenuBar from "./MenuBar";

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
  return (
    <>
      <div className="flex justify-between items-center px-10 pt-2 pb-2 border-b-2">
        <div className="text-2xl font-medium">Medico</div>
        {/* <div>
          <Image src={Logo} alt="Logo" />
        </div> */}

    {/* remove this from package */}

    {/* <MenuBar/> */}


        {/* From here  */}

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

        {/* TO Here  */}
      </div>
    </>
  );
}
