import React from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ramesh & Sneha K.",
      role: "Grand Wedding Ceremony — Palace Grounds",
      content: "Sushma Digital Studio exceeded every expectation we had for our wedding photography. Prabhu sir didn't just take pictures; he captured the raw soul, emotion, and heritage of our day. The final archival album is a masterwork that brought tears of joy to our families.",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop"
    },
    {
      name: "Kavitha Narayana",
      role: "Corporate Executive & Event Director",
      content: "As an event director managing statewide corporate summits, my standards for live media are uncompromising. The Sushma Digital Studio crew handled live multi-camera video mixing and HD webcasting with broadcast-grade perfection. 21+ years of experience truly shows.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Deepak & Ananya Rao",
      role: "Pre-Wedding & Candid Couple Shoot",
      content: "I have always felt self-conscious in front of a camera. Prabhu made the entire shoot feel natural, effortless, and celebratory. The outdoor lighting direction and candid compositions are breathtakingly cinematic.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "The Gowda Family",
      role: "Heirloom Family Milestone",
      content: "The patience and grace shown while documenting our multi-generational family gathering was exceptional. Every sacred ritual and candid laugh was immortalized with artistic dignity. Prabhu is Bangalore's most trusted photographer.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    }
  ];

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-36 sm:pt-40 pb-16 bg-[#F5F6F8] text-center border-b border-[#E2E6EC]">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-3 block">
              Client Echoes
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4">Words of Gratitude</h1>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              Stories and reflections from families, leaders, and couples who entrusted their milestone moments to Sushma Digital Studio.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Cards Grid */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
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
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border border-[#E2E6EC]"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-[#142C45] text-sm sm:text-base">{review.name}</h4>
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
            <span className="text-xs uppercase tracking-[0.22em] text-[#64748B] mb-6 block font-semibold">
              Recognized Across Premier State Photography Bodies
            </span>
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
