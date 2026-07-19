import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { beforeAfterContent } from "@/data/automation-modules";

export function AutomationBeforeAfter() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Önce / Sonra"
          title="Otomasyonu teknik vitrin gibi değil, iş yükünü azaltan düzen farkı olarak gösteriyoruz."
          description="Aynı talep akışı; müdahale gerektiren dağınık durumdan daha net ve daha takip edilebilir bir sisteme dönüşür."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <Card tone="glass" className="h-full">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Önce</p>
            <h3 className="mt-4 font-heading text-3xl tracking-[-0.04em] text-foreground">Dağınık ve manuel ilerleyen süreç</h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
              {beforeAfterContent.before.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card tone="dark-glass" className="h-full">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Sonra</p>
            <h3 className="mt-4 font-heading text-3xl tracking-[-0.04em] text-white">Daha görünür, daha akıcı ve daha güvenli düzen</h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-white/75">
              {beforeAfterContent.after.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
