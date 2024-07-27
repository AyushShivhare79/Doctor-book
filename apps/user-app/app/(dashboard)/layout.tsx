import { getServerSession } from "next-auth";
import AppbarClient from "../AppbarClient";
import SideBar from "../components/SideBar";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";

export default async function ({ children }: any) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <div>
        <AppbarClient />
        <div className="flex h-screen">
          <div className="flex w-1/5">
            <SideBar />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
}
