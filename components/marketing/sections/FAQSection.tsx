import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <SectionWrapper
      eyebrow="FAQ"
      title="Questions people ask before they commit."
      description="A'Dash Wallet spans more than one product story, so the FAQs help clarify the platform in plain language."
    >
      <Accordion type="single" collapsible className="grid gap-4">
        {items.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}
