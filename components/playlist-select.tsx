"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Props = {
  onChange: (value: string) => void;
  value?: string;
};

import useSWR, { Fetcher } from "swr";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { api } from "@/lib/config";
import { useSession } from "next-auth/react";

type Options = {
  id: string;
  name: string;
  userId: string;
};

const fetcher: Fetcher<Options[]> = (url: string) =>
  axios.get(url, {}).then((res) => res.data);

const PlaylistSelect = ({ onChange, value }: Props) => {
  const { data: session, status } = useSession();
  if (!session || status !== "authenticated") return;

  const { data, isLoading } = useSWR(
    `${api}/music/playlist/options/${session?.user?.id}`,
    fetcher
  );

  if (isLoading) return <Loader2 className="w-5 h-5 animate-spin" />;

  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger>
        <SelectValue placeholder="Select a playlist" />
      </SelectTrigger>
      <SelectContent>
        {data?.map(({ id, name }) => (
          <SelectItem key={id} value={id}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PlaylistSelect;
