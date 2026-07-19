import { ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { trustSignals } from "@/data/site";

export function TrustBar() {
  return (
    <section className="py-6">
      <Container>
        <div className="glass-white grid gap-3 rounded-xl p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-5">
          {trustSignals.map((item) => (
            <div key={item} className="glass flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
