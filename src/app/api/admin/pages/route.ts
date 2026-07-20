import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const pages = await prisma.pageContent.findMany({
      orderBy: [{ page: "asc" }, { section: "asc" }],
    });
    return NextResponse.json(pages);
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { page, section, content } = body;

    if (!page || !section || content === undefined) {
      return NextResponse.json(
        { error: "page, section ve content zorunludur" },
        { status: 400 }
      );
    }

    const pageContent = await prisma.pageContent.create({
      data: {
        page,
        section,
        content: typeof content === "string" ? content : JSON.stringify(content),
      },
    });

    return NextResponse.json(pageContent, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
