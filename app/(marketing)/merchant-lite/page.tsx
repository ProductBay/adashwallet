import { CTASection } from "@/components/marketing/sections/CTASection";
import { PageHero } from "@/components/marketing/sections/PageHero";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";
import { ImagePlaceholder } from "@/components/marketing/shared/ImagePlaceholder";

export default function MerchantLitePage() {
  return (
    <>
      <PageHero
        eyebrow="Merchant Lite"
        title="Built for social sellers who need to get paid without building a full stack first."
        description="Create a cleaner selling presence with PayTags, payment links, and public pages, then grow into deeper merchant tools when the business is ready."
        primaryCta={{ href: "/about", label: "Start the Conversation" }}
        secondaryCta={{ href: "/merchants", label: "See Full Merchant Tools" }}
        imageLabel="social seller"
      />
      <SectionWrapper
        eyebrow="PayTags"
        title="A simpler identity for getting paid."
        description="Help customers find you faster and pay with less friction across social and direct selling channels."
      >
        <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
          <p className="text-sm leading-7 text-slate-600">
            PayTags give smaller sellers a more memorable way to receive payments and create a cleaner experience than juggling screenshots, repeated account details, or fragmented instructions.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Payment links"
        title="Turn conversation into conversion."
        description="Close sales in DMs, chats, and lightweight selling moments with simple payment links that feel more organized."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl bg-slate-50 p-8">
            <p className="text-sm leading-7 text-slate-600">
              Merchant Lite helps sellers move beyond manual coordination by giving them cleaner payment requests and a more professional customer touchpoint.
            </p>
          </div>
          <ImagePlaceholder label="social seller" className="min-h-[320px]" />
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Public pages"
        title="A stronger digital storefront before the full storefront."
        description="Give sellers a branded place to direct customers while keeping the setup accessible."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Show products, offers, or order paths more clearly.",
            "Build trust with a cleaner customer-facing destination."
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-white p-8 shadow-card">
              <p className="text-base font-medium leading-7 text-adash-deep">{item}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Growth journey"
        title="Start lean, grow into the full merchant system."
        description="Merchant Lite is designed as an on-ramp, not a dead end."
      >
        <div className="rounded-3xl bg-adash-deep p-8 text-white shadow-soft">
          <p className="max-w-3xl text-base leading-8 text-slate-200">
            Sellers can begin with lightweight payment tools and graduate into richer commerce, operational controls, and a deeper merchant stack as demand grows.
          </p>
        </div>
      </SectionWrapper>
      <CTASection
        eyebrow="For Social Sellers"
        title="Give your business a cleaner way to get paid."
        description="Merchant Lite helps small sellers look more organized today and grow more confidently tomorrow."
        primaryCta={{ href: "/about", label: "Explore Merchant Lite" }}
      />
    </>
  );
}
