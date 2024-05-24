export default function ({ placeholder }: { placeholder: string }) {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          className="border rounded-lg border-black h-9"
        />
      </div>
    </>
  );
}
