"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Mail, Cog, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ctaLinks } from "@/data/site";

const serviceHighlights = [
  {
    icon: Globe,
    title: "Kurumsal Web Tasarım",
    description: "Mobil öncelikli, hızlı ve dönüşüm odaklı web siteleri.",
  },
  {
    icon: Mail,
    title: "Kurumsal E-Posta",
    description: "Profesyonel mail altyapısı ve ekip iletişim düzeni.",
  },
  {
    icon: Cog,
    title: "İş Otomasyonları",
    description: "Tekrarlı işleri otomatikleştiren akıllı akışlar.",
  },
];

export function HomeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(35, Math.floor((canvas.width * canvas.height) / 25000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 190, 255, ${p.opacity * 0.8})`;
        ctx.fill();

        // Draw connections
        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-dark-section sm:min-h-screen">
      {/* Animated particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center py-20 sm:min-h-screen">
        {/* Top badge */}
        <div className="mb-6">
          <Badge tone="dark" className="bg-white/10 text-white">
            <Sparkles className="mr-1.5 inline h-3.5 w-3.5" />
            Web · Mail · Otomasyon
          </Badge>
        </div>

        {/* Main hero content - centered dramatic */}
        <div className="max-w-5xl space-y-6 text-center">
          <h1 className="font-heading text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] tracking-[-0.07em]">
            <span className="text-white">
              Web sitenizi kuruyor, kurumsal e-posta altyapınızı hazırlıyor ve iş süreçlerinizi otomasyonla hızlandırıyoruz.
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-balance text-lg leading-8 text-white/60 sm:text-xl sm:leading-9">
            Esnaftan kurumsal firmalara kadar; modern web siteleri, güvenilir kurumsal mail çözümleri ve akıllı iş akışlarıyla dijital altyapınızı uçtan uca kuruyoruz.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href={ctaLinks.quote}
            className={buttonStyles({
              variant: "primary",
              size: "lg",
            })}
          >
            Teklif Al
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={ctaLinks.services}
            className={buttonStyles({
              variant: "dark",
              size: "lg",
              className: "border-white/15 bg-white/8 backdrop-blur-sm hover:bg-white/15",
            })}
          >
            Hizmetleri İncele
          </Link>
          <Link
            href={ctaLinks.whatsapp}
            className={buttonStyles({
              variant: "ghost",
              size: "lg",
              className: "text-[#25D366]/80 hover:bg-[#25D366]/15 hover:text-[#25D366]",
            })}
          >
            WhatsApp ile yazın
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-4">
          {["Hızlı kurulum", "Şeffaf süreç", "Mobil uyumlu", "Teknik destek"].map((item) => (
            <span
              key={item}
              className="glass-dark rounded-pill px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-sm sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>

      {/* Floating service cards - visible on scroll or as anchor */}
      <div className="relative z-10 -mt-16 pb-8 sm:-mt-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-[var(--duration-slow)] hover:-translate-y-2 hover:border-brand/30 hover:bg-white/10 sm:p-6"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/40 to-cyan-400/20">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading text-lg tracking-[-0.03em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
