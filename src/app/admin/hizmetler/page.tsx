"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  slug: string;
  shortDesc: string;
  price: string | null;
  order: number;
  isActive: boolean;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/services")
      .then((r) => r.json())
      .then((data) => {
        setServices(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  const toggleActive = async (id: number, current: boolean) => {
    await fetch(`/api/admin/services/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isActive: !current }),
    });
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isActive: !current } : s))
    );
  };

  const deleteService = async (id: number) => {
    if (!confirm("Bu hizmeti silmek istediğinize emin misiniz?")) return;
    await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  if (loading) return <div className="text-[#b8860b]">Yükleniyor...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-semibold text-[#1a1a1a]">
            Hizmetler
          </h1>
          <p className="text-sm text-[#6b7280] mt-1">
            Web sitesinde gösterilen hizmetleri yönetin.
          </p>
        </div>
        <Link
          href="/admin/hizmetler/ekle"
          className="bg-[#b8860b] hover:bg-[#a0750a] text-white px-4 py-2 rounded-lg text-sm transition-colors"
        >
          + Yeni Hizmet
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-[#e5e2dd] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e5e2dd] bg-[#faf8f5]">
              <th className="text-left px-5 py-3 text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                Sıra
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                Başlık
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                Kısa Açıklama
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                Fiyat
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                Durum
              </th>
              <th className="text-right px-5 py-3 text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                İşlem
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e2dd]">
            {services.map((service) => (
              <tr key={service.id} className="hover:bg-[#faf8f5]">
                <td className="px-5 py-4 text-sm text-[#6b7280]">
                  {service.order}
                </td>
                <td className="px-5 py-4">
                  <Link
                    href={`/admin/hizmetler/${service.id}`}
                    className="text-sm font-medium text-[#1a1a1a] hover:text-[#b8860b]"
                  >
                    {service.title}
                  </Link>
                </td>
                <td className="px-5 py-4 text-sm text-[#6b7280] max-w-xs truncate">
                  {service.shortDesc}
                </td>
                <td className="px-5 py-4 text-sm text-[#6b7280]">
                  {service.price || "—"}
                </td>
                <td className="px-5 py-4">
                  <button
                    onClick={() => toggleActive(service.id, service.isActive)}
                    className={`text-xs px-2 py-1 rounded-full ${
                      service.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {service.isActive ? "Aktif" : "Pasif"}
                  </button>
                </td>
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/hizmetler/${service.id}`}
                      className="text-xs text-[#b8860b] hover:text-[#a0750a]"
                    >
                      Düzenle
                    </Link>
                    <button
                      onClick={() => deleteService(service.id)}
                      className="text-xs text-red-500 hover:text-red-700"
                    >
                      Sil
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {services.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-5 py-8 text-center text-sm text-[#6b7280]"
                >
                  Henüz hizmet eklenmemiş.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
