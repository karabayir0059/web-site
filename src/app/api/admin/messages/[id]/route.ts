import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const message = await prisma.message.findUnique({
      where: { id: Number(id) },
    });

    if (!message) {
      return NextResponse.json({ error: "Mesaj bulunamadı" }, { status: 404 });
    }

    return NextResponse.json(message);
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

    const existing = await prisma.message.findUnique({ where: { id: Number(id) } });
    if (!existing) {
      return NextResponse.json({ error: "Mesaj bulunamadı" }, { status: 404 });
    }

    const message = await prisma.message.update({
      where: { id: Number(id) },
      data: {
        ...(body.isRead !== undefined && { isRead: body.isRead }),
      },
    });

    return NextResponse.json(message);
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

    const existing = await prisma.message.findUnique({ where: { id: Number(id) } });
    if (!existing) {
      return NextResponse.json({ error: "Mesaj bulunamadı" }, { status: 404 });
    }

    await prisma.message.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
