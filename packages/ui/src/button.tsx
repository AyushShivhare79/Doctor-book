export const Button = ({
  btnName,
  onClick,
}: {
  btnName: string;
  onClick: any;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center border rounded-lg bg-blue-700 text-white h-8 w-28"
    >
      BookNow
    </button>
  );
};
