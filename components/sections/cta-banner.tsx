import Link from "next/link";

import { Container } from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button";
import { ctaLinks } from "@/data/site";

type CtaBannerProps = {
  title: string;
  description: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-dark-card shadow-card">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-cyan-500/10" />
          <div className="relative z-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Bir sonraki adım</p>
              <h2 className="font-heading text-3xl leading-tight tracking-[-0.05em] text-white sm:text-4xl">{title}</h2>
              <p className="max-w-2xl text-base leading-7 text-white/75">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href={ctaLinks.quote} className={buttonStyles({ variant: "primary", size: "lg" })}>
                Teklif Al
              </Link>
              <Link href={ctaLinks.whatsapp} className={buttonStyles({ variant: "dark", size: "lg", className: "border-[#25D366]/40 text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366] hover:text-white" })}>
                WhatsApp görüşmesi planlayın
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
