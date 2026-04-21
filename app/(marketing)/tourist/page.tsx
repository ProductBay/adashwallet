import { CTASection } from "@/components/marketing/sections/CTASection";
import { PageHero } from "@/components/marketing/sections/PageHero";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";
import { ImagePlaceholder } from "@/components/marketing/shared/ImagePlaceholder";

export default function TouristPage() {
  return (
    <>
      <PageHero
        eyebrow="Tourist"
        title="Make spending feel easier for visitors without compromising platform control."
        description="Guest-friendly payments, tabs, splits, and merchant integration create a smoother experience for travelers navigating the Caribbean."
        primaryCta={{ href: "/platform", label: "Explore Platform" }}
        secondaryCta={{ href: "/security", label: "Review Security" }}
        imageLabel="tourist payment"
      />
      <SectionWrapper
        eyebrow="Guest payments"
        title="Help visitors pay with less friction."
        description="A'Dash Wallet can support guest-oriented payment flows that reduce confusion and make adoption easier in unfamiliar environments."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ImagePlaceholder label="tourist payment" className="min-h-[320px]" />
          <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
            <p className="text-sm leading-7 text-slate-600">
              The experience is designed to help travelers move through restaurants, events, shops, and shared spending moments with more ease.
            </p>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Tabs and splits"
        title="Support the social side of travel."
        description="Group spending is common. The platform is positioned to make those moments easier to manage."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {["Open tabs with cleaner flow.", "Split shared experiences without awkward coordination."].map(
            (item) => (
              <div key={item} className="rounded-3xl bg-slate-50 p-8 text-base font-medium text-adash-deep">
                {item}
              </div>
            )
          )}
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Rewards + integration"
        title="A better visitor experience becomes stronger when the ecosystem is connected."
        description="Merchant and event integration makes tourist payments more useful because they work inside the wider A'Dash environment."
      >
        <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
          <p className="text-sm leading-7 text-slate-600">
            When merchants, events, and customer flows connect through one platform, travelers get a smoother experience and operators gain more consistency across the ecosystem.
          </p>
        </div>
      </SectionWrapper>
      <CTASection
        eyebrow="Visitor Experience"
        title="Create a tourist-friendly commerce layer without losing operational discipline."
        description="A'Dash Wallet helps travel-heavy markets feel more connected and easier to navigate."
        primaryCta={{ href: "/about", label: "Discuss Use Cases" }}
      />
    </>
  );
}
