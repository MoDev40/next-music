import PlaylistTracks from "@/components/playlist-tracks";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  return <PlaylistTracks id={params.id}  />;
};

export default Page;
