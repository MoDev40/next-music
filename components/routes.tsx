import { House, LibraryBig, Music, Search } from "lucide-react";

type Route = {
  name: string;
  icon: JSX.Element;
  path: string;
};
export const routes: Route[] = [
  {
    name: "Home",
    path: "/",
    icon: <House className="w-4 h-4" />,
  },
  {
    name: "Albums",
    path: "/albums",
    icon: <LibraryBig className="w-4 h-4" />,
  },
  {
    name: "Musics",
    path: "/musics",
    icon: <Music className="w-4 h-4" />,
  },
  {
    name: "Search",
    path: "/search",
    icon: <Search className="w-4 h-4" />,
  },
];
