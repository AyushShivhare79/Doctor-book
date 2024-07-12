import Button from "./Button";

export default function ({
  data,
  ExpIcon,
  AddIcon,
  Category,
}: {
  data: any;
  ExpIcon: any;
  AddIcon: any;
  Category: any;
}) {
  return (
    <>
      {data.map((d: any) => (
        <div className="border border-black rounded-lg p-10">
          <div>Image</div>
          <div>
            {d.firstName} {d.lastName}
          </div>

          <div className="flex gap-2">
            <div>{Category}</div>
            <div>{d.category}</div>
          </div>

          <div className="flex gap-2">
            <div>{ExpIcon}</div>
            <div>{d.experience} Years of Experience</div>
          </div>

          <div className="flex gap-2">
            <div>{AddIcon}</div>
            <div>{d.address}</div>
          </div>

          <div className="flex gap-5">
            <div>Fees: {d.fees} Rs</div>
            <Button id={d.id} btnName="BookNow" />
          </div>
        </div>
      ))}
    </>
  );
}
