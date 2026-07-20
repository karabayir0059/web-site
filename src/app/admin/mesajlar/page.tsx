"use client";

import { useEffect, useState } from "react";

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Message | null>(null);

  const fetchMessages = () => {
    fetch("/api/admin/messages")
      .then((r) => r.json())
      .then((data) => {
        setMessages(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  };

  useEffect(fetchMessages, []);

  const markAsRead = async (id: number) => {
    await fetch(`/api/admin/messages/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isRead: true }),
    });
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, isRead: true } : m))
    );
    if (selected?.id === id) setSelected({ ...selected, isRead: true });
  };

  const deleteMessage = async (id: number) => {
    if (!confirm("Bu mesajı silmek istediğinize emin misiniz?")) return;
    await fetch(`/api/admin/messages/${id}`, { method: "DELETE" });
    setMessages((prev) => prev.filter((m) => m.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  if (loading)
    return <div className="text-[#b8860b]">Yükleniyor...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-semibold text-[#1a1a1a]">
          Mesajlar
        </h1>
        <p className="text-sm text-[#6b7280] mt-1">
          İletişim formundan gelen mesajları görüntüleyin.
        </p>
      </div>

      {selected ? (
        <div className="bg-white rounded-xl border border-[#e5e2dd] p-6">
          <button
            onClick={() => setSelected(null)}
            className="text-sm text-[#b8860b] hover:text-[#a0750a] mb-4 inline-flex items-center gap-1"
          >
            ← Geri
          </button>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-[#6b7280]">İsim: </span>
                <span className="text-[#1a1a1a] font-medium">{selected.name}</span>
              </div>
              <div>
                <span className="text-[#6b7280]">E-posta: </span>
                <a href={`mailto:${selected.email}`} className="text-[#b8860b]">
                  {selected.email}
                </a>
              </div>
              {selected.phone && (
                <div>
                  <span className="text-[#6b7280]">Telefon: </span>
                  <span className="text-[#1a1a1a]">{selected.phone}</span>
                </div>
              )}
              {selected.subject && (
                <div>
                  <span className="text-[#6b7280]">Konu: </span>
                  <span className="text-[#1a1a1a]">{selected.subject}</span>
                </div>
              )}
              <div>
                <span className="text-[#6b7280]">Tarih: </span>
                <span className="text-[#1a1a1a]">
                  {new Date(selected.createdAt).toLocaleDateString("tr-TR", {
                    dateStyle: "long",
                  })}
                </span>
              </div>
            </div>
            <div className="pt-4 border-t border-[#e5e2dd]">
              <p className="text-sm text-[#1a1a1a] whitespace-pre-wrap leading-relaxed">
                {selected.message}
              </p>
            </div>
            <div className="flex gap-2 pt-4">
              {!selected.isRead && (
                <button
                  onClick={() => markAsRead(selected.id)}
                  className="text-xs bg-[#b8860b] text-white px-4 py-2 rounded-lg"
                >
                  Okundu İşaretle
                </button>
              )}
              <button
                onClick={() => deleteMessage(selected.id)}
                className="text-xs bg-red-50 text-red-600 px-4 py-2 rounded-lg border border-red-200"
              >
                Sil
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-[#e5e2dd] overflow-hidden">
          {messages.length === 0 ? (
            <div className="text-center text-sm text-[#6b7280] py-12">
              Henüz mesaj yok.
            </div>
          ) : (
            <div className="divide-y divide-[#e5e2dd]">
              {messages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => {
                    setSelected(msg);
                    if (!msg.isRead) markAsRead(msg.id);
                  }}
                  className="w-full text-left px-5 py-4 hover:bg-[#faf8f5] transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      {!msg.isRead && (
                        <span className="w-2 h-2 bg-[#b8860b] rounded-full flex-shrink-0" />
                      )}
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-[#1a1a1a] truncate">
                          {msg.name}
                        </div>
                        <div className="text-xs text-[#6b7280] truncate">
                          {msg.subject || "Konusuz"}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-[#6b7280] whitespace-nowrap">
                      {new Date(msg.createdAt).toLocaleDateString("tr-TR")}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
