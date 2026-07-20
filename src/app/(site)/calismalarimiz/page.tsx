"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
  client: string | null;
}

const categories = ["Tümü", "Web Sitesi", "Otomasyon", "E-Posta"];

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState("Tümü");
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("/api/admin/projects")
      .then((r) => r.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!loading && sectionRef.current) {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (!prefersReducedMotion) {
        gsap.fromTo(
          sectionRef.current.querySelectorAll(".project-card"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
          }
        );
      }
    }
  }, [loading, filter]);

  const filtered =
    filter === "Tümü"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="py-24 sm:py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs tracking-widest uppercase text-[#b8860b] font-medium">
              Çalışmalarımız
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-[#1a1a1a] mt-4 mb-6 leading-tight">
              Tamamladığımız <br />
              Projeler
            </h1>
            <p className="text-lg text-[#6b7280] leading-relaxed">
              Her biri özenle tasarlanmış ve geliştirilmiş projelerimizi
              keşfedin.
            </p>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  filter === cat
                    ? "bg-[#b8860b] text-white"
                    : "bg-[#faf8f5] text-[#6b7280] hover:text-[#1a1a1a] border border-[#e5e2dd]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-[#e5e2dd] animate-pulse">
                  <div className="aspect-[4/3] bg-gray-200" />
                  <div className="p-6">
                    <div className="h-3 bg-gray-200 rounded w-1/4 mb-3" />
                    <div className="h-5 bg-gray-200 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <Link
                  key={project.id}
                  href={`/calismalarimiz/${project.slug}`}
                  className="project-card group bg-white rounded-2xl overflow-hidden border border-[#e5e2dd] hover:shadow-lg hover:border-[#c9a961]/30 transition-all duration-500"
                >
                  <div className="aspect-[4/3] bg-[#f0eeeb] relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#c9a961]/30 font-heading text-4xl">
                        W
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-[#b8860b] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-heading font-semibold text-[#1a1a1a] mt-1 group-hover:text-[#b8860b] transition-colors">
                      {project.title}
                    </h3>
                    {project.client && (
                      <p className="text-sm text-[#6b7280] mt-1">
                        {project.client}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6b7280]">Bu kategoride proje bulunamadı.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
