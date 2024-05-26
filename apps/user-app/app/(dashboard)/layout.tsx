import AppbarClient from "../AppbarClient";
import SideBar from "../components/SideBar";

export default function ({ children }: any) {
  return (
    <>
      <div>
        <AppbarClient />
        <div className="flex h-screen">
          <div className="flex w-1/5">
            <SideBar />
          </div>
          <div className=" w-full">{children}</div>
        </div>
      </div>
    </>
  );
}
