import Image from "next/image";
import Button from "./Button";
// import { Card } from "@repo/ui/card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui";

export default function ({
  data,
  AddIcon,
  Category,
}: {
  data: any;
  AddIcon: any;
  Category: any;
}) {
  return (
    <>
      {data.map((d: any) => (
        <Card>
          <CardHeader>
            <CardTitle>
              <img className="object-cover" src={d.image} alt="Image" />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div className=" text-2xl font-mono">
              {d.firstName} {d.lastName}
            </div>
            <div className="flex gap-2">
              <div>{Category}</div>
              <div>HARDCODED</div>
            </div>

            <div className="flex gap-2">
              <div>{AddIcon}</div>
              <div>{d.address}</div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="flex gap-5">
              <div>Only {d.fees}rs</div>
            </div>
            <Button id={d.id} btnName="BOOK NOW" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
