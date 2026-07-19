"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ctaLinks } from "@/data/site";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  asideTitle: string;
  asideItems: string[];
};

export function PageHeader({
  eyebrow,
  title,
  description,
  asideTitle,
  asideItems,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden">
      {/* dark gradient background */}
      <div className="bg-dark-section relative">
        <Container className="relative z-10 grid gap-8 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
          <Reveal className="space-y-6">
            <Badge tone="default">{eyebrow}</Badge>

            <div className="space-y-4">
              <h1 className="text-white max-w-4xl font-heading text-4xl leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-white/60">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={ctaLinks.quote}
                className={buttonStyles({ size: "lg" })}
              >
                Teklif Al
              </Link>
              <Link
                href={ctaLinks.whatsapp}
                className={buttonStyles({ variant: "secondary", size: "lg", className: "border-[#25D366]/40 text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366] hover:text-white" })}
              >
                WhatsApp ile yazın
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass-dark rounded-xl p-6">
              <p className="text-white/70 font-heading text-xl tracking-[-0.03em]">
                {asideTitle}
              </p>
              <div className="mt-5 grid gap-3">
                {asideItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white/70 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
