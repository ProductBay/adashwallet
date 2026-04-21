import { CTASection } from "@/components/marketing/sections/CTASection";
import { FeatureGrid } from "@/components/marketing/sections/FeatureGrid";
import { PageHero } from "@/components/marketing/sections/PageHero";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";
import { customerFeatures } from "@/lib/data/site";

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Customers"
        title="The wallet experience that feels easy because the hard work is underneath."
        description="Send, pay, split, and move through daily commerce with less friction and more confidence."
        primaryCta={{ href: "/faq", label: "See How It Works" }}
        secondaryCta={{ href: "/security", label: "Why It Feels Safe" }}
        imageLabel="customer paying"
      />
      <FeatureGrid
        eyebrow="Features"
        title="Built for fast payments and everyday clarity."
        description="A'Dash Wallet gives customers a smoother money experience without forcing them to think about platform complexity."
        items={customerFeatures}
      />
      <SectionWrapper
        eyebrow="Benefits"
        title="Speed, confidence, and less second-guessing at checkout."
        description="The experience is designed to reduce hesitation and make repeat usage feel natural."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Move through daily purchases faster.",
            "Keep balance and payment actions easy to understand.",
            "Use the same wallet across merchants, events, and more."
          ].map((text) => (
            <div key={text} className="rounded-3xl border border-border bg-white p-8 text-lg font-medium text-adash-deep shadow-card">
              {text}
            </div>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Daily life"
        title="Made for the way people actually pay."
        description="From regular purchases to casual shared spending, A'Dash Wallet helps customers stay in motion."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Food, retail, and service payments",
            "Event purchases and group spending",
            "Simple wallet-to-wallet flows",
            "Tourist-friendly guest payments and tabs"
          ].map((item) => (
            <div key={item} className="rounded-3xl bg-slate-50 p-6 text-sm font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </SectionWrapper>
      <CTASection
        eyebrow="Customer Experience"
        title="Bring a cleaner payment experience to your audience."
        description="A'Dash Wallet keeps the surface simple while the platform handles the hard parts underneath."
        primaryCta={{ href: "/platform", label: "Explore Platform" }}
      />
    </>
  );
}
