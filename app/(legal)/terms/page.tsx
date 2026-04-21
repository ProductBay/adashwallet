import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

export default function TermsPage() {
  return (
    <SectionWrapper
      eyebrow="Terms"
      title="Terms that support clarity, trust, and responsible platform usage."
      description="These terms describe how A'Dash Wallet services are provided across customer, merchant, event, and operator workflows."
      className="pt-32"
    >
      <div className="grid gap-6 rounded-3xl border border-border bg-white p-8 shadow-card">
        {[
          "Use A'Dash Wallet only for lawful transactions and approved business activity.",
          "Merchants and operators are responsible for correct product, pricing, and payout information.",
          "Platform services may include transaction review, risk controls, account limitations, or verification checks when needed.",
          "Availability targets, settlement timing, and support processes may vary by product flow and operating context.",
          "By using the platform, you agree to product-specific rules for Party Pay, Merchant Lite, customer wallet activity, and related commerce tools."
        ].map((text) => (
          <div key={text} className="rounded-3xl bg-slate-50 p-6 text-sm leading-7 text-slate-600">
            {text}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
