import React, { useState, useEffect } from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Candid', 'Pre-Wedding'];

const images = [
  { id: 1, category: 'Weddings', shape: 'tall', src: '/portfolio/0I0A3419.webp', title: 'Royal Wedding Moments' },
  { id: 2, category: 'Weddings', shape: 'wide', src: '/portfolio/0I0A3445.webp', title: 'Grand Wedding Celebration' },
  { id: 3, category: 'Portraits', shape: 'square', src: '/portfolio/0I0A3726-Edit.webp', title: 'Bridal Portraiture' },
  { id: 4, category: 'Events', shape: 'tall', src: '/portfolio/0I0A3732.webp', title: 'Festive Rituals' },
  { id: 5, category: 'Candid', shape: 'wide', src: '/portfolio/0I0A3971.webp', title: 'Emotional Nuptials' },
  { id: 6, category: 'Weddings', shape: 'square', src: '/portfolio/0I0A4123.webp', title: 'Traditional Ceremony' },
  { id: 7, category: 'Pre-Wedding', shape: 'tall', src: '/portfolio/KRJ05992.webp', title: 'Pre-Wedding Stories' },
  { id: 8, category: 'Candid', shape: 'wide', src: '/portfolio/KRJ06075.webp', title: 'Joyful Celebrations' },
  { id: 9, category: 'Portraits', shape: 'square', src: '/portfolio/KRJ06111.webp', title: 'Bride & Groom Close-Up' },
  { id: 10, category: 'Weddings', shape: 'tall', src: '/portfolio/KRJ06695.webp', title: 'Heritage Mandap Photos' },
  { id: 11, category: 'Events', shape: 'wide', src: '/portfolio/KRJ08037.webp', title: 'Evening Reception' },
  { id: 12, category: 'Pre-Wedding', shape: 'tall', src: '/portfolio/KRJ08273.webp', title: 'Outdoor Pre-Wedding' },
  { id: 13, category: 'Candid', shape: 'square', src: '/portfolio/KRJJ3695.webp', title: 'Candid Smiles' },
  { id: 14, category: 'Weddings', shape: 'wide', src: '/portfolio/KRJJ3948.webp', title: 'Sacred Garlands' },
  { id: 15, category: 'Portraits', shape: 'tall', src: '/portfolio/_RJJ3291.webp', title: 'Model Portfolio Shoot' },
  { id: 16, category: 'Candid', shape: 'square', src: '/portfolio/_RJJ3402.webp', title: 'Family Blessings' },
  { id: 17, category: 'Events', shape: 'wide', src: '/portfolio/_RJJ5178.webp', title: 'Sangeet Night Lights' },
  { id: 18, category: 'Weddings', shape: 'tall', src: '/portfolio/WhatsApp_Image_2026-08-29.webp', title: 'Traditional Ritual' },
  { id: 19, category: 'Pre-Wedding', shape: 'square', src: '/portfolio/WhatsApp_Image_2026-08-29_at_3.51.54_PM.webp', title: 'Outdoor Couple Session' },
  { id: 20, category: 'Portraits', shape: 'wide', src: '/portfolio/WhatsApp_Image_2026-08-29_at_3.52.51_PM.webp', title: 'Golden Hour Portrait' },
  { id: 21, category: 'Candid', shape: 'tall', src: '/portfolio/WhatsApp_Image_2026-08-29_at_3.52.52_PM.webp', title: 'Candid Laughs' },
  { id: 22, category: 'Events', shape: 'square', src: '/portfolio/WhatsApp_Image_2026-08-29_at_3.52.53_PM.webp', title: 'Special Moments' },
];

const shapeStyles: Record<string, string> = {
  tall: 'aspect-[3/4]',
  wide: 'aspect-[16/10]',
  square: 'aspect-square',
};

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  // Keyboard navigation & preloading for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : 0));
        } else if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  // Preload neighboring images when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null && filteredImages.length > 1) {
      const nextIndex = (lightboxIndex + 1) % filteredImages.length;
      const prevIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
      const imgNext = new Image();
      imgNext.src = filteredImages[nextIndex].src;
      const imgPrev = new Image();
      imgPrev.src = filteredImages[prevIndex].src;
    }
  }, [lightboxIndex, filteredImages]);

  return (
    <PageTransition>
      {/* Portfolio Header */}
      <section className="pt-36 sm:pt-40 pb-12 hero-diamond-pattern text-center relative overflow-hidden border-b border-[#E2E6EC]">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.25em] font-semibold mb-3 block">
              Sushma Digital Studio &bull; Visual Gallery
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4">
              Mastery in Every Frame
            </h1>
            <p className="text-[#64748B] max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              Explore 21+ years of authentic photography &mdash; capturing grand weddings, candid emotion, artistic portraiture &amp; milestone celebrations.
            </p>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-200 rounded-md font-semibold cursor-pointer ${
                    filter === cat
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

      {/* Gallery Grid */}
      <section className="py-12 pb-32 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className={`group relative overflow-hidden rounded-xl bg-[#F5F6F8] border border-[#E2E6EC] shadow-[0_2px_10px_rgba(20,44,69,0.04)] hover:shadow-[0_8px_24px_rgba(20,44,69,0.1)] transition-shadow duration-300 cursor-pointer ${shapeStyles[img.shape] || 'aspect-[4/3]'}`}
                  onClick={() => setLightboxIndex(index)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading={index < 6 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={index < 3 ? 'high' : 'auto'}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
                    <span className="text-[10px] uppercase tracking-widest text-[#258FEA] font-semibold mb-1">
                      {img.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-white flex items-center justify-between">
                      <span>{img.title}</span>
                      <ZoomIn size={16} className="text-[#D92F26]" />
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-50 text-white/80 hover:text-white p-2.5 rounded-full bg-black/60 border border-white/20 transition-all hover:scale-110 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/60 border border-white/20 transition-all hover:scale-110 z-50 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : 0));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/60 border border-white/20 transition-all hover:scale-110 z-50 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <div
              className="max-w-5xl max-h-[85vh] relative flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10 transition-opacity duration-200"
                decoding="async"
              />
              <div className="mt-4 text-center">
                <span className="text-xs uppercase tracking-widest text-[#258FEA] font-semibold block mb-0.5">
                  {filteredImages[lightboxIndex].category}
                </span>
                <h4 className="text-xl font-serif text-white font-bold">
                  {filteredImages[lightboxIndex].title}
                </h4>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
