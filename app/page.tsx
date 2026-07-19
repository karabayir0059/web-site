import { CtaBanner } from "@/components/sections/cta-banner";
import { AudienceSolutionsSection } from "@/components/sections/audience-solutions";
import { AutomationBeforeAfter } from "@/components/sections/automation-before-after";
import { FaqSection } from "@/components/sections/faq-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { HomeHero } from "@/components/sections/home-hero";
import { ProcessSection } from "@/components/sections/process-section";
import { QuickSolutionsStrip } from "@/components/sections/quick-solutions-strip";
import { ServicesOverview } from "@/components/sections/services-overview";
import { TrustBar } from "@/components/sections/trust-bar";
import { WhyUsSection } from "@/components/sections/why-us";
import { StructuredData } from "@/components/seo/structured-data";
import { createFaqSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Ana Sayfa",
  description:
    "Kurumsal web sitesi, e-posta altyapısı ve iş otomasyonlarını tek plan altında sunan dönüşüm odaklı Web Site ve Otomasyon ana sayfası.",
  keywords: ["kurumsal web tasarım", "kurumsal mail", "iş otomasyonu", "web sitesi ve otomasyon"],
});

export default function HomePage() {
  return (
    <>
      <StructuredData data={createFaqSchema()} />
      <HomeHero />
      <TrustBar />
      <FeaturedProjects />
      <ServicesOverview />
      <AudienceSolutionsSection />
      <WhyUsSection />
      <ProcessSection />
      <AutomationBeforeAfter />
      <QuickSolutionsStrip />
      <FaqSection />
      <CtaBanner
        title="Web, mail ve otomasyon tarafını tek çatı altında toparlamak istiyorsanız, ilk adımı birlikte netleştirelim."
        description="İhtiyacın boyutuna göre sade bir başlangıç, büyüme odaklı kurulum veya operasyon yükünü azaltan bir sistem planı çıkarabiliriz."
      />
    </>
  );
}
