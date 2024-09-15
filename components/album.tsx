import React from "react";
import { ChevronRight } from "lucide-react";

type Props = {
  album: Album;
};

export const dynamic = "force-dynamic";

const Album = ({ album }: Props) => {
  return (
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
      <link
        href={`/album/${album.id}`}
        className="w-8 h-8 shadow-sm dark:shadow-lg rounded-full cursor-pointer bg-foreground items-center flex flex-col justify-center absolute bottom-2 right-2"
      >
        <ChevronRight className="w-5 h-5" />
      </link>
    </div>
  );
};

export default Album;
