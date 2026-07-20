"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  images: string;
  client: string | null;
  date: string | null;
  technologies: string;
  url: string | null;
  slug: string;
}

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/projects")
      .then((r) => r.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        const found = list.find((p: Project) => p.slug === slug);
        setProject(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="py-32 flex items-center justify-center">
        <div className="text-[#b8860b]">Yükleniyor...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-2xl font-heading font-semibold text-[#1a1a1a] mb-4">
          Proje Bulunamadı
        </h1>
        <Link href="/calismalarimiz" className="text-[#b8860b] hover:underline">
          ← Tüm projelere dön
        </Link>
      </div>
    );
  }

  let techs: string[] = [];
  try {
    techs = JSON.parse(project.technologies || "[]");
  } catch {}

  let extraImages: string[] = [];
  try {
    extraImages = JSON.parse(project.images || "[]");
  } catch {}

  return (
    <>
      <section className="py-24 sm:py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/calismalarimiz"
            className="inline-flex items-center gap-1 text-sm text-[#6b7280] hover:text-[#b8860b] mb-8 transition-colors"
          >
            ← Tüm Projeler
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="aspect-[4/3] bg-[#f0eeeb] rounded-2xl overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#c9a961]/30 font-heading text-6xl">
                  W
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <span className="text-xs text-[#b8860b] uppercase tracking-wider">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-[#1a1a1a] mt-2 mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-[#6b7280] leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="space-y-4 text-sm">
                {project.client && (
                  <div className="flex gap-2">
                    <span className="text-[#6b7280] min-w-24">Müşteri:</span>
                    <span className="text-[#1a1a1a] font-medium">
                      {project.client}
                    </span>
                  </div>
                )}
                {project.date && (
                  <div className="flex gap-2">
                    <span className="text-[#6b7280] min-w-24">Tarih:</span>
                    <span className="text-[#1a1a1a]">
                      {new Date(project.date).toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "long",
                      })}
                    </span>
                  </div>
                )}
                {project.url && (
                  <div className="flex gap-2">
                    <span className="text-[#6b7280] min-w-24">Website:</span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b8860b] hover:underline"
                    >
                      {project.url}
                    </a>
                  </div>
                )}
              </div>

              {techs.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-sm font-medium text-[#1a1a1a] mb-3">
                    Kullanılan Teknolojiler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 bg-[#faf8f5] border border-[#e5e2dd] rounded-lg text-[#6b7280]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {extraImages.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-semibold text-[#1a1a1a] mb-8">
              Proje Görselleri
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {extraImages.map((img, i) => (
                <div
                  key={i}
                  className="aspect-[16/10] bg-[#f0eeeb] rounded-xl overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
