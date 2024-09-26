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

export const getUserFavorites = async (userId: string, page: number) => {
  const skip = (page - 1) * 15;
  try {
    return await prisma.userFavorite.findMany({
      take: 15,
      skip,
      orderBy: {
        track: {
          title: "desc",
        },
      },
      include: {
        track: true,
      },
      where: {
        userId,
      },
    });
  } catch (error) {
    console.error("getUserFavorites", error);
  }
};

export const getSearchedTracks = async (query: string) => {
  try {
    return query
      ? await prisma.track.findMany({
          where: {
            OR: [
              { artist: { contains: query } },
              { title: { contains: query } },
              { album: { title: { contains: query } } },
              { genre: { name: { contains: query } } },
            ],
          },
        })
      : [];
  } catch (error) {
    console.error("getSearchedTracks", error);
  }
};
