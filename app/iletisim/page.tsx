import Link from "next/link";

import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/sections/page-header";
import { Button, buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ctaLinks } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "İletişim",
  description:
    "Teklif ve planlama odaklı iletişim sayfası. Hizmet seçimi, tahmini bütçe alanı ve UI-only form deneyimi ile sürtünmesiz ilk temas.",
  keywords: ["iletişim", "teklif al", "whatsapp", "kurulum planı"],
});

const serviceOptions = [
  "Kurumsal web tasarım",
  "Kurumsal e-posta altyapısı",
  "İş otomasyonları",
  "Hızlı dijital çözüm",
  "Henüz emin değilim",
];

const budgetOptions = ["Başlangıç seviyesi", "Büyüme odaklı kapsam", "Kurumsal kapsam", "Önce ihtiyaç analizi yapalım"];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="İletişim"
        title="Sürtünmeyi azaltan, büyük alanlarla rahat doldurulan ve hangi desteğe ihtiyaç duyduğunuzu hızla anlatmanızı sağlayan iletişim yapısı."
        description="Bu sayfa UI-only olarak tasarlandı. Amaç; form deneyimini, hizmet seçimini ve WhatsApp görüşme yönünü net bir ilk temas kurgusu içinde göstermek."
        asideTitle="İlk görüşmede konuşulabilecek başlıklar"
        asideItems={[
          "Hangi hizmetin önce gelmesi gerektiği",
          "Kapsam büyüklüğü ve öncelikler",
          "Web, mail ve otomasyonun birlikte planlanması",
        ]}
      />

      <section className="pb-16 sm:pb-20">
        <Container className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="h-full">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl tracking-[-0.04em] text-foreground">Projenizi anlatın</h2>
              <p className="text-base leading-7 text-muted">
                Form alanları rahat kullanım için büyük bırakıldı. Bu sürümde gerçek gönderim entegrasyonu yok; odak, deneyim ve bilgi toplama düzeni.
              </p>
            </div>

            <form className="mt-8 grid gap-5" aria-describedby="contact-form-note">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Ad Soyad
                  <Input name="name" placeholder="Adınızı ve soyadınızı yazın" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Firma adı
                  <Input name="company" placeholder="İşletme veya marka adı" />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Telefon
                  <Input name="phone" type="tel" placeholder="Size ulaşabileceğimiz numara" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  E-posta
                  <Input name="email" type="email" placeholder="ornek@firma.com" />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  İlgilendiğiniz hizmet
                  <Select name="service" defaultValue="">
                    <option value="" disabled>
                      Hizmet seçin
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </label>
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Tahmini bütçe yaklaşımı
                  <Select name="budget" defaultValue="">
                    <option value="" disabled>
                      Bütçe yaklaşımını seçin
                    </option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-foreground">
                Proje detayı
                <Textarea name="details" placeholder="Ne kurmak istediğinizi, mevcut durumda nerede zorlandığınızı ve önceliğinizin ne olduğunu yazın" />
              </label>

              <label className="flex items-start gap-3 rounded-lg border border-border/80 bg-surface p-4 text-sm leading-6 text-muted">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-[hsl(var(--color-brand))]" />
                <span>Paylaştığım bilgilerin teklif ve ilk görüşme planlaması amacıyla değerlendirilmesini kabul ediyorum.</span>
              </label>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="button" size="lg">
                  Formu Gönder
                </Button>
                <Link href={ctaLinks.whatsapp} className={buttonStyles({ variant: "secondary", size: "lg" })}>
                  WhatsApp görüşmesi planlayın
                </Link>
              </div>

              <p id="contact-form-note" className="text-sm leading-6 text-muted">
                Bu butonlar demo arayüz içindir; gerçek form gönderimi veya WhatsApp entegrasyonu bu kapsamda eklenmemiştir.
              </p>
            </form>
          </Card>

          <div id="iletisim-kanallari" className="grid gap-5">
            <Card tone="soft">
              <h2 className="font-heading text-2xl tracking-[-0.04em] text-foreground">Güvenli ilk temas</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                İlk görüşmede ihtiyaç, öncelik ve hangi hizmetin önce gelmesi gerektiği konuşulur. Abartılı vaatler yerine uygulanabilir çerçeve çıkarılır.
              </p>
            </Card>

            <Card>
              <h2 className="font-heading text-2xl tracking-[-0.04em] text-foreground">WhatsApp yönü</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Brief içinde gerçek WhatsApp hattı paylaşılmadığı için bu alan görüşme tercihini gösterecek şekilde kurgulandı. İletişim talebinizde WhatsApp kanalını tercih ettiğinizi belirtebilirsiniz.
              </p>
            </Card>

            <Card className="bg-dark-card">
              <h2 className="font-heading text-2xl tracking-[-0.04em] text-foreground">Neyi birlikte netleştiriyoruz?</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />Önce hangi ihtiyacın çözülmesi gerektiğini</li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />Kapsamın hızlı başlangıç mı yoksa kurumsal yapı mı olduğunu</li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />Kurulum sonrası bakım beklentisini</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="İlk adımı netleştirmek, çoğu zaman tüm projeyi daha sakin ve daha güçlü hale getirir."
        description="Web, kurumsal mail ve otomasyon ihtiyaçlarınızı tek görüşmede çerçeveleyip hangi sırayla ilerlemenin doğru olduğunu belirleyebiliriz."
      />
    </>
  );
}
