import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Referanslar",
  description:
    "Velihat Burger, Gönlü Bol İçecek, Müptela Tatlı, Empat Klinik, Evval Otel ve daha fazlası — yaptığımız web siteleri ve otomasyon projeleri.",
  keywords: ["referanslar", "web sitesi örnekleri", "portföy", "müşteri projeleri"],
});

export default function ReferanslarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
