import React from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { Link } from 'wouter';
import { ArrowRight, Camera, Video, Baby, Users, Tv, Radio, Box, Monitor, Send } from 'lucide-react';

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
      {/* Hero header */}
      <section className="pt-36 sm:pt-40 pb-16 hero-diamond-pattern text-center relative overflow-hidden border-b border-[#E2E6EC]">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white border border-[#E2E6EC] px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D92F26]" />
              <span className="text-[#142C45] text-xs font-semibold uppercase tracking-widest">Sushma Digital Studio</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4">Our Services</h1>
            <p className="text-[#64748B] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              21+ years of photography &amp; live production excellence in Bangalore &mdash; covering weddings, live broadcasts, LED displays &amp; aerial drone visuals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Modern Cards Grid */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((svc, i) => (
              <FadeIn key={svc.id} delay={(i % 3) * 0.08}>
                <Link
                  href="/contact"
                  className="group relative block overflow-hidden rounded-xl bg-white border border-[#E2E6EC] hover:border-[#258FEA]/60 shadow-[0_2px_10px_rgba(20,44,69,0.04)] hover:shadow-[0_8px_24px_rgba(20,44,69,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Top Image Section */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F6F8]">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1542044896530-05d3c054e2d6?q=80&w=800&auto=format&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Number Badge Top Left */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-[#E2E6EC] text-[#142C45] font-mono text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                      {svc.number}
                    </div>

                    {/* Category Tag & Icon Top Right */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <div className="w-9 h-9 rounded-md bg-white text-[#142C45] border border-[#E2E6EC] flex items-center justify-center shadow-md group-hover:bg-[#D92F26] group-hover:border-[#D92F26] group-hover:text-white transition-colors">
                        <svc.icon size={17} />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[#258FEA] text-[10px] font-bold uppercase tracking-[0.18em] block mb-2">
                        {svc.category}
                      </span>
                      <h3 className="text-[#142C45] font-serif font-bold text-lg mb-2.5 group-hover:text-[#D92F26] transition-colors leading-snug">
                        {svc.title}
                      </h3>
                      <p className="text-[#475569] text-xs leading-relaxed mb-6">
                        {svc.desc}
                      </p>
                    </div>

                    {/* Bottom Action Link */}
                    <div className="pt-4 border-t border-[#E2E6EC] flex items-center justify-between text-xs font-semibold text-[#D92F26] uppercase tracking-widest group-hover:text-[#258FEA] transition-colors">
                      <span>Book Service</span>
                      <div className="w-7 h-7 rounded-full bg-[#F5F6F8] border border-[#E2E6EC] group-hover:bg-[#D92F26] group-hover:border-[#D92F26] group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

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
