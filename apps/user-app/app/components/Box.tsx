import SearchInput from "@repo/ui/searchInput";

export default function () {
  return (
    <>
      {/* Add this later */}
        <div className="flex justify-center flex-col h-80 bg-blue-950">
          <div className="flex justify-center gap-5">
            <SearchInput placeholder="MadhyaPradesh" />
            <SearchInput placeholder="Damoh" />
            <SearchInput placeholder="Search Doctor" />
          </div>
        </div>
    </>
  );
}
