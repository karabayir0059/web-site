import { prisma } from "@/lib/prisma";
import { generateSlug } from "@/lib/slug";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const service = await prisma.service.findUnique({
      where: { id: Number(id) },
    });

    if (!service) {
      return NextResponse.json({ error: "Hizmet bulunamadı" }, { status: 404 });
    }

    return NextResponse.json(service);
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
    const { title, shortDesc, description, icon, price, features, order, isActive } = body;

    const existing = await prisma.service.findUnique({ where: { id: Number(id) } });
    if (!existing) {
      return NextResponse.json({ error: "Hizmet bulunamadı" }, { status: 404 });
    }

    const service = await prisma.service.update({
      where: { id: Number(id) },
      data: {
        ...(title !== undefined && { title, slug: generateSlug(title) }),
        ...(shortDesc !== undefined && { shortDesc }),
        ...(description !== undefined && { description }),
        ...(icon !== undefined && { icon }),
        ...(price !== undefined && { price: price ?? null }),
        ...(features !== undefined && {
          features: typeof features === "string" ? features : JSON.stringify(features),
        }),
        ...(order !== undefined && { order }),
        ...(isActive !== undefined && { isActive }),
      },
    });

    return NextResponse.json(service);
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

    const existing = await prisma.service.findUnique({ where: { id: Number(id) } });
    if (!existing) {
      return NextResponse.json({ error: "Hizmet bulunamadı" }, { status: 404 });
    }

    await prisma.service.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
