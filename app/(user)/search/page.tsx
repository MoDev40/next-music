import SearchMusic from "@/components/search-music";
import { TracksTableSkeleton } from "@/components/skeletons";
import { Suspense } from "react";

type SearchParams = {
  query?: string;
};
const Page = ({ searchParams }: { searchParams: SearchParams }) => {
  const query = searchParams.query || "";
  return (
    <div className="flex flex-col space-y-5 mx-auto container">
      <Suspense fallback={<TracksTableSkeleton />}>
        <SearchMusic query={query} />
      </Suspense>
    </div>
  );
};

export default Page;
