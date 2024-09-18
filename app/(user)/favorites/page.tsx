import { auth } from "@/auth";
import Favorites from "@/components/favorites";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

const Page = async () => {
  const session = await auth();
  if (!session?.user?.id) {
    return (window.location.pathname = "/api/auth/signin");
  }
  return (
    <Suspense fallback={<h1>Loading.....</h1>}>
      <Favorites userId={session.user?.id} />
    </Suspense>
  );
};

export default Page;
