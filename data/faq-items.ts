export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Sadece web sitesi mi yapıyorsunuz?",
    answer:
      "Hayır. Web sitesi kurulumunu kurumsal e-posta altyapısı ve ihtiyaç varsa otomasyon akışlarıyla birlikte planlayabiliyoruz.",
  },
  {
    question: "Fiyatı neye göre netleştiriyorsunuz?",
    answer:
      "Sayfa sayısı, içerik yoğunluğu, ek entegrasyonlar, ekip büyüklüğü ve bakım ihtiyacı teklif çerçevesini belirler. Bu yüzden önce kapsamı netleştiriyoruz.",
  },
  {
    question: "Küçük işletmeler için uygun çözümleriniz var mı?",
    answer:
      "Evet. Düşük giriş bariyerli başlangıç kurulumları ve hızlı teslim edilebilen çözümler özellikle küçük işletmeler için planlanabiliyor.",
  },
  {
    question: "Otomasyon tarafında çok teknik bilgi gerekiyor mu?",
    answer:
      "Hayır. Süreci teknik terimlerle değil, hangi iş yükünü azalttığı ve hangi adımı hızlandırdığı üzerinden anlatıyoruz.",
  },
  {
    question: "İletişim formu doğrudan entegrasyonlu mu?",
    answer:
      "Bu sürümde iletişim sayfası form deneyimini göstermek için tasarlandı. Gerçek gönderim veya entegrasyon kurgusu ayrı planlanır.",
  },
];
