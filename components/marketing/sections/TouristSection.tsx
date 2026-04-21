import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/marketing/shared/Reveal";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

const highlights = [
  "Guest-friendly payment flows with minimal friction",
  "Works across merchants, events, and hospitality",
  "Confident payments in unfamiliar environments"
];

export function TouristSection() {
  return (
    <SectionWrapper
      eyebrow="Tourist"
      eyebrowColor="text-sky-600"
      title="A visitor-friendly experience for a more connected Caribbean journey."
      description="Guest payments, splits, and merchant integration help travel feel smoother without weakening platform trust."
      className="bg-gradient-to-br from-sky-50/60 via-teal-50/30 to-white"
    >
      <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-100 via-white to-teal-50 p-3 shadow-soft">
            <div className="overflow-hidden rounded-[1.6rem] bg-[#0f1825]">
              <Image
                src="/tourist-home.png"
                alt="Tourist guest pay promotional artwork"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-2xl border border-white/20 bg-slate-950/60 px-4 py-3 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200">
                Guest Pay
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                Visitor-friendly checkout designed for travel and hospitality.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex h-full flex-col justify-center rounded-3xl border border-sky-100 bg-white p-8 shadow-card">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-sky-50 to-teal-50 px-3 py-1.5 ring-1 ring-sky-200">
              <span className="text-sky-500 text-sm">✈️</span>
              <span className="text-xs font-semibold text-sky-700">Tourist Wallet</span>
            </div>
            <h3 className="text-2xl font-semibold text-adash-deep">Built for ease in unfamiliar moments</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Help tourists pay, open tabs, and navigate merchants and events with less friction and more confidence.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/tourist"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700"
            >
              Explore tourist flows
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
