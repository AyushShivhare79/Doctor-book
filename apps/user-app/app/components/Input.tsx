"use client";

import { Input } from "@repo/ui/input";
import axios from "axios";
import { useEffect, useState } from "react";

export default function () {
  // const [searchQuery, setSearchQuery] = useState("");

  // const onSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const encodedSearchQuery = encodeURI(searchQuery);
  //   console.log("current query", encodedSearchQuery);
  // };

  // const handleFilter = (e: any) => {
  //   e.preventDefault();
  // };

  // useEffect(() => {});

  const [search, setSearch] = useState("");

  return (
    <>
      {/* <form onSubmit={onSearch}> */}
      <Input
        // onChange={(e) => setSearch(e.target.value)}
        onChange={async (e: any) => {
          setSearch(e.target.value);
          const response = await axios.post(
            "http://localhost:3001/api/search",
            {
              search,
            }
          );
          console.log(response);
          return response;
        }}
        className="text-white"
        placeholder="Search Doctor..."
      />
      {/* <button
        onClick={async (e: any) => {
          const response = await axios.post(
            "http://localhost:3001/api/search",
            {
              search,
            }
          );
          console.log(response);
        }}
      >
        adf
      </button> */}
      {/* </form> */}
    </>
  );
}
