import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBackground } from "@/components/marketing/shared/GradientBackground";
import { HeroVisual } from "@/components/marketing/sections/HeroVisual";
import { ProofStrip } from "@/components/marketing/shared/ProofStrip";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 md:pt-28">
      <GradientBackground variant="default" />
      <div className="mx-auto grid max-w-7xl gap-16 px-4 pb-24 pt-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="flex flex-col justify-center">
          {/* Badge */}
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200/80 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-1.5 shadow-sm">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500">
              <Zap className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Caribbean Commerce Infrastructure
            </p>
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-adash-deep md:text-7xl">
            More than a wallet.{" "}
            <span className="text-gradient-emerald">A money platform</span>{" "}
            for the Caribbean.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            A&apos;Dash Wallet brings customers, merchants, events, tourists, and operators onto a shared commerce foundation that feels simple on the surface and powerful underneath.
          </p>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {[
              { emoji: "🔒", text: "Enterprise security" },
              { emoji: "⚡", text: "Real-time ledger" },
              { emoji: "🌍", text: "Caribbean-first" }
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-1.5 text-sm text-slate-500">
                <span>{badge.emoji}</span>
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 shadow-lg shadow-emerald-200 hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl hover:shadow-emerald-200"
            >
              <Link href="/platform">Explore Platform</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group border-slate-200 px-8 hover:border-emerald-200 hover:bg-emerald-50">
              <Link href="/about">
                Book Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        <HeroVisual />
      </div>

      <ProofStrip
        metrics={[
          { value: "6+", label: "Platform roles" },
          { value: "Real-time", label: "Ledger engine" },
          { value: "Multi-tenant", label: "Architecture" },
          { value: "Caribbean", label: "Commerce-first" }
        ]}
      />
    </section>
  );
}
