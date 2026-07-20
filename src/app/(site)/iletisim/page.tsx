"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    kvkk: false,
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.kvkk) {
      setError("KVKK aydınlatma metnini kabul etmelisiniz.");
      return;
    }
    setSending(true);
    setError("");

    const res = await fetch("/api/admin/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        subject: form.subject || undefined,
        message: form.message,
      }),
    });

    if (res.ok) {
      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        kvkk: false,
      });
    } else {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
    setSending(false);
  };

  if (sent) {
    return (
      <section className="py-32 bg-[#faf8f5] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-heading font-semibold text-[#1a1a1a] mb-4">
            Mesajınız Alındı!
          </h1>
          <p className="text-[#6b7280] leading-relaxed mb-8">
            En kısa sürede size dönüş yapacağız. Teşekkür ederiz.
          </p>
          <button
            onClick={() => setSent(false)}
            className="text-[#b8860b] hover:underline text-sm"
          >
            Yeni mesaj gönder
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 sm:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs tracking-widest uppercase text-[#b8860b] font-medium">
            İletişim
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-[#1a1a1a] mt-4 mb-6 leading-tight">
            Bizimle İletişime <br />
            Geçin
          </h1>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            Projeniz için ücretsiz danışmanlık almak veya sorularınızı iletmek
            için formu doldurabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-2xl p-8 border border-[#e5e2dd] space-y-5"
          >
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ad Soyad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Konu
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mesajınız <span className="text-red-500">*</span>
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-2.5 border border-[#e5e2dd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
                required
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={form.kvkk}
                onChange={(e) => setForm({ ...form, kvkk: e.target.checked })}
                id="kvkk"
                className="mt-1 rounded border-[#e5e2dd]"
              />
              <label htmlFor="kvkk" className="text-xs text-[#6b7280] leading-relaxed">
                <a href="/kvkk" target="_blank" className="text-[#b8860b] hover:underline">KVKK Aydınlatma Metni</a>
                'ni okudum ve kişisel verilerimin işlenmesine onay veriyorum.
                <span className="text-red-500"> *</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-[#b8860b] hover:bg-[#a0750a] text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {sending ? "Gönderiliyor..." : "Mesajı Gönder"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#e5e2dd]">
              <h3 className="text-sm font-heading font-semibold text-[#1a1a1a] mb-3">
                E-posta
              </h3>
              <a
                href="mailto:info@websitesiotomasyon.com"
                className="text-[#b8860b] hover:underline text-sm"
              >
                info@websitesiotomasyon.com
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#e5e2dd]">
              <h3 className="text-sm font-heading font-semibold text-[#1a1a1a] mb-3">
                Telefon
              </h3>
              <a
                href="tel:+905551234567"
                className="text-[#b8860b] hover:underline text-sm"
              >
                +90 555 123 45 67
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#e5e2dd]">
              <h3 className="text-sm font-heading font-semibold text-[#1a1a1a] mb-3">
                Adres
              </h3>
              <p className="text-sm text-[#6b7280]">İstanbul, Türkiye</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#e5e2dd]">
              <h3 className="text-sm font-heading font-semibold text-[#1a1a1a] mb-3">
                Bizi Takip Edin
              </h3>
              <div className="flex gap-3">
                <a href="#" className="text-[#6b7280] hover:text-[#b8860b] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="text-[#6b7280] hover:text-[#b8860b] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
