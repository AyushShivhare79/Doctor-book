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
import { ChangeEvent, useState } from "react";
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

  const [field, setField] = useState<boolean>(false);

  const [fnameCheck, setFnameCheck] = useState<boolean>(false);
  const [mnameCheck, setMnameCheck] = useState<boolean>(false);
  const [lnameCheck, setLnameCheck] = useState<boolean>(false);
  const [phoneNumberCheck, setPhoneNumberCheck] = useState<boolean>(false);
  const [emailCheck, setEmailIdCheck] = useState<boolean>(false);
  const [addressCheck, setAddressCheck] = useState<boolean>(false);
  const [feesCheck, setFeesCheck] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);

  const handleClick = async () => {
    await axios.post("/api/signup", {
      body: {
        phoneNumber,
        fname,
        mname,
        lname,
        email,
        address,
        fees,
        password,
      },
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
              <Input
                state={fnameCheck}
                placeholder="First Name"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFname(e.target.value)
                }
              />
              <Input
                state={mnameCheck}
                placeholder="Middle Name(Optional)"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setMname(e.target.value)
                }
              />
              <Input
                state={lnameCheck}
                placeholder="Last Name"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLname(e.target.value)
                }
              />
            </CardContent>

            <CardContent className="flex gap-5">
              <Input
                state={phoneNumberCheck}
                placeholder="Phone Number"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPhoneNumber(e.target.value)
                }
              />
              <Input
                state={emailCheck}
                placeholder="EmailID"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmailId(e.target.value)
                }
              />
              {/* Select for city, state */}
            </CardContent>

            <CardContent className="flex gap-5">
              <Select></Select>
            </CardContent>

            <CardContent className="flex gap-5">
              <Input
                state={addressCheck}
                placeholder="Addresss"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setAddress(e.target.value)
                }
              />
              <Input
                state={feesCheck}
                placeholder="Fess"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFees(e.target.value)
                }
              />
            </CardContent>

            <CardContent className="flex gap-5">
              <Input
                state={passwordCheck}
                placeholder="Password"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />

              {/* Improve here bro */}
              <Input
                state={field}
                placeholder="Confirm Password"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </CardContent>
          </CardContent>
          {/* </CardContent> */}
          <CardFooter className="flex justify-center items-center">
            <Button className="bg-black text-white" onClick={handleClick}>
              Signup
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
