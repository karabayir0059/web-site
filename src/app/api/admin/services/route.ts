import { prisma } from "@/lib/prisma";
import { generateSlug } from "@/lib/slug";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, shortDesc, description, icon, price, features, order, isActive } = body;

    if (!title || !shortDesc || !description || !icon) {
      return NextResponse.json(
        { error: "title, shortDesc, description ve icon zorunludur" },
        { status: 400 }
      );
    }

    const slug = generateSlug(title);

    const service = await prisma.service.create({
      data: {
        title,
        slug,
        shortDesc,
        description,
        icon,
        price: price ?? null,
        features: typeof features === "string" ? features : JSON.stringify(features ?? []),
        order: order ?? 0,
        isActive: isActive ?? true,
      },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
