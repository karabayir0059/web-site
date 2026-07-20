"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        [logoRef.current, titleRef.current, subtitleRef.current, ctaRef.current],
        { opacity: 1, y: 0 }
      );
      gsap.set(bgRef.current, { scale: 1, opacity: 1 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(bgRef.current, { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 })
      .fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.1"
      );
  }, []);

  const displayTitle =
    title || "Dijital Dönüşümünüz İçin Profesyonel Çözümler";
  const displaySubtitle =
    subtitle ||
    "Web sitesi, otomasyon ve e-posta yönetimi hizmetleriyle işinizi büyütün.";

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#faf8f5]">
      {/* Background Decorative */}
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-0"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] translate-x-1/3 -translate-y-1/3 bg-gradient-to-br from-[#c9a961]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] -translate-x-1/3 translate-y-1/3 bg-gradient-to-tr from-[#b8860b]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          {/* Logo */}
          <div
            ref={logoRef}
            className="opacity-0 mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#e5e2dd] rounded-full bg-white/50 backdrop-blur-sm">
              <div className="w-7 h-7 bg-[#0a0a0a] rounded-md flex items-center justify-center">
                <span className="text-[#c9a961] font-heading font-bold text-xs">
                  W
                </span>
              </div>
              <span className="text-xs text-[#6b7280] tracking-wider uppercase">
                Web Site & Otomasyon
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="opacity-0 text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-[#1a1a1a] leading-tight mb-6"
          >
            {displayTitle}
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="opacity-0 text-lg sm:text-xl text-[#6b7280] leading-relaxed max-w-2xl mb-10"
          >
            {displaySubtitle}
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="opacity-0 flex flex-wrap items-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-[#b8860b] hover:bg-[#a0750a] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#b8860b]/20"
            >
              Ücretsiz Danışmanlık Alın
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/calismalarimiz"
              className="inline-flex items-center gap-2 text-[#1a1a1a] hover:text-[#b8860b] px-6 py-3 rounded-lg font-medium transition-colors border border-[#e5e2dd] hover:border-[#b8860b]/30"
            >
              Çalışmalarımızı İnceleyin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
