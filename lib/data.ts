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
