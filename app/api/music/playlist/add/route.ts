import { prisma } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { playListId, trackId }: { playListId: string; trackId: string } =
      await req.json();

    const isExists = await prisma.playListTrack.findFirst({
      where: {
        AND: [{ playListId }, { trackId }],
      },
    });

    if (isExists) {
      return NextResponse.json({ message: "Already exists" }, { status: 200 });
    }

    const playlist = await prisma.playListTrack.create({
      data: {
        playListId,
        trackId,
      },
    });
    return NextResponse.json(
      { message: "Added Successfully", playlist },
      { status: 201 }
    );
  } catch (error) {
    console.error("Adding playlist error", error);
    NextResponse.json({ message: "Adding playlist error" }, { status: 500 });
  }
}
