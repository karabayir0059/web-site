import type { Metadata } from "next";

import { faqItems } from "@/data/faq-items";
import { siteConfig } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  keywords?: string[];
};

export function createPageMetadata({ title, description, keywords = [] }: MetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    areaServed: "Türkiye",
    serviceType: [
      "Kurumsal web tasarım",
      "Kurumsal e-posta altyapısı",
      "İş otomasyonları",
    ],
    description: siteConfig.description,
  };
}

export function createFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
