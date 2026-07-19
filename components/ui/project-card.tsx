"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { PortfolioItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: PortfolioItem;
  variant?: "default" | "compact";
};

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  return (
    <Link
      href={project.projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border/80 bg-surface-elevated shadow-soft transition-all duration-[var(--duration-base)] ease-soft",
        "hover:-translate-y-1 hover:border-brand/25",
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.imageSrc}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-[var(--duration-slow)] group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Subtle bottom shadow for badge readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Category badge */}
        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-white/90 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand shadow-soft backdrop-blur-sm">
          {project.category === "web-sitesi" ? "Web Sitesi" : project.category === "otomasyon" ? "Otomasyon" : "Altyapı"}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg tracking-[-0.03em] text-foreground sm:text-xl">
            {project.title}
          </h3>
          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-all duration-[var(--duration-base)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
        </div>

        <p className={cn(
          "text-sm leading-6 text-muted",
          variant === "compact" && "line-clamp-2",
        )}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/70 bg-surface px-2.5 py-0.5 text-[0.65rem] font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
