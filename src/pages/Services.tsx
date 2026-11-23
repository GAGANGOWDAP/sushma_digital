import { SEO } from '@/components/common/SEO';
import React from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { Link } from 'wouter';
import { ArrowRight, Camera, Video, Baby, Users, Tv, Radio, Box, Monitor, Send } from 'lucide-react';
import { FAQSection } from '@/components/common/FAQSection';

const services = [
  {
    id: 1,
    number: '01',
    title: 'Pre-Wedding Photography & Videography',
    category: 'Wedding & Couples',
    desc: 'Cinematic pre-wedding shoot with creative concept direction, romantic location coverage, and HD video highlights.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    icon: Camera
  },
  {
    id: 2,
    number: '02',
    title: 'Photography, Videography & Candid Photography',
    category: 'Wedding & Events',
    desc: 'Complete event coverage combining traditional photography, 4K cinematic videography, and soulful candid moment captures.',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    icon: Video
  },
  {
    id: 3,
    number: '03',
    title: 'Baby Photo Shoot & Portfolios',
    category: 'Newborn & Fashion',
    desc: 'Creative baby photography, milestone portraiture, modelling portfolio creation, and custom studio lookbooks.',
    img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop',
    icon: Baby
  },
  {
    id: 4,
    number: '04',
    title: 'Matrimony Photography',
    category: 'Portraiture',
    desc: 'High-end matrimony portraits and profile photography tailored to highlight personality and elegance.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    icon: Users
  },
  {
    id: 5,
    number: '05',
    title: 'Webcast Live Streaming',
    category: 'Live Broadcast',
    desc: 'High-definition online live streaming for weddings, corporate events, and grand functions accessible worldwide.',
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
    icon: Radio
  },
  {
    id: 6,
    number: '06',
    title: 'HD Live Video Mixing',
    category: 'Broadcast & Production',
    desc: 'Multi-camera live video mixing setup with real-time switching, titling, and broadcast-grade production control.',
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
    icon: Tv
  },
  {
    id: 7,
    number: '07',
    title: '360 Degree VR Videos',
    category: 'Immersive Media',
    desc: 'Cutting-edge 360-degree virtual reality video recording providing an immersive 3D event experience.',
    img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop',
    icon: Box
  },
  {
    id: 8,
    number: '08',
    title: 'LED Wall Live Display',
    category: 'Event Technology',
    desc: 'High-resolution indoor and outdoor LED screen setup for live event projection and dynamic video displays.',
    img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop',
    icon: Monitor
  },
  {
    id: 9,
    number: '09',
    title: 'Drone Camera Aerial Videography',
    category: 'Aerial Footage',
    desc: 'Licensed 4K drone aerial photography and cinematic video sweeps for outdoor venues, grand weddings & events.',
    img: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?q=80&w=800&auto=format&fit=crop',
    icon: Send
  },
];

export default function Services() {
  return (
    <PageTransition>
      <SEO
        title="Professional Photography & Live Production Services"
        description="Explore comprehensive photography and broadcast production services in Bangalore by Sushma Digital Studio: candid weddings, pre-wedding films, maternity shoots, global HD webcasting, multi-camera live video mixing, LED walls, and 4K aerial drones."
        canonical="https://sushmadigitalstudio.com/services"
      />
      {/* Hero header */}
      <section className="pt-36 sm:pt-40 pb-16 hero-triangular-pattern text-center relative overflow-hidden border-b border-[#E2E6EC]">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#D92F26] mb-3 block">
              Sushma Digital Studio
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4">
              Professional Photography &amp; Live Production Services in Bangalore
            </h1>
            <p className="text-[#64748B] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              21+ years of photography &amp; live production excellence in Bangalore &mdash; covering weddings, live broadcasts, LED displays &amp; aerial drone visuals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Modern Cards Grid */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E2E6EC] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
          <h2 className="sr-only">Our 9 Specialized Photography &amp; Live Broadcast Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
            {services.map((svc, i) => (
              <FadeIn key={svc.id} delay={(i % 3) * 0.08} className="h-full">
                <Link
                  href="/contact"
                  className="group relative flex flex-col h-full rounded-[18px] bg-[#FFFFFF] border border-[#E2E6EC] hover:border-[#258FEA] shadow-[0_2px_8px_rgba(20,44,69,0.03)] hover:shadow-[0_12px_28px_rgba(20,44,69,0.08)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Top 16:9 Image Section */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#F5F6F8]">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1542044896530-05d3c054e2d6?q=80&w=800&auto=format&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Service Number Badge Top Left — Elegant Serif Typography */}
                    <div className="absolute top-3.5 left-3.5 bg-[#FFFFFF] text-[#142C45] font-serif text-xs font-bold px-2.5 py-1 rounded-md border border-[#E2E6EC] shadow-sm select-none tracking-wider">
                      {svc.number}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Uppercase Category Label in Muted Slate */}
                      <span className="text-[#64748B] text-[11px] font-semibold uppercase tracking-[0.18em] block mb-2">
                        {svc.category}
                      </span>

                      {/* Service Title in Deep Navy serif */}
                      <h3 className="font-serif font-bold text-[#142C45] text-lg sm:text-xl leading-snug mb-3 group-hover:text-[#D92F26] transition-colors duration-300">
                        {svc.title}
                      </h3>

                      {/* Description in Slate sans-serif */}
                      <p className="text-[#475569] text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                        {svc.desc}
                      </p>
                    </div>

                    {/* Book Service Action Area */}
                    <div className="pt-4 border-t border-[#E2E6EC] flex items-center justify-between mt-auto">
                      <span className="text-xs uppercase tracking-widest font-bold text-[#142C45] group-hover:text-[#D92F26] transition-colors duration-300">
                        Book Service
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#F5F6F8] border border-[#E2E6EC] text-[#142C45] group-hover:bg-[#D92F26] group-hover:border-[#D92F26] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <FAQSection
        subtitle="Services & Production FAQ"
        title="Photography & Broadcast Production Inquiries"
        description="Detailed answers regarding our multi-camera setups, 4K drones, LED walls, 360° VR, and custom coverage options."
        items={[
          {
            q: 'Can we book standalone services like drone coverage, LED walls, or live streaming?',
            a: 'Yes. While we provide comprehensive end-to-end wedding packages, our specialized production services—including 4K aerial drones, high-resolution indoor/outdoor LED walls, multi-camera live video mixing, and HD webcasting—can also be deployed as standalone units.',
          },
          {
            q: 'What broadcast equipment and camera systems do you deploy?',
            a: 'We operate professional cinema cameras, prime lenses, wireless video transmitters, dedicated multi-channel hardware video switchers, calibrated SDI/HDMI feeds, and redundant bonded cellular internet uplinks for glitch-free live broadcasts.',
          },
          {
            q: 'Do you cover both traditional rituals and modern candid moments?',
            a: 'Yes. Our dedicated dual-crew methodology ensures complete documentation of sacred traditional muhurtham rituals alongside natural, unscripted candid emotions and cinematic couple portraits.',
          },
          {
            q: 'How does the 360-degree VR video experience work for events?',
            a: 'Our 360° VR cameras capture immersive, spherical spatial footage of your celebration, allowing you and distant relatives to relive the ceremony with full spatial presence using VR headsets or mobile viewers.',
          },
        ]}
      />

      {/* CTA */}
      <section className="py-20 hero-diamond-pattern border-t border-[#E2E6EC] text-center relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-2xl relative z-10">
          <FadeIn>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.2em] font-semibold mb-2 block">Custom Production</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#142C45] mb-4">Need a tailored photography package?</h2>
            <p className="text-[#64748B] mb-8 text-sm sm:text-base leading-relaxed">
              Contact Prabhu at Sushma Digital Studio for pre-wedding, live streaming, LED screen deployment &amp; complete event production in Bangalore.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
