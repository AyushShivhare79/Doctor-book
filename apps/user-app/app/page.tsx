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
