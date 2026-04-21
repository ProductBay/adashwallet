import { ecosystemCards } from "@/lib/data/site";
import { FeatureCard } from "@/components/marketing/shared/FeatureCard";
import { GradientBackground } from "@/components/marketing/shared/GradientBackground";
import { Reveal } from "@/components/marketing/shared/Reveal";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

export function EcosystemSection() {
  return (
    <SectionWrapper
      eyebrow="Ecosystem"
      title="Built for the full commerce environment."
      description="A'Dash Wallet is designed to serve each role in the system without losing coherence across the platform."
    >
      <GradientBackground variant="default" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {ecosystemCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.07}>
            <FeatureCard {...card} colorVariant={index} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
