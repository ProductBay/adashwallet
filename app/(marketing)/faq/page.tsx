import { CTASection } from "@/components/marketing/sections/CTASection";
import { FAQSection } from "@/components/marketing/sections/FAQSection";
import { PageHero } from "@/components/marketing/sections/PageHero";
import { faqItems } from "@/lib/data/site";

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers for customers, merchants, operators, and partners."
        description="Explore the questions people ask when they want to understand what A'Dash Wallet is, who it serves, and how it is positioned."
        primaryCta={{ href: "/platform", label: "Explore Platform" }}
        secondaryCta={{ href: "/about", label: "Talk to A'Dash" }}
        imageLabel="dashboard UI"
      />
      <FAQSection items={faqItems} />
      <CTASection
        eyebrow="Still deciding?"
        title="If you need a deeper walkthrough, we can show the system in context."
        description="A'Dash Wallet is broader than a single app, and the best way to understand it is through its real operating flows."
        primaryCta={{ href: "/about", label: "Book a Conversation" }}
      />
    </>
  );
}
