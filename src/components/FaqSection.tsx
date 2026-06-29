import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/structuredData";

interface Props {
  faqs: FaqItem[];
  id?: string;
}

export const FaqSection = ({ faqs, id = "faq" }: Props) => {
  return (
    <section id={id} className="py-20 px-4 scroll-mt-20" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">
            ✦ Questions & Answers ✦
          </p>
          <h2 id="faq-heading" className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <div className="ink-divider w-32 mx-auto" />
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/90 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
