"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

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

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/services")
      .then((r) => r.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        const found = list.find((s: Service) => s.slug === slug);
        setService(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="py-32 flex items-center justify-center">
        <div className="text-[#b8860b]">Yükleniyor...</div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-2xl font-heading font-semibold text-[#1a1a1a] mb-4">
          Hizmet Bulunamadı
        </h1>
        <Link href="/hizmetler" className="text-[#b8860b] hover:underline">
          ← Tüm hizmetlere dön
        </Link>
      </div>
    );
  }

  let features: string[] = [];
  try {
    features = JSON.parse(service.features || "[]");
  } catch {}

  return (
    <>
      <section className="py-24 sm:py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-1 text-sm text-[#6b7280] hover:text-[#b8860b] mb-8 transition-colors"
          >
            ← Tüm Hizmetler
          </Link>
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-[#b8860b]/5 rounded-2xl flex items-center justify-center text-3xl mb-6">
              {service.icon}
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-[#1a1a1a] mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-[#6b7280] leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {features.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-heading font-semibold text-[#1a1a1a] mb-8">
                Hizmet İçeriği
              </h2>
              <ul className="space-y-4">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#b8860b] mt-0.5 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#6b7280]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {service.price && (
        <section className="py-16 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 border border-[#e5e2dd] inline-block">
              <span className="text-xs text-[#6b7280] uppercase tracking-wider">
                Başlangıç Fiyatı
              </span>
              <div className="text-3xl font-heading font-bold text-[#b8860b] mt-1">
                {service.price}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-white mb-4">
            Bu Hizmeti Sizin İçin Özelleştirelim
          </h2>
          <Link
            href="/iletisim"
            className="inline-flex bg-[#b8860b] hover:bg-[#a0750a] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Ücretsiz Danışmanlık Alın
          </Link>
        </div>
      </section>
    </>
  );
}
