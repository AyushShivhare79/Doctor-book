import { Input } from "./components/ui/input";
export default function ({
  placeholder,
  register,
  name,
}: {
  placeholder: string;
  register: any;
  name: string;
}) {
  return (
    <>
      <Input placeholder={placeholder} className="w-full" {...register(name)} />
    </>
  );
}
