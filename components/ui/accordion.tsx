"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { FaqItem } from "@/data/faq-items";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AccordionProps = {
  items: FaqItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <Card key={item.question} padding="md" className={cn("overflow-hidden", isOpen && "border-brand/20")}>
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-heading text-lg tracking-[-0.03em] text-foreground">{item.question}</span>
              <ChevronDown className={cn("h-5 w-5 text-muted transition-transform", isOpen && "rotate-180 text-brand")} />
            </button>
            <div
              className={cn(
                "grid transition-all duration-[var(--duration-base)] ease-soft",
                isOpen ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden text-sm leading-7 text-muted">{item.answer}</div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
