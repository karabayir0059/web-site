import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { audienceSolutions } from "@/data/audience-solutions";

export function AudienceSolutionsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Kimin için"
          title="Her işletme aynı yerden başlamaz; çözüm yapısını ihtiyacın büyüklüğüne göre kuruyoruz."
          description="İlk hedef; teknik detayla boğmadan, hangi segmentin hangi sorunu yaşadığını ve hangi yapı ile çözülebileceğini açık göstermek."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {audienceSolutions.map((item) => (
            <Card key={item.title} tone="elevated" className="h-full">
              <div className="space-y-5">
                <h3 className="font-heading text-2xl tracking-[-0.04em] text-foreground">{item.title}</h3>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">İhtiyaç</p>
                  <p className="text-sm leading-7 text-muted">{item.need}</p>
                </div>
                <div className="glass rounded-lg p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">Çözüm yaklaşımı</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.solution}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
