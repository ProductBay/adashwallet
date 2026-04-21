import { CTASection } from "@/components/marketing/sections/CTASection";
import { PageHero } from "@/components/marketing/sections/PageHero";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="Trust starts with infrastructure, not slogans."
        description="A'Dash Wallet is designed around a ledger-backed money system, cleaner control layers, and operational visibility that helps reduce ambiguity as the platform scales."
        primaryCta={{ href: "/about", label: "Talk to A'Dash" }}
        secondaryCta={{ href: "/platform", label: "Explore Architecture" }}
        imageLabel="Security protection artwork"
        imageSrc="/security-hero.png"
      />
      <SectionWrapper
        eyebrow="Infrastructure"
        title="A stronger base for money movement."
        description="The platform is designed so balance state, transaction intent, and operational handling stay connected."
      >
        <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
          <p className="text-sm leading-7 text-slate-600">
            Instead of treating payments like isolated events, A'Dash Wallet is positioned around an infrastructure layer that helps preserve clarity between customer balances, merchant activity, internal processing, and payouts.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Ledger"
        title="The ledger is the source of truth."
        description="In simple terms, the ledger keeps an accurate record of what happened, where value moved, and which balances changed."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Why it matters",
              text: "It helps reduce confusion between what was requested, what was accepted, and what should be reflected in balances."
            },
            {
              title: "What customers feel",
              text: "More confidence that the system is grounded in consistency, not guesswork."
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
        eyebrow="Settlement safety"
        title="Payouts should follow controlled logic, not loose assumptions."
        description="A'Dash Wallet is designed to keep settlement and payout handling anchored to the same underlying system that records money movement."
      >
        <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
          <p className="text-sm leading-7 text-slate-600">
            That creates a cleaner relationship between accepted payments, merchant balances, and payout readiness, which helps reduce operational risk as transaction volume grows.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Idempotency"
        title="Repeat actions should not create repeat mistakes."
        description="Idempotency helps the system recognize when the same request shows up again so it can avoid double-processing."
      >
        <div className="rounded-3xl bg-adash-deep p-8 text-white shadow-soft">
          <p className="max-w-3xl text-base leading-8 text-slate-200">
            In practice, that means safer handling when networks are unstable, users retry actions, or systems reconnect during a payment flow.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="QR security"
        title="Convenient should still be controlled."
        description="QR-based flows are useful because they are simple. The platform approach is to pair that convenience with safer transaction handling and clearer system validation."
      >
        <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
          <p className="text-sm leading-7 text-slate-600">
            The goal is straightforward: make QR commerce easy to use while keeping the surrounding platform behavior disciplined.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow="Audit logging"
        title="Visibility matters when systems grow."
        description="Operational logs and activity trails help teams understand what happened, respond faster, and maintain accountability."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-8 text-sm leading-7 text-slate-600">
            Track meaningful system events.
          </div>
          <div className="rounded-3xl bg-slate-50 p-8 text-sm leading-7 text-slate-600">
            Support investigation, review, and stronger operational trust.
          </div>
        </div>
      </SectionWrapper>
      <CTASection
        eyebrow="Trust Messaging"
        title="A'Dash Wallet is built to earn trust through system design."
        description="From ledger clarity to payout discipline and operational visibility, the platform is designed for reliability that scales."
        primaryCta={{ href: "/about", label: "Talk to the Team" }}
      />
    </>
  );
}
