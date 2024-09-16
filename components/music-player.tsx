"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { useAudio } from "@/hooks/audio";
import { formatTime } from "@/lib/utils";
import clsx from "clsx";
import {
  AudioLines,
  PauseIcon,
  PlayIcon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react";

type Props = {
  tracks?: Track[];
};

function MusicPlayer({ tracks }: Props) {
  const { audio, togglePlayPause, skip, seek, setAudio, currentTime } =
    useAudio();
  const handleShuffle = () => {
    if (tracks && tracks.length > 0) {
      const random: number = Math.floor(Math.random() * tracks.length);
      setAudio({ track: tracks[random], isPlaying: true });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <AudioLines
            className={clsx({
              "animate-pulse text-muted-foreground": audio?.isPlaying,
              hidden: !audio?.isPlaying,
            })}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader className="hidden">
          <DialogTitle>{audio?.track.title} </DialogTitle>
          <DialogDescription>{audio?.track.title} </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 p-4">
          <div className="w-full max-w-[300px] aspect-square bg-accent-foreground rounded-md"></div>
          <h3 className="text-lg font-semibold">{audio?.track.title}</h3>
          <p className="text-sm text-muted-foreground">{audio?.track.artist}</p>
          <Slider
            value={[currentTime]}
            max={audio?.track.duration || 100}
            step={1}
            className="w-full"
            onValueChange={seek}
          />
          <div className="flex justify-between w-full text-sm text-accent-foreground">
            <span>{formatTime(currentTime || 0)}</span>
            <span>{formatTime((audio?.track?.duration as number) || 0)}</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              className={clsx({
                hidden: !tracks || tracks.length === 0,
              })}
              onClick={handleShuffle}
              variant="outline"
              size="icon"
            >
              <ShuffleIcon className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => {
                skip("backward");
              }}
              variant="outline"
              size="icon"
            >
              <SkipBackIcon className="h-4 w-4" />
            </Button>
            <Button onClick={togglePlayPause} size="icon">
              {audio?.isPlaying ? (
                <PauseIcon className="h-4 w-4" />
              ) : (
                <PlayIcon className="h-4 w-4" />
              )}
            </Button>
            <Button
              onClick={() => {
                skip("forward");
              }}
              variant="outline"
              size="icon"
            >
              <SkipForwardIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default MusicPlayer;
