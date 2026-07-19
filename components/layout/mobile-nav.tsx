"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { buttonStyles } from "@/components/ui/button";
import { mainNav, ctaLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="focus-ring rounded-pill border border-border bg-surface-elevated p-3 shadow-soft">
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        className={cn(
          "absolute inset-x-4 top-[calc(100%+0.75rem)] rounded-xl border border-border bg-surface-elevated/95 p-5 shadow-card backdrop-blur-sm transition-all",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-2">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-brand-soft hover:text-brand" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href={ctaLinks.quote} className={buttonStyles({ className: "mt-3 w-full" })} onClick={() => setOpen(false)}>
            Teklif Al
          </Link>
        </nav>
      </div>
    </div>
  );
}
