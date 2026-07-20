import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Providers from "./providers";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Web Site & Otomasyon | Profesyonel Dijital Çözümler",
    template: "%s | Web Site & Otomasyon",
  },
  description:
    "Web sitesi geliştirme, iş süreçleri otomasyonu ve e-posta yönetimi hizmetleri. İşletmenizi dijital dönüşümle tanıştırın.",
  openGraph: {
    title: "Web Site & Otomasyon | Profesyonel Dijital Çözümler",
    description:
      "Web sitesi geliştirme, iş süreçleri otomasyonu ve e-posta yönetimi hizmetleri.",
    url: "https://web-site-otomasyon.vercel.app",
    siteName: "Web Site & Otomasyon",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Site & Otomasyon | Profesyonel Dijital Çözümler",
    description:
      "Web sitesi geliştirme, iş süreçleri otomasyonu ve e-posta yönetimi hizmetleri.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
