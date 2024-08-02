import { getServerSession } from "next-auth";
import AppbarClient from "../AppbarClient";
import SideBar from "../components/SideBar";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import SideBar02 from "../components/SideBar02";

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
        <div className="hidden md:visible md:flex md:w-1/6">
        <SideBar />
        </div>
        <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
}
