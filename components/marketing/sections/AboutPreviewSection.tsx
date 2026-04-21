import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

export function AboutPreviewSection() {
  return (
    <SectionWrapper
      eyebrow="Developer Credibility"
      title="Built by A'Dash Technologies Group."
      description="A'Dash Wallet is part of a broader vision to build durable fintech and commerce infrastructure for the Caribbean, led by founder Ashandie Powell."
    >
      <div className="rounded-[2rem] border border-border bg-white p-8 shadow-card md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-2xl font-semibold text-adash-deep">
              Infrastructure-first thinking with product-level clarity.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              The platform is being shaped to serve customers, merchants, events, tourists, and operators without losing consistency as the ecosystem expands.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Founder
            </p>
            <p className="mt-4 text-2xl font-semibold text-adash-deep">Ashandie Powell</p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600"
            >
              Learn more about A&apos;Dash
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
