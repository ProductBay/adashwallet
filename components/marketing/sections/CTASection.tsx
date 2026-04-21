import Link from "next/link";
import type { Route } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  outcomes
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  outcomes?: Array<{ metric: string; label: string }>;
}) {
  const outcomeCards =
    outcomes ?? [
      { metric: "-35%", label: "Reconciliation effort" },
      { metric: "+22%", label: "Checkout completion" },
      { metric: "Faster", label: "Operational decisions" }
    ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-adash-deep via-slate-900 to-adash-navy" />
      {/* Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 animate-blob rounded-full bg-emerald-500/[0.15] blur-3xl" />
        <div className="absolute top-0 right-0 h-80 w-80 animate-blob rounded-full bg-violet-500/[0.12] blur-3xl animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 animate-blob rounded-full bg-sky-500/[0.10] blur-3xl animation-delay-4000" />
        <div className="absolute inset-0 bg-dot-grid-light opacity-[0.08]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">{eyebrow}</p>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
          {outcomeCards.map((item, i) => (
            <div
              key={item.label}
              className={`rounded-2xl border px-5 py-5 text-center backdrop-blur-sm ${
                i === 0
                  ? "border-emerald-500/25 bg-emerald-500/10"
                  : i === 1
                    ? "border-violet-500/25 bg-violet-500/10"
                    : "border-sky-500/25 bg-sky-500/10"
              }`}
            >
              <p className="text-2xl font-bold text-white">{item.metric}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 px-10 shadow-lg shadow-emerald-900/40 hover:from-emerald-400 hover:to-teal-400"
          >
            <Link href={primaryCta.href as Route}>{primaryCta.label}</Link>
          </Button>
          {secondaryCta ? (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-slate-600 bg-transparent px-10 text-white hover:border-slate-400 hover:bg-slate-800 hover:text-white"
            >
              <Link href={secondaryCta.href as Route}>
                {secondaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          ) : null}
        </div>

        {/* Social proof strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {[
            { emoji: "🔒", text: "Enterprise-grade security" },
            { emoji: "⚡", text: "Real-time ledger backbone" },
            { emoji: "🌍", text: "Caribbean-first design" },
            { emoji: "🏗️", text: "Multi-tenant architecture" }
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-slate-500">
              <span>{item.emoji}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

