import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioPreview />
      <CTASection />
    </>
  );
}
