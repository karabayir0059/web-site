"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    client: "",
    date: "",
    url: "",
    technologies: "",
    image: "",
    isActive: true,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          client: form.client || null,
          date: form.date || null,
          url: form.url || null,
        }),
      });

      if (res.ok) {
        router.push("/admin/portfolyo");
      } else {
        const data = await res.json();
        setError(data.error || "Bir hata oluştu");
        setSaving(false);
      }
    } catch {
      setError("Bağlantı hatası");
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-semibold text-[#1a1a1a]">
          Yeni Proje
        </h1>
        <p className="text-sm text-[#6b7280] mt-1">
          Portfolyonuza yeni bir proje ekleyin.
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
              Açıklama
            </label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              rows={5}
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kategori
            </label>
            <input
              type="text"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              placeholder="Web, Mobil, Tasarım..."
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Müşteri (opsiyonel)
            </label>
            <input
              type="text"
              value={form.client}
              onChange={(e) => setForm({ ...form, client: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tarih (opsiyonel)
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              URL (opsiyonel)
            </label>
            <input
              type="url"
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              placeholder="https://..."
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Teknolojiler (virgülle ayırın)
            </label>
            <input
              type="text"
              value={form.technologies}
              onChange={(e) =>
                setForm({ ...form, technologies: e.target.value })
              }
              placeholder="React, Next.js, Tailwind CSS"
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Görsel URL
            </label>
            <input
              type="url"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              placeholder="https://..."
              className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
              required
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
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving}
          className="bg-[#b8860b] hover:bg-[#a0750a] text-white px-6 py-2.5 rounded-lg text-sm transition-colors disabled:opacity-50"
        >
          {saving ? "Kaydediliyor..." : "Kaydet"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/portfolyo")}
          className="text-sm text-[#6b7280] hover:text-[#1a1a1a] transition-colors"
        >
          İptal
        </button>
      </div>
    </form>
  );
}
