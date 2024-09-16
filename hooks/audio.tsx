"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  use,
  useEffect,
  useRef,
  useState,
} from "react";

type AudioContext = {
  audio: Audio | null;
  currentTime: number;
  setAudio: Dispatch<SetStateAction<Audio | null>>;
  togglePlayPause: () => void;
  seek: (value: number[]) => void;
  skip: (value: string) => void;
};

type Audio = {
  track: Track;
  isPlaying: boolean;
};
const audioContext = createContext<AudioContext>({} as AudioContext);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [audio, setAudio] = useState<Audio | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    if (audio && audioRef.current) {
      if (audioRef.current.src !== audio.track.trackUrl) {
        audioRef.current.src = audio.track.trackUrl;
      }
      if (audio.isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [audio]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };
    const handleAudioEnd = () => {
      setAudio((prevAudio) =>
        prevAudio ? { ...prevAudio, isPlaying: !prevAudio.isPlaying } : null
      );
    };
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("ended", handleAudioEnd);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.removeEventListener("ended", handleAudioEnd);
      }
    };
  }, [audioRef]);

  const togglePlayPause = () => {
    setAudio((prevAudio) =>
      prevAudio ? { ...prevAudio, isPlaying: !prevAudio.isPlaying } : null
    );
  };
  const seek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
    }
  };
  const skip = (value: string) => {
    if (value === "forward" && audioRef.current) {
      audioRef.current.currentTime += 15;
    } else if (value === "backward" && audioRef.current) {
      audioRef.current.currentTime = Math.max(
        0,
        audioRef.current.currentTime - 15
      );
    }
  };
  return (
    <audioContext.Provider
      value={{ audio, setAudio, togglePlayPause, seek, skip, currentTime }}
    >
      <audio ref={audioRef} />
      {children}
    </audioContext.Provider>
  );
};

export const useAudio = () => {
  const context = use(audioContext);
  if (context === undefined) {
    throw new Error("Use inside client");
  }
  return context;
};
