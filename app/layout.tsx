import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { SplashScreen } from "@/components/ui/splash-screen";
import { StructuredData } from "@/components/seo/structured-data";
import { SiteShell } from "@/components/layout/site-shell";
import { createOrganizationSchema } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={cn(headingFont.variable, bodyFont.variable, "font-sans text-foreground antialiased")}>
        <StructuredData data={createOrganizationSchema()} />
        <SplashScreen>
          <SiteShell>{children}</SiteShell>
        </SplashScreen>
      </body>
    </html>
  );
}
