import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { differentiators } from "@/data/site";

export function WhyUsSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-brand/3 blur-3xl" />
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Neden Bait"
          title="Premium görünüm kadar, karar alma kolaylığı ve operasyon netliği de tasarlıyoruz."
          description="Bu marka için fark yaratan şey yalnızca teknik yetenek değil; işletme tarafında daha düzenli bir sistem hissi kurabilmek."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {differentiators.map((item) => (
            <Card key={item.title} tone="elevated" className="h-full">
              <h3 className="font-heading text-2xl tracking-[-0.04em] text-foreground">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
