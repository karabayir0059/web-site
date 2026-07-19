import Link from "next/link";

import { Container } from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button";
import { ctaLinks } from "@/data/site";

export function StickyCta() {
  return (
    <div className="glass-white fixed inset-x-0 bottom-0 z-40 py-3 shadow-glass">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <Container className="flex items-center justify-between gap-3">
        <div className="hidden min-w-0 sm:block">
          <p className="truncate text-sm font-semibold text-foreground">Kurulum planını birlikte netleştirelim.</p>
          <p className="truncate text-xs text-muted">Teklif, hizmet ve süreç konuşması için hızlı giriş noktası.</p>
        </div>
        <div className="flex w-full gap-3 sm:w-auto">
          <Link href={ctaLinks.whatsapp} className={buttonStyles({ variant: "secondary", className: "border-[#25D366]/40 text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366] hover:text-white flex-1 sm:flex-none" })}>
            WhatsApp ile yazın
          </Link>
          <Link href={ctaLinks.quote} className={buttonStyles({ className: "flex-1 sm:flex-none bg-brand shadow-soft hover:bg-brand-hover" })}>
            Teklif Al
          </Link>
        </div>
      </Container>
    </div>
  );
}
