import { prisma } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { playlistName, userId }: { playlistName: string; userId: string } =
      await req.json();
    const playlist = await prisma.userPlaylist.create({
      data: {
        name: playlistName,
        userId,
      },
    });
    return NextResponse.json(
      { message: "Created Successfully", playlist },
      { status: 201 }
    );
  } catch (error) {
    console.error("Creating user playlist error", error);
    NextResponse.json(
      { message: "Creating user playlist error" },
      { status: 500 }
    );
  }
}
