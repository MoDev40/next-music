"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { List, Loader2 } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import PlaylistSelect from "./playlist-select";
import { api } from "@/lib/config";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  mode: z.enum(["select", "create"]),
  selectedPlaylist: z.string().optional(),
  newPlaylistName: z.string().optional(),
});

const notify = (message: string, status?: string | number) => {
  toast(message, {
    description: `Status: ${status}`,
    duration: 1500,
  });
};

type Inputs = z.infer<typeof formSchema>;

export default function AddToPlaylistDialog({ trackId }: { trackId: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const { refresh } = useRouter();
  const form = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mode: "select",
      selectedPlaylist: "",
      newPlaylistName: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    if (!session || status !== "authenticated") {
      window.location.pathname = "api/auth/signin";
      return;
    }

    const { newPlaylistName, selectedPlaylist, mode } = values;
    setIsLoading(true);
    if (mode === "select" && selectedPlaylist) {
      const { data, status } = await axios.post(`${api}/music/playlist/add`, {
        playListId: selectedPlaylist,
        trackId,
      });
      notify(data.message, status);
    } else if (mode === "create" && newPlaylistName) {
      const { data, status } = await axios.post(
        `${api}/music/playlist/create`,
        {
          playlistName: newPlaylistName,
          userId: session.user?.id,
        }
      );
      notify(data.message, status);
    }
    refresh();
    setIsLoading(false);
    setIsOpen(false);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <List className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Playlist</DialogTitle>
          <DialogDescription>
            Choose an existing playlist or create a new one.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="mode"
              render={({ field }) => (
                <FormItem>
                  <Tabs
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="select">Select Playlist</TabsTrigger>
                      <TabsTrigger value="create">Create New</TabsTrigger>
                    </TabsList>
                    <TabsContent value="select" className="mt-4">
                      <FormField
                        control={form.control}
                        name="selectedPlaylist"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Playlist</FormLabel>
                            <FormControl>
                              <PlaylistSelect
                                onChange={field.onChange}
                                value={field.value}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TabsContent>
                    <TabsContent value="create" className="mt-4">
                      <FormField
                        control={form.control}
                        name="newPlaylistName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter playlist name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>
                  </Tabs>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : form.watch("mode") === "select" ? (
                  "Add to Playlist"
                ) : (
                  "Create Playlist"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
