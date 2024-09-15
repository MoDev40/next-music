"use client";
import { Music2Icon, UserIcon } from "lucide-react";
import React from "react";
import { ThemeToggle } from "./toggle-themes";
import { Button } from "./ui/button";

const TopNavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-t border-border">
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-4">
          <Music2Icon />
        </div>
        <div className="items-center space-x-3">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
            <UserIcon className="w-5 h-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default TopNavBar;
