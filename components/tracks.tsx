import { getTracks } from "@/lib/data";
import { notFound } from "next/navigation";
import TracksTable from "./tracks-table";

export const dynamic = "force-dynamic";

const Tracks = async () => {
  const tracks = await getTracks(1);
  if (tracks?.length === 0 || !tracks) return notFound();
  return (
    <div className="container mx-auto">
      <TracksTable tracks={tracks} />
    </div>
  );
};

export default Tracks;
