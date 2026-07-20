"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion && sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".cta-item"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] translate-x-1/4 -translate-y-1/4 bg-gradient-to-br from-[#c9a961]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="cta-item max-w-2xl mx-auto">
          <span className="text-xs tracking-widest uppercase text-[#c9a961] font-medium">
            Hemen Başlayın
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-white mt-4 mb-6">
            Projenizi Hayata Geçirelim
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-lg mx-auto">
            Ücretsiz danışmanlık için bizimle iletişime geçin. Size en uygun
            çözümü birlikte belirleyelim.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="bg-[#b8860b] hover:bg-[#a0750a] text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#b8860b]/20"
            >
              Teklif Alın
            </Link>
            <Link
              href="/hizmetler"
              className="text-gray-300 hover:text-white px-8 py-3.5 rounded-lg font-medium transition-colors border border-gray-800 hover:border-gray-600"
            >
              Hizmetleri Keşfedin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
