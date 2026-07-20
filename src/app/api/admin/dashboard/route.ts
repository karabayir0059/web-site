import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [servicesCount, projectsCount, messagesCount, unreadMessages, recentMessages] =
      await Promise.all([
        prisma.service.count({ where: { isActive: true } }),
        prisma.project.count({ where: { isActive: true } }),
        prisma.message.count(),
        prisma.message.count({ where: { isRead: false } }),
        prisma.message.findMany({
          orderBy: { createdAt: "desc" },
          take: 5,
          select: {
            id: true,
            name: true,
            email: true,
            subject: true,
            createdAt: true,
          },
        }),
      ]);

    return NextResponse.json({
      servicesCount,
      projectsCount,
      messagesCount,
      unreadMessages,
      recentMessages: recentMessages.map((m) => ({
        ...m,
        createdAt: m.createdAt.toISOString(),
      })),
    });
  } catch (error) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
