"use client";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { useAudio } from "@/hooks/audio";
import { formatTime } from "@/lib/utils";
import { Pause, Play } from "lucide-react";
import AddToFavorite from "./add-to-favorite";
import AddToPlaylistDialog from "./add-to-playlist";
import clsx from "clsx";

type Props = {
  tracks: Track[];
  type?: "PLAYLIST" | "FAVORITE";
};
const TracksTable = ({ tracks, type }: Props) => {
  const { setAudio, audio, togglePlayPause } = useAudio();

  return (
    <Table>
      <TableBody>
        {tracks.map((track) => (
          <TableRow key={track.id} className="flex items-center">
            <TableCell className="flex-none pr-0">
              <Button
                onClick={() => {
                  audio?.track.id === track.id
                    ? togglePlayPause()
                    : setAudio({ track, isPlaying: true });
                }}
                size="icon"
                variant="ghost"
              >
                {audio?.track.id === track.id && audio.isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {audio?.track.id === track.id && audio.isPlaying
                    ? `Pause ${track.title}`
                    : `Play ${track.title}`}
                </span>
              </Button>
            </TableCell>
            <TableCell className="flex-grow font-medium">
              {track.title}
            </TableCell>
            <TableCell className="flex-none">
              <span>{formatTime(track.duration)}</span>
            </TableCell>
            <TableCell
              className={clsx("flex-none space-x-2 text-right", {
                hidden: type === "FAVORITE" || type === "PLAYLIST",
              })}
            >
              <AddToFavorite trackId={track.id} />
              <AddToPlaylistDialog trackId={track.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TracksTable;
