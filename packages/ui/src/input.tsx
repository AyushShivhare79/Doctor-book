import { Input } from "./components/ui/input";

export default function ({ placeholder }: { placeholder: string }) {
  return (
    <>
      <div className="flex">
        <Input className=" w-full" placeholder={placeholder}/>
      </div>
    </>
  );
}
