import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { ctaLinks, mainNav, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-dark-section pb-28 pt-16 sm:pb-24">
      <Container className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div className="space-y-5">
          <Badge tone="dark">Bait Yazılım Çözümleri</Badge>
          <div className="space-y-3">
            <h2 className="font-heading text-3xl tracking-[-0.04em] text-white">Dijital altyapınızı tek yerde, daha sakin ve daha düzenli kurun.</h2>
            <p className="max-w-xl text-base leading-7 text-white/60">
              Kurumsal görünüm, iletişim düzeni ve operasyon yükünü azaltan otomasyon mantığını aynı çatı altında ele alıyoruz.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={ctaLinks.quote} className={buttonStyles({})}>
              Teklif Al
            </Link>
            <Link href={ctaLinks.whatsapp} className={buttonStyles({ variant: "secondary", className: "border-[#25D366]/40 text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366] hover:text-white" })}>
              WhatsApp görüşmesi planlayın
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading text-lg tracking-[-0.03em] text-white/70">Sayfalar</h3>
          <ul className="space-y-3 text-sm text-white/50">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading text-lg tracking-[-0.03em] text-white/70">Yaklaşım</h3>
          <ul className="space-y-3 text-sm leading-6 text-white/50">
            <li>Şeffaf kapsam planı</li>
            <li>Mobil öncelikli kullanıcı deneyimi</li>
            <li>Kurulum sonrası destek düşüncesi</li>
            <li>Teknik jargondan uzak sonuç dili</li>
          </ul>
        </div>
      </Container>
      <Container className="mt-12">
        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.name}. Tüm içerik bu proje briefi doğrultusunda hazırlanmıştır.</p>
          <p>Türkiye genelinde uzaktan kurulum ve planlama yaklaşımı.</p>
        </div>
      </Container>
    </footer>
  );
}
