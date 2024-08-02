import { Input } from "./components/ui/input";
export default function ({
  placeholder,
  register,
  name,
  disabled,
}: {
  placeholder: string;
  register: any;
  name: string;
  disabled: boolean;
}) {
  return (
    <>
      <Input
        autoComplete="off"
        disabled={disabled}
        placeholder={placeholder}
        className="w-full"
        {...register(name)}
      />
    </>
  );
}
