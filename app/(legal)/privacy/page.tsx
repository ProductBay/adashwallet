import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

export default function PrivacyPage() {
  return (
    <SectionWrapper
      eyebrow="Privacy"
      title="Privacy built for a modern money platform."
      description="A'Dash Wallet is designed to collect only what is needed to operate securely, serve customers responsibly, and meet applicable compliance obligations."
      className="pt-32"
    >
      <div className="grid gap-6 rounded-3xl border border-border bg-white p-8 shadow-card">
        {[
          {
            title: "What we collect",
            text: "Account, transaction, support, and device data needed to operate wallet, commerce, settlement, and platform security features."
          },
          {
            title: "How we use it",
            text: "To process payments, maintain accurate ledgers, manage disputes, improve reliability, and protect customers and merchants."
          },
          {
            title: "How we protect it",
            text: "We use role-based access, audit logging, operational controls, and system-level safeguards to reduce risk across the platform."
          },
          {
            title: "Your choices",
            text: "Customers and partners may request support for data access, profile updates, and account-related privacy questions through official A'Dash channels."
          }
        ].map((item) => (
          <div key={item.title} className="rounded-3xl bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-adash-deep">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
