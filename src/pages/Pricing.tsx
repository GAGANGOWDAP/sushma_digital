import React from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { Link } from 'wouter';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: 'Essential',
      price: 'Custom Quote',
      tag: 'Half-Day Session',
      desc: 'Ideal for intimate sessions, baby shoots, and single-ritual celebrations.',
      features: [
        'Up to 4 Hours Dedicated Coverage',
        '1 Senior Studio Photographer',
        '150+ Color-Graded High-Res Images',
        'Digital Master Gallery Delivery',
        'Personal & Print Reproduction License'
      ],
      highlight: false
    },
    {
      name: 'Signature Heritage',
      price: 'Popular Choice',
      tag: 'Full Wedding Day',
      desc: 'The complete cinematic documentation experience for grand wedding events.',
      features: [
        'Full Day Comprehensive Coverage',
        '2 Senior Photographers + Candid Specialist',
        '400+ Color-Graded High-Res Images',
        'Cinematic Highlight Video Reel',
        'Pre-Wedding Studio/Outdoor Session',
        'Handcrafted Archival Leather Album Box'
      ],
      highlight: true
    },
    {
      name: 'Grand Royal Production',
      price: 'VIP Multi-Day',
      tag: 'End-to-End Production',
      desc: 'Uncompromising coverage including 4K drone, live mixing, and LED wall.',
      features: [
        'Multi-Day / Full Weekend Wedding Production',
        '3 Master Photographers + 2 Cinematographers',
        'Unlimited Meticulously Edited Images',
        '4K Licensed Aerial Drone Coverage',
        'HD Live Webcast Streaming & LED Wall Display',
        'Luxury Metallic Print Heirloom Family Album'
      ],
      highlight: false
    }
  ];

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-36 sm:pt-40 pb-16 bg-[#F5F6F8] text-center border-b border-[#E2E6EC]">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-3 block">
              Investment &amp; Packages
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4">
              Transparent &amp; Bespoke
            </h1>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              Every celebration is distinct. We provide customized quotes tailored to your rituals, guest capacity, and venue requirements.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 pb-32 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className={`h-full flex flex-col justify-between p-8 sm:p-10 rounded-xl transition-all duration-300 relative ${
                    pkg.highlight 
                      ? 'border-2 border-[#D92F26] bg-white shadow-xl shadow-[#D92F26]/10 md:-translate-y-2' 
                      : 'border border-[#E2E6EC] bg-white hover:border-[#258FEA]/40 shadow-sm hover:shadow-md'
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D92F26] text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md">
                      Signature Choice
                    </div>
                  )}

                  <div>
                    <span className="text-[#258FEA] text-[11px] font-bold uppercase tracking-wider block mb-2">
                      {pkg.tag}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#142C45] mb-2">{pkg.name}</h3>
                    <p className="text-[#475569] text-xs leading-relaxed mb-6">{pkg.desc}</p>
                    
                    <div className="mb-6 pb-6 border-b border-[#E2E6EC]">
                      <span className="text-2xl sm:text-3xl font-serif font-bold text-[#142C45]">{pkg.price}</span>
                      <span className="text-[11px] text-[#64748B] block mt-1">Tailored to your itinerary</span>
                    </div>
                    
                    <ul className="space-y-3.5 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-[#142C45]">
                          <Check size={16} className={pkg.highlight ? 'text-[#D92F26] shrink-0 mt-0.5' : 'text-[#258FEA] shrink-0 mt-0.5'} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={`/book?package=${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`block text-center py-3.5 text-xs font-semibold uppercase tracking-widest transition-all rounded-md ${
                      pkg.highlight
                        ? 'btn-primary w-full'
                        : 'btn-secondary w-full'
                    }`}
                  >
                    Select Package
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          
          {/* Custom Quote Box */}
          <FadeIn delay={0.3} className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-xl border border-[#E2E6EC] bg-[#F5F6F8]">
            <h3 className="font-serif text-2xl mb-2 text-[#142C45]">A La Carte &amp; Production Services</h3>
            <p className="text-[#475569] text-xs sm:text-sm mb-6 max-w-xl mx-auto leading-relaxed">
              Need individual services like HD Webcasting, LED wall live display, 360° VR videos, or drone videography? We provide standalone equipment &amp; crew deployment.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Custom Quote <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
