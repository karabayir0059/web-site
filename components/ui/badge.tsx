import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type BadgeTone = "default" | "soft" | "dark" | "outline";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  tone?: BadgeTone;
};

export function Badge({ className, tone = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em]",
        {
          "border-warm/20 bg-warm-soft text-warm": tone === "default",
          "border-border bg-surface text-muted": tone === "soft",
          "border-white/10 bg-white/10 text-white": tone === "dark",
          "border-border/80 bg-transparent text-muted": tone === "outline",
        },
        className,
      )}
      {...props}
    />
  );
}
