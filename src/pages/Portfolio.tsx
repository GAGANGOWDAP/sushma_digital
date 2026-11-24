import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { assetUrl } from '@/lib/utils';
import { FAQSection } from '@/components/common/FAQSection';

const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Candid', 'Pre-Wedding'];

interface PortfolioImage {
  id: number;
  category: string;
  src: string;
  title: string;
  width: number;
  height: number;
}

const images: PortfolioImage[] = [
  { id: 1, category: 'Weddings', src: '/portfolio/0I0A3419.webp', title: 'Royal Wedding Moments', width: 933, height: 1400 },
  { id: 2, category: 'Weddings', src: '/portfolio/0I0A3445.webp', title: 'Grand Wedding Celebration', width: 933, height: 1400 },
  { id: 3, category: 'Portraits', src: '/portfolio/0I0A3726-Edit.webp', title: 'Bridal Portraiture', width: 1400, height: 933 },
  { id: 4, category: 'Events', src: '/portfolio/0I0A3732.webp', title: 'Festive Rituals', width: 1400, height: 933 },
  { id: 5, category: 'Candid', src: '/portfolio/0I0A3971.webp', title: 'Emotional Nuptials', width: 1400, height: 933 },
  { id: 6, category: 'Weddings', src: '/portfolio/0I0A4123.webp', title: 'Traditional Ceremony', width: 1400, height: 933 },
  { id: 7, category: 'Pre-Wedding', src: '/portfolio/KRJ05992.webp', title: 'Pre-Wedding Stories', width: 1400, height: 933 },
  { id: 8, category: 'Candid', src: '/portfolio/KRJ06075.webp', title: 'Joyful Celebrations', width: 1400, height: 933 },
  { id: 9, category: 'Portraits', src: '/portfolio/KRJ06111.webp', title: 'Bride & Groom Close-Up', width: 933, height: 1400 },
  { id: 10, category: 'Weddings', src: '/portfolio/KRJ06695.webp', title: 'Heritage Mandap Photos', width: 1066, height: 1600 },
  { id: 11, category: 'Events', src: '/portfolio/KRJ08037.webp', title: 'Evening Reception', width: 1066, height: 1600 },
  { id: 12, category: 'Pre-Wedding', src: '/portfolio/KRJ08273.webp', title: 'Outdoor Pre-Wedding', width: 1066, height: 1600 },
  { id: 13, category: 'Candid', src: '/portfolio/KRJJ3695.webp', title: 'Candid Smiles', width: 1600, height: 1067 },
  { id: 14, category: 'Weddings', src: '/portfolio/KRJJ3948.webp', title: 'Sacred Garlands', width: 1600, height: 1067 },
  { id: 15, category: 'Portraits', src: '/portfolio/_RJJ3291.webp', title: 'Model Portfolio Shoot', width: 1067, height: 1600 },
  { id: 16, category: 'Candid', src: '/portfolio/_RJJ3402.webp', title: 'Family Blessings', width: 1600, height: 1067 },
  { id: 17, category: 'Events', src: '/portfolio/_RJJ5178.webp', title: 'Sangeet Night Lights', width: 1114, height: 1600 },
  { id: 18, category: 'Weddings', src: '/portfolio/WhatsApp_Image_2026-08-29.webp', title: 'Traditional Ritual', width: 1600, height: 1067 },
  { id: 19, category: 'Pre-Wedding', src: '/portfolio/WhatsApp_Image_2026-08-29_at_3.51.54_PM.webp', title: 'Outdoor Couple Session', width: 932, height: 1400 },
  { id: 20, category: 'Portraits', src: '/portfolio/WhatsApp_Image_2026-08-29_at_3.52.51_PM.webp', title: 'Golden Hour Portrait', width: 1400, height: 933 },
  { id: 21, category: 'Candid', src: '/portfolio/WhatsApp_Image_2026-08-29_at_3.52.52_PM.webp', title: 'Candid Laughs', width: 1400, height: 932 },
  { id: 22, category: 'Events', src: '/portfolio/WhatsApp_Image_2026-08-29_at_3.52.53_PM.webp', title: 'Special Moments', width: 1400, height: 933 },
];

/**
 * Hook to track responsive column count:
 * - Mobile / Tablet (< 1024px): 2 columns
 * - Standard Desktop (1024px - 1279px): 3 columns
 * - Large Desktop (>= 1280px): 4 columns
 */
function useColumnCount() {
  const [columnCount, setColumnCount] = useState<number>(() => {
    if (typeof window === 'undefined') return 3;
    const w = window.innerWidth;
    if (w >= 1280) return 4;
    if (w >= 1024) return 3;
    return 2;
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1280) {
        setColumnCount(4);
      } else if (w >= 1024) {
        setColumnCount(3);
      } else {
        setColumnCount(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return columnCount;
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const columnCount = useColumnCount();

  // Filtered dataset
  const filteredImages = useMemo(() => {
    if (filter === 'All') return images;
    return images.filter((img) => img.category === filter);
  }, [filter]);

  // Pinterest-style greedy height-balancing masonry algorithm
  const columns = useMemo(() => {
    const cols: { item: PortfolioImage; originalIndex: number }[][] = Array.from(
      { length: columnCount },
      () => []
    );
    const colHeights = new Array(columnCount).fill(0);

    filteredImages.forEach((img) => {
      const originalIndex = filteredImages.findIndex((item) => item.id === img.id);
      const aspectFactor = img.height / img.width;

      // Find the column with minimum accumulated height
      let shortestCol = 0;
      let minHeight = colHeights[0];
      for (let i = 1; i < columnCount; i++) {
        if (colHeights[i] < minHeight) {
          minHeight = colHeights[i];
          shortestCol = i;
        }
      }

      cols[shortestCol].push({ item: img, originalIndex });
      colHeights[shortestCol] += aspectFactor;
    });

    return cols;
  }, [filteredImages, columnCount]);

  // Category change with smooth scroll reset
  const handleCategoryChange = (newCategory: string) => {
    setFilter(newCategory);
    setLightboxIndex(null);
    if (galleryRef.current) {
      const rect = galleryRef.current.getBoundingClientRect();
      if (rect.top < 0) {
        galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Lightbox navigation callbacks
  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0
    );
  }, [filteredImages.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredImages.length : 0
    );
  }, [filteredImages.length]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleCloseLightbox, handleNext, handlePrev]);

  // Preload neighboring images when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null && filteredImages.length > 1) {
      const nextIdx = (lightboxIndex + 1) % filteredImages.length;
      const prevIdx = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
      const nextImg = new Image();
      nextImg.src = assetUrl(filteredImages[nextIdx].src);
      const prevImg = new Image();
      prevImg.src = assetUrl(filteredImages[prevIdx].src);
    }
  }, [lightboxIndex, filteredImages]);

  // Mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - (touchStartY.current ?? 0);

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <PageTransition>
      <SEO
        title="Curated Photography Portfolio & Works"
        description="Explore the curated visual portfolio of Sushma Digital Studio: royal south Indian weddings, candid nuptials, emotional rituals, cinematic couple portraits, and commercial milestones captured across Bangalore and Karnataka."
        canonical="https://sushmadigitalstudio.com/portfolio"
      />

      {/* Hero Header with Brand Triangular Pattern */}
      <section className="pt-36 sm:pt-40 pb-12 hero-triangular-pattern text-center relative overflow-hidden border-b border-[#E2E6EC]">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="flex justify-center mb-4">
              <Breadcrumbs />
            </div>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.25em] font-semibold mb-3 block">
              Sushma Digital Studio &bull; Visual Gallery
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4">
              Our Photography &amp; Event Production Portfolio
            </h1>
            <p className="text-[#64748B] max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              Explore 21+ years of authentic photography, capturing grand weddings, candid emotion, artistic portraiture &amp; milestone celebrations.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-6">
              {categories.map((cat) => {
                const count = cat === 'All' ? images.length : images.filter((img) => img.category === cat).length;
                const isActive = filter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-wider transition-all duration-200 rounded-md font-semibold cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#D92F26] text-white shadow-sm'
                        : 'bg-white border border-[#E2E6EC] text-[#64748B] hover:text-[#142C45] hover:border-[#258FEA]'
                    }`}
                    aria-pressed={isActive}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#F1F5F9] text-[#64748B]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Masonry Photography Gallery */}
      <section ref={galleryRef} className="py-12 sm:py-16 bg-[#FFFFFF]">
        <div className="container mx-auto px-3 sm:px-6 md:px-8 max-w-7xl">
          <h2 className="sr-only">Curated Wedding, Portrait &amp; Celebration Showcase</h2>

          {/* Masonry Columns Grid */}
          <div
            className={`grid gap-3.5 sm:gap-5 lg:gap-6 items-start ${
              columnCount === 4
                ? 'grid-cols-4'
                : columnCount === 3
                ? 'grid-cols-3'
                : 'grid-cols-2'
            }`}
          >
            {columns.map((columnItems, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-3.5 sm:gap-5 lg:gap-6">
                <AnimatePresence mode="popLayout">
                  {columnItems.map(({ item, originalIndex }) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="group relative overflow-hidden rounded-[12px] bg-[#F5F6F8] border border-[#E2E6EC] shadow-[0_2px_12px_rgba(20,44,69,0.05)] hover:shadow-[0_12px_28px_rgba(20,44,69,0.12)] transition-shadow duration-300 cursor-pointer"
                      onClick={() => setLightboxIndex(originalIndex)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setLightboxIndex(originalIndex);
                        }
                      }}
                      aria-label={`View photo: ${item.title}`}
                    >
                      {/* Image with natural aspect ratio and zero CLS */}
                      <div
                        className="relative w-full overflow-hidden bg-[#EAEFF4]"
                        style={{ aspectRatio: `${item.width} / ${item.height}` }}
                      >
                        <img
                          src={assetUrl(item.src)}
                          alt={item.title}
                          width={item.width}
                          height={item.height}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none block"
                          loading={originalIndex < 6 ? 'eager' : 'lazy'}
                          decoding="async"
                          fetchPriority={originalIndex < 3 ? 'high' : 'auto'}
                          onError={(e) => {
                            e.currentTarget.src =
                              'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop';
                          }}
                        />

                        {/* Desktop Hover Overlay */}
                        <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-[#142C45]/90 via-[#142C45]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-4 sm:p-5 pointer-events-none">
                          <span className="inline-block self-start text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#D92F26] text-white mb-2 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            {item.category}
                          </span>
                          <div className="flex items-center justify-between gap-2 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-sm sm:text-base font-serif font-bold text-white truncate drop-shadow-sm">
                              {item.title}
                            </h3>
                            <span className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white group-hover:bg-[#D92F26] transition-colors duration-300 shadow flex items-center justify-center shrink-0">
                              <Eye size={15} />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Caption Bar (Ensures clean discoverability on touchscreens) */}
                      <div className="md:hidden px-3 py-2.5 bg-white border-t border-[#E2E6EC]/60 flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-[#142C45] truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-[#D92F26] font-semibold uppercase tracking-wider shrink-0">
                          {item.category}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Booking CTA */}
      <section className="py-16 hero-triangular-pattern border-t border-b border-[#E2E6EC] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <FadeIn>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.25em] font-semibold mb-3 inline-flex items-center gap-1.5">
              <Sparkles size={14} /> Sushma Digital Studio Reservations
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#142C45] mb-4">
              Love What You See? Let&apos;s Capture Your Story.
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              From intimate candid rituals to grand destination weddings and broadcast productions, reserve your date with Prabhu and our master photography team in Bangalore.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/booking"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#D92F26] text-white rounded-md font-semibold text-sm hover:bg-[#b8241c] transition-colors shadow-sm inline-flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book a Session</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white border border-[#E2E6EC] text-[#142C45] rounded-md font-semibold text-sm hover:border-[#142C45] transition-colors inline-flex items-center justify-center cursor-pointer"
              >
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Deliverables FAQ */}
      <FAQSection
        subtitle="Deliverables &amp; Formats"
        title="Portfolio &amp; Gallery FAQ"
        description="Everything you need to know regarding deliverable resolution, archival quality, download access, and private galleries."
        items={[
          {
            q: 'In what resolution and file formats are portfolio deliverables provided?',
            a: 'All delivered photographs are provided in ultra-high-resolution JPEG and TIFF formats, individually color-graded and retouched for online sharing and large-format archival printing.',
          },
          {
            q: 'Can we request specific color grading or custom retouching styles?',
            a: 'Yes. During our pre-event creative consultation, we align on your aesthetic preferences whether you prefer timeless natural warm tones, regal editorial mood, or vibrant cinematic grading.',
          },
          {
            q: 'How many edited images are typically delivered from an event?',
            a: 'Depending on event scale and duration, couples typically receive 600 to 1,200+ meticulously edited high-resolution photographs, along with an online highlight reel for instant sharing.',
          },
          {
            q: 'Do you provide private password-protected online client galleries?',
            a: 'Yes. Every client receives access to a secure, private cloud gallery where family and friends worldwide can view, favorite, and download full-resolution images directly.',
          },
        ]}
      />

      {/* Full-Screen Accessible Image Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0B1522]/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 select-none"
            onClick={handleCloseLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery viewer"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Navigation Bar */}
            <div
              className="flex items-center justify-between w-full max-w-6xl mx-auto py-2 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded bg-[#D92F26] text-white">
                  {filteredImages[lightboxIndex].category}
                </span>
                <span className="text-xs font-mono text-white/70">
                  {lightboxIndex + 1} / {filteredImages.length}
                </span>
              </div>

              <button
                onClick={handleCloseLightbox}
                className="text-white/80 hover:text-white p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#D92F26] border border-white/20 transition-all duration-200 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Stage with Arrows and Image */}
            <div
              className="relative flex-1 flex items-center justify-center my-auto w-full max-w-6xl mx-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#D92F26] border border-white/20 transition-all duration-200 hover:scale-110 z-50 cursor-pointer shadow-lg"
                aria-label="Previous photograph"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#D92F26] border border-white/20 transition-all duration-200 hover:scale-110 z-50 cursor-pointer shadow-lg"
                aria-label="Next photograph"
              >
                <ChevronRight size={24} />
              </button>

              {/* Active High-Res Image */}
              <motion.div
                key={filteredImages[lightboxIndex].id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="max-h-[76vh] w-auto max-w-full flex items-center justify-center p-2"
              >
                <img
                  src={assetUrl(filteredImages[lightboxIndex].src)}
                  alt={filteredImages[lightboxIndex].title}
                  className="max-h-[74vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
                  decoding="async"
                />
              </motion.div>
            </div>

            {/* Bottom Caption and Action Bar */}
            <div
              className="w-full max-w-6xl mx-auto py-3 text-center flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 text-white/90 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-serif font-bold text-white">
                  {filteredImages[lightboxIndex].title}
                </h4>
                <p className="text-xs text-white/60">
                  Captured by Sushma Digital Studio &bull; Bangalore, Karnataka
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/booking"
                  onClick={handleCloseLightbox}
                  className="px-4 py-2 bg-[#D92F26] text-white rounded text-xs uppercase tracking-wider font-semibold hover:bg-[#b8241c] transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow"
                >
                  <span>Book Similar Shoot</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
