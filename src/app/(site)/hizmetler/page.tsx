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
  description: string;
  icon: string;
  price: string | null;
  features: string;
  slug: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("/api/admin/services")
      .then((r) => r.json())
      .then((data) => {
        setServices(Array.isArray(data) ? data : []);
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
          sectionRef.current.querySelectorAll(".service-card"),
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
  }, [loading]);

  return (
    <>
      <section className="py-24 sm:py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs tracking-widest uppercase text-[#b8860b] font-medium">
              Hizmetlerimiz
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-[#1a1a1a] mt-4 mb-6 leading-tight">
              İşletmenize Özel <br />
              Dijital Çözümler
            </h1>
            <p className="text-lg text-[#6b7280] leading-relaxed max-w-2xl">
              Web geliştirmeden otomasyona, e-posta yönetiminden SEO'ya kadar
              geniş bir yelpazede profesyonel hizmetler sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-[#faf8f5] rounded-2xl p-8 border border-[#e5e2dd] animate-pulse">
                  <div className="w-14 h-14 bg-gray-200 rounded-xl mb-6" />
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/hizmetler/${service.slug}`}
                  className="service-card group bg-[#faf8f5] rounded-2xl p-8 border border-[#e5e2dd] hover:border-[#c9a961]/30 hover:shadow-lg transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-[#b8860b]/5 rounded-xl flex items-center justify-center mb-6 text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-[#1a1a1a] mb-3 group-hover:text-[#b8860b] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                  {service.price && (
                    <div className="text-sm font-medium text-[#b8860b] mb-4">
                      {service.price}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm font-medium text-[#b8860b]">
                    <span>Detaylı İncele</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {!loading && services.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6b7280]">Henüz hizmet eklenmemiş.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
