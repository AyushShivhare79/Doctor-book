"use client";

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
import ImageUpload from "../imageUpload";
import { useState } from "react";
import axios from "axios";

export default function () {
  const [fname, setFname] = useState<string>();
  const [mname, setMname] = useState<string>();
  const [lname, setLname] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [email, setEmailId] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [fees, setFees] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleClick = () => {
    axios.post("", {
      body: {},
    });
  };

  return (
    <>
      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>Doctor Book</CardTitle>
          </CardHeader>
          {/* <CardContent className="flex items-center"> */}
          <CardContent>
            <CardContent>
              <ImageUpload />
            </CardContent>

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
