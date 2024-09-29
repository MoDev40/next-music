import { getUserPlaylistTracks } from "@/lib/data";
import { notFound } from "next/navigation";
import React from "react";
import TracksTable from "./tracks-table";

const PlaylistTracks = async ({ id }: { id: string }) => {
  const playlisTracks = await getUserPlaylistTracks(id, 1);
  if (!playlisTracks) return notFound();
  const tracks = playlisTracks.map(({ track }) => track);

  return (
    <div className="container mx-auto">
      <TracksTable type="PLAYLIST" tracks={tracks} />
    </div>
  );
};

export default PlaylistTracks;
