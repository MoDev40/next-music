import { getAlbumWithTracks } from "@/lib/data";
import { Music } from "lucide-react";
import TracksTable from "./tracks-table";
import { notFound } from "next/navigation";

type Props = {
  id: string;
};

export const dynamic = "force-dynamic";

const AlbumTracks = async ({ id }: Props) => {
  const album = await getAlbumWithTracks(id);
  if (!album) return notFound();
  return (
    <div className="container mx-auto flex flex-col space-y-3 text-foreground">
      <div className="flex flex-col space-y-3 md:flex-row md:space-x-5">
        <div className="flex flex-col bg-primary-foreground space-y-3 rounded-md shadow-sm p-2 w-52 h-[20vh] justify-center items-center">
          <Music size={30} />
        </div>
        <div className="flex flex-col md:relative w-44">
          <div className="md:absolute md:bottom-0 md:left-0">
            <h1 className="font-bold text-base">{album?.title}</h1>
            <span className="font-medium text-xs text-muted-foreground">
              {album?.artist}
            </span>
          </div>
        </div>
      </div>
      <TracksTable tracks={album?.tracks} />
    </div>
  );
};

export default AlbumTracks;
