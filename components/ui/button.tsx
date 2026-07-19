import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark" | "glass";
type ButtonSize = "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-all duration-[var(--duration-base)] ease-soft",
    "disabled:pointer-events-none disabled:opacity-60",
    {
      "h-11 px-5 text-sm": size === "md",
      "h-12 px-6 text-sm sm:text-[0.95rem]": size === "lg",
    },
    {
      "bg-brand text-brand-contrast shadow-soft hover:bg-brand-hover": variant === "primary",
      "border border-border bg-white text-foreground shadow-soft hover:border-brand/30": variant === "secondary",
      "bg-transparent text-foreground hover:bg-brand-soft hover:text-brand": variant === "ghost",
      "border border-white/15 bg-white/10 text-white hover:bg-white/16": variant === "dark",
      "glass text-foreground shadow-glass border border-white/20 hover:border-brand/30": variant === "glass",
    },
    className,
  );
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={buttonStyles({ variant, size, className })} {...props} />;
}
