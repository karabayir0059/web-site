export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Web Site & Otomasyon",
    description:
      "Profesyonel web sitesi geliştirme, iş süreçleri otomasyonu ve e-posta yönetimi hizmetleri.",
    url: "https://web-site-otomasyon.vercel.app",
    telephone: "+90 555 123 45 67",
    email: "info@websitesiotomasyon.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    sameAs: ["https://instagram.com/websitesiotomasyon", "https://linkedin.com/company/websitesiotomasyon"],
    priceRange: "₺₺₺",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
