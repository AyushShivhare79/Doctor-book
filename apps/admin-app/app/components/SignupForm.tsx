import { Button } from "@repo/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";

import Input from "@repo/ui/customInput";
import Select from "@repo/ui/customSelect";

export default function () {
  return (
    <>
      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>Doctor Book</CardTitle>
          </CardHeader>
          {/* <CardContent className="flex items-center"> */}
          <CardContent className="">
            <CardContent className="flex gap-5">
              <Input placeholder="First Name" />
              <Input placeholder="Middle Name(Optional)" />
              <Input placeholder="Last Name" />
            </CardContent>

            <CardContent className="flex gap-5">
              <Input placeholder="Phone Number" />
              <Input placeholder="EmailID" />
              {/* Select for city, state */}
            </CardContent>

            <CardContent className="flex gap-5">
              <Select></Select>
            </CardContent>

            <CardContent className="flex gap-5">
              <Input placeholder="Addresss" />
              <Input placeholder="Fess" />
            </CardContent>

            <CardContent className="flex gap-5">
              <Input placeholder="Password" />
              <Input placeholder="Confirm Password" />
            </CardContent>
          </CardContent>
          {/* </CardContent> */}
          <CardFooter className="flex justify-center items-center">
            <Button className="bg-black text-white">Signup</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
