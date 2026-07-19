export const automationWorkflow = [
  {
    title: "Talep tek noktada toplanır",
    description:
      "Form veya iletişim girişleri dağınık kanallar yerine düzenli bir toplama akışına düşer.",
  },
  {
    title: "Doğru kişi bilgilendirilir",
    description:
      "Ekibiniz, gelen talebin niteliğine göre hızlıca doğru kişiye yönlenir ve takip gecikmesi azalır.",
  },
  {
    title: "Yanıt ve teklif süreci hızlanır",
    description:
      "Tekrarlayan bildirim, kayıt ve durum takibi işleri manuel yük olmaktan çıkar.",
  },
  {
    title: "Süreç görünür hale gelir",
    description:
      "Hangi talep nerede bekliyor, neye dönüşüyor ve ekibin nerede yavaşladığı daha net okunur.",
  },
];

export const automationModules = [
  {
    title: "Talep toplama ve kayıt",
    description:
      "Web formundan gelen bilgileri kaydeden, düzenleyen ve doğru ekip üyelerine hazırlayan başlangıç akışları.",
    outcomes: ["Daha az manuel kopyalama", "Eksiksiz talep bilgisi", "Daha hızlı ilk dönüş"],
  },
  {
    title: "Teklif ve randevu yönlendirmesi",
    description:
      "İlgili ekipleri zamanında bilgilendiren ve teklif aşamasını daha görünür hale getiren akış yapıları.",
    outcomes: ["Yanıt süresinde iyileşme", "Takip yükünde azalma", "Net görev dağılımı"],
  },
  {
    title: "WhatsApp ve ekip bilgilendirmesi",
    description:
      "Talebin durumuna göre uygun kişilere haber veren ve iletişimde beklemeyi azaltan senaryolar.",
    outcomes: ["Daha düzenli iç iletişim", "Hızlı yönlendirme", "Kaçan talebin azalması"],
  },
  {
    title: "Raporlama hazırlığı",
    description:
      "Gelen taleplerin hangi hizmetten, hangi kanaldan veya hangi yoğunlukta geldiğini daha okunur hale getiren veri akışı.",
    outcomes: ["Karar vermeyi kolaylaştıran görünürlük", "Manuel rapor yükünde azalma", "Büyümeye açık veri düzeni"],
  },
];

export const automationUseCases = [
  "Web sitesinden gelen taleplerin ekibe otomatik iletilmesi",
  "Teklif isteyen kullanıcılara ön bilgi akışının hazırlanması",
  "Randevu veya görüşme talebinin ilgili kişiye yönlenmesi",
  "Aylık bakım veya destek isteklerinin tek kanalda toplanması",
];

export const beforeAfterContent = {
  before: [
    "Formlar farklı kanallarda dağınık kalır",
    "Talepler kopyala-yapıştır ile paylaşılır",
    "Yanıt süresi ekip yoğunluğuna göre uzar",
    "Takip ve raporlama manuel yürür",
  ],
  after: [
    "Talep tek akışta toplanır",
    "Ekip doğru anda doğru bilgiyle bilgilendirilir",
    "Süreç daha hızlı ve düzenli ilerler",
    "Veri daha görünür ve raporlamaya hazır olur",
  ],
};
