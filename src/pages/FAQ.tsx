import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import React, { useState } from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';
import { HelpCircle, ArrowRight } from 'lucide-react';

const categories = ['All', 'Booking & Reservations', 'Style & Equipment', 'Albums & Delivery'];

export default function FAQ() {
  const [filter, setFilter] = useState('All');

  const faqs = [
    {
      category: 'Booking & Reservations',
      items: [
        {
          q: 'How far in advance should we reserve our wedding date?',
          a: 'For weddings and large celebrations in Bangalore and across Karnataka, we recommend reserving 6 to 12 months in advance as prime muhurtham and weekend dates are booked very early. For portrait, baby shoots, and commercial assignments, 2 to 4 weeks notice is generally sufficient.'
        },
        {
          q: 'Do you travel for destination weddings across India?',
          a: 'Yes, absolutely. Prabhu and the Sushma Digital Studio crew frequently travel for destination weddings throughout Karnataka, South India, and pan-India venues. Travel and accommodation arrangements are coordinated transparently at actuals.'
        },
        {
          q: 'What is required to confirm and lock our booking?',
          a: 'An advance booking retainer and confirmation agreement lock in your date exclusively on our calendar. The remainder is scheduled around pre-event milestones and final delivery.'
        }
      ]
    },
    {
      category: 'Photography Style & Equipment',
      items: [
        {
          q: 'How would you describe your photographic style?',
          a: 'Our signature style combines emotional candid storytelling with regal editorial portraiture. With over two decades of heritage, we understand traditional rituals deeply while employing modern cinematic color-grading, prime optics, and dramatic lighting.'
        },
        {
          q: 'Do you offer 4K Drone, Live Webcasting & LED wall setups?',
          a: 'Yes. Sushma Digital Studio is one of Bangalore’s pioneering studios with in-house broadcast capabilities offering multi-camera live video mixing, global HD webcast streaming, high-resolution indoor/outdoor LED walls, 360° VR videos, and licensed 4K aerial drone coverage.'
        },
        {
          q: 'How many edited photographs will we receive?',
          a: 'For a complete traditional wedding celebration, couples typically receive 600 to 1,200+ meticulously color-graded high-resolution photographs, along with a curated highlight gallery for easy sharing.'
        }
      ]
    },
    {
      category: 'Delivery, Albums & Post-Production',
      items: [
        {
          q: 'When will our photographs and cinematic films be delivered?',
          a: 'A digital sneak peek preview is provided within 3 to 5 days of your event. Complete high-resolution digital master files and cinematic highlight edits are delivered within 4 to 6 weeks.'
        },
        {
          q: 'Do you provide premium handcrafted photo albums?',
          a: 'Yes. We design and deliver custom heirloom photo albums printed on archival fine-art and metallic photographic papers with luxury covers, handcrafted binding, and lifelong durability.'
        }
      ]
    }
  ];

  const filteredFaqs = faqs.filter((group) => {
    if (filter === 'All') return true;
    if (filter === 'Booking & Reservations') return group.category === 'Booking & Reservations';
    if (filter === 'Style & Equipment') return group.category === 'Photography Style & Equipment';
    if (filter === 'Albums & Delivery') return group.category === 'Delivery, Albums & Post-Production';
    return true;
  });

  return (
    <PageTransition>
      <SEO
        title="Frequently Asked Questions"
        description="Frequently asked questions about Sushma Digital Studio: booking lead times, destination wedding travel across India, multi-camera live webcasting, 4K drones, deliverables, and heirloom album design in Bangalore."
        canonical="https://sushmadigitalstudio.com/faq"
      />
      {/* FAQPage Structured Data for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.flatMap((group) =>
              group.items.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.a,
                },
              }))
            ),
          }),
        }}
      />
      {/* Header */}
      <section className="min-h-screen min-h-[100dvh] pt-24 sm:pt-28 pb-10 sm:pb-12 hero-triangular-pattern text-center relative overflow-hidden border-b border-[#E2E6EC] flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <FadeIn>
            <div className="flex justify-center mb-4">
              <Breadcrumbs />
            </div>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.25em] font-semibold mb-3 block">
              Sushma Digital Studio &bull; Frequently Asked Questions
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4 max-w-4xl mx-auto tracking-tight leading-[1.12]">
              Frequently Asked Questions | Sushma Digital Studio
            </h1>
            <p className="text-[#64748B] max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              Clear answers regarding our booking process, photography style, live streaming, and album delivery.
            </p>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-wider transition-all duration-200 rounded-md font-semibold cursor-pointer ${filter === cat
                      ? 'bg-[#D92F26] text-white shadow-sm'
                      : 'bg-white border border-[#E2E6EC] text-[#64748B] hover:text-[#142C45] hover:border-[#258FEA]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-16 pb-28 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          {filteredFaqs.map((group, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="mb-12">
              <div className="flex items-center gap-2.5 mb-5 pb-2 border-b border-[#E2E6EC]">
                <h2 className="text-lg sm:text-xl font-serif text-[#142C45] font-bold tracking-wide">
                  {group.category}
                </h2>
              </div>
              <Accordion type="multiple" className="w-full space-y-3">
                {group.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${idx}-${i}`}
                    className="border border-[#E2E6EC] bg-white rounded-xl px-5 sm:px-6 overflow-hidden shadow-sm hover:border-[#258FEA]/40 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-medium text-[#142C45] hover:text-[#258FEA] transition-colors py-4 sm:py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#475569] text-sm leading-relaxed pb-5 border-t border-[#E2E6EC] pt-3">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          ))}

          {/* Have More Questions Box */}
          <FadeIn delay={0.3} className="text-center mt-14 p-8 rounded-xl hero-diamond-pattern border border-[#E2E6EC] relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h3 className="font-serif text-xl sm:text-2xl text-[#142C45] mb-2">Have a specific requirement?</h3>
              <p className="text-[#475569] text-sm mb-6 max-w-md mx-auto">
                We are delighted to customize our photography and video production packages to your schedule and venue.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Studio Team <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
