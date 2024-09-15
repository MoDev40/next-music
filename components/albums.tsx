import React from "react";
import { getAlbums } from "@/lib/data";
import Album from "./album";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const Albums = async () => {
  const albums = await getAlbums(1);
  if (!albums || albums.length === 0) {
    return notFound();
  }
  return (
    <div className="container grid grid-cols-2 md:grid-cols-3 gap-5 px-4">
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

export default Albums;
