"use client";

import { Button } from "./components/ui/button";

export default function ({
  user,
  onSignin,
  onSignout,
}: {
  onSignin: any;
  onSignout: any;
  user: any;
}) {
  return (
    <>
      <div className="flex justify-between items-center px-10 pt-2 pb-2 border-b-2">
        <div className="text-2xl font-medium">Medico</div>
        <Button
          className="border border-black bg-black text-white w-20"
          // className="flex justify-center items-center bg-black text-white rounded-lg w-24 h-8"
          onClick={user ? onSignout : onSignin}
        >
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </>
  );
}
