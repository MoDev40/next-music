"use client";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { formatTime } from "@/lib/utils";
import { Play } from "lucide-react";

type Props = {
  tracks: Track[];
};
const TracksTable = ({ tracks }: Props) => {
  return (
    <div className="space-y-3 mt-2 flex flex-col">
      <Table>
        <TableBody>
          {tracks.map((track) => (
            <TableRow key={track.id} className="flex items-center">
              <TableCell className="flex-none pr-0">
                <Button size="icon" variant="ghost">
                  <Play className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell className="flex-grow font-medium">
                {track.title}
              </TableCell>
              <TableCell className="flex-none">
                <span>{formatTime(track.duration)}</span>
              </TableCell>
              <TableCell className="flex-none space-x-2 text-right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TracksTable;
