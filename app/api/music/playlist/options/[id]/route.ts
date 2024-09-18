import { prisma } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  id: string;
};
export async function GET(req: NextRequest, { params }: { params: Params }) {
  try {
    const { id: userId } = params;
    const options = await prisma.userPlaylist.findMany({
      where: {
        userId,
      },
    });
    return NextResponse.json(options, { status: 200 });
  } catch (error) {
    console.error("Fetching user playlist options error", error);
    NextResponse.json(
      { message: "Fetching user playlist options error" },
      { status: 500 }
    );
  }
}
