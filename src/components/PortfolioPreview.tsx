"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  slug: string;
}

export default function PortfolioPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/admin/projects")
      .then((r) => r.json())
      .then((data) => {
        const list = Array.isArray(data) ? data.slice(0, 3) : [];
        setProjects(list);
      })
      .catch(() => {});

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion && sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".portfolio-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs tracking-widest uppercase text-[#b8860b] font-medium">
              Çalışmalarımız
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#1a1a1a] mt-4">
              Son Projelerimiz
            </h2>
          </div>
          <Link
            href="/calismalarimiz"
            className="text-sm font-medium text-[#b8860b] hover:text-[#a0750a] transition-colors inline-flex items-center gap-1"
          >
            Tümünü Gör
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/calismalarimiz/${project.slug}`}
              className="portfolio-item group bg-white rounded-2xl overflow-hidden border border-[#e5e2dd] hover:shadow-lg hover:border-[#c9a961]/30 transition-all duration-500"
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
              </div>
            </Link>
          ))}
          {projects.length === 0 && (
            <>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden border border-[#e5e2dd] animate-pulse"
                >
                  <div className="aspect-[4/3] bg-gray-200" />
                  <div className="p-6">
                    <div className="h-3 bg-gray-200 rounded w-1/4 mb-3" />
                    <div className="h-5 bg-gray-200 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
