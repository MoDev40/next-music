import { getUserFavorites } from "@/lib/data";
import TracksTable from "./tracks-table";
import { notFound } from "next/navigation";

type Props = {
  userId: string;
};
const Favorites = async ({ userId }: Props) => {
  const favorites = await getUserFavorites(userId, 1);

  if (!favorites || favorites.length === 0) {
    return notFound();
  }

  const tracks: Track[] = favorites.map(({ track }) => track);

  return (
    <div className="container mx-auto flex flex-col space-y-3 text-foreground">
      <TracksTable type="FAVORITE" tracks={tracks} />
    </div>
  );
};

export default Favorites;
