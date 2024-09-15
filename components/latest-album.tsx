import { getLatestSixMusicAlbum } from "@/lib/data";
import { notFound } from "next/navigation";
import Album from "./album";

export const dynamic = "force-dynamic";

const LatestAlbum = async () => {
  const latestSixMusicAlbum = await getLatestSixMusicAlbum();

  if (!latestSixMusicAlbum || latestSixMusicAlbum.length === 0) {
    return notFound();
  }

  return (
    <div className="container grid grid-cols-2 md:grid-cols-3 gap-5 px-4">
      {latestSixMusicAlbum?.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

export default LatestAlbum;
