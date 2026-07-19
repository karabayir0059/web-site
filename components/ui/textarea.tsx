import type { ComponentPropsWithoutRef } from "react";

import { fieldStyles } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: ComponentPropsWithoutRef<"textarea">) {
  return <textarea className={cn(fieldStyles, "h-auto min-h-36 py-3", className)} {...props} />;
}
