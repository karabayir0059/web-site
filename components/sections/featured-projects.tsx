import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { portfolioItems } from "@/data/portfolio";

export function FeaturedProjects() {
  const featured = portfolioItems.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-section-alt py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-brand/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Son projeler"
            title="Yaptığımız işlerin her biri bir işletmenin dijital altyapısını güçlendirmek için kuruldu."
            description="Her proje farklı bir sektörün ihtiyacına göre şekillendi. Sizin için de benzer bir yapı kurabiliriz."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <ProjectCard project={project} variant="compact" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="text-center">
          <Link
            href="/referanslar"
            className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition-all duration-[var(--duration-base)] hover:-translate-y-0.5 hover:border-brand/25 hover:text-brand hover:shadow-soft"
          >
            Tüm projeleri gör
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
