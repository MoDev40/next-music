import { ThemeToggle } from "@/components/toggle-themes";
import { Button } from "@/components/ui/button";
import { Music2Icon, UserIcon } from "lucide-react";
import LatestAlbum from "./latest-album";
import { Suspense } from "react";
import { AlbumSkeleton } from "./skeletons";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 bg-background text-foreground">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-4">
          <Music2Icon />
        </div>
        <div className="items-center space-x-3">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
            <UserIcon className="w-5 h-5" />
          </Button>
        </div>
      </header>
      <Suspense fallback={<AlbumSkeleton />}>
        <LatestAlbum />
      </Suspense>
    </div>
  );
}
