import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { buttonStyles } from "@/components/ui/button";
import { ctaLinks, mainNav } from "@/data/site";

export function Header() {
  return (
    <header className="glass-elevated sticky top-0 z-40 shadow-glass">
      <Container className="relative flex h-18 items-center justify-between gap-6 py-4">
        <Link href="/" className="focus-ring rounded-lg">
          <Logo variant="full" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-pill px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-brand-soft hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href={ctaLinks.whatsapp} className={buttonStyles({ variant: "ghost", className: "bg-[#25D366] text-white shadow-soft hover:bg-[#1da851] hover:text-white" })}>
            WhatsApp ile yazın
          </Link>
          <Link href={ctaLinks.quote} className={buttonStyles({})}>
            Teklif Al
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
