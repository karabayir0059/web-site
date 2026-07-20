"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  initialData?: {
    id: number;
    title: string;
    shortDesc: string;
    description: string;
    icon: string;
    price: string;
    features: string[];
    order: number;
    isActive: boolean;
  };
}

export default function ServiceForm({ initialData }: Props) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: initialData?.title || "",
    shortDesc: initialData?.shortDesc || "",
    description: initialData?.description || "",
    icon: initialData?.icon || "⚡",
    price: initialData?.price || "",
    features: initialData?.features?.join("\n") || "",
    order: initialData?.order ?? 0,
    isActive: initialData?.isActive ?? true,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const body = {
      ...form,
      features: JSON.stringify(
        form.features.split("\n").filter((f) => f.trim())
      ),
    };

    const url = initialData
      ? `/api/admin/services/${initialData.id}`
      : "/api/admin/services";
    const method = initialData ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      router.push("/admin/hizmetler");
    } else {
      const data = await res.json();
      setError(data.error || "Bir hata oluştu");
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-semibold text-[#1a1a1a]">
          {initialData ? "Hizmet Düzenle" : "Yeni Hizmet"}
        </h1>
        <p className="text-sm text-[#6b7280] mt-1">
          {initialData
            ? "Hizmet bilgilerini güncelleyin."
            : "Yeni bir hizmet ekleyin."}
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      <div className="bg-white rounded-xl border border-[#e5e2dd] p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Başlık
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kısa Açıklama (ana sayfada görünür)
            </label>
            <input
              type="text"
              value={form.shortDesc}
              onChange={(e) => setForm({ ...form, shortDesc: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Detaylı Açıklama
            </label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              rows={6}
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              İkon (emoji)
            </label>
            <input
              type="text"
              value={form.icon}
              onChange={(e) => setForm({ ...form, icon: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fiyat (opsiyonel)
            </label>
            <input
              type="text"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              placeholder="Başlangıç 5.000 TL"
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sıralama
            </label>
            <input
              type="number"
              value={form.order}
              onChange={(e) =>
                setForm({ ...form, order: parseInt(e.target.value) || 0 })
              }
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.isActive}
              onChange={(e) =>
                setForm({ ...form, isActive: e.target.checked })
              }
              id="isActive"
              className="rounded border-[#e5e2dd]"
            />
            <label htmlFor="isActive" className="text-sm text-gray-700">
              Aktif
            </label>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Özellikler (her satıra bir özellik)
            </label>
            <textarea
              value={form.features}
              onChange={(e) => setForm({ ...form, features: e.target.value })}
              rows={5}
              placeholder="Responsive tasarım&#10;SEO uyumlu&#10;Hızlı yükleme"
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving}
          className="bg-[#b8860b] hover:bg-[#a0750a] text-white px-6 py-2.5 rounded-lg text-sm transition-colors disabled:opacity-50"
        >
          {saving ? "Kaydediliyor..." : initialData ? "Güncelle" : "Kaydet"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/hizmetler")}
          className="text-sm text-[#6b7280] hover:text-[#1a1a1a] transition-colors"
        >
          İptal
        </button>
      </div>
    </form>
  );
}
