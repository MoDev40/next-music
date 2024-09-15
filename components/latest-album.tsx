import { getLatestSixMusicAlbum } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";


const LatestAlbum = async () => {
  const latestSixMusicAlbum = await getLatestSixMusicAlbum();

  if (!latestSixMusicAlbum || latestSixMusicAlbum.length === 0) {
    return notFound();
  }

  return (
    <div className="container grid grid-cols-2 md:grid-cols-3 gap-5 px-4">
      {latestSixMusicAlbum?.map((album) => (
        <div
          className="relative bg-primary-foreground space-y-3 rounded-md shadow-sm p-2 w-full h-[20vh]"
          key={album.id}
        >
          <div className="absolute space-y-3 bottom-3 left-2 md:left-5">
            <h1 className="font-bold text-base">{album.title}</h1>
            <span className="font-medium text-xs text-muted-foreground">
              {album.artist}
            </span>
          </div>
          <Link
            href={`/album/${album.id}`}
            className="w-8 h-8 shadow-sm dark:shadow-lg rounded-full cursor-pointer bg-foreground items-center flex flex-col justify-center absolute bottom-2 right-2"
          >
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LatestAlbum;
