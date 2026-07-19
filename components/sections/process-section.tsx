import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Nasıl çalışıyoruz"
          title="İlk görüşmeden yayına alma ve sonrasına kadar sakin, görünür ve kontrol edilebilir bir süreç kuruyoruz."
          description="Her aşamada hangi kararın neden alındığını göstermek, premium hissin olduğu kadar güvenin de temelini oluşturur."
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {processSteps.map((item) => (
            <Card key={item.step} tone="elevated" className="h-full">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">{item.step}</p>
              <h3 className="mt-5 font-heading text-2xl tracking-[-0.04em] text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
