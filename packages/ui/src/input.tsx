import { Input } from "./components/ui/input";
export default function ({
  placeholder,
  register,
  name,
}: {
  placeholder: string;
  register: any;
  name: any;
}) {
  return (
    <>
      <div className="flex flex-col">
        <Input
          placeholder={placeholder}
          className="w-full"
          {...register(name)}
        />
      </div>
    </>
  );
}
