import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ImagePlaceholder } from "@/components/marketing/shared/ImagePlaceholder";
import { Reveal } from "@/components/marketing/shared/Reveal";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

const highlights = [
  "Fast payments across merchants and events",
  "Simple balance clarity without the confusion",
  "Works everywhere in the A'Dash ecosystem"
];

export function CustomerSection() {
  return (
    <SectionWrapper
      eyebrow="Customers"
      title="A wallet experience people can actually enjoy using."
      description="The customer layer focuses on ease, confidence, and speed while the platform handles the complexity in the background."
      className="bg-gradient-to-br from-sky-50/60 via-white to-white"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <ImagePlaceholder label="customer paying" className="min-h-[400px]" />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex h-full flex-col justify-center rounded-3xl border border-sky-100 bg-white p-8 shadow-card">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-sky-50 to-indigo-50 px-3 py-1.5 ring-1 ring-sky-200">
              <span className="text-sky-500 text-sm">💳</span>
              <span className="text-xs font-semibold text-sky-700">Customer Experience</span>
            </div>
            <h3 className="text-2xl font-semibold text-adash-deep">Designed for daily movement</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Fast payments, clearer balance understanding, and a wallet that works across merchants, events, and more connected experiences.
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
              href="/customers"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700"
            >
              Explore customer experience
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
