import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type CardTone = "default" | "soft" | "dark" | "glass" | "elevated" | "dark-glass";
type CardPadding = "md" | "lg" | "elevated";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  tone?: CardTone;
  padding?: CardPadding;
};

export function Card({ className, tone = "default", padding = "lg", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-[var(--duration-base)] ease-soft",
        {
          "border-border/80 bg-surface-elevated shadow-soft": tone === "default",
          "border-border/70 bg-surface shadow-soft": tone === "soft",
          "border-white/10 bg-surface-dark text-white shadow-card": tone === "dark",
          "glass text-foreground shadow-glass border border-white/20 hover:-translate-y-0.5": tone === "glass",
          "bg-surface-elevated shadow-card border-border/80 hover:-translate-y-1": tone === "elevated",
          "glass-dark text-white shadow-card": tone === "dark-glass",
        },
        {
          "p-5 sm:p-6": padding === "md",
          "p-6 sm:p-8": padding === "lg",
          "p-8 sm:p-10": padding === "elevated",
        },
        className,
      )}
      {...props}
    />
  );
}
