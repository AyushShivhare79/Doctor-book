import { useSession } from "next-auth/react";
import AppbarClient from "./AppbarClient";
import Box from "./components/Box";
import DoctorCard from "./components/DoctorCard";
import { useRouter } from "next/navigation";

export default function Page(): JSX.Element {
  // const { data: session } = useSession();

  // if (session) {
  return (
    <>
      <AppbarClient />
      {/* <MenuPage /> */}
      <Box />
      <div>
        <DoctorCard />
      </div>
    </>
  );
  // }

  // return (
  //   <>
  //     <div>Access Denied</div>
  //   </>
  // );
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       session: await getServerSession(
//         context.req,
//         context.res,
//         authOptions
//       ),
//     },
//   }
// }
