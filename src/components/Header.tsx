"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/calismalarimiz", label: "Çalışmalarımız" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e5e2dd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-[#0a0a0a] rounded-lg flex items-center justify-center group-hover:bg-[#b8860b] transition-colors">
              <span className="text-[#c9a961] group-hover:text-white font-heading font-bold text-sm transition-colors">
                W
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-heading font-semibold text-[#1a1a1a] leading-tight">
                Web Site
              </div>
              <div className="text-[10px] text-[#b8860b] tracking-widest uppercase">
                & Otomasyon
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? "text-[#b8860b] bg-[#b8860b]/5"
                      : "text-[#6b7280] hover:text-[#1a1a1a] hover:bg-[#e5e2dd]/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/iletisim"
              className="hidden sm:inline-flex bg-[#b8860b] hover:bg-[#a0750a] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Teklif Alın
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-[#6b7280] hover:text-[#1a1a1a] rounded-lg hover:bg-[#e5e2dd]/50 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-[#e5e2dd] bg-[#faf8f5]">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                    isActive
                      ? "text-[#b8860b] bg-[#b8860b]/5"
                      : "text-[#6b7280] hover:text-[#1a1a1a] hover:bg-[#e5e2dd]/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/iletisim"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-white bg-[#b8860b] rounded-lg text-center mt-3"
            >
              Teklif Alın
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
