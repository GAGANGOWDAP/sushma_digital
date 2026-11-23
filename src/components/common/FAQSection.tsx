import React from 'react';
import { FadeIn } from '@/components/ui/motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQSectionProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  bgClassName?: string;
  showViewAll?: boolean;
}

const DEFAULT_STUDIO_FAQS: FAQItem[] = [
  {
    q: 'How far in advance should we reserve our event date?',
    a: 'For weddings and major celebrations in Bangalore and across Karnataka, we recommend reserving 6 to 12 months in advance as auspicious muhurtham dates book quickly. Portrait and commercial sessions generally require 2 to 4 weeks notice.',
  },
  {
    q: 'Do you travel for destination assignments across India?',
    a: 'Yes. Prabhu and our senior team regularly travel for destination weddings and corporate productions throughout Karnataka, South India, and pan-India venues. Travel and accommodation arrangements are coordinated transparently at actuals.',
  },
  {
    q: 'What equipment and production capabilities do you provide?',
    a: 'Sushma Digital Studio operates full in-house broadcast production gear, including multi-camera live video mixing, global HD webcasting, high-resolution LED walls, 360° VR video setups, and licensed 4K aerial drone systems.',
  },
  {
    q: 'When and how are final edited photographs and films delivered?',
    a: 'A curated sneak-peek preview gallery is provided within 3 to 5 days following your event. Full high-resolution color-graded master files and cinematic films are delivered within 4 to 6 weeks on private cloud storage and archival USB.',
  },
];

export function FAQSection({
  items = DEFAULT_STUDIO_FAQS,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything You Need to Know',
  description = 'Clear answers regarding our booking process, photography style, live broadcast production, and heirloom deliverables.',
  className = '',
  bgClassName = 'bg-[#FFFFFF]',
  showViewAll = true,
}: FAQSectionProps) {
  return (
    <section className={`py-14 sm:py-20 border-b border-[#E2E6EC] relative overflow-hidden ${bgClassName} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <FadeIn className="text-center mb-8 sm:mb-12">
          <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-2.5 block">
            {subtitle}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#142C45] tracking-tight font-normal">
            {title}
          </h2>
          {description && (
            <p className="text-[#64748B] text-xs sm:text-sm max-w-xl mx-auto mt-2.5 leading-relaxed">
              {description}
            </p>
          )}
        </FadeIn>

        <FadeIn delay={0.15}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-item-${index}`}
                className="border border-[#E2E6EC] bg-white rounded-xl px-5 sm:px-6 overflow-hidden shadow-[0_1px_4px_rgba(20,44,69,0.02)] hover:border-[#258FEA]/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-medium text-[#142C45] hover:text-[#258FEA] transition-colors py-4 sm:py-5 no-underline hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#475569] text-xs sm:text-sm leading-relaxed pb-5 border-t border-[#E2E6EC] pt-3 font-normal">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>

        {showViewAll && (
          <FadeIn delay={0.25} className="mt-10 sm:mt-12 pt-6 border-t border-[#E2E6EC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-[#64748B]">
              Have a specific question about your upcoming event?
            </span>
            <div className="flex items-center gap-5">
              <Link
                href="/faq"
                className="font-semibold text-[#142C45] hover:text-[#D92F26] transition-colors uppercase tracking-wider text-[11px] inline-flex items-center gap-1"
              >
                Full FAQ Archive <ArrowRight size={13} />
              </Link>
              <Link
                href="/contact"
                className="font-semibold text-[#258FEA] hover:text-[#D92F26] transition-colors uppercase tracking-wider text-[11px] inline-flex items-center gap-1"
              >
                Contact Prabhu <ArrowRight size={13} />
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

export default FAQSection;
