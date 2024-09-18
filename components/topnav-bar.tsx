"use client";
import { Music2Icon } from "lucide-react";
import MusicPlayer from "./music-player";
import { ThemeToggle } from "./toggle-themes";
import UserNav from "./user-nav";

const TopNavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-border">
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-4">
          <Music2Icon />
        </div>
        <div className="flex flex-row items-center space-x-3">
          <MusicPlayer />
          <ThemeToggle />
          <UserNav />
        </div>
      </nav>
    </header>
  );
};

export default TopNavBar;
