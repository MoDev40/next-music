import LatestAlbum from "@/components/latest-album";
import { AlbumSkeleton } from "@/components/skeletons";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<AlbumSkeleton />}>
      <LatestAlbum />
    </Suspense>
  );
}
