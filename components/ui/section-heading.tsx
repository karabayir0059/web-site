"use client";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accent?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  accent = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        accent && "border-l-2 border-brand/50 pl-6",
      )}
    >
      {eyebrow ? (
        <Badge tone="default">{eyebrow}</Badge>
      ) : null}

      <div className="space-y-3">
        <h2 className="font-heading text-3xl leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
          {title}
        </h2>

        {description ? (
          <p className="text-base leading-7 text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
