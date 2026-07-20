import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const seoSetting = await prisma.seoSettings.findUnique({
      where: { id: Number(id) },
    });

    if (!seoSetting) {
      return NextResponse.json({ error: "SEO ayarı bulunamadı" }, { status: 404 });
    }

    return NextResponse.json(seoSetting);
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
    const { page, metaTitle, metaDescription, ogImage, canonical } = body;

    const existing = await prisma.seoSettings.findUnique({ where: { id: Number(id) } });
    if (!existing) {
      return NextResponse.json({ error: "SEO ayarı bulunamadı" }, { status: 404 });
    }

    const seoSetting = await prisma.seoSettings.update({
      where: { id: Number(id) },
      data: {
        ...(page !== undefined && { page }),
        ...(metaTitle !== undefined && { metaTitle: metaTitle ?? null }),
        ...(metaDescription !== undefined && { metaDescription: metaDescription ?? null }),
        ...(ogImage !== undefined && { ogImage: ogImage ?? null }),
        ...(canonical !== undefined && { canonical: canonical ?? null }),
      },
    });

    return NextResponse.json(seoSetting);
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

    const existing = await prisma.seoSettings.findUnique({ where: { id: Number(id) } });
    if (!existing) {
      return NextResponse.json({ error: "SEO ayarı bulunamadı" }, { status: 404 });
    }

    await prisma.seoSettings.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
