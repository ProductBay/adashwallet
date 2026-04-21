import { CTASection } from "@/components/marketing/sections/CTASection";
import { PageHero } from "@/components/marketing/sections/PageHero";
import { PageActionRail } from "@/components/marketing/shared/PageActionRail";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";
import { ImagePlaceholder } from "@/components/marketing/shared/ImagePlaceholder";

export default function PartyPayPage() {
  return (
    <>
      <PageActionRail
        title="Event Rollout"
        subtitle="Convert planning into execution with a focused event-commerce onboarding path."
        actions={[
          { href: "/about", label: "Book Event Demo" },
          { href: "/platform", label: "View Core Platform" },
          { href: "/security", label: "Review Reliability" }
        ]}
      />
      <PageHero
        eyebrow="Party Pay"
        title="Event energy on the surface. Stronger system control underneath."
        description="Built for live environments where speed, oversight, vendor coordination, and graceful handling under pressure all matter."
        primaryCta={{ href: "/about", label: "Book Event Demo" }}
        secondaryCta={{ href: "/platform", label: "Explore Platform" }}
        imageLabel="event scene"
        variant="event"
      />
      <SectionWrapper
        eyebrow="How it works"
        title="A premium event commerce layer with operational discipline."
        description="Party Pay helps events coordinate multiple vendors, customers, and payment points through one controlled flow."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Customers pay quickly in a branded event context.",
            "Vendors process transactions with cleaner visibility.",
            "Promoters track activity from a centralized control layer."
          ].map((step) => (
            <div key={step} className="rounded-3xl border border-emerald-200 bg-white p-8 shadow-card">
              <p className="text-base font-medium leading-7 text-adash-deep">{step}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Vendor experience"
        title="Designed for live selling where every second matters."
        description="Vendor workflows stay fast, simple, and resilient so the event experience does not stall at the point of sale."
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <ImagePlaceholder label="vendor tablet" className="min-h-[340px]" />
          <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
            <p className="text-sm leading-7 text-slate-600">
              With clear transaction handling, event-specific context, and a system built for temporary but intense operating conditions, vendors get the speed they need without losing control.
            </p>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Promoter control"
        title="See more, manage more, and stay ahead of event pressure."
        description="A centralized event layer helps organizers understand activity, coordinate teams, and reduce blind spots during live operations."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Operational oversight",
              text: "Monitor vendor activity, event flow, and problem points without relying on fragmented tools."
            },
            {
              title: "Performance safeguards",
              text: "Support high-throughput moments with system controls designed for steadier event handling."
            }
          ].map((item) => (
            <div key={item.title} className="rounded-3xl bg-slate-50 p-8">
              <h3 className="text-xl font-semibold text-adash-deep">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Reliability"
        title="Built for live environments, not just ideal ones."
        description="SLA-minded architecture, controlled degradation strategies, and slow-mode thinking help Party Pay remain usable when real-world conditions get messy."
      >
        <div className="rounded-3xl bg-adash-deep p-8 text-white shadow-soft">
          <p className="max-w-3xl text-base leading-8 text-slate-200">
            Party Pay is designed with operational discipline in mind, including traffic-aware behavior, managed system pressure handling, and a stronger approach to live-event resilience.
          </p>
        </div>
      </SectionWrapper>
      <CTASection
        eyebrow="Event Commerce"
        title="Run high-energy events with a calmer system underneath."
        description="Party Pay gives vendors, promoters, and customers a more coordinated event payment experience."
        primaryCta={{ href: "/about", label: "Talk to A'Dash" }}
      />
    </>
  );
}
