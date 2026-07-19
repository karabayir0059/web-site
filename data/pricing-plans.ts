export type PricingPlan = {
  name: string;
  summary: string;
  investmentLabel: string;
  idealFor: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
};

export type PricingCategory = {
  id: string;
  label: string;
  title: string;
  description: string;
  note: string;
  plans: PricingPlan[];
};

export const pricingCategories: PricingCategory[] = [
  {
    id: "web",
    label: "Web",
    title: "Kurumsal web kurulum seviyeleri",
    description:
      "İşletmenizin içerik yoğunluğuna ve dönüşüm ihtiyacına göre sade, büyüme odaklı veya kapsamlı kurulum planları oluşturuyoruz.",
    note:
      "Kesin teklif; sayfa sayısı, içerik hazırlığı, görsel ihtiyaçları ve ek entegrasyon gereksinimlerine göre netleşir.",
    plans: [
      {
        name: "Başlangıç Paketi",
        summary: "Hızlı yayına çıkmak isteyen işletmeler için net ve güvenli ilk kurulum.",
        investmentLabel: "Başlangıç kapsamı",
        idealFor: "Tek hizmetini veya tek lokasyonunu net anlatmak isteyen işletmeler",
        features: ["Tek odaklı tanıtım akışı", "Temel iletişim CTA yapısı", "Mobil uyumlu temel sayfa sistemi"],
        ctaLabel: "Kurulumu planlayalım",
      },
      {
        name: "Büyüme Paketi",
        summary: "Hizmetlerini ayrıştırmak ve güven oluşturan içerik alanlarını genişletmek isteyen ekipler için.",
        investmentLabel: "Gelişmiş kapsam",
        idealFor: "Birden fazla hizmet sunan KOBİ'ler ve büyüyen ekipler",
        features: ["Çok bölümlü satış akışı", "Hizmet sayfası mantığı", "Daha güçlü CTA ve bilgi blokları"],
        ctaLabel: "Teklif isteyin",
        featured: true,
      },
      {
        name: "Kurumsal Yapı",
        summary: "Daha kapsamlı içerik, operasyonel netlik ve sürdürülebilir bakım yaklaşımı isteyen firmalar için.",
        investmentLabel: "Kurumsal plan",
        idealFor: "Süreç, ekip ve kurulum sonrası bakım beklentisi net olan firmalar",
        features: ["Geniş içerik mimarisi", "Kurulum sonrası bakım çerçevesi", "Gelişime açık modüler yapı"],
        ctaLabel: "Süreci planlayalım",
      },
    ],
  },
  {
    id: "mail",
    label: "Mail & Altyapı",
    title: "Kurumsal e-posta ve teknik düzen",
    description:
      "Marka güvenini artıran temel e-posta altyapısını kuruyor, ekip kullanımı için daha düzenli bir başlangıç hazırlıyoruz.",
    note:
      "Kutu sayısı, mevcut alan adı durumu ve ekip geçiş planı fiyat çerçevesini etkiler; bu yüzden başlangıç seviyeleri paylaşılır.",
    plans: [
      {
        name: "Temel Kurulum",
        summary: "İlk kez kurumsal e-posta geçişi yapacak küçük ekipler için yalın başlangıç.",
        investmentLabel: "Başlangıç seviyesi",
        idealFor: "1-3 kişilik ekipler ve yeni marka başlangıçları",
        features: ["Alan adı yönlendirme planı", "Temel kutu kurulumu", "Kullanım teslim notları"],
        ctaLabel: "Geçişi planlayalım",
      },
      {
        name: "Ekip Düzeni",
        summary: "Birden fazla kutu, departman ihtiyacı ve günlük kullanım akışı olan ekipler için.",
        investmentLabel: "Ekip kapsamı",
        idealFor: "Büyüyen KOBİ ekipleri",
        features: ["Rol bazlı kutu planı", "Yönlendirme ve teslim akışı", "Kurulum sonrası kısa destek"],
        ctaLabel: "Altyapıyı inceleyelim",
        featured: true,
      },
      {
        name: "Operasyon Hazır",
        summary: "Mail düzenini web ve otomasyon akışlarıyla birlikte ele almak isteyen firmalar için.",
        investmentLabel: "Proje bazlı kapsam",
        idealFor: "Dijital altyapısını tek plan altında toplamak isteyen firmalar",
        features: ["Web + mail uyumu", "Ekip teslim senaryosu", "Genişletilebilir teknik çerçeve"],
        ctaLabel: "Birlikte kuralım",
      },
    ],
  },
  {
    id: "automation",
    label: "Otomasyon",
    title: "İş akışlarını sadeleştiren otomasyon seviyeleri",
    description:
      "Talep toplama, ekip yönlendirme ve operasyon takibini daha düzenli hale getiren akışları ihtiyaç büyüklüğüne göre kurguluyoruz.",
    note:
      "Otomasyon teklifleri, akış sayısı ve bağlanacak mevcut sistemlere göre belirlenir. Buradaki kartlar karar seviyesini anlatır.",
    plans: [
      {
        name: "Tek Akış Çözümü",
        summary: "Tek bir sorunu hızlıca iyileştirmek için odaklı otomasyon kurulumu.",
        investmentLabel: "Odaklı başlangıç",
        idealFor: "Formdan ekibe bildirim veya talep yönlendirme gibi tek senaryosu olan firmalar",
        features: ["Tek süreç analizi", "Basit yönlendirme mantığı", "Kullanım teslimi"],
        ctaLabel: "Akışı anlatalım",
      },
      {
        name: "Operasyon Paketi",
        summary: "Talep, teklif ve ekip bilgilendirmesini bir arada düzenlemek isteyen firmalar için.",
        investmentLabel: "Süreç paketi",
        idealFor: "Takip yükünü azaltmak isteyen ekipler",
        features: ["Birden fazla tetikleyici", "Ekip bildirim akışları", "Raporlamaya hazır veri düzeni"],
        ctaLabel: "Süreç planlayalım",
        featured: true,
      },
      {
        name: "Sürekli İyileştirme",
        summary: "Kurulumla kalmayıp bakım, gözlem ve yeni akış ihtiyaçlarını da sisteme dahil etmek isteyen firmalar için.",
        investmentLabel: "Bakım odaklı plan",
        idealFor: "Operasyon büyüdükçe yeni akışlar ekleyecek firmalar",
        features: ["Modüler büyüme planı", "İyileştirme odaklı bakım", "Genişleyen süreç mimarisi"],
        ctaLabel: "Uzun vadeyi konuşalım",
      },
    ],
  },
];
