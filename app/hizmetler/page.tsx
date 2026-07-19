import Link from "next/link";

import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/sections/page-header";
import { PricingTabs } from "@/components/sections/pricing-tabs";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";
import { pricingCategories } from "@/data/pricing-plans";
import { ctaLinks } from "@/data/site";

export const metadata = createPageMetadata({
  title: "Hizmetler ve Fiyatlandırma",
  description:
    "Kurumsal web, e-posta altyapısı ve otomasyon hizmetleri için paket seviyeleri, başlangıç mantığı ve kapsam notları.",
  keywords: ["web tasarım hizmetleri", "mail altyapısı", "otomasyon paketi", "fiyatlandırma"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hizmetler ve planlama"
        title="Fiyatı değil önce kapsamı berraklaştıran, sonra güvenli teklif çıkaran bir hizmet yapısı."
        description="Bu sayfa, kesin rakam iddiası yerine hangi seviyede bir kurulum gerektiğini açık göstermesi için tasarlandı. Böylece teklif istemeden önce doğru çerçeveyi görebilirsiniz."
        asideTitle="Bu sayfada ne göreceksiniz?"
        asideItems={[
          "Web, mail ve otomasyon için ayrı plan seviyeleri",
          "Başlangıç kapsamı ile büyüme kapsamı arasındaki fark",
          "Teklif öncesi karar vermeyi kolaylaştıran notlar",
        ]}
      />

      <section className="pb-16 sm:pb-20">
        <Container className="space-y-10">
          <PricingTabs categories={pricingCategories} />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <Card tone="soft" className="h-full">
            <h2 className="font-heading text-3xl tracking-[-0.04em] text-foreground">Teklif öncesi şeffaflık</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Son fiyatlar kapsam onayına bağlı olduğu için bu yapı başlangıç seviyelerini göstermek üzere kuruldu. Sayfa sayısı, içerik hazırlığı, ekip kullanımı ve otomasyon yoğunluğu netleştikçe teklif de netleşir.
            </p>
          </Card>

          <Card className="h-full">
            <h2 className="font-heading text-3xl tracking-[-0.04em] text-foreground">Bir sonraki adım</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Hangi seviyenin sizin için doğru olduğundan emin değilseniz, önce ihtiyacı ve önceliği konuşmak en sağlıklı yol olur.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={ctaLinks.quote} className={buttonStyles({})}>
                Kurulum talebi oluştur
              </Link>
              <Link href={ctaLinks.whatsapp} className={buttonStyles({ variant: "secondary" })}>
                Süreci planlayalım
              </Link>
            </div>
          </Card>
        </Container>
      </section>

      <CtaBanner
        title="Hizmetleri ayrı ayrı değil, işletme için en doğru sırada kurgulamak daha iyi sonuç verir."
        description="Önce web görünürlüğü, sonra kurumsal iletişim, ardından operasyon yükü yüksek alanlarda otomasyon mantığıyla ilerleyebiliriz."
      />
    </>
  );
}
