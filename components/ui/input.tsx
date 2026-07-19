import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export const fieldStyles =
  "focus-ring h-12 w-full rounded-lg border border-border bg-white px-4 text-sm text-foreground shadow-soft placeholder:text-muted/70";

export function Input({ className, ...props }: ComponentPropsWithoutRef<"input">) {
  return <input className={cn(fieldStyles, className)} {...props} />;
}
