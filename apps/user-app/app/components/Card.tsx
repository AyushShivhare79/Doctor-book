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
      <div className="border border-black w-60 h-72 ">
        <div>Image</div>
        <div className="text-lg text-blue-700">
          {firstName} {lastName}
        </div>
        <div className="pt-20">{category}</div>

        <div className="flex items-center">
          <div>{ExpIcon}</div>
          <div className="text-sm">{experience} Years of Experience</div>
        </div>
        <div className="flex items-center">
          <div>{AddIcon}</div>
          <div className="text-sm">{address}</div>
        </div>

        <div className="flex gap-5 mt-auto items-center">
          <div className="text-sm">Fees: Rs. {fees}</div>
          <Button id={id} btnName="BookNow" />
        </div>
      </div>
    </>
  );
}
