"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/hizmetler", label: "Hizmetler", icon: "⚡" },
  { href: "/admin/portfolyo", label: "Portfolyo", icon: "🖼️" },
  { href: "/admin/sayfalar", label: "Sayfalar", icon: "📝" },
  { href: "/admin/seo", label: "SEO", icon: "🔍" },
  { href: "/admin/mesajlar", label: "Mesajlar", icon: "✉️" },
  { href: "/admin/ayarlar", label: "Ayarlar", icon: "⚙️" },
  { href: "/admin/kullanicilar", label: "Kullanıcılar", icon: "👥" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Login sayfasında layout'u gösterme
  if (pathname === "/admin/giris") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0a0a0a] text-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
          <div className="w-8 h-8 bg-[#c9a961] rounded flex items-center justify-center text-black font-bold text-sm">
            W
          </div>
          <div>
            <div className="text-sm font-heading font-semibold text-white">
              Web Site & Otomasyon
            </div>
            <div className="text-xs text-[#c9a961]">Admin Panel</div>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-[#c9a961]/10 text-[#c9a961] border border-[#c9a961]/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#c9a961] transition-colors"
          >
            <span>←</span>
            <span>Siteye Dön</span>
          </Link>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-[#e5e2dd] px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="text-sm text-gray-500">
            {menuItems.find((m) => m.href === pathname)?.label || "Admin Panel"}
          </div>

          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              className="text-sm text-gray-400 hover:text-[#b8860b] transition-colors"
            >
              Çıkış Yap
            </button>
          </form>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
