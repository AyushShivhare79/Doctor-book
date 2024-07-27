import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";
import AppbarClient from "./AppbarClient";
import Box from "./components/Box";
import DoctorCard from "./components/DoctorCard";
import { Button } from "@repo/ui/button";
import MenuPage from "./components/MenuPage";

export default function Page(): JSX.Element {
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
}
