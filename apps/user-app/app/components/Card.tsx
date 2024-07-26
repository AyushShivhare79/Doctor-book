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
} from "@repo/ui/card";

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
              <img
                className="max-w-[250px] min-w-[250px] max-h-[250px] min-h-[250px] object-cover"
                src={d.image}
                alt=""
              />
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

            <div className="flex gap-5">
              <div>Fees: {d.fees} Rs</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button id={d.id} btnName="BOOK NOW" />
          </CardFooter>
        </Card>

        // <div className="border border-black rounded-lg p-10">
        //   <div>
        //     {/* <Image
        //       src={d.image}
        //       width={500}
        //       height={500}
        //       alt="Picture of the author"
        //     />*/}
        //     <img
        //       className="max-w-[200px] min-w-[200px] max-h-[200px] min-h-[200px] object-cover"
        //       src={d.image}
        //       alt=""
        //     />
        //   </div>
        //   <div>
        //     {d.firstName} {d.lastName}
        //   </div>

        //   <div className="flex gap-2">
        //     <div>{Category}</div>
        //     <div>{d.category}</div>
        //   </div>

        //   <div className="flex gap-2">
        //     <div>{AddIcon}</div>
        //     <div>{d.address}</div>
        //   </div>

        //   <div className="flex gap-5">
        //     <div>Fees: {d.fees} Rs</div>
        //     <Button id={d.id} btnName="BookNow" />
        //   </div>
        // </div>
      ))}
    </>
  );
}
