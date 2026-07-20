import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const pageContent = await prisma.pageContent.findUnique({
      where: { id: Number(id) },
    });

    if (!pageContent) {
      return NextResponse.json({ error: "Sayfa içeriği bulunamadı" }, { status: 404 });
    }

    return NextResponse.json(pageContent);
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { page, section, content } = body;

    const existing = await prisma.pageContent.findUnique({ where: { id: Number(id) } });
    if (!existing) {
      return NextResponse.json({ error: "Sayfa içeriği bulunamadı" }, { status: 404 });
    }

    const pageContent = await prisma.pageContent.update({
      where: { id: Number(id) },
      data: {
        ...(page !== undefined && { page }),
        ...(section !== undefined && { section }),
        ...(content !== undefined && {
          content: typeof content === "string" ? content : JSON.stringify(content),
        }),
      },
    });

    return NextResponse.json(pageContent);
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const existing = await prisma.pageContent.findUnique({ where: { id: Number(id) } });
    if (!existing) {
      return NextResponse.json({ error: "Sayfa içeriği bulunamadı" }, { status: 404 });
    }

    await prisma.pageContent.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
