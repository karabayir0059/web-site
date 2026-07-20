"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  shortDesc: string;
  icon: string;
  slug: string;
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("/api/admin/services")
      .then((r) => r.json())
      .then((data) => setServices(Array.isArray(data) ? data : []))
      .catch(() => {});

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion && sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".service-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-[#b8860b] font-medium">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#1a1a1a] mt-4 mb-4">
            Neler Sunuyoruz?
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto">
            İşletmenizin dijital ihtiyaçlarına özel, uçtan uca çözümler
            sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/hizmetler/${service.slug}`}
              className={`service-card group bg-[#faf8f5] rounded-2xl p-8 border border-[#e5e2dd] hover:border-[#c9a961]/30 hover:shadow-lg hover:shadow-[#c9a961]/5 transition-all duration-500 ${
                index === 0 ? "opacity-0" : "opacity-0"
              }`}
              style={{ opacity: index === 0 ? undefined : undefined }}
            >
              <div className="w-14 h-14 bg-[#b8860b]/5 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:bg-[#b8860b]/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-[#1a1a1a] mb-3 group-hover:text-[#b8860b] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                {service.shortDesc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#b8860b]">
                <span>Detaylı İncele</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
          {services.length === 0 && (
            <>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-[#faf8f5] rounded-2xl p-8 border border-[#e5e2dd] animate-pulse"
                >
                  <div className="w-14 h-14 bg-gray-200 rounded-xl mb-6" />
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
