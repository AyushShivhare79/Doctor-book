import Link from "next/link";

export default function () {
  return (
    <>
      <div>
        Don't have an account? <Link className="text-blue-700 font-medium" href={"/signup"}>Sign up</Link>
      </div>
    </>
  );
}
