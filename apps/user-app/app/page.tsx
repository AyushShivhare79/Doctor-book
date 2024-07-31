import AppbarClient from "./AppbarClient";
import Box from "./components/Box";
import { redirect, useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <AppbarClient />
      <Box />
    </>
  );
}
