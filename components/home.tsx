import { Suspense } from "react";
import LatestAlbum from "./latest-album";
import { AlbumSkeleton } from "./skeletons";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 bg-background text-foreground">
      <Suspense fallback={<AlbumSkeleton />}>
        <LatestAlbum />
      </Suspense>
    </div>
  );
}
