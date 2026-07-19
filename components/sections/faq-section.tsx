import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/data/faq-items";

export function FaqSection() {
  return (
    <section className="bg-section-alt py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="SSS"
          title="Karar sürecinde en sık sorulan soruları sade ve güven veren şekilde topladık."
          description="Sahte vaatler yerine, kapsamı ve çalışma mantığını gerçekçi biçimde görünür kılan temel cevaplar."
        />
        <Accordion items={faqItems} />
      </Container>
    </section>
  );
}
