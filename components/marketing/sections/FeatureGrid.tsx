import type { LucideIcon } from "lucide-react";
import { FeatureCard } from "@/components/marketing/shared/FeatureCard";
import { Reveal } from "@/components/marketing/shared/Reveal";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

interface GridItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export function FeatureGrid({
  eyebrow,
  title,
  description,
  items
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: GridItem[];
}) {
  return (
    <SectionWrapper eyebrow={eyebrow} title={title} description={description}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <FeatureCard {...item} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
