import { prisma } from "@/lib/prisma";
import { generateSlug } from "@/lib/slug";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const project = await prisma.project.findUnique({
      where: { id: Number(id) },
    });

    if (!project) {
      return NextResponse.json({ error: "Proje bulunamadı" }, { status: 404 });
    }

    return NextResponse.json(project);
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
    const {
      title,
      description,
      category,
      image,
      images,
      client,
      date,
      technologies,
      url,
      isActive,
    } = body;

    const existing = await prisma.project.findUnique({ where: { id: Number(id) } });
    if (!existing) {
      return NextResponse.json({ error: "Proje bulunamadı" }, { status: 404 });
    }

    const project = await prisma.project.update({
      where: { id: Number(id) },
      data: {
        ...(title !== undefined && { title, slug: generateSlug(title) }),
        ...(description !== undefined && { description }),
        ...(category !== undefined && { category }),
        ...(image !== undefined && { image }),
        ...(images !== undefined && {
          images: typeof images === "string" ? images : JSON.stringify(images),
        }),
        ...(client !== undefined && { client: client ?? null }),
        ...(date !== undefined && { date: date ? new Date(date) : null }),
        ...(technologies !== undefined && {
          technologies:
            typeof technologies === "string" ? technologies : JSON.stringify(technologies),
        }),
        ...(url !== undefined && { url: url ?? null }),
        ...(isActive !== undefined && { isActive }),
      },
    });

    return NextResponse.json(project);
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

    const existing = await prisma.project.findUnique({ where: { id: Number(id) } });
    if (!existing) {
      return NextResponse.json({ error: "Proje bulunamadı" }, { status: 404 });
    }

    await prisma.project.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
