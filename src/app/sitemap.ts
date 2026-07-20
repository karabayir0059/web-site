import { prisma } from "@/lib/prisma";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://web-site-otomasyon.vercel.app";

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/hakkimizda`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/hizmetler`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/calismalarimiz`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/iletisim`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/kvkk`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/cerez-politikasi`, lastModified: new Date(), priority: 0.3 },
  ];

  // Dynamic service pages
  try {
    const services = await prisma.service.findMany({
      where: { isActive: true },
      select: { slug: true, createdAt: true },
    });

    const servicePages = services.map((s) => ({
      url: `${baseUrl}/hizmetler/${s.slug}`,
      lastModified: s.createdAt,
      priority: 0.7 as const,
    }));

    // Dynamic project pages
    const projects = await prisma.project.findMany({
      where: { isActive: true },
      select: { slug: true, createdAt: true },
    });

    const projectPages = projects.map((p) => ({
      url: `${baseUrl}/calismalarimiz/${p.slug}`,
      lastModified: p.createdAt,
      priority: 0.7 as const,
    }));

    return [...staticPages, ...servicePages, ...projectPages];
  } catch {
    return staticPages;
  }
}
