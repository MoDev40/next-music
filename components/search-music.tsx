import { getSearchedTracks } from "@/lib/data";
import TracksTable from "./tracks-table";
type Props = {
  query: string;
};
const SearchMusic = async ({ query }: Props) => {
  const tracks = await getSearchedTracks(query);

  return tracks ? <TracksTable tracks={tracks} /> : <h1>Not Found</h1>;
};

export default SearchMusic;
