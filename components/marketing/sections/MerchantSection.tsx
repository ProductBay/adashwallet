import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ImagePlaceholder } from "@/components/marketing/shared/ImagePlaceholder";
import { Reveal } from "@/components/marketing/shared/Reveal";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

const highlights = [
  "QR, wallet, and direct link payment flows",
  "Real-time activity and settlement visibility",
  "Scales from solo seller to full merchant operation"
];

export function MerchantSection() {
  return (
    <SectionWrapper
      eyebrow="Merchants"
      eyebrowColor="text-amber-600"
      title="Commerce tools for businesses that need more than checkout."
      description="Accept payments, manage activity, and grow into a more capable operating system for modern merchant workflows."
      className="bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30"
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="flex h-full flex-col justify-center rounded-3xl border border-amber-100 bg-white p-8 shadow-card">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-1.5 ring-1 ring-amber-200">
              <span className="text-amber-500 text-sm">🏪</span>
              <span className="text-xs font-semibold text-amber-700">Merchant Platform</span>
            </div>
            <h3 className="text-2xl font-semibold text-adash-deep">Built for selling in real conditions</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              QR, wallet, direct links, and more structured in-person flows are all supported inside the same broader system.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/merchants"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
            >
              Explore merchant tools
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ImagePlaceholder label="merchant selling" className="min-h-[400px]" />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
