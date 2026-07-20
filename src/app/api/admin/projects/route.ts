import { prisma } from "@/lib/prisma";
import { generateSlug } from "@/lib/slug";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
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

    if (!title || !description || !category || !image) {
      return NextResponse.json(
        { error: "title, description, category ve image zorunludur" },
        { status: 400 }
      );
    }

    const slug = generateSlug(title);

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        description,
        category,
        image,
        images: typeof images === "string" ? images : JSON.stringify(images ?? []),
        client: client ?? null,
        date: date ? new Date(date) : null,
        technologies:
          typeof technologies === "string"
            ? technologies
            : JSON.stringify(technologies ?? []),
        url: url ?? null,
        isActive: isActive ?? true,
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
