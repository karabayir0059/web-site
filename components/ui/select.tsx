import type { ComponentPropsWithoutRef } from "react";

import { fieldStyles } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function Select({ className, ...props }: ComponentPropsWithoutRef<"select">) {
  return <select className={cn(fieldStyles, "appearance-none", className)} {...props} />;
}
