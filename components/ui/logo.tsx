import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "monogram";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizeMap: Record<string, number> = {
  sm: 36,
  md: 44,
  lg: 56,
  xl: 120,
};

export function Logo({ variant = "monogram", size = "md", className }: LogoProps) {
  const box = sizeMap[size];

  if (variant === "full") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <FlowMark box={box} />
        <div>
          <p className="font-heading text-base tracking-[-0.04em] text-foreground">
            Web Site ve Otomasyon
          </p>
          <p className="text-xs text-muted">Web · Mail · Otomasyon</p>
        </div>
      </div>
    );
  }

  return <FlowMark box={box} className={className} />;
}

function FlowMark({ box, className }: { box: number; className?: string }) {
  return (
    <span
      className={cn("relative flex shrink-0 items-center justify-center", className)}
      style={{ width: box, height: box }}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--color-brand))" />
            <stop offset="35%" stopColor="hsl(var(--color-brand-hover))" />
            <stop offset="70%" stopColor="hsl(var(--color-brand))" />
            <stop offset="100%" stopColor="hsl(var(--color-brand-deep))" />
          </linearGradient>
          <filter id="flow-glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Stacked squares — Stack Overflow inspired, represents Web · Mail · Otomasyon */}
        <g filter="url(#flow-glow)">
          {/* Bottom layer — Otomasyon */}
          <rect x="14" y="48" width="38" height="38" rx="7" fill="url(#flow-grad)" />
          {/* Middle layer — Mail */}
          <rect x="29" y="33" width="38" height="38" rx="7" fill="url(#flow-grad)" opacity="0.85" />
          {/* Top layer — Web */}
          <rect x="44" y="18" width="38" height="38" rx="7" fill="url(#flow-grad)" opacity="0.7" />
        </g>
      </svg>
    </span>
  );
}
