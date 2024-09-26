import Search from "@/components/search";
import SearchMusic from "@/components/search-music";
import React, { Suspense } from "react";

type SearchParams = {
  query?: string;
};
const Page = ({ searchParams }: { searchParams: SearchParams }) => {
  const query = searchParams.query || "";
  return (
    <div className="flex flex-col space-y-5 mx-auto container">
      <Search placeholder="Search..." />
      <Suspense fallback={<h1>Searching....</h1>}>
        <SearchMusic query={query} />
      </Suspense>
    </div>
  );
};

export default Page;
