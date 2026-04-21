import { CTASection } from "@/components/marketing/sections/CTASection";
import { FeatureGrid } from "@/components/marketing/sections/FeatureGrid";
import { PageHero } from "@/components/marketing/sections/PageHero";
import { PageActionRail } from "@/components/marketing/shared/PageActionRail";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";
import { merchantFeatures } from "@/lib/data/site";

export default function MerchantsPage() {
  return (
    <>
      <PageActionRail
        title="Merchant Growth"
        subtitle="Move from checkout tooling to full merchant operations with targeted next actions."
        actions={[
          { href: "/about", label: "Book Merchant Demo" },
          { href: "/platform", label: "Explore Platform Layer" },
          { href: "/security", label: "Review Trust Layer" }
        ]}
      />
      <PageHero
        eyebrow="Merchants"
        title="Accept payments with the control of a platform, not just a checkout tool."
        description="Serve customers across wallet, QR, links, and in-person flows while keeping settlement and growth in view."
        primaryCta={{ href: "/about", label: "Talk to Sales" }}
        secondaryCta={{ href: "/security", label: "Review Trust Layer" }}
        imageLabel="merchant selling"
      />
      <FeatureGrid
        eyebrow="Acceptance"
        title="Built to take payments in the ways merchants actually sell."
        description="Whether the transaction starts at a counter, from a QR code, or through a direct link, the merchant experience stays connected."
        items={merchantFeatures}
      />
      <SectionWrapper
        eyebrow="Store + terminal"
        title="From lightweight selling to a more complete operating setup."
        description="A'Dash Wallet gives merchants room to start cleanly and grow into a stronger operating model."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
            <h3 className="text-2xl font-semibold text-adash-deep">Storefront + selling tools</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Build a stronger merchant experience around product presentation, links, customer flow, and a more organized path to conversion.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
            <h3 className="text-2xl font-semibold text-adash-deep">Terminal-style operations</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Support faster in-person acceptance, staff-assisted flows, and clearer activity handling in live environments.
            </p>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Settlement"
        title="Know how money moved and where it is going."
        description="The platform is designed to keep merchant settlement and payout logic grounded in a reliable source of truth."
      >
        <div className="rounded-3xl bg-adash-deep p-8 text-white shadow-soft">
          <p className="max-w-3xl text-base leading-8 text-slate-200">
            A ledger-backed system helps reduce ambiguity between payment acceptance, internal balance movements, and payout readiness. That means cleaner reconciliation and more confidence for growing businesses.
          </p>
        </div>
      </SectionWrapper>
      <CTASection
        eyebrow="Merchant Growth"
        title="Turn payment acceptance into a stronger operating foundation."
        description="A'Dash Wallet is built for merchants that need more than a button and a receipt."
        primaryCta={{ href: "/about", label: "Book Merchant Demo" }}
      />
    </>
  );
}
