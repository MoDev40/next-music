import { auth } from "@/auth";
import Playlists from "@/components/playlists";
import React from "react";

const Page = async () => {
  const session = await auth();
  if (!session?.user?.id) {
    window.location.pathname = "/api/auth/signin";
    return;
  }
  return <Playlists id={session.user.id} />;
};

export default Page;
