export type BlogPostCard = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  relatedRoute: string;
};

export const blogPosts: BlogPostCard[] = [
  {
    title: "Kurumsal web sitesinde ilk 5 saniyede ne anlatılmalı?",
    excerpt:
      "Ziyaretçinin ne sunduğunuzu ve size neden güvenebileceğini ilk bakışta anlaması için hangi içerik sırası daha güçlü çalışır?",
    category: "Web Stratejisi",
    readTime: "4 dk okuma",
    relatedRoute: "/hizmetler",
  },
  {
    title: "Küçük işletmeler için kurumsal e-posta neden kritik?",
    excerpt:
      "Güven, teslim düzeni ve marka algısı açısından kurumsal mail altyapısının sağladığı en temel farkları sade biçimde ele alıyoruz.",
    category: "Mail Altyapısı",
    readTime: "3 dk okuma",
    relatedRoute: "/hizmetler",
  },
  {
    title: "Formdan gelen talepler neden çoğu ekipte yavaşlıyor?",
    excerpt:
      "Dağınık iletişim, eksik kayıt ve ekip içi yönlendirme sorunları teklif sürecini nasıl etkiliyor; otomasyon burada neyi düzeltir?",
    category: "Otomasyon",
    readTime: "5 dk okuma",
    relatedRoute: "/otomasyon",
  },
  {
    title: "Tek sayfa tanıtım sitesi ne zaman yeterlidir?",
    excerpt:
      "Her işletmenin çok sayfalı kurumsal siteye ihtiyacı yok. Doğru başlangıç seviyesi nasıl belirlenir, nerede büyütülür?",
    category: "Hızlı Çözümler",
    readTime: "4 dk okuma",
    relatedRoute: "/iletisim",
  },
  {
    title: "Otomasyon kurarken önce hangi süreç seçilmeli?",
    excerpt:
      "Her sorunu birden çözmeye çalışmadan önce en yüksek operasyon yükünü oluşturan akışı seçmek neden daha sağlıklı olur?",
    category: "Operasyon",
    readTime: "4 dk okuma",
    relatedRoute: "/otomasyon",
  },
  {
    title: "Ajans sitesinde güven veren içerik nasıl kurulur?",
    excerpt:
      "Abartılı vaatler, sahte sosyal kanıtlar ve teknik jargon yerine daha güvenli ve daha ikna edici bir içerik dili nasıl kurulur?",
    category: "İçerik",
    readTime: "3 dk okuma",
    relatedRoute: "/",
  },
];
