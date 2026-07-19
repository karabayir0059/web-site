import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { serviceItems } from "@/data/services";

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-section-alt py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-brand/5 blur-3xl" />
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Ana hizmetler"
          title="Ne yaptığımızı ilk bakışta anlaşılır ve karar verilebilir hale getiriyoruz."
          description="Teknoloji listesi değil; kurduğumuz düzenin işletmenize ne kazandırdığını anlatan dört ana hizmet alanı."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {serviceItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <Card tone="elevated" className="h-full">
                <div className="flex h-full flex-col gap-5">
                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl tracking-[-0.04em] text-foreground">{item.title}</h3>
                    <p className="text-base leading-7 text-muted">{item.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={item.href} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover">
                    Daha fazla incele
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
