# Splash Loader + Logo Tasarım Planı

## TL;DR
"Web Site ve Otomasyon" sitesine girerken, sadece ilk ziyarette gösterilecek şık bir yüklenme ekranı. Sitenin kendine ait bir logosu olacak, loading ekranında bu logo animasyonla belirecek, sonra ana site akıcı şekilde açılacak.

---

## 1. Logo Tasarımı — "SO" Monogramı

### Konsept
"Site" + "Otomasyon" kelimelerinin **S** ve **O** harflerinden oluşan geometrik bir monogram.  
S harfi aynı zamanda bir **bağlantı/yay** sembolünü andırır (web + akış çağrışımı). O harfi ise **bütünlük/döngü** (otomasyon döngüsü).

### Renk Paleti
- Mor: `#6750A4` (brand primary)
- Altın: `#DAA654` (accent)
- Siyah gradyan zemin

### SVG Tasarım (mockup)
```
         ┌──────────┐
         │  ⬡  SO   │  Mor zemin, altın "SO" monogramı
         │          │  Altında "Web Site ve Otomasyon" yazısı
         └──────────┘
```

### Kullanılacak Dosyalar
- `public/logo.svg` — Favicon/header için SVG logo
- Splash ekranı inline SVG veya component içinde

---

## 2. Splash Loading Ekranı

### Davranış
- **Sadece ilk ziyarette** gösterilir (`sessionStorage` ile kontrol)
- Sayfa yenilemede veya sekme kapatılıp açılınca tekrar gösterilir
- Yeni sekmede/pencerede gösterilmez (oturum bazlı)

### Animasyon Sırası (toplam ~2.5sn)

| Zaman | Ne Oluyor |
|-------|-----------|
| 0ms | Zemin siyah, tam ekran |
| 200ms | Gradient ışıma başlar (mor → altın geçişi) |
| 500ms | Logonun SVG çizim efekti (stroke-dasharray) başlar |
| 1200ms | Logo tamamen çizilir, altın parıltı (glow) belirir |
| 1600ms | Alt yazı "Web · Mail · Otomasyon" fade-up ile gelir |
| 2200ms | Tüm logo hafif nefes alıp verir (pulse) |
| 2600ms | Loading ekranı fade-out olur, ana sayfa fade-in olur |

### Görsel Tasarım
```
┌──────────────────────────────────────┐
│                                      │
│                                      │
│              ✦  SO  ✦               │  ← altın glow efektli monogram
│         Web Site ve Otomasyon        │  ← gradient yazı
│           Web · Mail · Otomasyon     │  ← küçük, muted
│                                      │
│    ─────── ● ───────                 │  ← loading çizgisi (altın)
│                                      │
│                                      │
└──────────────────────────────────────┘
```

### Teknik Detaylar

**Bileşen Yapısı:**
```
components/
  ui/
    splash-screen.tsx    ← Client component
    splash-screen.css    ← Animasyon stilleri (CSS modules veya tailwind)
    logo.tsx             ← SVG logo bileşeni
```

**Veri Akışı:**
```
layout.tsx
  └─ SplashScreen (client component)
       ├─ sessionStorage kontrolü: daha önce gösterildi mi?
       ├─ Hayır → splash göster, animasyonu oynat, bitince sessionStorage.set()
       └─ Evet → null (hiçbir şey gösterme)
```

**Kullanılacak Araçlar:**
- Framer Motion (zaten projede var)
- SVG stroke-dashoffset animasyonu (çizim efekti)
- CSS keyframe pulse/glow
- sessionStorage API

---

## 3. Uygulama Sırası

```
1. public/logo.svg          → SVG logo oluştur
2. components/ui/logo.tsx    → Logo bileşeni (SVG + styling)
3. components/ui/splash-screen.tsx  → Splash loading bileşeni
4. app/layout.tsx            → SplashScreen'i ekle (client component wrapp)
5. Build & test
```

---

## 4. Must NOT Do
- localStorage kullanma (sessionStorage yeterli)
- Harici font/kütüphane ekleme
- Loading ekranını her sayfa geçişinde gösterme
- 4 saniyeden uzun animasyon
- JavaScript dev dışı bağımlılık

---

## 5. Logo Varyantları (seçenekler)

| # | Tip | Açıklama |
|---|-----|----------|
| A | **SO Monogram** ✅ | Geometrik S+O birleşimi, modern, premium |
| B | **Küp/Düğüm** | 3 boyutlu küp + bağlantı noktaları (web + otomasyon) |
| C | **Sadece "W"** | Keskin bir W harfi, altın vurgulu |
| D | **Sembol + Yazı** | Küçük bir sembol + yanında "Web Site ve Otomasyon" |

---

## Onaylanan Kararlar ✅
1. Logo: **"SO" Monogramı** (Site + Otomasyon)
2. Splash süresi: **~2.5sn** ✅
3. Header logosu: **Yenilenecek** ✅

"Başla" dediğinde uygulamaya geçilir.
