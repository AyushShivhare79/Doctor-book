import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log("This is your session: ", session);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <div>Home</div>
    </>
  );
}
