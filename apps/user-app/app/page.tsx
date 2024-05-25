import AppbarClient from "./AppbarClient";
import Box from "./components/Box";
import DoctorCard from "./components/DoctorCard";

export default function Page(): JSX.Element {
  return (
    <>
      <AppbarClient />
      <Box />
      <div>
        <DoctorCard />
      </div>
    </>
  );
}
