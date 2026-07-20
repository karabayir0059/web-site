"use client";

import { useEffect, useState } from "react";

interface Setting {
  key: string;
  value: string;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => {
        if (data && typeof data === "object" && !Array.isArray(data)) {
          // Flatten: value might be JSON string
          const flat: Record<string, string> = {};
          for (const [key, val] of Object.entries(data)) {
            try {
              const parsed = JSON.parse(val as string);
              if (typeof parsed === "object" && parsed !== null) {
                flat[key] = JSON.stringify(parsed, null, 2);
              } else {
                flat[key] = String(parsed);
              }
            } catch {
              flat[key] = String(val);
            }
          }
          setSettings(flat);
        }
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      for (const [key, value] of Object.entries(settings)) {
        await fetch(`/api/admin/settings/${key}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value }),
        });
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.error(err);
    }
    setSaving(false);
  };

  const updateSetting = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const settingLabels: Record<string, string> = {
    site_name: "Site Adı",
    site_description: "Site Açıklaması",
    whatsapp: "WhatsApp (JSON: {\"number\":\"90XXX\",\"message\":\"...\"})",
    email: "E-posta",
    phone: "Telefon",
    address: "Adres",
    social_links: "Sosyal Medya (JSON: {\"instagram\":\"\",\"linkedin\":\"\"})",
    hero_title: "Hero Başlığı",
    hero_subtitle: "Hero Alt Başlık",
  };

  if (loading)
    return <div className="text-[#b8860b]">Yükleniyor...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-semibold text-[#1a1a1a]">
            Site Ayarları
          </h1>
          <p className="text-sm text-[#6b7280] mt-1">
            Genel site ayarlarını yönetin.
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-[#b8860b] hover:bg-[#a0750a] text-white px-5 py-2 rounded-lg text-sm transition-colors disabled:opacity-50"
        >
          {saving ? "Kaydediliyor..." : saved ? "Kaydedildi ✓" : "Tümünü Kaydet"}
        </button>
      </div>

      <div className="bg-white rounded-xl border border-[#e5e2dd] p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {Object.entries(settings).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {settingLabels[key] || key}
              </label>
              {(key === "whatsapp" || key === "social_links" || key === "site_description" || key === "hero_subtitle") ? (
                <textarea
                  value={value}
                  onChange={(e) => updateSetting(key, e.target.value)}
                  rows={key === "whatsapp" || key === "social_links" ? 4 : 2}
                  className="w-full px-3 py-2 border border-[#e5e2dd] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50 font-mono text-xs"
                />
              ) : (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => updateSetting(key, e.target.value)}
                  className="w-full px-3 py-2 border border-[#e5e2dd] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
