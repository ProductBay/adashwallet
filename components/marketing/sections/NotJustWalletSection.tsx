import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";
import { GradientBackground } from "@/components/marketing/shared/GradientBackground";
import { Reveal } from "@/components/marketing/shared/Reveal";

const pillars = [
  {
    emoji: "👤",
    title: "Simple customer experience",
    description: "at the surface",
    gradient: "from-emerald-400 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100"
  },
  {
    emoji: "⚡",
    title: "Serious infrastructure",
    description: "underneath the interface",
    gradient: "from-violet-500 to-purple-600",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-100"
  },
  {
    emoji: "🌍",
    title: "Caribbean-first thinking",
    description: "across the full ecosystem",
    gradient: "from-sky-400 to-indigo-500",
    bg: "from-sky-50 to-indigo-50",
    border: "border-sky-100"
  }
];

export function NotJustWalletSection() {
  return (
    <SectionWrapper
      eyebrow="Positioning"
      title="A'Dash Wallet is not just a payment app."
      description="It is a multi-tenant, ledger-backed money platform designed to support everyday payments, merchant operations, event commerce, social selling, tourist spending, and platform oversight from the same foundation."
      className="bg-gradient-to-br from-slate-50 via-white to-slate-50"
    >
      <GradientBackground variant="default" />
      <Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`group relative overflow-hidden rounded-3xl border ${pillar.border} bg-gradient-to-br ${pillar.bg} p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft`}
            >
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.gradient} text-2xl shadow-lg`}>
                {pillar.emoji}
              </div>
              <p className="text-xl font-semibold text-adash-deep">{pillar.title}</p>
              <p className="mt-2 text-sm text-slate-500">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
