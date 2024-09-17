"use client";
import axios from "axios";
import { Heart, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { api } from "@/lib/config";
import { useSession } from "next-auth/react";

const AddToFavorite = ({ trackId }: { trackId: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: session, status: authStatus } = useSession();

  const handleAdd = async () => {
    setIsLoading(true);
    if (!session || authStatus !== "authenticated") {
      return (window.location.pathname = "api/auth/signin");
    }

    const { data, status } = await axios.post(`${api}/music/favorite/add`, {
      trackId,
      userId: session.user?.id,
    });
    
    setIsLoading(false);
    toast(`Track ${data.message}`, {
      description: `status: ${status}`,
      duration: 1500,
    });
  };
  return (
    <Button
      disabled={isLoading}
      onClick={handleAdd}
      variant="outline"
      size="icon"
    >
      {isLoading ? (
        <Loader2 className="animate-spin h-5 w-5" />
      ) : (
        <Heart className="h-5 w-5" />
      )}
    </Button>
  );
};

export default AddToFavorite;
