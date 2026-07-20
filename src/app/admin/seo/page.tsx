"use client";

import { useEffect, useState } from "react";

interface SEOEntry {
  id: number;
  page: string;
  metaTitle: string | null;
  metaDescription: string | null;
  ogImage: string | null;
}

export default function SEOPage() {
  const [entries, setEntries] = useState<SEOEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<number | null>(null);
  const [form, setForm] = useState({ metaTitle: "", metaDescription: "", ogImage: "" });

  useEffect(() => {
    fetch("/api/admin/seo")
      .then((r) => r.json())
      .then((data) => {
        setEntries(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  const startEdit = (entry: SEOEntry) => {
    setForm({
      metaTitle: entry.metaTitle || "",
      metaDescription: entry.metaDescription || "",
      ogImage: entry.ogImage || "",
    });
    setEditing(entry.id);
  };

  const save = async (id: number) => {
    await fetch(`/api/admin/seo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...form } : e))
    );
    setEditing(null);
  };

  const pageLabels: Record<string, string> = {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    portfolio: "Portfolyo",
    contact: "İletişim",
  };

  if (loading)
    return <div className="text-[#b8860b]">Yükleniyor...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-semibold text-[#1a1a1a]">
          SEO Ayarları
        </h1>
        <p className="text-sm text-[#6b7280] mt-1">
          Her sayfa için meta başlık ve açıklamaları yönetin.
        </p>
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-white rounded-xl border border-[#e5e2dd] p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-[#1a1a1a]">
                {pageLabels[entry.page] || entry.page}
              </h3>
              {editing === entry.id ? (
                <button
                  onClick={() => save(entry.id)}
                  className="text-xs bg-[#b8860b] text-white px-3 py-1.5 rounded-lg"
                >
                  Kaydet
                </button>
              ) : (
                <button
                  onClick={() => startEdit(entry)}
                  className="text-xs text-[#b8860b] hover:text-[#a0750a]"
                >
                  Düzenle
                </button>
              )}
            </div>
            {editing === entry.id ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Meta Başlık
                  </label>
                  <input
                    type="text"
                    value={form.metaTitle}
                    onChange={(e) =>
                      setForm({ ...form, metaTitle: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-[#e5e2dd] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Meta Açıklama
                  </label>
                  <textarea
                    value={form.metaDescription}
                    onChange={(e) =>
                      setForm({ ...form, metaDescription: e.target.value })
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-[#e5e2dd] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    OG Görsel URL
                  </label>
                  <input
                    type="text"
                    value={form.ogImage}
                    onChange={(e) =>
                      setForm({ ...form, ogImage: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-[#e5e2dd] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-1 text-sm">
                <div>
                  <span className="text-[#6b7280]">Başlık: </span>
                  <span className="text-[#1a1a1a]">
                    {entry.metaTitle || "—"}
                  </span>
                </div>
                <div>
                  <span className="text-[#6b7280]">Açıklama: </span>
                  <span className="text-[#1a1a1a] line-clamp-1">
                    {entry.metaDescription || "—"}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
        {entries.length === 0 && (
          <div className="text-center text-sm text-[#6b7280] py-8">
            Henüz SEO ayarı yok.
          </div>
        )}
      </div>
    </div>
  );
}
