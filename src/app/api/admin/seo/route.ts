import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const seoSettings = await prisma.seoSettings.findMany({
      orderBy: { page: "asc" },
    });
    return NextResponse.json(seoSettings);
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { page, metaTitle, metaDescription, ogImage, canonical } = body;

    if (!page) {
      return NextResponse.json({ error: "page zorunludur" }, { status: 400 });
    }

    const seoSetting = await prisma.seoSettings.create({
      data: {
        page,
        metaTitle: metaTitle ?? null,
        metaDescription: metaDescription ?? null,
        ogImage: ogImage ?? null,
        canonical: canonical ?? null,
      },
    });

    return NextResponse.json(seoSetting, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
