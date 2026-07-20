"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Kalite",
    desc: "Her projede en yüksek kalite standartlarını hedefliyor, müşteri memnuniyetini ön planda tutuyoruz.",
  },
  {
    title: "Yenilikçilik",
    desc: "Teknolojideki son gelişmeleri takip ederek müşterilerimize en güncel çözümleri sunuyoruz.",
  },
  {
    title: "Güven",
    desc: "Şeffaf iletişim ve zamanında teslimat ile müşterilerimizin güvenini kazanıyoruz.",
  },
  {
    title: "Sürdürülebilirlik",
    desc: "Uzun vadeli çözümler üreterek işletmenizin dijital varlığını sürdürülebilir kılıyoruz.",
  },
];

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion && sectionRef.current) {
      const els = sectionRef.current.querySelectorAll(".anim");
      gsap.fromTo(
        els,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs tracking-widest uppercase text-[#b8860b] font-medium">
              Hakkımızda
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-[#1a1a1a] mt-4 mb-6 leading-tight">
              Dijital Dönüşümde <br />
              Güvenilir Ortağınız
            </h1>
            <p className="text-lg text-[#6b7280] leading-relaxed">
              2024 yılında kurulan Web Site & Otomasyon, işletmelerin dijital
              potansiyelini ortaya çıkarmak için web geliştirme, iş süreçleri
              otomasyonu ve e-posta yönetimi alanlarında profesyonel çözümler
              sunmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="anim">
              <h2 className="text-3xl font-heading font-semibold text-[#1a1a1a] mb-6">
                Vizyonumuz
              </h2>
              <p className="text-[#6b7280] leading-relaxed mb-4">
                Teknolojinin her geçen gün daha da önem kazandığı günümüz
                dünyasında, işletmelerin dijital ayak izlerini profesyonel bir
                şekilde yönetmeleri gerekmektedir. Biz, bu ihtiyacı karşılamak
                üzere yola çıktık.
              </p>
              <p className="text-[#6b7280] leading-relaxed">
                Müşterilerimize sadece bir hizmet değil, işlerini büyütecekleri
                bir dijital ekosistem sunuyoruz. Web sitelerinden otomasyon
                çözümlerine, e-posta yönetiminden SEO optimizasyonuna kadar
                geniş bir yelpazede hizmet veriyoruz.
              </p>
            </div>
            <div className="anim bg-[#faf8f5] rounded-2xl p-8 lg:p-12 border border-[#e5e2dd]">
              <div className="text-6xl font-heading font-bold text-[#b8860b] mb-2">
                50+
              </div>
              <div className="text-sm text-[#6b7280] mb-8">Tamamlanan Proje</div>
              <div className="text-6xl font-heading font-bold text-[#b8860b] mb-2">
                30+
              </div>
              <div className="text-sm text-[#6b7280] mb-8">Mutlu Müşteri</div>
              <div className="text-6xl font-heading font-bold text-[#b8860b] mb-2">
                99%
              </div>
              <div className="text-sm text-[#6b7280]">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase text-[#b8860b] font-medium">
              Değerlerimiz
            </span>
            <h2 className="text-3xl font-heading font-semibold text-[#1a1a1a] mt-4">
              Bizi Farklı Kılan Değerler
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="anim bg-white rounded-2xl p-6 border border-[#e5e2dd] hover:border-[#c9a961]/30 transition-colors"
              >
                <div className="w-10 h-10 bg-[#b8860b]/5 rounded-lg flex items-center justify-center text-[#b8860b] font-heading font-bold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-heading font-semibold text-[#1a1a1a] mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
