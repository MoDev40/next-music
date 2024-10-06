"use client";
import SearchInput from "@/components/search";
import clsx from "clsx";
import { Music2Icon, User } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MusicPlayer from "./music-player";
import { ThemeToggle } from "./toggle-themes";
import { Button } from "./ui/button";
import UserNav from "./user-nav";

const TopNavBar = () => {
  const { data, status } = useSession();
  const pathName = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-border">
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-4">
          {pathName !== "/search" ? (
            <Music2Icon />
          ) : (
            <SearchInput placeholder="Search..." className="w-full" />
          )}
        </div>
        <div className="flex flex-row items-center space-x-3">
          <MusicPlayer />
          <ThemeToggle />
          <UserNav />
          <Link
            className={clsx({
              "hidden pointer-events-none":
                data || status !== "unauthenticated",
            })}
            href="/api/auth/signin"
          >
            <Button variant="ghost" size="icon">
              <User className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default TopNavBar;
