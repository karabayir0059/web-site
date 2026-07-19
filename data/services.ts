export type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
  href: string;
};

export const serviceItems: ServiceItem[] = [
  {
    title: "Kurumsal web tasarım",
    description:
      "İlk bakışta güven veren, mobilde güçlü görünen ve iletişim kurmayı kolaylaştıran kurumsal web sayfaları hazırlıyoruz.",
    bullets: ["Ana sayfa odaklı satış akışı", "Hızlı yüklenen App Router yapı", "İletişim ve teklif odaklı CTA kurgusu"],
    href: "/hizmetler",
  },
  {
    title: "Kurumsal e-posta ve teknik altyapı",
    description:
      "Markanızı daha profesyonel gösteren e-posta alanı, temel teslim süreçleri ve ekip kullanım düzenini kuruyoruz.",
    bullets: ["Alan adı ve kutu planı", "Teslim ve yönlendirme düzeni", "Ekip geçişini kolaylaştıran yapı"],
    href: "/hizmetler",
  },
  {
    title: "Akıllı iş otomasyonları",
    description:
      "Form, teklif, randevu ve ekip bildirimlerini manuel yük olmaktan çıkaran sonuç odaklı otomasyon akışları tasarlıyoruz.",
    bullets: ["Talep toplama akışları", "WhatsApp ve ekip yönlendirmesi", "Raporlamaya hazır veri akışı"],
    href: "/otomasyon",
  },
  {
    title: "Hızlı dijital çözümler",
    description:
      "Düşük giriş bariyerli, hızla yayına alınabilen ve küçük işletmeler için net fayda sunan başlangıç çözümleri üretiyoruz.",
    bullets: ["Tek sayfa tanıtım sitesi", "Kurumsal e-posta başlangıcı", "Hızlı form ve yönlendirme düzeni"],
    href: "/iletisim",
  },
];
