export default function ({
  firstName,
  lastName,
  // category,
  // experience,
  // address,
  // fees,
}: {
  firstName: string;
  lastName: string;
  // category: string;
  // experience: string;
  // address: string;
  // fees: string;
}) {
  return (
    <>
      <div className="border border-black w-52 h-60">
        <div>Image</div>
        <div>
          {firstName} {lastName}
        </div>
        {/* <div>{category}</div>
        <div>{experience}</div>
        <div>{address}</div>
        <div>{fees}</div> */}

        <button className="flex justify-center items-center border rounded-lg bg-blue-700 text-white h-8 w-28">
          BookNow
        </button>
      </div>
    </>
  );
}
