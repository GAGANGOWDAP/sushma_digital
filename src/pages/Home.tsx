import { SEO } from '@/components/common/SEO';
import React, { useState, useEffect, useRef } from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { Link } from 'wouter';
import weddingImg from '@assets/portfolio-wedding.jpg';
import fashionImg from '@assets/portfolio-fashion.jpg';
import leader1 from '@assets/leader-1.jpg';
import leader2 from '@assets/leader-2.jpg';
import leader3 from '@assets/leader-3.jpg';
import leader4 from '@assets/leader-4.jpg';
import leader5 from '@assets/leader-5.jpg';
import leader6 from '@assets/leader-6.jpg';
import leader7 from '@assets/leader-7.jpg';
import leader8 from '@assets/leader-8.jpg';
import leader9 from '@assets/leader-9.jpg';
import leader10 from '@assets/leader-10.jpg';
import leader11 from '@assets/leader-11.jpg';
import leader12 from '@assets/leader-12.jpg';
import leader13 from '@assets/leader-13.jpg';
import leader14 from '@assets/leader-14.jpg';
import leader15 from '@assets/leader-15.jpg';
import useEmblaCarousel from 'embla-carousel-react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQSection } from '@/components/common/FAQSection';
import { assetUrl } from '@/lib/utils';

const DEMO_VIDEOS = [
  { id: 'video1', src: assetUrl('/videos/video_1.mp4') },
  { id: 'video2', src: assetUrl('/videos/video_2.mp4') },
];

const SERVICE_CARDS = [
  {
    id: 1,
    title: 'Pre-Wedding Photography & Videography',
    category: 'Wedding & Couples',
    desc: 'Cinematic pre-wedding shoot with creative concept direction & HD video highlights.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Photography, Videography & Candid',
    category: 'Wedding & Events',
    desc: 'Complete event coverage with traditional photography, 4K videography & candid captures.',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Baby Photo Shoot & Portfolios',
    category: 'Newborn & Fashion',
    desc: 'Creative baby photography, milestone portraiture & modelling portfolio creation.',
    img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Matrimony Photography',
    category: 'Portraiture',
    desc: 'High-end matrimony portraits and profile photography tailored to highlight elegance.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Webcast Live Streaming & HD Mixing',
    category: 'Live Broadcast',
    desc: 'HD online live streaming & multi-camera video mixing for weddings and grand events.',
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: '360° VR, LED Wall & Drone',
    category: 'Aerial & VR Tech',
    desc: '360-degree VR video, indoor/outdoor LED wall live display & 4K aerial drone camera.',
    img: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?q=80&w=800&auto=format&fit=crop'
  },
];

/* ── Refined Cinematic Hero Background ── */
function CinematicHero() {
  const [currentVidIndex, setCurrentVidIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentVid = DEMO_VIDEOS[currentVidIndex];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#142C45]">
      {/* Background Video Player with Color-Grading */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVid.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            ref={videoRef}
            src={currentVid.src}
            autoPlay
            muted
            loop={false}
            playsInline
            onEnded={() => setCurrentVidIndex((prev) => (prev + 1) % DEMO_VIDEOS.length)}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.42) contrast(1.1) saturate(1.05)' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Vignette & Ambient Gradient */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(20,44,69,0.25) 0%, rgba(20,44,69,0.75) 75%, #142C45 100%)'
        }}
      />


    </div>
  );
}

/* ── Modern Service Card ── */
function ServiceCard({ svc, delay }: { svc: typeof SERVICE_CARDS[0]; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <Link
        href="/services"
        className="group relative block overflow-hidden rounded-xl bg-[#FFFFFF] border border-[#E2E6EC] hover:border-[#258FEA]/60 shadow-[0_2px_10px_rgba(20,44,69,0.04)] hover:shadow-[0_8px_24px_rgba(20,44,69,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F6F8]">
          <img
            src={svc.img}
            alt={svc.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1542044896530-05d3c054e2d6?q=80&w=800&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <span className="text-[#258FEA] text-[10px] font-bold uppercase tracking-[0.18em] block mb-2">
              {svc.category}
            </span>
            <h3 className="text-[#142C45] font-serif font-bold text-lg mb-2.5 group-hover:text-[#D92F26] transition-colors leading-snug">
              {svc.title}
            </h3>
            <p className="text-[#475569] text-xs leading-relaxed mb-4">
              {svc.desc}
            </p>
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#D92F26] flex items-center gap-1.5 group-hover:gap-2.5 transition-all pt-3 border-t border-[#E2E6EC]">
            Learn More <ArrowRight size={13} />
          </span>
        </div>
      </Link>
    </FadeIn>
  );
}

/* ── Leader Archive Photos (15 Authentic Photographs) ── */
const LEADER_ARCHIVE_PHOTOS = [
  { id: 'leader-1', image: leader1, alt: 'Prabhu with Dr. Vishnuvardhan' },
  { id: 'leader-2', image: leader2, alt: 'Prabhu with Former PM H.D. Deve Gowda' },
  { id: 'leader-3', image: leader3, alt: 'Prabhu photographing Chiranjeevi, Venkatesh and guests' },
  { id: 'leader-4', image: leader4, alt: 'Prabhu filming Former PM Deve Gowda at ceremonial convocation' },
  { id: 'leader-5', image: leader5, alt: 'Prabhu with cultural luminary' },
  { id: 'leader-6', image: leader6, alt: 'Prabhu with stadium VIP guests' },
  { id: 'leader-7', image: leader7, alt: 'Prabhu with Dr. Vishnuvardhan' },
  { id: 'leader-8', image: leader8, alt: 'Prabhu warmly shaking hands with Dr. Rajkumar' },
  { id: 'leader-9', image: leader9, alt: 'Prabhu with Dr. Vishnuvardhan at stadium event' },
  { id: 'leader-10', image: leader10, alt: 'Dr. Rajkumar smiling with arm around Prabhu' },
  { id: 'leader-11', image: leader11, alt: 'Prabhu holding telephoto camera in nature' },
  { id: 'leader-12', image: leader12, alt: 'Prabhu holding Digi Image 2025 Chhaya Shree Prashasti' },
  { id: 'leader-13', image: leader13, alt: 'Prabhu with Mysore Peta holding Chhaya Ratna award' },
  { id: 'leader-14', image: leader14, alt: 'Prabhu felicitated on stage by dignitaries with Chhaya Ratna' },
  { id: 'leader-15', image: leader15, alt: 'Prabhu receiving Chhaya Shree award on stage from dignitaries' },
];

function useWindowWidth() {
  const [width, setWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1200));

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 50);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return width;
}

/* ── 3D Concave Curved Perspective Ribbon Gallery (Single View) ── */
function CurvedLeadersRibbonSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedLeaderIndex, setSelectedLeaderIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const windowWidth = useWindowWidth();

  const total = LEADER_ARCHIVE_PHOTOS.length; // 11

  // Responsive dimensions for single-view presentation
  let cardWidth = 210;
  let cardHeight = 295;
  let spacing = 180;
  let maxVisibleDiff = 4;

  if (windowWidth < 640) {
    cardWidth = 140;
    cardHeight = 195;
    spacing = 95;
    maxVisibleDiff = 2;
  } else if (windowWidth < 1024) {
    cardWidth = 165;
    cardHeight = 235;
    spacing = 130;
    maxVisibleDiff = 2;
  } else if (windowWidth < 1280) {
    cardWidth = 190;
    cardHeight = 270;
    spacing = 155;
    maxVisibleDiff = 3;
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedLeaderIndex !== null) {
        if (e.key === 'Escape') {
          setSelectedLeaderIndex(null);
        } else if (e.key === 'ArrowRight') {
          setSelectedLeaderIndex((prev) => (prev !== null ? (prev + 1) % total : 0));
        } else if (e.key === 'ArrowLeft') {
          setSelectedLeaderIndex((prev) => (prev !== null ? (prev - 1 + total) % total : 0));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedLeaderIndex, total]);

  // Gentle auto-advance when not hovered or open
  useEffect(() => {
    if (isHovered || selectedLeaderIndex !== null) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, selectedLeaderIndex, total]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 40) {
      handlePrev();
    } else if (deltaX < -40) {
      handleNext();
    }
    setTouchStartX(null);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FFFFFF] border-b border-[#E2E6EC] relative overflow-hidden select-none">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* Section Header */}
        <FadeIn className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#D92F26] mb-2 block">
            HISTORIC MOMENTS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-bold text-[#142C45] tracking-tight leading-tight mb-2.5">
            Trusted by Leaders &amp;{' '}
            <span className="text-[#D92F26] italic">Famous Personalities</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-xl mx-auto">
            Four decades of candid captures with Karnataka&apos;s most revered cultural icons, statesmen, and legends.
          </p>
        </FadeIn>

        {/* 3D Curved Perspective Stage Single View */}
        <div
          className="relative w-full flex items-center justify-center overflow-hidden"
          style={{
            height: `${cardHeight + 40}px`,
            perspective: '1200px',
            perspectiveOrigin: '50% 50%',
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {LEADER_ARCHIVE_PHOTOS.map((photo, i) => {
            const rawDiff = i - activeIndex;
            let diff = ((rawDiff % total) + total) % total;
            if (diff > Math.floor(total / 2)) {
              diff -= total;
            }

            const absDiff = Math.abs(diff);
            const isVisible = absDiff <= maxVisibleDiff;
            const isFlipping = absDiff >= Math.floor(total / 2);

            // 3D Amphitheater Concave Arc Calculations matching reference image
            const rotateY = -diff * 7.5; // Left cards face inward, right cards face inward
            const translateY = -absDiff * 4; // Gentle concave arch
            const scale = 0.96 + absDiff * 0.025; // Outer cards appear closer/prominent
            const zIndex = 30 - absDiff * 2;
            const opacity = !isVisible ? 0 : absDiff === maxVisibleDiff ? 0.55 : 1;

            return (
              <motion.div
                key={photo.id}
                animate={{
                  x: diff * spacing,
                  y: translateY,
                  rotateY: rotateY,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                transition={
                  isFlipping
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 280, damping: 28, mass: 0.8 }
                }
                style={{
                  position: 'absolute',
                  left: '50%',
                  marginLeft: -cardWidth / 2,
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transformStyle: 'preserve-3d',
                  cursor: 'pointer',
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
                onClick={() => {
                  if (diff === 0) {
                    setSelectedLeaderIndex(i);
                  } else {
                    setActiveIndex(i);
                  }
                }}
                className="group rounded-2xl sm:rounded-3xl bg-white border border-[#E2E6EC] shadow-[0_12px_28px_rgba(20,44,69,0.08),0_4px_10px_rgba(20,44,69,0.03)] hover:shadow-[0_20px_42px_rgba(20,44,69,0.16)] transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center select-none pointer-events-none transition-transform duration-500 group-hover:scale-105 block"
                  loading="lazy"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Navigation & Dot Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            aria-label="Previous photograph"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#E2E6EC] shadow-sm flex items-center justify-center text-[#142C45] hover:text-[#D92F26] hover:border-[#D92F26]/30 transition-all cursor-pointer hover:scale-105"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Numeric Page Indicator (No Dots) */}
          <span className="font-mono text-xs text-[#64748B] font-semibold tracking-wider">
            {activeIndex + 1} / {LEADER_ARCHIVE_PHOTOS.length}
          </span>

          <button
            onClick={handleNext}
            aria-label="Next photograph"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#E2E6EC] shadow-sm flex items-center justify-center text-[#142C45] hover:text-[#D92F26] hover:border-[#D92F26]/30 transition-all cursor-pointer hover:scale-105"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* High-Resolution Distraction-Free Lightbox */}
      <AnimatePresence>
        {selectedLeaderIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLeaderIndex(null)}
            className="fixed inset-0 z-50 bg-[#142C45]/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedLeaderIndex(null)}
              aria-label="Close image viewer"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-50 cursor-pointer"
            >
              <X size={22} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedLeaderIndex((prev) => (prev !== null ? (prev - 1 + total) % total : 0));
              }}
              aria-label="Previous photograph"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedLeaderIndex((prev) => (prev !== null ? (prev + 1) % total : 0));
              }}
              aria-label="Next photograph"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>

            {/* Modal Image Box */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] bg-white rounded-2xl p-2 sm:p-3 shadow-2xl border border-white/20 flex flex-col items-center overflow-hidden"
            >
              <img
                src={LEADER_ARCHIVE_PHOTOS[selectedLeaderIndex].image}
                alt={LEADER_ARCHIVE_PHOTOS[selectedLeaderIndex].alt}
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl block"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ── Home Page Main ── */
export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  const testimonials = [
    {
      name: 'Wedding Client',
      role: 'Bangalore Wedding Session',
      text: 'Prabhu captured every nuance and raw emotion of our wedding day. His 21 years of mastery shows in the framing, lighting, and timeless color tone of every photograph.'
    },
    {
      name: 'Corporate Executive',
      role: 'Commercial & Brand Launch',
      text: 'Our product premiere was covered with immaculate precision. From live streaming to high-end keynote portraiture, Sushma Digital Studio is unmatched in Bangalore.'
    },
    {
      name: 'Portrait & Modelling Client',
      role: 'Editorial Lookbook',
      text: 'I have never felt so comfortable in front of a lens. The portraits are authentically cinematic, artistic, and delivered with genuine care.'
    }
  ];

  return (
    <PageTransition>
      <SEO
        title="Premier Photography & Cinematography Studio Bangalore"
        description="Sushma Digital Studio 21+ years of premier wedding photography, candid storytelling, 4K aerial drones, multi-camera live broadcast streaming, and LED wall productions in Bangalore led by State Honor Karnataka Chayarathna awardee Prabhu."
        canonical="https://sushmadigitalstudio.com/"
      />
      {/* ── Hero ── */}
      <section className="relative h-[100dvh] min-h-[560px] w-full overflow-hidden flex items-center justify-center pt-20 sm:pt-24 lg:pt-20 pb-8 sm:pb-10 lg:pb-8">
        <CinematicHero />
        <div className="relative z-20 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto w-full">
          <FadeIn delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-4 sm:mb-6 leading-[1.14] tracking-tight text-white drop-shadow-md">
              Professional Wedding Photography &amp; <span className="italic text-[#D92F26]">Event Production in Bangalore</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.45}>
            <p className="text-[#E2E6EC] text-xs sm:text-sm md:text-base mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
              21+ years of visionary photography: fine art weddings, candid celebrations, fashion portfolios, and broadcast event productions.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center items-center">
              <Link href="/portfolio" className="btn-primary w-full sm:w-auto">
                Explore Portfolio <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn-secondary w-full sm:w-auto">
                Book a Session
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="py-10 sm:py-12 lg:py-8 hero-diamond-pattern border-b border-[#E2E6EC] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center max-w-6xl relative z-10">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: 'Years Experience', val: '21+', sub: 'Established Craft' },
                { label: 'Weddings Captured', val: '2,000+', sub: 'Grand & Candid' },
                { label: 'Corporate Shoots', val: '500+', sub: 'VIP & Commercial' },
                { label: 'State Honors', val: 'Chayarathna', sub: 'Award of Excellence' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 p-5 rounded-xl bg-[#FFFFFF] border border-[#E2E6EC] shadow-sm">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#142C45]">
                    {stat.val}
                  </span>
                  <span className="text-xs font-semibold text-[#D92F26] uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-[10px] text-[#64748B] uppercase tracking-widest mt-0.5">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Distinguished Clientele Band Premium Light Theme ── */}
      <section className="py-10 sm:py-12 lg:py-8 bg-[#FFFFFF] border-b border-[#E2E6EC]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <FadeIn className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#D92F26] mb-2 block">
              DISTINGUISHED CLIENTELE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#142C45] tracking-tight leading-tight mb-2.5">
              Trusted by Karnataka's{' '}
              <span className="text-[#D92F26] italic">Finest Leaders</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-xl mx-auto">
              Honoured to have served distinguished personalities and institutions across Karnataka.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4.5 lg:gap-5 items-stretch">
              {[
                { id: '01', name: 'S M Krishna', role: 'Former Chief Minister of Karnataka' },
                { id: '02', name: 'MLA Krishnappa', role: 'Member of Legislative Assembly, Bangalore' },
                { id: '03', name: 'MLA Somanna', role: 'Member of Legislative Assembly, Bangalore' },
                { id: '04', name: 'MLA MTB Nagaraj', role: 'Member of Legislative Assembly, Bangalore' },
                { id: '05', name: 'S N Nithesh Vasthu', role: 'Business & Vasthu Consultant' },
              ].map((client) => (
                <div
                  key={client.id}
                  className="group relative rounded-[12px] border border-[#E2E6EC] bg-[#FFFFFF] p-5 sm:p-6 h-full flex flex-col justify-between shadow-[0_2px_8px_rgba(20,44,69,0.04)] hover:shadow-[0_8px_20px_rgba(20,44,69,0.08)] hover:-translate-y-1 hover:border-[#D92F26]/50 transition-all duration-300 text-left"
                >
                  <div>
                    {/* Number at the top in large Signature Red typography */}
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D92F26] tracking-tight block">
                      {client.id}
                    </span>

                    {/* Thin horizontal divider below the number */}
                    <div className="w-full border-t border-[#E2E6EC] my-3.5 group-hover:border-[#D92F26]/20 transition-colors" />

                    {/* Person's name in an elegant serif font */}
                    <h3 className="font-serif font-bold text-[#142C45] text-base sm:text-lg tracking-tight mb-2 leading-snug">
                      {client.name}
                    </h3>

                    {/* Designation underneath in a clean sans-serif font */}
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-sans">
                      {client.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Trusted by Leaders & Famous Personalities 3D Curved Perspective Ribbon (Single View) ── */}
      <CurvedLeadersRibbonSection />

      {/* ── Services Section ── */}
      <section className="py-12 sm:py-16 lg:py-12 xl:py-14 hero-diamond-pattern border-b border-[#E2E6EC] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
          <FadeIn>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 gap-4 sm:gap-6 border-b border-[#E2E6EC] pb-5">
              <div>
                <span className="text-[#D92F26] text-xs font-semibold tracking-[0.2em] uppercase mb-2 block">
                  Studio Capabilities
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#142C45]">
                  Tailored Photography &amp; Broadcast Services
                </h2>
              </div>
              <Link
                href="/services"
                className="text-xs uppercase tracking-widest text-[#142C45] hover:text-[#258FEA] transition-colors pb-1 border-b border-[#258FEA]/40 inline-flex items-center gap-1.5 font-semibold"
              >
                View All 9 Services &rarr;
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICE_CARDS.map((svc, i) => (
              <ServiceCard key={i} svc={svc} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Rajkumar Memorial Highlight ── */}
      <section className="py-12 sm:py-16 lg:py-10 xl:py-12 bg-[#FFFFFF] border-b border-[#E2E6EC] text-center relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center relative z-10">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#D92F26] mb-3 block">
              Karnataka Cultural Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-[#142C45]">
              Dr. Rajkumar Memorial Documentation
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-6">
              Privileged to have served as official photographer documenting the legendary Dr. Rajkumar memorial events, safeguarding a priceless chronicle of Karnataka's cinematic and cultural history.
            </p>
            <Link
              href="/about"
              className="text-xs font-semibold uppercase tracking-widest text-[#258FEA] hover:text-[#D92F26] transition-colors inline-flex items-center gap-1.5"
            >
              Read Full Studio History &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Featured Portfolio Showcase ── */}
      <section className="py-12 sm:py-16 lg:py-10 xl:py-12 hero-diamond-pattern border-b border-[#E2E6EC] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-[#D92F26] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                Visual Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#142C45] mb-3">
                Selected Works: Wedding &amp; Portrait Showcase
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base max-w-2xl mx-auto">
                A curated survey of our visual language, capturing 21 years of candid grace, emotion, and architectural drama.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.15} className="group relative rounded-xl overflow-hidden shadow-lg bg-black">
              <div className="aspect-[16/10] sm:aspect-[4/3] max-h-[340px] w-full overflow-hidden">
                <img
                  src={weddingImg}
                  alt="Royal Wedding Moments"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-[#D92F26] text-xs font-bold uppercase tracking-widest mb-1.5 block">
                  Wedding &bull; Candid Moments
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  2,000+ Weddings Documented
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="group relative rounded-xl overflow-hidden shadow-lg bg-black">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={fashionImg}
                  alt="Fashion & Portraits"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-[#258FEA] text-xs font-bold uppercase tracking-widest mb-1.5 block">
                  Editorial &bull; Modelling
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  High-End Fashion &amp; Portraits
                </h3>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.4} className="text-center mt-12">
            <Link
              href="/portfolio"
              className="btn-primary"
            >
              Browse Full Portfolio Gallery <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Client Testimonials Carousel ── */}
      <section className="py-12 sm:py-16 lg:py-10 xl:py-12 bg-[#FFFFFF] border-b border-[#E2E6EC]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center mb-6 sm:mb-8">
          <FadeIn>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.2em] font-semibold mb-2 block">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#142C45] mb-2">
              Words From Our Clients
            </h2>
            <div className="w-12 h-0.5 bg-[#D92F26] mx-auto" />
          </FadeIn>
        </div>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-4 text-center">
                  <FadeIn delay={i * 0.15}>
                    <p className="text-xl sm:text-2xl md:text-3xl font-serif leading-relaxed mb-6 italic text-[#142C45] max-w-3xl mx-auto">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex flex-col items-center">
                      <span className="text-[#142C45] font-serif font-bold text-base">{t.name}</span>
                      <span className="text-[#258FEA] text-xs uppercase tracking-wider mt-0.5 font-semibold">{t.role}</span>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Frequently Asked Questions ── */}
      <FAQSection
        subtitle="Common Inquiries"
        title="Frequently Asked Questions"
        description="Answers to common questions regarding wedding reservations, broadcast capabilities, turnaround times, and destination travel."
      />

      {/* ── Final Call to Action ── */}
      <section className="py-12 sm:py-16 lg:py-10 xl:py-12 hero-diamond-pattern border-t border-[#E2E6EC] text-center relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <FadeIn>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-3 block">
              Begin Your Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#142C45] mb-4">
              Ready to frame your milestone?
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Whether you are planning an intimate pre-wedding shoot or a multi-day wedding celebration, our team ensures timeless visual legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Schedule a Consultation
              </Link>
              <Link href="/portfolio" className="btn-secondary w-full sm:w-auto">
                View Past Works
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
