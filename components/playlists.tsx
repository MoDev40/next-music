import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getUserPlaylist } from "@/lib/data";
import { Music2Icon } from "lucide-react";
import { notFound } from "next/navigation";

const Playlists = async ({ id }: { id: string }) => {
  const playlists = await getUserPlaylist(id, 1);
  if (!playlists) {
    return notFound();
  }
  return (
    <div className="md:container md:mx-auto mt-5 p-5 md:p-0 lg:p-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {playlists.map((playlist) => (
        <Card key={playlist.id} className="overflow-hidden">
          <CardContent className="p-4">
            <CardTitle className="text-lg mb-2">{playlist.name}</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <Music2Icon className="w-4 h-4 mr-2" />
              <span>{playlist.playListTracks.length} tracks</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Playlists;
