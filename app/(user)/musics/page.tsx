import { TracksTableSkeleton } from "@/components/skeletons";
import Tracks from "@/components/tracks";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<TracksTableSkeleton rows={12} />}>
      <Tracks />
    </Suspense>
  );
};

export default Page;
