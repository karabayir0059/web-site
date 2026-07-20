import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#c9a961] rounded-lg flex items-center justify-center">
                <span className="text-black font-heading font-bold text-sm">W</span>
              </div>
              <div>
                <div className="text-sm font-heading font-semibold text-white leading-tight">
                  Web Site
                </div>
                <div className="text-[10px] text-[#c9a961] tracking-widest uppercase">
                  & Otomasyon
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Profesyonel web sitesi geliştirme, iş süreçleri otomasyonu ve
              e-posta yönetimi hizmetleriyle işletmenizi dijital dönüşümle
              tanıştırıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-heading font-semibold text-white mb-4">
              Hızlı Linkler
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/hizmetler", label: "Hizmetler" },
                { href: "/calismalarimiz", label: "Çalışmalarımız" },
                { href: "/iletisim", label: "İletişim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#c9a961] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-heading font-semibold text-white mb-4">
              İletişim
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>İstanbul, Türkiye</li>
              <li>
                <a
                  href="mailto:info@websitesiotomasyon.com"
                  className="hover:text-[#c9a961] transition-colors"
                >
                  info@websitesiotomasyon.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+905551234567"
                  className="hover:text-[#c9a961] transition-colors"
                >
                  +90 555 123 45 67
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Web Site & Otomasyon. Tüm hakları
            saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/kvkk"
              className="text-xs text-gray-500 hover:text-[#c9a961] transition-colors"
            >
              KVKK Aydınlatma Metni
            </Link>
            <Link
              href="/cerez-politikasi"
              className="text-xs text-gray-500 hover:text-[#c9a961] transition-colors"
            >
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
