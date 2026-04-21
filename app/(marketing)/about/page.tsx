import { CTASection } from "@/components/marketing/sections/CTASection";
import { PageHero } from "@/components/marketing/sections/PageHero";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A'Dash Technologies Group is building commerce infrastructure for the Caribbean."
        description="A'Dash Wallet is part of a broader platform vision focused on trusted digital finance, merchant enablement, and ecosystem-scale coordination."
        primaryCta={{ href: "/platform", label: "See the Platform" }}
        secondaryCta={{ href: "/security", label: "See Trust Layer" }}
        imageLabel="dashboard UI"
      />
      <SectionWrapper
        eyebrow="Company"
        title="Built by A'Dash Technologies Group."
        description="The company is focused on creating connected fintech and commerce systems that fit regional realities instead of forcing imported assumptions."
      >
        <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
          <p className="text-sm leading-7 text-slate-600">
            The A'Dash product ecosystem is designed to connect customer experiences, merchant tools, event flows, and operator oversight through one stronger foundation.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Founder"
        title="Ashandie Powell"
        description="Founder of A'Dash Technologies Group."
      >
        <div className="rounded-3xl bg-slate-50 p-8 text-sm leading-7 text-slate-600">
          The vision behind A'Dash Wallet centers on building serious infrastructure that still feels accessible, local, and practical for the Caribbean market.
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Vision"
        title="Simple on the surface. Powerful underneath."
        description="A'Dash Wallet is intended to make modern digital commerce feel easier while preserving the depth, controls, and reliability required to operate at scale."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Caribbean-first product thinking",
            "Infrastructure that supports long-term expansion"
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-white p-8 shadow-card">
              <p className="text-base font-medium text-adash-deep">{item}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <CTASection
        eyebrow="Work With Us"
        title="Build with a team focused on the next chapter of Caribbean commerce."
        description="Talk to A'Dash about partnerships, platform opportunities, and merchant ecosystem growth."
        primaryCta={{ href: "/platform", label: "Book Demo" }}
      />
    </>
  );
}
