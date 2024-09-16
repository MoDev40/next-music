import { prisma } from "./client";

export const getLatestSixMusicAlbum = async () => {
  try {
    return await prisma.musicAlbum.findMany({
      orderBy: {
        releaseDate: "desc",
      },
      take: 5,
    });
  } catch (error) {
    console.error("getSixAlbum", error);
  }
};

export const getAlbums = async (page: number, filter?: string) => {
  const skip = (page - 1) * 15;
  try {
    return await prisma.musicAlbum.findMany({
      take: 15,
      skip,
      orderBy: {
        title: "desc",
      },
      where: filter
        ? {
            OR: [
              { artist: { contains: filter } },
              { title: { contains: filter } },
              { genre: { name: { contains: filter } } },
            ],
          }
        : {},
    });
  } catch (error) {
    console.error("getAlbums", error);
  }
};

export const getAlbumWithTracks = async (id: string) => {
  try {
    return await prisma.musicAlbum.findUnique({
      where: {
        id,
      },
      include: {
        tracks: true,
      },
    });
  } catch (error) {
    console.error("getAlbumWithTracks", error);
  }
};

export const getTracks = async (page: number, filter?: string) => {
  const skip = (page - 1) * 15;
  try {
    return await prisma.track.findMany({
      take: 15,
      skip,
      orderBy: {
        title: "desc",
      },
      where: filter
        ? {
            OR: [
              { artist: { contains: filter } },
              { title: { contains: filter } },
              { album: { title: { contains: filter } } },
              { genre: { name: { contains: filter } } },
            ],
          }
        : {},
    });
  } catch (error) {
    console.error("getTracks", error);
  }
};
