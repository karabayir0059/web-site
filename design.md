# Bait Yazılım Çözümleri — Design Brief

Bu doküman, `@.agent/agents/designer.md` içindeki **Aria** yaklaşımına göre hazırlanmış tasarım girdisidir. Amaç, write-plan aşamasından önce Stitch içinde net, premium, conversion odaklı ve kodlanabilir ekranlar üretmektir.

---

## 1. Proje Amacı

Bait Yazılım Çözümleri için;

- ilk 5 saniyede ne yaptığını net anlatan,
- güven oluşturan,
- web + kurumsal e-posta + otomasyon hizmetlerini birlikte konumlayan,
- mobilde güçlü görünen,
- premium ama sade his veren,
- dönüşüm odaklı bir ajans sitesi tasarlanacak.

Bu site teknoloji gösterisi değil, **sonuç odaklı dijital çözüm ortağı** algısı üretmelidir.

---

## 2. Aria Tasarım Çerçevesi

Bu projede aşağıdaki tasarım ilkeleri zorunludur:

- **Minimalizm netlik içindir.** Boşluk, tipografi ve hiyerarşi satış mesajını güçlendirmeli.
- **Animasyon işlevsel olmalı.** Yüksek hareket değil, sakin ve anlamlı geçişler kullanılmalı.
- **Hiyerarşi önce gelir.** Kullanıcı önce ana vaadi, sonra hizmetleri, sonra CTA'yı görmeli.
- **Sistem düşünülmeli.** Tekil section değil, tekrar kullanılabilir kart, CTA, sekme, form ve bilgi blokları tasarlanmalı.
- **Premium görünüm, düşük gürültü ile kurulmalı.** Gösterişli ama dağınık değil; rafine ve güven verici.

---

## 3. Marka Konumu

### Marka Adı
**Bait Yazılım Çözümleri**

### Marka Rolü
Esnaf, yerel işletmeler, KOBİ'ler ve kurumsal firmalar için dijital altyapıyı tek noktadan kuran çözüm ortağı.

### Satılan Ana Sonuçlar

- daha profesyonel görünüm
- daha hızlı müşteri geri dönüşü
- daha düzenli süreç yönetimi
- daha az teknik yük
- tek yerden çözüm alma kolaylığı
- zaman kazancı

### Kesinlikle Verilmemesi Gereken Algı

- oyun stüdyosu
- yaratıcı portfolyo ajansı
- mimarlık ofisi
- sadece yazılım geliştirici ekip
- fazla teknik, soğuk, kurumsallıkta boğulan marka

Bu marka; **profesyonel, modern, güven veren, iş odaklı dijital çözüm ajansı** gibi görünmelidir.

---

## 4. Hedef Kitle ve Ana Mesaj

### 1) Esnaf ve Yerel İşletmeler
İhtiyaç: hızlı web sitesi, görünürlük, kurumsal e-posta, kolay iletişim, erişilebilir bütçe

### 2) KOBİ ve Büyüyen İşletmeler
İhtiyaç: profesyonel site, hizmet sayfaları, teklif altyapısı, ekip e-postası, süreç düzeni

### 3) Operasyon Yükü Yüksek Firmalar
İhtiyaç: otomatik kayıt, WhatsApp yönlendirme, CRM bağlantısı, teklif ve raporlama akışları

### Ana Değer Önermesi
**Web sitenizi kuruyor, kurumsal e-posta altyapınızı hazırlıyor ve iş süreçlerinizi otomasyonla hızlandırıyoruz.**

### Destekleyici Mesajlar

- İşletmeniz için hızlı web çözümleri, profesyonel e-posta altyapısı ve akıllı otomasyonlar.
- Web, mail ve otomasyon çözümleriyle dijital altyapınızı tek yerden yönetin.
- Esnaftan kurumsal firmalara kadar, dijitalde güven veren çözümler sunuyoruz.
- Teknik yükü azaltan, süreçleri düzenleyen ve dönüşümü artıran sistemler kuruyoruz.

---

## 5. Tasarım Yönü

### Seçilen Ton
**Minimal profesyonel · sade, güven veren, iş odaklı**

Gösterişten uzak, işini iyi yapan bir ajans hissi. İkinci sınıf "premium" efektler (altın, ışıltı, çift gradient) yerine temiz tipografi, bol boşluk ve tek renk vurgusu. Renk paleti rafine slate tonlarına indirgenmiş, altın tamamen kaldırılmıştır.

### Kullanıcıda Oluşturulacak His

- güvenilir ve sağlam
- profesyonel ve minimalist
- sakin ve organize
- modern ve net
- kaliteli ama gösterişsiz

### Hatırlanacak Tek Fark
Bu marka, web + mail + otomasyon üçlüsünü tek çatı altında **sade, profesyonel ve güven veren** biçimde sunuyor. Temiz tipografi, tek renk vurgusu ve bol beyaz boşlukla dijitalde güven algısı oluşturuyor.

---

## 6. Görsel Sistem

### Tema
- Ana tema: **light theme**
- Destekleyici yaklaşım: belirli CTA veya vitrin bloklarında koyu premium section'lar

### Renk Sistemi

```css
:root {
  --color-background: 35 15% 97%;
  --color-surface: 35 8% 94%;
  --color-surface-elevated: 0 0% 100%;
  --color-surface-soft: 35 6% 91%;
  --color-surface-dark: 30 8% 12%;
  --color-bg-deep: 30 10% 7%;

  --color-foreground: 30 6% 15%;
  --color-muted: 30 4% 46%;
  --color-border: 35 5% 84%;

  --color-brand: 30 8% 22%;
  --color-brand-hover: 30 10% 32%;
  --color-brand-soft: 35 4% 92%;
  --color-brand-contrast: 0 0% 100%;
  --color-brand-deep: 30 10% 12%;

  --color-warm: 30 20% 68%;
  --color-warm-hover: 30 18% 58%;
  --color-warm-soft: 30 12% 92%;
}
```

### Renk Kullanım Kuralları

- Brand (sıcak koyu): Butonlar, önemli UI elementleri
- Warm (bej): Badge'ler, küçük vurgular, dekoratif ögeler — çok az kullanılır
- Background: Sıcak krem (referans: RD Mimarlık #faf8f5, Evval #F5F0E8)
- Dark sections: Sıcak koyu (30 hue, hafif warm undertone)
- Renkli ışıltı/glow kullanılmaz

### Renk Kullanım Kuralları

- Tek renk vurgusu (rafine slate blue) — sade ve profesyonel.
- Altın (gold/accent) tamamen kaldırılmıştır. Hiçbir bileşende kullanılmaz.
- Gradient metin kullanılmaz (text-gradient-brand, text-gradient-gold kaldırıldı).
- Koyu section'lar slate tabanlı, mor/altın tonu içermez.
- Cam efekti (glassmorphism) minimal kullanılır.
- Renkli ışıltı gölgeleri (shadow-glow, shadow-glow-gold) kullanılmaz.

### Tipografi

- Başlık fontu: **Cabinet Grotesk** veya benzeri karakterli modern grotesk
- Gövde fontu: **Manrope** veya benzeri temiz, okunaklı sans
- Eğer Stitch bu fontları desteklemiyorsa benzer karakterde yakın alternatif kullanılmalı.

### Tipografi Hiyerarşisi

- H1: büyük, sakin, güven veren, fazla bağırmayan
- H2: net bölüm ayrımı yapan güçlü başlıklar
- Body: kısa paragraflar, düşük jargon, yüksek okunabilirlik
- Label / meta text: düzenli, kompakt, teknik destekleyici

### Spacing ve Yüzey

```css
:root {
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;

  --shadow-soft: 0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03);
  --shadow-card: 0 2px 16px rgba(0,0,0,0.04);
  --shadow-glass: 0 2px 12px rgba(0,0,0,0.04);
}
```

Kartlar yumuşak gölgeli, temiz kenarlı ve bol nefes alan yüzeyler olmalı.

---

## 7. Motion Sistemi

Animasyon dekor değil, akış hissi vermeli.

```css
:root {
  --duration-fast: 140ms;
  --duration-base: 220ms;
  --duration-slow: 420ms;
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-soft: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Motion Kuralları

- Hero içerikleri kısa stagger ile yüklenebilir.
- Kartlarda hover: hafif yükselme + border/shadow güçlenmesi
- CTA butonlarında hafif hareket ve renk geçişi
- Pricing tab geçişleri sade olmalı
- FAQ açılışları akıcı ama hızlı olmalı
- Ağır parallax, yoğun blur ve dikkat dağıtan motion kullanılmamalı

---

## 8. İçerik Hiyerarşisi

### Hero İçin Semantic Skeleton

```text
H1: Web sitenizi kuruyor, kurumsal e-posta altyapınızı hazırlıyor ve iş süreçlerinizi otomasyonla hızlandırıyoruz.
Subtitle: Esnaftan kurumsal firmalara kadar; modern web siteleri, güvenilir kurumsal mail çözümleri ve akıllı iş akışlarıyla dijital altyapınızı uçtan uca kuruyoruz.
Primary CTA: Teklif Al
Secondary CTA: Hizmetleri İncele
Support CTA: WhatsApp'tan Yaz
Trust signals: Hızlı kurulum / Şeffaf süreç / Teknik destek / Mobil uyumlu çözümler / Ölçeklenebilir yapı
```

### Genel Akış Mantığı

1. Ne yapıyoruz?
2. Kimler için yapıyoruz?
3. Neden bize güvenilmeli?
4. Nasıl çalışıyoruz?
5. Hangi paketi seçmelisiniz?
6. Şimdi nasıl iletişime geçebilirsiniz?

---

## 9. Sayfa Bazlı Tasarım Notları

### Ana Sayfa
Amaç: marka konumunu 5 saniyede net anlatmak ve hizmetleri sade biçimde bölümlendirmek.

Zorunlu bölümler:

1. Header
2. Hero
3. Trust bar
4. 4 ana hizmet kartı
5. Hedef kitleye göre çözümler
6. Neden Biz?
7. Nasıl Çalışıyoruz?
8. Otomasyon Öncesi / Sonrası
9. Hızlı Çözümler şeridi
10. FAQ
11. Güçlü CTA banner
12. Footer

### Hizmetler ve Fiyatlandırma
Amaç: fiyat şeffaflığı ile premium algıyı birlikte kurmak.

Kurallar:

- sekmeli yapı net ve okunur olmalı
- mobilde stacked cards gibi davranmalı
- her kartta tek ana CTA olmalı
- “başlangıç fiyatı” mantığı tasarımda güvenli biçimde anlatılmalı
- en popüler/önerilen paket baskın ama agresif olmayan biçimde işaretlenebilir

### Otomasyon Vitrini
Amaç: otomasyonu teknik gösteri gibi değil, iş yükünü azaltan çözüm gibi sunmak.

Kurallar:

- node/workflow alanı premium görünmeli
- süreç akışları basit ve anlaşılır olmalı
- önce/sonra anlatımı dramatik ama sade olmalı
- görsel alan mesajı bastırmamalı

### Hızlı Çözümler
Amaç: düşük bariyerli hizmetleri hızla anlaşılır biçimde sunmak.

Kurallar:

- sade kart yapısı
- kısa açıklamalar
- hızlı CTA
- esnaf için erişilebilir giriş noktası hissi

### Blog / Rehber
Amaç: SEO + güven + uzmanlık.

Kurallar:

- temiz editorial kartlar
- fazla dergi estetiğine kaçmadan profesyonel görünüm
- başlık okunabilirliği yüksek olmalı

### İletişim
Amaç: sürtünmeyi azaltarak form doldurma oranını artırmak.

Kurallar:

- büyük alanlar
- net label'lar
- rahat spacing
- güven mesajı görünür olsun
- WhatsApp alternatifi formu gölgelememeli

---

## 10. Bileşen Sistemi

Stitch tasarımlarında şu bileşenler sistematik biçimde düşünülmeli:

### Header
- sticky olabilir
- sade, premium, net CTA içermeli
- desktop ve mobile varyantları düşünülmeli

### Hero Section
- mesaj odaklı
- tek görsel anlatı veya sade productized mockup alanı olabilir
- fazla süslü illüstrasyondan kaçınılmalı

### Service Cards
- icon + başlık + kısa fayda + CTA
- hover durumunda hafif yükselme

### Audience Solutions Section
- hedef kitle bazlı 3 blok
- ihtiyaç → çözüm ilişkisi net kurulmalı

### Pricing Tabs + Pricing Cards
- tab seçimi belirgin
- kart hiyerarşisi güçlü
- mobil davranış kusursuz olmalı

### Before / After Blocks
- problemin dağınıklığı ile çözümün netliği arasında görsel kontrast kurulmalı

### FAQ Accordion
- sade
- güven veren
- başlıklar anlaşılır

### Contact Form
- büyük input yüksekliği
- select alanları sade ve net
- checkbox alanı okunur olmalı

### Sticky CTA
- mobilde görünür
- ekranı boğmayan yükseklikte

### Floating WhatsApp Button
- premium ve sade görünmeli
- aşırı parlak, neon veya ucuz hisli olmamalı

---

## 11. Responsive Kurallar

- Mobile-first tasarım zorunlu
- Hero mobilde tek kolon ve güçlü okunabilirlik ile çözülmeli
- Pricing tabloları mobilde yatay taşmamalı
- CTA butonları parmak erişimine uygun boyutta olmalı
- Form alanları mobilde rahat doldurulmalı
- Görsel hiyerarşi mobilde sadeleşmeli, kaybolmamalı

---

## 12. Accessibility Kuralları

- Kontrast minimum WCAG AA seviyesinde olmalı
- Focus ring görünür tasarlanmalı
- Sadece renkle anlam taşınmamalı
- Form alanlarında label ve açıklama ilişkisi net olmalı
- CTA'lar aksiyon cümlesiyle yazılmalı

---

## 13. Kesin Yasaklar

- Sahte referans logosu kullanma
- Sahte müşteri yorumu üretme
- Doğrulanmamış başarı oranları yazma
- Çok yoğun motion kullanma
- Fazla teknik dashboard estetiğine kayma
- Fazla kreatif ajans veya startup landing page klişesine düşme
- Ucuz his veren gradient spam, glow spam veya aşırı ikon kalabalığı kullanma

---

## 14. Stitch İçin Sayfa Üretim Promptları

Bu bölüm, Stitch'e sayfa üretirken doğrudan girdi olarak kullanılabilir.

### Prompt 1 — Ana Sayfa

```text
Design a premium, light-themed, mobile-first agency homepage for “Bait Yazılım Çözümleri”. The company offers corporate website design, corporate email infrastructure, technical setup, and automation services for local businesses, SMEs, and operationally busy firms. The design must feel modern, refined, trustworthy, and conversion-focused. It should not look like a game studio, architecture office, or creative portfolio.

Use a calm slate/blue palette, soft shadows, strong typography hierarchy, generous spacing, and clean cards. Prioritize clarity over decoration. Main hero message should immediately explain that the company sets up websites, corporate email systems, and automation workflows. Include strong CTAs for “Teklif Al”, “Hizmetleri İncele”, and “WhatsApp’tan Yaz”.

Include sections for trust signals, main service cards, audience-based solutions, why us, process, before/after automation scenarios, quick digital solutions strip, FAQ, and a final CTA banner. Add premium but subtle motion ideas. The page must look expensive, organized, and readable on mobile.
```

### Prompt 2 — Hizmetler ve Fiyatlandırma

```text
Design a pricing page for a Turkish digital solutions agency with tabbed navigation for three categories: Web Tasarım, E-Posta ve Altyapı, and Otomasyon. The layout must feel premium, transparent, and easy to compare. Use stacked cards on mobile, clear hierarchy, soft shadows, strong spacing, and a refined B2B SaaS-like structure without looking generic.

Each tab should include three pricing cards with clear package names, prices, short benefit-driven bullet lists, and strong CTA buttons. Make “starting from” pricing visually trustworthy and elegant. Add subtle premium emphasis to the recommended package without being too aggressive. The design must remain highly readable and conversion-focused.
```

### Prompt 3 — Otomasyon Vitrini

```text
Design a visually strong but clean automation showcase page for a Turkish digital agency. The page should communicate that automation is not a technical toy but a practical system that reduces manual work, speeds up customer response, and organizes operations. Use a refined node-graph or workflow-inspired visual area, but keep the interface readable and premium.

Add before/after scenarios, real business-oriented use cases, simple workflow explanations, and strong consultation CTA areas. Use light theme with selective dark premium sections. Avoid making it look like a developer dashboard.
```

### Prompt 4 — İletişim Sayfası

```text
Design a mobile-first contact page for a premium Turkish software and digital infrastructure agency. Include a clean, accessible form with fields for name, company, phone, email, interested service, estimated budget, project details, and privacy consent. The page should reduce friction, build trust, and clearly offer both form submission and WhatsApp contact.

Use large inputs, strong labels, soft cards, subtle visual hierarchy, and a professional but warm tone. Avoid clutter. The page should feel easy, safe, and conversion-oriented.
```

---

## 15. Tasarım Teslim Checklist'i

Stitch'ten alınacak tasarımlar aşağıdakileri karşılamalı:

- [ ] Ana mesaj ilk ekranda net
- [ ] Web + mail + otomasyon birlikte konumlanıyor
- [ ] Mobil görünüm masaüstü kadar güçlü
- [ ] Pricing kartları mobilde düzgün
- [ ] CTA hiyerarşisi görünür
- [ ] Premium ama sade görünüyor
- [ ] Teknik değil sonuç odaklı his veriyor
- [ ] Esnaf ile kurumsal müşteri arasında denge kuruluyor
- [ ] Form ve WhatsApp alanları güven veriyor
- [ ] Sahte sosyal kanıt yok

---

## 16. Son Not

Bu tasarım brief'inin amacı, doğrudan kod üretmek değil; write-plan aşamasından önce Stitch içinde **görsel yönü, bilgi mimarisini ve conversion yapısını netleştirmektir**. Çıkan tasarımlar; daha sonra component mimarisi, içerik üretimi ve Next.js implementasyonu için referans alınacaktır.
