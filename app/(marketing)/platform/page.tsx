import { CTASection } from "@/components/marketing/sections/CTASection";
import { FeatureGrid } from "@/components/marketing/sections/FeatureGrid";
import { InfrastructureSection } from "@/components/marketing/sections/InfrastructureSection";
import { PageHero } from "@/components/marketing/sections/PageHero";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";
import { ImagePlaceholder } from "@/components/marketing/shared/ImagePlaceholder";
import { PageActionRail } from "@/components/marketing/shared/PageActionRail";
import { platformArchitecture, platformCommerce } from "@/lib/data/site";

export default function PlatformPage() {
  return (
    <>
      <PageActionRail
        title="Platform Evaluation"
        subtitle="Keep evaluation momentum with architecture, controls, and product walkthrough actions."
        actions={[
          { href: "/about", label: "Book Architecture Demo" },
          { href: "/security", label: "Review Security Model" },
          { href: "/faq", label: "Read Platform FAQs" }
        ]}
      />
      <PageHero
        eyebrow="Platform"
        title="A single money engine for every role in the ecosystem."
        description="A'Dash Wallet is built on a ledger-backed core that powers customer wallets, merchant commerce, event operations, operator oversight, and controlled settlement from the same infrastructure."
        primaryCta={{ href: "/about", label: "Book Demo" }}
        secondaryCta={{ href: "/security", label: "Review Security" }}
        imageLabel="dashboard UI"
      />
      <FeatureGrid
        eyebrow="Overview"
        title="System architecture explained without the noise."
        description="Every product surface sits on top of a shared set of controls for balances, movements, permissions, and operating visibility."
        items={platformArchitecture}
      />
      <InfrastructureSection />
      <SectionWrapper
        eyebrow="Multi-role design"
        title="Customers, merchants, and operators all run through the same trusted core."
        description="That means consistent controls, cleaner reporting, and less operational drift as the ecosystem expands."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Customer role",
              text: "Fast wallet actions, simple payments, trusted balance visibility, and less friction in daily commerce."
            },
            {
              title: "Merchant role",
              text: "Unified payment acceptance, storefront tools, flexible selling methods, and clearer settlement operations."
            },
            {
              title: "Admin role",
              text: "Oversight, controls, support tooling, audit context, and operator workflows designed for scale."
            }
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-border bg-white p-8 shadow-card">
              <h3 className="text-xl font-semibold text-adash-deep">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <FeatureGrid
        eyebrow="Commerce flows"
        title="Sell in-store, by QR, through links, and across more structured commerce journeys."
        description="A'Dash Wallet is not limited to one payment pattern. It supports the real operating mix that modern Caribbean businesses need."
        items={platformCommerce}
      />
      <SectionWrapper
        eyebrow="Event + growth layers"
        title="Specialized flows without fractured systems."
        description="Party Pay and Merchant Lite extend the platform into event-heavy and social-commerce environments without creating separate rails."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
            <h3 className="text-2xl font-semibold text-adash-deep">Party Pay</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Create a higher-control environment for promoters, vendors, and temporary commerce setups with speed, visibility, and resilience built in.
            </p>
            <h3 className="mt-8 text-2xl font-semibold text-adash-deep">Merchant Lite</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Give smaller sellers a cleaner path into digital commerce with PayTags, payment links, public pages, and a natural path to deeper merchant tooling.
            </p>
          </div>
          <ImagePlaceholder label="dashboard UI" className="min-h-[360px]" />
        </div>
      </SectionWrapper>
      <CTASection
        eyebrow="Platform Demo"
        title="See how A'Dash Wallet fits your operating model."
        description="Walk through the customer experience, merchant tools, event control layer, and the infrastructure that keeps them aligned."
        primaryCta={{ href: "/about", label: "Book Demo" }}
        secondaryCta={{ href: "/faq", label: "Read FAQs" }}
      />
    </>
  );
}
