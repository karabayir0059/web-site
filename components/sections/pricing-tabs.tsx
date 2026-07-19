"use client";

import { useState } from "react";

import type { PricingCategory } from "@/data/pricing-plans";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PricingTabsProps = {
  categories: PricingCategory[];
};

export function PricingTabs({ categories }: PricingTabsProps) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id ?? "");
  const current = categories.find((item) => item.id === activeTab) ?? categories[0];

  if (!current) {
    return null;
  }

  return (
    <div className="space-y-8">
      <div role="tablist" aria-label="Hizmet kategorileri" className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const selected = category.id === current.id;

          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${category.id}-panel`}
              className={cn(
                "focus-ring rounded-pill border px-5 py-3 text-sm font-semibold",
                selected
                  ? "border-brand/25 bg-brand-soft text-brand shadow-soft"
                  : "border-border bg-surface text-muted hover:border-brand/15 hover:text-brand",
              )}
              onClick={() => setActiveTab(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div id={`${current.id}-panel`} role="tabpanel" className="space-y-6">
        <div className="space-y-3">
          <h2 className="font-heading text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">{current.title}</h2>
          <p className="max-w-3xl text-base leading-7 text-muted">{current.description}</p>
          <div className="rounded-lg border border-border/80 bg-surface p-4 text-sm leading-6 text-muted">{current.note}</div>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {current.plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "h-full",
                plan.featured && "border-brand/20 bg-brand-soft/40 shadow-card ring-1 ring-brand/10",
              )}
            >
              <div className="flex h-full flex-col gap-6">
                <div className="space-y-3">
                  {plan.featured ? <Badge>Önerilen yaklaşım</Badge> : null}
                  <div>
                    <h3 className="font-heading text-2xl tracking-[-0.04em] text-foreground">{plan.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{plan.summary}</p>
                  </div>
                  <div className="rounded-lg border border-border/80 bg-surface-elevated/60 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand">Yatırım çerçevesi</p>
                    <p className="mt-2 text-sm font-medium text-foreground">{plan.investmentLabel}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">Kimler için</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{plan.idealFor}</p>
                </div>

                <ul className="space-y-3 text-sm leading-6 text-muted">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto text-sm font-semibold text-brand">{plan.ctaLabel}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
