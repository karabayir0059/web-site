import Link from "next/link";

import { CtaBanner } from "@/components/sections/cta-banner";
import { AutomationBeforeAfter } from "@/components/sections/automation-before-after";
import { PageHeader } from "@/components/sections/page-header";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { automationModules, automationUseCases, automationWorkflow } from "@/data/automation-modules";
import { ctaLinks } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Otomasyon Vitrini",
  description:
    "Form, teklif, WhatsApp yönlendirme ve ekip bilgilendirme süreçlerini sadeleştiren otomasyon vitrini ve kullanım örnekleri.",
  keywords: ["iş otomasyonu", "teklif otomasyonu", "form yönlendirme", "operasyon akışı"],
});

export default function AutomationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Otomasyon vitrini"
        title="Otomasyonu teknik gösteri gibi değil, ekibinizin üzerindeki tekrarlı yükü azaltan iş düzeni olarak konumluyoruz."
        description="Talep toplama, yönlendirme, teklif ve rapor akışlarını daha sakin bir düzene sokmak isteyen firmalar için; anlaşılır, modüler ve sonuç odaklı bir yaklaşım."
        asideTitle="Bu yaklaşım neyi değiştirir?"
        asideItems={[
          "Dağınık iletişimi tek akışa toplar",
          "Doğru kişiyi doğru anda bilgilendirir",
          "Yanıt ve takip süresini kısaltmaya yardımcı olur",
        ]}
      />

      <section className="pb-16 sm:pb-20">
        <Container>
          <Card tone="dark" className="overflow-hidden bg-dark-card">
            <div className="space-y-6">
              <div className="space-y-3">
                <Badge tone="dark">Workflow mantığı</Badge>
                <h2 className="font-heading text-3xl tracking-[-0.05em] text-white sm:text-4xl">Süreç nasıl akar?</h2>
                <p className="max-w-3xl text-base leading-7 text-white/75">
                  Buradaki akış dili, teknik araç adlarından çok işletmenizin talep toplama ve ekip yönlendirme tarafında neyin düzene gireceğini anlatır.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {automationWorkflow.map((item, index) => (
                  <div key={item.title} className="rounded-xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                    <p className="text-sm font-semibold uppercase tracking-wide text-brand-soft">0{index + 1}</p>
                    <h3 className="mt-4 font-heading text-xl tracking-[-0.03em] text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {automationModules.map((module) => (
            <Card key={module.title} className="h-full">
              <h2 className="font-heading text-2xl tracking-[-0.04em] text-foreground">{module.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{module.description}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                {module.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </Container>
      </section>

      <AutomationBeforeAfter />

      <section className="pb-16 sm:pb-20">
        <Container className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card tone="soft" className="h-full">
            <h2 className="font-heading text-3xl tracking-[-0.04em] text-foreground">Sık kullanılan senaryolar</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-muted">
              {automationUseCases.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="h-full">
            <h2 className="font-heading text-3xl tracking-[-0.04em] text-foreground">Teknik detay değil, sonuç çerçevesi</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Hangi araçların kullanılacağı ikinci plandadır. Önce hangi adımın manuel yük oluşturduğunu ve bunun nerede gecikme yarattığını netleştiririz.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={ctaLinks.quote} className={buttonStyles({})}>
                Teklif Al
              </Link>
              <Link href={ctaLinks.services} className={buttonStyles({ variant: "secondary" })}>
                Hizmet yapısını incele
              </Link>
            </div>
          </Card>
        </Container>
      </section>

      <CtaBanner
        title="Ekipte en çok zaman kaybettiren akışı seçin; geri kalan otomasyon planı onun etrafında büyüsün."
        description="Tek bir form yönlendirmesi bile operasyon tarafında ciddi rahatlama yaratabilir. Küçük ve doğru başlangıç çoğu zaman daha güçlü sonuç verir."
      />
    </>
  );
}
