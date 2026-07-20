"use client";

import { useEffect, useState } from "react";

interface PageContent {
  id: number;
  page: string;
  section: string;
  content: string;
}

export default function PagesPage() {
  const [pages, setPages] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    fetch("/api/admin/pages")
      .then((r) => r.json())
      .then((data) => {
        setPages(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  const savePage = async (id: number) => {
    await fetch(`/api/admin/pages/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: editValue }),
    });
    setPages((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, content: editValue } : p
      )
    );
    setEditing(null);
  };

  const pageLabels: Record<string, string> = {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    contact: "İletişim",
  };

  if (loading)
    return <div className="text-[#b8860b]">Yükleniyor...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-semibold text-[#1a1a1a]">
          Sayfa İçerikleri
        </h1>
        <p className="text-sm text-[#6b7280] mt-1">
          Sayfaların metin içeriklerini yönetin.
        </p>
      </div>

      <div className="space-y-4">
        {pages.map((page) => (
          <div
            key={page.id}
            className="bg-white rounded-xl border border-[#e5e2dd] p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs text-[#b8860b] uppercase tracking-wider">
                  {pageLabels[page.page] || page.page}
                </span>
                <h3 className="text-sm font-medium text-[#1a1a1a] mt-0.5 capitalize">
                  {page.section.replace(/_/g, " ")}
                </h3>
              </div>
              {editing === page.id ? (
                <div className="flex gap-2">
                  <button
                    onClick={() => savePage(page.id)}
                    className="text-xs bg-[#b8860b] text-white px-3 py-1.5 rounded-lg"
                  >
                    Kaydet
                  </button>
                  <button
                    onClick={() => setEditing(null)}
                    className="text-xs text-[#6b7280] px-3 py-1.5"
                  >
                    İptal
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    try {
                      const parsed = JSON.parse(page.content);
                      setEditValue(
                        typeof parsed === "string" ? parsed : JSON.stringify(parsed, null, 2)
                      );
                    } catch {
                      setEditValue(page.content);
                    }
                    setEditing(page.id);
                  }}
                  className="text-xs text-[#b8860b] hover:text-[#a0750a]"
                >
                  Düzenle
                </button>
              )}
            </div>
            {editing === page.id ? (
              <textarea
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-[#e5e2dd] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
              />
            ) : (
              <p className="text-sm text-[#6b7280] line-clamp-2">
                {(() => {
                  try {
                    const parsed = JSON.parse(page.content);
                    return typeof parsed === "string"
                      ? parsed
                      : JSON.stringify(parsed).slice(0, 100) + "...";
                  } catch {
                    return page.content.slice(0, 100);
                  }
                })()}
              </p>
            )}
          </div>
        ))}
        {pages.length === 0 && (
          <div className="text-center text-sm text-[#6b7280] py-8">
            Henüz sayfa içeriği yok.
          </div>
        )}
      </div>
    </div>
  );
}
