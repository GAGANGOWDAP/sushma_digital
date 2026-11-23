import { SEO } from '@/components/common/SEO';
import React, { useState } from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { assetUrl } from '@/lib/utils';
import { FAQSection } from '@/components/common/FAQSection';

export default function Gallery() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const galleryImages = [
    { id: 1, aspect: 'aspect-[3/4]', src: '/portfolio/0I0A3419.webp', title: 'Royal Wedding Moments' },
    { id: 2, aspect: 'aspect-[16/10]', src: '/portfolio/0I0A3445.webp', title: 'Grand Mandap Ceremony' },
    { id: 3, aspect: 'aspect-square', src: '/portfolio/0I0A3726-Edit.webp', title: 'Bridal Portraiture' },
    { id: 4, aspect: 'aspect-[3/4]', src: '/portfolio/0I0A3732.webp', title: 'Festive Rituals' },
    { id: 5, aspect: 'aspect-[16/10]', src: '/portfolio/0I0A3971.webp', title: 'Emotional Nuptials' },
    { id: 6, aspect: 'aspect-square', src: '/portfolio/0I0A4123.webp', title: 'Traditional Ceremony' },
    { id: 7, aspect: 'aspect-[3/4]', src: '/portfolio/KRJ05992.webp', title: 'Pre-Wedding Stories' },
    { id: 8, aspect: 'aspect-[16/10]', src: '/portfolio/KRJ06075.webp', title: 'Joyful Celebrations' },
    { id: 9, aspect: 'aspect-square', src: '/portfolio/KRJ06111.webp', title: 'Couple Close-Up' },
    { id: 10, aspect: 'aspect-[3/4]', src: '/portfolio/KRJ06695.webp', title: 'Heritage Mandap Photos' },
    { id: 11, aspect: 'aspect-[16/10]', src: '/portfolio/KRJ08037.webp', title: 'Evening Reception' },
    { id: 12, aspect: 'aspect-[3/4]', src: '/portfolio/KRJ08273.webp', title: 'Outdoor Couple Session' },
  ];

  return (
    <PageTransition>
      <SEO
        title="Visual Gallery & Moments"
        description="Browse the high-resolution photo gallery of Sushma Digital Studio showcasing 21+ years of authentic wedding celebrations, cultural rituals, bridal portraits, and prestige ceremonies in Bangalore by Prabhu."
        canonical="https://sushmadigitalstudio.com/gallery"
      />
      <section className="pt-36 sm:pt-40 pb-12 hero-triangular-pattern text-center border-b border-[#E2E6EC] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <FadeIn>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-3 block">
              Curated Archive
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4">
              Visual Showcase &amp; Photography Gallery
            </h1>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              An archive of captured emotion, sacred tradition, and cinematic light by Sushma Digital Studio.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 pb-28 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="sr-only">High-Resolution Wedding &amp; Ritual Photographs</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            {galleryImages.map((img, i) => (
              <FadeIn key={img.id} delay={(i % 4) * 0.05}>
                <div 
                  className="relative group overflow-hidden cursor-zoom-in break-inside-avoid rounded-xl bg-white border border-[#E2E6EC] hover:border-[#258FEA]/60 shadow-[0_2px_10px_rgba(20,44,69,0.04)] hover:shadow-[0_8px_24px_rgba(20,44,69,0.1)] transition-shadow duration-300"
                  onClick={() => setLightboxImg(assetUrl(img.src))}
                >
                  <img 
                    src={assetUrl(img.src)} 
                    alt={img.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={i < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={i < 2 ? 'high' : 'auto'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                    <h3 className="text-xs font-serif text-white flex items-center justify-between w-full font-normal">
                      <span>{img.title}</span>
                      <ZoomIn size={14} className="text-[#258FEA]" />
                    </h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery FAQ */}
      <FAQSection
        subtitle="Visual Gallery & Prints"
        title="Gallery & Print Preservation FAQ"
        description="Insights regarding authentic ceremony moments, museum-grade prints, unwatermarked master files, and archival storage."
        items={[
          {
            q: 'Are the captures shown in this gallery from authentic client events?',
            a: 'Yes. Every photograph in our gallery represents real Bangalore weddings, cultural milestones, modelling sessions, and VIP ceremonies documented by Prabhu and our studio crew over 21+ years.',
          },
          {
            q: 'Can we order museum-grade archival albums from our gallery photos?',
            a: 'Yes. We specialize in handcrafted Italian and archival fine-art lay-flat albums printed with pigment-based archival inks designed to last over a century without fading.',
          },
          {
            q: 'Are client downloads watermarked in any way?',
            a: 'Never. All master client deliverable files are delivered completely unwatermarked with full personal print and reproduction rights.',
          },
          {
            q: 'How long are our event photographs backed up by the studio?',
            a: 'We maintain redundant multi-drive cloud and offline cold-storage backups of your master event captures for a minimum of 5 years following your event.',
          },
        ]}
      />

      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer select-none"
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-black/60 border border-white/20 transition-all hover:scale-110"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>
            <img
              src={lightboxImg}
              alt="Enlarged gallery capture"
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl border border-white/10"
              decoding="async"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
