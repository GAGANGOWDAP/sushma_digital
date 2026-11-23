import React from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { SEO } from '@/components/common/SEO';
import { FAQSection } from '@/components/common/FAQSection';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ramesh & Sneha K.",
      role: "Grand Wedding Ceremony Palace Grounds",
      initials: "RS",
      content: "Sushma Digital Studio exceeded every expectation we had for our wedding photography. Prabhu sir didn't just take pictures; he captured the raw soul, emotion, and heritage of our day. The final archival album is a masterwork that brought tears of joy to our families."
    },
    {
      name: "Kavitha Narayana",
      role: "Corporate Executive & Event Director",
      initials: "KN",
      content: "As an event director managing statewide corporate summits, my standards for live media are uncompromising. The Sushma Digital Studio crew handled live multi-camera video mixing and HD webcasting with broadcast-grade perfection. 21+ years of experience truly shows."
    },
    {
      name: "Deepak & Ananya Rao",
      role: "Pre-Wedding & Candid Couple Shoot",
      initials: "DA",
      content: "I have always felt self-conscious in front of a camera. Prabhu made the entire shoot feel natural, effortless, and celebratory. The outdoor lighting direction and candid compositions are breathtakingly cinematic."
    },
    {
      name: "The Gowda Family",
      role: "Heirloom Family Milestone",
      initials: "GF",
      content: "The patience and grace shown while documenting our multi-generational family gathering was exceptional. Every sacred ritual and candid laugh was immortalized with artistic dignity. Prabhu is Bangalore's most trusted photographer."
    }
  ];

  return (
    <PageTransition>
      <SEO
        title="Client Reviews & Testimonials"
        description="Read verified client reviews and testimonials from over 2,000 weddings, corporate summits, and VIP assignments documented with distinction by Prabhu and Sushma Digital Studio in Bangalore."
        canonical="https://sushmadigitalstudio.com/testimonials"
      />
      {/* Header */}
      <section className="pt-36 sm:pt-40 pb-16 hero-triangular-pattern text-center border-b border-[#E2E6EC] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <FadeIn>
            <div className="flex justify-center mb-4">
              <Breadcrumbs />
            </div>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-3 block">
              Client Echoes
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4">
              Client Reviews &amp; Testimonials | Sushma Digital Studio
            </h1>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              Stories and reflections from families, leaders, and couples who entrusted their milestone moments to Sushma Digital Studio.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Cards Grid */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
          <h2 className="sr-only">Verified Client Reviews &amp; Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 sm:p-10 rounded-xl border border-[#E2E6EC] h-full flex flex-col justify-between hover:border-[#258FEA]/50 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex text-[#D92F26] gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} size={15} fill="currentColor" />
                        ))}
                      </div>
                      <Quote size={20} className="text-[#64748B]/30" />
                    </div>
                    <p className="text-[#142C45] font-serif text-base sm:text-lg leading-relaxed mb-8 italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-[#E2E6EC]">
                    <div className="w-12 h-12 rounded-xl bg-[#F5F6F8] border border-[#E2E6EC] flex items-center justify-center font-serif font-bold text-[#142C45] text-sm shrink-0">
                      {review.initials}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#142C45] text-sm sm:text-base">{review.name}</h3>
                      <span className="text-[11px] text-[#258FEA] uppercase tracking-wider block mt-0.5">{review.role}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* State Industry Associations Strip */}
      <section className="py-16 bg-[#F5F6F8] border-y border-[#E2E6EC] text-[#142C45]">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <FadeIn>
            <h2 className="text-xs uppercase tracking-[0.22em] text-[#64748B] mb-6 block font-semibold">
              Recognized Across Premier State Photography Bodies
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[#142C45] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="px-4 py-2 rounded-lg bg-white border border-[#E2E6EC] shadow-xs">
                Karnataka Photographers Association (KPA)
              </span>
              <span className="px-4 py-2 rounded-lg bg-white border border-[#E2E6EC] shadow-xs">
                Photo Today Magazine &bull; 2022
              </span>
              <span className="px-4 py-2 rounded-lg bg-white border border-[#E2E6EC] shadow-xs">
                KVPA &bull; Karnataka Video &amp; Photo Assoc.
              </span>
              <span className="px-4 py-2 rounded-lg bg-white border border-[#E2E6EC] shadow-xs">
                Bangalore Photography Association (BPA)
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials & Trust FAQ */}
      <FAQSection
        subtitle="Trust & Experience"
        title="Client Reviews & Trust FAQ"
        description="Learn how we uphold client confidentiality, manage large-scale events, and ensure couples feel confident and relaxed."
        items={[
          {
            q: 'Can we speak with past couples or review client references?',
            a: 'Certainly. We have had the privilege of capturing over 2,000 weddings and 500+ corporate assignments. We are delighted to share client references upon request.',
          },
          {
            q: 'How do you handle privacy and discretion for VIP and high-profile clientele?',
            a: 'Discretion is a core pillar of Sushma Digital Studio. Having served ministers, MLAs, and cultural dignitaries for over 20 years, confidential assignments are protected under strict privacy protocols.',
          },
          {
            q: 'How does your crew handle high-pressure, large-scale celebrations?',
            a: 'With 21+ years in the industry, Prabhu and our team remain composed, punctual, and attentive, coordinating seamlessly with wedding planners and priest rituals without causing delays.',
          },
          {
            q: 'How do you help camera-shy couples look natural and relaxed?',
            a: 'Prabhu specializes in gentle, relaxed guidance rather than stiff poses. We create an easygoing environment where genuine laughter and intimate moments unfold effortlessly.',
          },
        ]}
      />

      {/* CTA */}
      <section className="py-20 bg-[#FFFFFF] text-center border-t border-[#E2E6EC]">
        <div className="container mx-auto px-6 max-w-2xl">
          <FadeIn>
            <h2 className="text-3xl font-serif text-[#142C45] mb-3">Begin Your Story With Us</h2>
            <p className="text-[#475569] text-sm mb-6">Experience photographic storytelling crafted with 21+ years of passion.</p>
            <Link href="/contact" className="btn-primary">
              Book a Consultation <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
