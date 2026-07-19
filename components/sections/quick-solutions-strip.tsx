import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { ctaLinks } from "@/data/site";
import { quickSolutions } from "@/data/quick-solutions";

export function QuickSolutionsStrip() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Hızlı çözümler"
            title="Uzun kurulum sürecine girmeden daha kurumsal görünmek isteyen işletmeler için düşük giriş bariyerli başlangıçlar."
            description="Bu alan ayrı route yerine ana satış akışında hızlı karar verilmesi için section olarak kurgulandı."
          />
          <Link href={ctaLinks.quote} className={buttonStyles({ variant: "primary" })}>
            Hızlı teklif isteyin
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {quickSolutions.map((item) => (
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
