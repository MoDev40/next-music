import AlbumTracks from "@/components/album-tracks";

type Params = {
  id: string;
};

export const dynamic = "force-dynamic";

const Page = ({ params }: { params: Params }) => {
  const { id } = params;
  return <AlbumTracks id={id} />;
};

export default Page;
