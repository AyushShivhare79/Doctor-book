import { Card, CardContent, CardFooter, CardTitle } from "@repo/ui/card";
import Button from "./Button";

export default function ({
  id,
  firstName,
  lastName,
  category,
  experience,
  address,
  fees,
  ExpIcon,
  AddIcon,
}: {
  id: Number;
  firstName: string;
  lastName: string;
  category: string;
  experience: string;
  address: string;
  fees: string;
  ExpIcon: any;
  AddIcon: any;
}) {
  return (
    <>
      <Card className="border border-black p-2">
        <CardTitle>
          <div>Image</div>
          <div className="text-lg text-blue-700">
            {firstName} {lastName}
          </div>
        </CardTitle>

        <CardContent>
          <div className="pt-20">{category}</div>
{/* Change Start */}
          <div className="flex items-center">
            <div>{ExpIcon}</div>
            <div className="text-sm">{experience} Years of Experience</div>
          </div>

          <div className="flex items-center">
            <div>{AddIcon}</div>
            <div className="text-sm">{address}</div>
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex gap-5 mt-auto items-center">
            <div className="text-sm">Fees: Rs. {fees}</div>
            <Button id={id} btnName="BookNow" />
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
