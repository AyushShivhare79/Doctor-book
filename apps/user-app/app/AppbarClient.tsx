"use client";

import MenuBar from "./components/MenuBar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function () {
  const session = useSession();
  return (
    <>
      <div>
        <MenuBar
          user={session.data?.user}
          onSignin={async () => {
            await signIn("credentials", { callbackurl: "/dashboard" });
          }}
          onSignout={async () => {
            await signOut({ callbackUrl: "/api/auth/signin" });
          }}
        />
      </div>
    </>
  );
}
