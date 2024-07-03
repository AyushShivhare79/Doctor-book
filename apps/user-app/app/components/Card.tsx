import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";
import Button from "./Button";

export default function ({
  data,
  // id,
  // firstName,
  // lastName,
  // category,
  // experience,
  // address,
  // fees,
  ExpIcon,
  AddIcon,
}: {
  data: any;
  // id: Number;
  // firstName: string;
  // lastName: string;
  // category: string;
  // experience: string;
  // address: string;
  // fees: string;
  ExpIcon: any;
  AddIcon: any;
}) {
  return (
    <>
      {data.map((d: any) => (
        <div className="border border-black rounded-lg p-10">
          <div>Image</div>
          <div>
            {d.firstName} {d.lastName}
          </div>

          <div>{d.category}</div>
          <div>
            <div>{ExpIcon}</div>
            <div>{d.experience} Years of Experience</div>
          </div>

          <div>
            <div>{d.AddIcon}</div>
            <div>{d.address}</div>
          </div>

          <div className="flex justify-between">
            <div>Fees: {d.fees} Rs</div>
            <Button id={d.id} btnName="BookNow" />
          </div>
        </div>
      ))}
    </>
  );
}
