# Implementation Plan: Bait Yazılım Çözümleri Web Sitesi

**Tarih:** 2026-04-20  
**Tahmini Süre:** 4-6 iş günü (tasarımlar onaylı geldikten sonra)  
**Kaynaklar:** `design.md`, `product.md`  
**Plan Türü:** Checkpoint'li, bağımlılık sıralı, risk işaretli uygulama planı

---

## 1. Özet

Bu plan, Bait Yazılım Çözümleri için hazırlanacak pazarlama sitesinin implementasyon sırasını tanımlar. Amaç; önce ortak altyapıyı ve tekrar kullanılabilir bileşenleri kurmak, ardından sayfaları bağımlılıklarına göre ilerletmek, her aşamada mobil UX, SEO, erişilebilirlik ve dönüşüm hedeflerini doğrulamaktır.

Bu plan, `writing-plans` skill yaklaşımına göre atomik görevlere, checkpoint'lere, risk işaretlerine ve doğrulama kriterlerine ayrılmıştır. `.agent/SCOPE-*.md` olmadığı için `product.md`, onaylı ürün/scope özeti olarak kullanılacaktır.

---

## 2. Uygulanmış Varsayım

Bu plan şu varsayımla yazılmıştır:

- `design.md` ve `product.md`, mevcut iş için onaylı brief/scope kaynağıdır.

Bu varsayım değişirse plan güncellenmelidir.

---

## 3. Tech Stack Kararları

| Alan | Seçim | Gerekçe |
|------|-------|---------|
| Framework | Next.js App Router | SEO, route yapısı, server-first yaklaşım |
| UI | React + TypeScript | tekrar kullanılabilir ve type-safe yapı |
| Styling | Tailwind CSS | hızlı, sistematik ve component odaklı tasarım geliştirme |
| Motion | Framer Motion | hafif ve kontrollü premium animasyonlar |
| Content Source | data array + component props | yönetilebilir ve tekrar kullanılabilir içerik akışı |

---

## 4. Etkilenen Alanlar

Beklenen klasör ve dosya alanları:

```text
app/
  page.tsx
  hizmetler/page.tsx
  otomasyon/page.tsx
  hizli-cozumler/page.tsx        [TBD: ayrı route kararı]
  blog/page.tsx
  iletisim/page.tsx

components/
  layout/
  sections/
  ui/

data/
  services.ts
  pricing-plans.ts
  automation-modules.ts
  quick-solutions.ts
  faq-items.ts
  blog-posts.ts
  audience-solutions.ts

lib/
  seo.ts
  utils.ts
```

Her alan için ana karar:

- `app/` → route ve sayfa kompozisyonu
- `components/sections/` → section seviyesinde tekrar kullanılabilir bloklar
- `components/ui/` → kart, button, tabs, accordion, badge gibi temel bileşenler
- `data/` → içerik ve paket verileri
- `lib/` → SEO yardımcıları ve ortak yardımcılar

---

## 5. Test-First Kabul Stratejisi

Kod başlamadan önce her aşama için kabul kriteri tanımlanmalıdır.

Her dalga için doğrulama yaklaşımı:

- route doğru render oluyor mu?
- ana başlık ve CTA görünür mü?
- mobil hiyerarşi korunuyor mu?
- erişilebilir etkileşimler çalışıyor mu?
- metadata yapısı tanımlı mı?

`Done` tanımı:

- ilgili aşamanın kabul kriterleri karşılanmış olmalı
- linter/type hatası olmamalı
- mobil görünüm bozulmamalı
- önemli etkileşimler doğrulanmış olmalı

---

## 6. Görevler

### 🔵 Aşama 0: Girdi Kilitleme

#### T0: Ürün girdilerini sabitle `[CHECKPOINT]`
- Dosya: `product.md`, `design.md`
- İçerik: ürün amacı, sayfa amaçları, açık kalan `TBD` başlıklarını sabitle
- Bağımlılık: yok
- Test/Kontrol: uygulama başlamadan önce scope belirsizlikleri liste halinde görünür

---

### 🔵 Aşama 1: Ortak Sistem ve İskelet

#### T1: Route mimarisini ve layout iskeletini kur `[RISK][CHECKPOINT]`
- Alan: `app/`
- İçerik: ana layout, header/footer yerleşimi, temel container ve spacing sistemi
- Bağımlılık: T0
- Neden riskli: tüm sayfalar bu yapıya bağımlı olacak
- Test/Kontrol: ortak layout tüm sayfalarda tutarlı render olur

#### T2: Tasarım tokenlarını ve temel UI primitive'lerini kur
- Alan: `components/ui/`, `styles/`, global theme yapısı
- İçerik: button, badge, card, section heading, container, surface varyantları
- Bağımlılık: T1
- Test/Kontrol: ortak bileşenler tek stil diliyle çalışır

#### T3: Navigasyon, mobil menü, footer ve global CTA yapısını kur `[CHECKPOINT]`
- Alan: `components/layout/`, `components/ui/`
- İçerik: header, mobile menu, sticky CTA, floating WhatsApp button, footer
- Bağımlılık: T2
- Test/Kontrol: mobil ve masaüstü navigasyon çalışır, CTA'lar görünürdür

---

### 🟡 Aşama 2: Ana Sayfa ve Paylaşılan Dönüşüm Blokları

#### T4: Hero, trust bar ve ana hizmet kartlarını oluştur `[CHECKPOINT]`
- Alan: `components/sections/`, `app/page.tsx`
- İçerik: hero, güven göstergeleri, ana hizmet kartları
- Bağımlılık: T3
- Test/Kontrol: ilk ekran 5 saniye içinde ne yapıldığını anlatır

#### T5: Hedef kitle çözümleri, neden biz ve süreç bloklarını oluştur
- Alan: `components/sections/`, `data/`
- İçerik: audience solutions, why us, process section
- Bağımlılık: T4
- Test/Kontrol: her segment için ihtiyaç → çözüm ilişkisi görünür olur

#### T6: Önce/sonra, hızlı çözümler şeridi, FAQ ve ana CTA banner'ı oluştur `[CHECKPOINT]`
- Alan: `components/sections/`, `data/`
- İçerik: before/after blocks, quick solutions strip, FAQ, CTA banner
- Bağımlılık: T5
- Test/Kontrol: ana sayfa satış akışı tamamlanır, tekrar eden CTA mantığı oturur

---

### 🟢 Aşama 3: Hizmet ve Vitrin Sayfaları

#### T7: Hizmetler ve fiyatlandırma sayfasını oluştur `[RISK][CHECKPOINT]`
- Alan: `app/hizmetler/page.tsx`, `components/sections/`, `data/`
- İçerik: pricing tabs, pricing cards, not alanları, CTA'lar
- Bağımlılık: T6
- Neden riskli: paket/veri yapısı ve mobil davranış burada netleşecek
- Test/Kontrol: sekmeler erişilebilir çalışır, mobilde stacked yapı bozulmaz

#### T8: Otomasyon vitrini sayfasını oluştur `[PARALLEL][CHECKPOINT]`
- Alan: `app/otomasyon/page.tsx`, `components/sections/`, `data/`
- İçerik: vitrin hero, workflow alanı, kullanım örnekleri, CTA
- Bağımlılık: T6
- Test/Kontrol: otomasyon anlatımı teknik değil sonuç odaklı görünür

---

### 🟢 Aşama 4: Destekleyici Sayfalar

#### T9: Hızlı çözümler sayfası veya section genişletmesini oluştur `[PARALLEL]`
- Alan: `app/hizli-cozumler/page.tsx` veya ana sayfa section yapısı
- İçerik: hızlı çözüm kartları, kısa açıklamalar, CTA
- Bağımlılık: T6
- Test/Kontrol: düşük giriş bariyerli teklifler net görünür
- Not: ayrı route olup olmayacağı `TBD`

#### T10: Blog/Rehber sayfa iskeletini oluştur `[PARALLEL]`
- Alan: `app/blog/page.tsx`, `data/blog-posts.ts`
- İçerik: blog kartları, başlık, kısa özetler, kategori/etiket alanı gerekiyorsa placeholder yapı
- Bağımlılık: T6
- Test/Kontrol: kartlar okunur, SEO amaçlı içerik düzeni nettir

#### T11: İletişim sayfası ve form UI'ını oluştur `[RISK][CHECKPOINT]`
- Alan: `app/iletisim/page.tsx`, `components/sections/`, `components/ui/`
- İçerik: form alanları, seçimler, bütçe alanı, KVKK onayı, güven mesajı, WhatsApp alanı
- Bağımlılık: T6
- Neden riskli: gerçek submit davranışı henüz onaylı değil
- Test/Kontrol: form UI/validation hazırdır, gerçek gönderim yolu varsa ayrıca onay bekler

---

### 🟣 Aşama 5: Son Rötuşlar ve Kalite Kapısı

#### T12: Motion, mikro etkileşim ve responsive rötuşlarını uygula `[CHECKPOINT]`
- Alan: tüm ilgili section ve UI bileşenleri
- İçerik: hafif animasyonlar, hover/focus davranışları, geçişler
- Bağımlılık: T7, T8, T9, T10, T11
- Test/Kontrol: premium his oluşur, fakat performans ve okunabilirlik bozulmaz

#### T13: SEO, schema ve metadata katmanını tamamla `[CHECKPOINT]`
- Alan: route metadata yapıları, `lib/seo.ts`
- İçerik: title, description, OG önerileri, schema alanları
- Bağımlılık: T7, T8, T9, T10, T11
- Test/Kontrol: her sayfanın metadata amacı tanımlanmış olur

#### T14: Erişilebilirlik ve mobil QA turu yap `[CHECKPOINT]`
- Alan: tüm kullanıcı yüzeyi
- İçerik: focus states, contrast, tab order, form okunabilirliği, mobil spacing
- Bağımlılık: T12, T13
- Test/Kontrol: temel erişilebilirlik ve mobil kalite eşiği sağlanır

---

## 7. Bağımlılık Grafiği

```text
T0
└── T1
    └── T2
        └── T3
            └── T4
                └── T5
                    └── T6
                        ├── T7
                        ├── T8
                        ├── T9
                        ├── T10
                        └── T11
                              └── T12
                              └── T13
                                    └── T14
```

Paralel çalışabilecek alanlar:

- T8, T9, T10, T11
- T12 ve T13 kısmen paralel ilerleyebilir, fakat T14 final doğrulama için ikisine de bağlıdır

---

## 8. Risk Listesi

| Risk | Olasılık | Etki | Önlem |
|------|----------|------|-------|
| Paket fiyatları veya isimleri sonradan değişebilir | Orta | Orta | Veri yapısını ayrı dosyada tut, içerikleri kolay güncellenebilir yap |
| İletişim formu submit davranışı net değil | Yüksek | Orta | UI/validation ile sınırla, gerçek entegrasyonu ayrı onay maddesi yap |
| Hızlı Çözümler route kararı değişebilir | Orta | Düşük | Section-first kur, ayrı page kararını sonradan route olarak ekle |
| Premium görünüm uğruna mobil okunabilirlik bozulabilir | Orta | Yüksek | Her checkpoint'te mobil QA yap |
| Animasyonlar performansı düşürebilir | Düşük | Orta | Hafif motion, sınırlı transition ve ölçülü kullanım uygula |

---

## 9. Tanımlanmamış Noktalar

- [ ] Son fiyatların onayı
- [ ] İletişim formunun gerçek gönderim altyapısı
- [ ] Hızlı Çözümler için kesin route kararı
- [ ] Gerçek referans/vaka çalışması içeriği

Bu maddeler netleşmeden varsayım yapılarak tamamlandı sayılmamalıdır.

---

## 10. QA ve Done Checklist

- [ ] Her ana route render oluyor
- [ ] Her sayfada ana başlık ve CTA mantığı net
- [ ] Mobil görünümde fiyat kartları bozulmuyor
- [ ] Sticky CTA ve WhatsApp butonu ekranı boğmuyor
- [ ] Form alanları erişilebilir ve rahat kullanılıyor
- [ ] FAQ, tabs ve mobile menu klavye/focus açısından kontrol edildi
- [ ] Sahte sosyal kanıt veya doğrulanmamış iddia yok
- [ ] İçerik teknoloji değil sonuç diliyle yazıldı
- [ ] SEO metadata katmanı tanımlandı

---

## 11. Atomik Commit Stratejisi

Önerilen commit sırası:

1. `docs(product): add Bait website product brief`
2. `docs(plan): add checkpointed implementation plan`
3. `feat(site): add shared layout and CTA primitives`
4. `feat(home): build homepage conversion sections`
5. `feat(services): add pricing and services page`
6. `feat(automation): add automation showcase page`
7. `feat(content): add quick solutions and blog scaffolds`
8. `feat(contact): add contact page and form UI`
9. `feat(seo): add metadata and schema helpers`
10. `fix(ui): polish responsive and accessibility issues`

Refactor gerekiyorsa feature commit'lerinden ayrı tutulmalıdır.

---

## 12. Sonraki Adım

1. Tasarımlar Stitch içinde bu planla hizalı şekilde tamamlanır.
2. Tasarımlar onaylandıktan sonra plan, route ve component seviyesinde revize edilir.
3. Sonrasında `architecture-review` mantığında plan tekrar gözden geçirilir.
4. Onaydan sonra implementasyon görevleri dalga dalga uygulanır.
