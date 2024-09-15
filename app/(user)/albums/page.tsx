import { AlbumSkeleton } from "@/components/skeletons";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic";

const Page = () => {
  return <Suspense fallback={<AlbumSkeleton />}></Suspense>;
};

export default Page;
