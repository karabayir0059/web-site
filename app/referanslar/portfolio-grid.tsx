"use client";

import { useState } from "react";

import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { portfolioItems } from "@/data/portfolio";
import type { PortfolioItem } from "@/data/portfolio";

const categories = [
  { value: "all", label: "Tümü" },
  { value: "web-sitesi", label: "Web Siteleri" },
  { value: "otomasyon", label: "Otomasyon" },
  { value: "altyapi", label: "Altyapı" },
] as const;

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered: PortfolioItem[] =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeCategory);

  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        {/* Category filter */}
        <Reveal className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`rounded-pill border px-4 py-2 text-sm font-semibold transition-all duration-[var(--duration-base)] ${
                activeCategory === cat.value
                  ? "bg-brand text-white shadow-soft"
                  : "border-border/80 bg-white text-foreground hover:border-brand/25 hover:text-brand"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        {/* Project grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.03}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-xl border border-border/80 bg-surface-soft px-8 py-12 text-center">
            <p className="font-heading text-2xl text-muted">
              Bu kategoride henüz proje bulunmuyor.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
