import { auth } from "@/auth";
import { prisma } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { trackId, userId }: { trackId: string; userId: string } =
      await req.json();
    const data = {
      userId,
      trackId,
    };

    const isExists = await prisma.userFavorite.findFirst({
      where: {
        AND: [{ trackId }, { userId: data.userId }],
      },
    });

    if (isExists) {
      return NextResponse.json({ message: "Already exists" }, { status: 200 });
    }

    const favorite = await prisma.userFavorite.create({
      data,
    });

    return NextResponse.json(
      { favorite, message: "Added Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Adding user favorite error", error);
    NextResponse.json(
      { message: "Adding user favorite error" },
      { status: 500 }
    );
  }
}
