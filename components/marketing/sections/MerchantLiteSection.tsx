import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/marketing/shared/Reveal";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

const highlights = [
  "PayTags and payment links for social selling",
  "Public profile page for digital storefront",
  "Clean on-ramp that grows with the business"
];

export function MerchantLiteSection() {
  return (
    <SectionWrapper
      eyebrow="Merchant Lite"
      eyebrowColor="text-fuchsia-600"
      title="For social sellers who need to look more ready than their current tools allow."
      description="Merchant Lite gives hustling businesses a cleaner on-ramp into digital commerce with room to grow."
      className="bg-gradient-to-br from-fuchsia-50/50 via-white to-purple-50/30"
    >
      <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr]">
        <Reveal>
          <div className="flex h-full flex-col justify-center rounded-3xl border border-fuchsia-100 bg-white p-8 shadow-card">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-50 to-purple-50 px-3 py-1.5 ring-1 ring-fuchsia-200">
              <span className="text-fuchsia-500 text-sm">📲</span>
              <span className="text-xs font-semibold text-fuchsia-700">Merchant Lite</span>
            </div>
            <h3 className="text-2xl font-semibold text-adash-deep">From DMs to cleaner conversion</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              PayTags, payment links, and public pages help smaller sellers move faster without pretending they need a full enterprise stack on day one.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-500" />
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/merchant-lite"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-600 transition-colors hover:text-fuchsia-700"
            >
              Explore Merchant Lite
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-[2rem] border border-fuchsia-100 bg-gradient-to-br from-fuchsia-100 via-white to-purple-50 p-3 shadow-soft">
            <div className="overflow-hidden rounded-[1.6rem] bg-[#101321]">
              <Image
                src="/merchant-lite-home.png"
                alt="Merchant Lite promotional artwork"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-2xl border border-white/20 bg-slate-950/60 px-4 py-3 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fuchsia-200">
                Merchant Lite
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                Social selling energy with a cleaner path to checkout.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
