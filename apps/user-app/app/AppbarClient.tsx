"use client";

import Navbar from "@repo/ui/navbar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function () {
  const session = useSession();
  // console.log("navbar: ", session);
  return (
    <>
      <div>
        <Navbar
          user={session.data?.user}
          onSignin={() => {
            signIn();
          }}
          onSignout={() => {
            signOut({ callbackUrl: "/api/auth/signin" });
          }}
        />
      </div>
    </>
  );
}
