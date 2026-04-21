import { AboutPreviewSection } from "@/components/marketing/sections/AboutPreviewSection";
import { CTASection } from "@/components/marketing/sections/CTASection";
import { CustomerSection } from "@/components/marketing/sections/CustomerSection";
import { EcosystemSection } from "@/components/marketing/sections/EcosystemSection";
import { FAQSection } from "@/components/marketing/sections/FAQSection";
import { HeroSection } from "@/components/marketing/sections/HeroSection";
import { InfrastructureSection } from "@/components/marketing/sections/InfrastructureSection";
import { MerchantLiteSection } from "@/components/marketing/sections/MerchantLiteSection";
import { MerchantSection } from "@/components/marketing/sections/MerchantSection";
import { NotJustWalletSection } from "@/components/marketing/sections/NotJustWalletSection";
import { PartyPaySection } from "@/components/marketing/sections/PartyPaySection";
import { SocialPaymentsSection } from "@/components/marketing/sections/SocialPaymentsSection";
import { TouristSection } from "@/components/marketing/sections/TouristSection";
import { UseCaseTabs } from "@/components/marketing/sections/UseCaseTabs";
import { faqItems, homepageUseCases } from "@/lib/data/site";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NotJustWalletSection />
      <EcosystemSection />
      <InfrastructureSection />
      <CustomerSection />
      <SocialPaymentsSection />
      <MerchantSection />
      <PartyPaySection />
      <MerchantLiteSection />
      <TouristSection />
      <UseCaseTabs
        eyebrow="Use cases"
        title="One platform, many real-world flows."
        description="A'Dash Wallet adapts to the way Caribbean commerce actually works, from personal payments to multi-vendor event operations."
        items={homepageUseCases}
      />
      <AboutPreviewSection />
      <FAQSection items={faqItems.slice(0, 8)} />
      <CTASection
        eyebrow="Ready to build with A'Dash?"
        title="Launch a stronger commerce experience with infrastructure underneath it."
        description="Whether you need customer wallet experiences, merchant acceptance, event systems, or an operator-grade platform, A'Dash Wallet is built to grow with you."
        primaryCta={{ href: "/platform", label: "Explore Platform" }}
        secondaryCta={{ href: "/about", label: "Meet A'Dash" }}
      />
    </>
  );
}
