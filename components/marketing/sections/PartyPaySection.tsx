import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/marketing/shared/Reveal";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

const highlights = [
  "Vendor coordination with real-time oversight",
  "Seamless guest payments in live environments",
  "Promoter controls and settlement management"
];

export function PartyPaySection() {
  return (
    <SectionWrapper
      eyebrow="Party Pay"
      eyebrowColor="text-violet-600"
      title="An event layer built for pace, pressure, and control."
      description="Party Pay creates a premium event commerce experience with stronger coordination for customers, vendors, and promoters."
      className="bg-gradient-to-br from-violet-50/60 via-white to-purple-50/40"
    >
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-violet-100 bg-gradient-to-br from-violet-100 via-white to-amber-50 p-3 shadow-soft">
            <div className="overflow-hidden rounded-[1.6rem] bg-[#12091f]">
              <Image
                src="/party-pay-home.png"
                alt="Party Pay promotional artwork"
                width={768}
                height={768}
                className="h-full w-full object-cover"
                priority={false}
              />
            </div>
            <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-2xl border border-white/20 bg-slate-950/65 px-4 py-3 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200">
                Party Pay
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                High-energy event payments with premium visual identity.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex h-full flex-col justify-center rounded-3xl border border-violet-100 bg-white p-8 shadow-card">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-violet-50 to-purple-50 px-3 py-1.5 ring-1 ring-violet-200">
              <span className="text-violet-500 text-sm">🎉</span>
              <span className="text-xs font-semibold text-violet-700">Event Commerce</span>
            </div>
            <h3 className="text-2xl font-semibold text-adash-deep">Designed for live commerce</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Vendors get smoother selling flows. Promoters get better oversight. Customers get a more seamless payment experience in the middle of live energy.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-500" />
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/party-pay"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition-colors hover:text-violet-700"
            >
              Explore Party Pay
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
