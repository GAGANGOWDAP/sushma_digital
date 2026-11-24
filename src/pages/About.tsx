import { SEO } from '@/components/common/SEO';
import React, { useState, useEffect } from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { Link } from 'wouter';
import founderImg from '@assets/founder-portrait.jpg';
import awardChhayaRatna from '@assets/award-chhaya-ratna.jpg';
import awardKarnatakaChayarathna from '@assets/award-karnataka-chayarathna-2022.jpg';
import awardNationalCertificate from '@assets/award-ncvt-national-certificate.jpg';
import awardChhayaShreeCert from '@assets/award-chhaya-shree-certificate.jpg';
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
import {
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FAQSection } from '@/components/common/FAQSection';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export default function About() {
  const stats = [
    { label: 'Years Experience', val: '21+' },
    { label: 'Weddings', val: '2000+' },
    { label: 'Corporate Shoots', val: '500+' },
    { label: 'Industrial Adverts', val: '200+' },
    { label: 'Personal Photography', val: '15+ yrs' },
    { label: 'Modelling Photography', val: '30+ yrs' },
  ];

  const journey = [
    {
      id: '01',
      year: 'Childhood',
      title: "Father's Fine Art Influence",
      desc: 'Father was a renowned fine art artist. Art and aesthetics were part of everyday life, sparking a lifelong passion for visual composition.',
    },
    {
      id: '02',
      year: '1990s',
      title: 'Vishnu Studio First Steps',
      desc: 'Spent school holidays at Vishnu Studio, Bangalore, learning the craft of photography, darkroom developing, and lighting from the ground up.',
    },
    {
      id: '03',
      year: '1990s',
      title: 'Assistant to Wasim Khan',
      desc: "Worked as assistant to the legendary photographer Wasim Khan, one of India's finest, gaining world-class technical precision and creative discipline.",
    },
    {
      id: '04',
      year: 'Early 2000s',
      title: 'Printing to Photography',
      desc: 'Started professional career in the printing industry before making a decisive transition to full-time commercial and portrait photography.',
    },
    {
      id: '05',
      year: '2000s',
      title: 'Studio & B.Com Degree',
      desc: 'Worked at two reputed studios while completing a B.Com degree simultaneously, freelancing across Bangalore to build an enduring client base.',
    },
    {
      id: '06',
      year: '2006',
      title: 'VP Bangalore Photography Assoc.',
      desc: 'Elected Vice President of the Bangalore Photography Association, recognized as an influential leader across the state photographic fraternity.',
    },
    {
      id: '07',
      year: '2006-2015',
      title: 'VIP & Political Clients',
      desc: 'Served as trusted personal photographer for Former CM S M Krishna, MLA MTB Nagaraj family, MLA Krishnappa, MLA Somanna, and distinguished leaders.',
    },
    {
      id: '08',
      year: 'Ongoing',
      title: 'Rajkumar Memorial Events',
      desc: "Documented the landmark Dr. Rajkumar memorial events, creating an invaluable photographic archive of Karnataka's greatest cultural legacy.",
    },
    {
      id: '09',
      year: '2022',
      title: 'Karnataka Chayarathna',
      desc: 'Conferred with the prestigious State Honor Karnataka Chayarathna award by Photo Today magazine, celebrating decades of photographic mastery.',
    },
  ];

  const careerMilestones = [
    {
      id: '01',
      period: '1990s',
      role: 'Apprentice Vishnu Studio',
      desc: 'Learned foundational photography during school holidays at Vishnu Studio, Bangalore.',
    },
    {
      id: '02',
      period: '1990s',
      role: 'Assistant Wasim Khan',
      desc: 'Worked under renowned photographer Wasim Khan; gained advanced technical and creative mastery.',
    },
    {
      id: '03',
      period: 'Early career',
      role: 'Printing Industry',
      desc: 'Began career in the printing industry before decisively transitioning to photography full-time.',
    },
    {
      id: '04',
      period: '2000s',
      role: 'Studio Photographer (2 Studios)',
      desc: 'Worked at two photography studios while pursuing B.Com and freelancing simultaneously.',
    },
    {
      id: '05',
      period: '2000s–Present',
      role: 'Personal Photographer S N Nithesh Vasthu',
      desc: 'Appointed dedicated personal photographer a mark of exceptional trust and professionalism.',
    },
    {
      id: '06',
      period: '2000s–Present',
      role: 'Family Photographer MLA MTB Nagaraj',
      desc: 'Trusted family personal photographer for MLA MTB Nagaraj Bangalore.',
    },
    {
      id: '07',
      period: 'Special Assignments',
      role: 'Photographer S M Krishna (Former CM)',
      desc: 'Worked for the Former Chief Minister of Karnataka a distinction reserved for only the finest.',
    },
    {
      id: '08',
      period: '21+ Years – Present',
      role: 'Founder, Sushma Digital Studio',
      desc: "Built Bangalore's trusted photography studio covering weddings, corporate, modelling, events and VIP clientele.",
    },
  ];

  const [selectedAwardIndex, setSelectedAwardIndex] = useState<number | null>(null);
  const [selectedLeaderIndex, setSelectedLeaderIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const awardImages = [
    { id: 'chhaya-ratna', image: awardChhayaRatna, alt: 'Award Photograph 1' },
    { id: 'karnataka-chayarathna-2022', image: awardKarnatakaChayarathna, alt: 'Award Photograph 2' },
    { id: 'chhaya-shree-cert', image: awardChhayaShreeCert, alt: 'Award Photograph 3' },
    { id: 'national-certificate-ncvt', image: awardNationalCertificate, alt: 'National Certificate in Digital Camera Photography Government of India NCVT' },
  ];

  const leaderPhotos = [
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
    { id: 'leader-11', image: leader11, alt: 'Prabhu in nature with telephoto camera' },
    { id: 'leader-12', image: leader12, alt: 'Prabhu holding Digi Image 2025 Chhaya Shree Prashasti' },
    { id: 'leader-13', image: leader13, alt: 'Prabhu with Mysore Peta holding Chhaya Ratna award' },
    { id: 'leader-14', image: leader14, alt: 'Prabhu felicitated on stage by dignitaries with Chhaya Ratna' },
    { id: 'leader-15', image: leader15, alt: 'Prabhu receiving Chhaya Shree award on stage from dignitaries' },
  ];

  const distinguishedClients = [
    {
      id: '01',
      name: 'S M Krishna',
      role: 'Former Chief Minister of Karnataka',
    },
    {
      id: '02',
      name: 'MLA Krishnappa',
      role: 'Member of Legislative Assembly, Bangalore',
    },
    {
      id: '03',
      name: 'MLA Somanna',
      role: 'Member of Legislative Assembly, Bangalore',
    },
    {
      id: '04',
      name: 'MLA MTB Nagaraj',
      role: 'Member of Legislative Assembly, Bangalore',
    },
    {
      id: '05',
      name: 'S N Nithesh Vasthu',
      role: 'Business & Vasthu Consultant',
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedAwardIndex(null);
        setSelectedLeaderIndex(null);
      }
      if (selectedAwardIndex !== null) {
        if (e.key === 'ArrowRight') {
          setSelectedAwardIndex((prev) => (prev !== null ? (prev + 1) % awardImages.length : 0));
        } else if (e.key === 'ArrowLeft') {
          setSelectedAwardIndex((prev) => (prev !== null ? (prev - 1 + awardImages.length) % awardImages.length : 0));
        }
      }
      if (selectedLeaderIndex !== null) {
        if (e.key === 'ArrowRight') {
          setSelectedLeaderIndex((prev) => (prev !== null ? (prev + 1) % leaderPhotos.length : 0));
        } else if (e.key === 'ArrowLeft') {
          setSelectedLeaderIndex((prev) => (prev !== null ? (prev - 1 + leaderPhotos.length) % leaderPhotos.length : 0));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAwardIndex, selectedLeaderIndex, awardImages.length, leaderPhotos.length]);

  const renderLeaderCard = (idx: number, staggerOrder: number = 0, className: string = '') => {
    const item = leaderPhotos[idx];
    if (!item) return null;

    return (
      <motion.div
        key={`${item.id}-${idx}`}
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{
          duration: shouldReduceMotion ? 0.25 : 0.5,
          delay: shouldReduceMotion ? 0 : staggerOrder * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.025 }}
        onClick={() => setSelectedLeaderIndex(idx)}
        className={`group relative bg-white rounded-xl xl:rounded-2xl border border-[#ECE7DE] shadow-[0_4px_16px_rgba(20,44,69,0.06),0_1px_3px_rgba(20,44,69,0.03)] hover:shadow-[0_12px_28px_rgba(20,44,69,0.12)] transition-all duration-300 cursor-pointer overflow-hidden aspect-[4/3] w-full ${className}`}
      >
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover object-center block transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </motion.div>
    );
  };

  return (
    <PageTransition>
      <SEO
        title="About Prabhu & Studio Heritage"
        description="Discover the 21+ year journey of Prabhu and Sushma Digital Studio State Honors Karnataka Chayarathna, Chhaya Ratna, assistant to Wasim Khan, trusted personal photographer to Karnataka leaders, and Dr. Rajkumar memorial documentarian in Bangalore."
        canonical="https://sushmadigitalstudio.com/about"
      />

      {/* Profile Section Starts Directly with Prabhu Portrait & Bio */}
      <section className="min-h-screen lg:h-[100dvh] flex items-center pt-20 sm:pt-24 lg:pt-20 pb-8 sm:pb-10 lg:pb-6 bg-[#FFFFFF] border-b border-[#E2E6EC] overflow-hidden">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
            <FadeIn className="flex justify-center items-center w-full">
              <img
                src={founderImg}
                alt="Prabhu Founder, Sushma Digital Studio"
                className="w-auto max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] xl:max-w-[430px] max-h-[min(56vh,460px)] object-cover object-top rounded-2xl sm:rounded-3xl shadow-xl border border-[#E2E6EC] block mx-auto"
              />
            </FadeIn>
            <FadeIn delay={0.2} className="lg:pt-0">
              <Breadcrumbs className="mb-3" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#D92F26] font-semibold mb-1.5 block">
                Founder &amp; Lead Photographer | 21+ Years
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-serif text-[#142C45] mb-2.5 sm:mb-3 font-bold leading-tight">
                About Sushma Digital Studio | 21+ Years of Photography Excellence
              </h1>
              <div className="space-y-2 text-[#475569] leading-relaxed text-xs sm:text-[13px] xl:text-sm">
                <p className="text-xs sm:text-sm lg:text-[13px] xl:text-sm italic font-serif text-[#142C45] py-0.5 mb-2 sm:mb-2.5">
                  &ldquo;Photography isn't about cameras and lenses. It's about capturing the soul of a moment before it's gone forever.&rdquo;
                </p>
                <p>
                  Prabhu's love for photography was kindled by his father, a respected fine art artist. Growing up surrounded by art, he spent his school holidays at <strong className="text-[#142C45]">Vishnu Studio, Bangalore</strong>, absorbing every technical detail, every ray of light, every composition principle he could find.
                </p>
                <p>
                  He began his professional career in the printing industry, before making a decisive shift to photography full-time. He worked at two reputed studios and pursued his <strong className="text-[#142C45]">B.Com degree simultaneously</strong>, freelancing throughout college to sharpen his commercial edge.
                </p>
                <p>
                  One of his most formative experiences was working as an assistant to the celebrated <strong className="text-[#142C45]">Wasim Khan</strong>, a legendary name in Indian photography, in the 1990s. That mentorship shaped the precision and artistry that defines Prabhu's work today.
                </p>
              </div>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-3.5">
                <Link href="/portfolio" className="btn-primary">
                  View Work
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Say Hello
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Editorial Soft Grey Band */}
      <section className="py-10 sm:py-12 lg:py-8 hero-diamond-pattern border-b border-[#E2E6EC] text-[#142C45] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.07} className="text-center p-4 border border-[#E2E6EC] rounded-xl bg-white shadow-sm">
                <span className="text-3xl md:text-4xl font-serif text-[#D92F26] font-bold block mb-1">{stat.val}</span>
                <span className="text-[11px] uppercase tracking-wider text-[#64748B] font-semibold">{stat.label}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HONORS & PRESTIGIOUS AWARDS Minimalist Gallery
      ══════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 lg:py-8 xl:py-10 bg-[#FFFFFF] border-b border-[#E2E6EC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Heading */}
          <FadeIn className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#142C45] tracking-tight">
              Honors &amp; <span className="text-[#D92F26]">Prestigious Awards</span>
            </h2>
          </FadeIn>

          {/* Exactly Four Award Photographs in One Horizontal Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {awardImages.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                onClick={() => setSelectedAwardIndex(index)}
                className="group relative bg-[#F5F6F8] rounded-lg border border-[#E2E6EC] hover:border-[#258FEA]/60 p-2.5 sm:p-3 flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-md"
                style={{ height: 'clamp(200px, 20vw, 320px)' }}
              >
                <img
                  src={award.image}
                  alt={award.alt}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TRUSTED BY LEADERS Floating Photo Collage
      ══════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-8 xl:py-10 bg-[#FFFFFF] border-b border-[#E2E6EC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          {/* Rounded outer section canvas with hero diamond pattern background */}
          <div className="rounded-3xl sm:rounded-[2.5rem] lg:rounded-[36px] hero-diamond-pattern border border-[#E2E6EC] p-5 sm:p-8 lg:p-6 xl:p-8 relative overflow-hidden shadow-[0_8px_30px_rgba(20,44,69,0.04)] min-h-[560px] lg:min-h-[520px] xl:min-h-[550px] flex items-center">

            {/* Desktop Staggered Floating Collage (lg and xl) */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-5 xl:gap-6 items-center w-full">
              {/* Left Wing 7 Balanced Photographs in 2 Asymmetric Staggered Columns */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-3 xl:gap-4 items-center">
                {/* Outer Left Column (4 images: 0, 10, 2, 11) */}
                <div className="flex flex-col gap-2.5 xl:gap-3.5 -translate-y-2 lg:-translate-y-3">
                  {renderLeaderCard(0, 0)}
                  {renderLeaderCard(10, 1)}
                  {renderLeaderCard(2, 2)}
                  {renderLeaderCard(11, 3)}
                </div>

                {/* Inner Left Column (3 images: 1, 4, 12, framing the central heading) */}
                <div className="flex flex-col gap-2.5 xl:gap-3.5 translate-y-2 lg:translate-y-3">
                  {renderLeaderCard(1, 1)}
                  {renderLeaderCard(4, 2)}
                  {renderLeaderCard(12, 3)}
                </div>
              </div>

              {/* Exact Central Heading */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.6,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="lg:col-span-4 text-center px-4 sm:px-6 xl:px-8 py-4 lg:py-6 z-10 flex flex-col items-center justify-center"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.65rem] font-serif text-[#142C45] tracking-tight leading-[1.22] text-center max-w-sm xl:max-w-md mx-auto font-normal">
                  Trusted by leaders and famous personalities
                </h2>
              </motion.div>

              {/* Right Wing 8 Balanced Photographs in 2 Asymmetric Staggered Columns */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-3 xl:gap-4 items-center">
                {/* Inner Right Column (4 images: 3, 6, 8, 13, framing the central heading) */}
                <div className="flex flex-col gap-2.5 xl:gap-3.5 -translate-y-2 lg:-translate-y-3">
                  {renderLeaderCard(3, 1)}
                  {renderLeaderCard(6, 2)}
                  {renderLeaderCard(8, 3)}
                  {renderLeaderCard(13, 4)}
                </div>

                {/* Outer Right Column (4 images: 7, 5, 9, 14) */}
                <div className="flex flex-col gap-2.5 xl:gap-3.5 translate-y-2 lg:translate-y-3">
                  {renderLeaderCard(7, 2)}
                  {renderLeaderCard(5, 3)}
                  {renderLeaderCard(9, 4)}
                  {renderLeaderCard(14, 5)}
                </div>
              </div>
            </div>

            {/* Mobile & Tablet Staggered Collage Layout (< lg) */}
            <div className="block lg:hidden w-full">
              {/* Heading */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center mb-8 sm:mb-10 px-2"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#142C45] tracking-tight leading-tight max-w-lg mx-auto font-normal">
                  Trusted by leaders and famous personalities
                </h2>
              </motion.div>

              {/* Tablet (3 columns: 5 + 5 + 5 = 15 photos) */}
              <div className="hidden sm:grid sm:grid-cols-3 gap-4 lg:gap-6 items-start">
                {/* Column 1 (5 photos) */}
                <div className="flex flex-col gap-4">
                  {[0, 1, 2, 10, 11].map((idx, i) => renderLeaderCard(idx, i))}
                </div>

                {/* Column 2 (5 photos, staggered with translate-y-6) */}
                <div className="flex flex-col gap-4 translate-y-6">
                  {[3, 4, 5, 12, 13].map((idx, i) => renderLeaderCard(idx, i + 1))}
                </div>

                {/* Column 3 (5 photos) */}
                <div className="flex flex-col gap-4">
                  {[6, 7, 8, 9, 14].map((idx, i) => renderLeaderCard(idx, i + 2))}
                </div>
              </div>

              {/* Mobile (< sm: 2 columns: 8 + 7 = 15 photos) */}
              <div className="grid grid-cols-2 gap-3 sm:hidden items-start">
                {/* Column 1 (8 photos) */}
                <div className="flex flex-col gap-3">
                  {[0, 2, 4, 6, 8, 10, 12, 14].map((idx, i) => renderLeaderCard(idx, i))}
                </div>

                {/* Column 2 (7 photos, staggered downward with translate-y-4) */}
                <div className="flex flex-col gap-3 translate-y-4">
                  {[1, 3, 5, 7, 9, 11, 13].map((idx, i) => renderLeaderCard(idx, i + 1))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DISTINGUISHED CLIENTELE Premium Light Theme
      ══════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 lg:py-10 bg-[#FFFFFF] border-b border-[#E2E6EC] relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          {/* Section Heading Compact & Editorial */}
          <FadeIn className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
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

          {/* All FIVE Client Cards in Consistent Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4.5 lg:gap-5 items-stretch">
            {distinguishedClients.map((client, i) => (
              <FadeIn key={client.id} delay={i * 0.05} className="h-full last:col-span-2 sm:last:col-span-1">
                <div className="group relative rounded-[12px] border border-[#E2E6EC] bg-[#FFFFFF] p-3.5 sm:p-5 lg:p-6 h-full flex flex-col justify-between shadow-[0_2px_8px_rgba(20,44,69,0.04)] hover:shadow-[0_8px_20px_rgba(20,44,69,0.08)] hover:-translate-y-1 hover:border-[#D92F26]/50 transition-all duration-300 text-left">
                  <div>
                    {/* Number at the top in large Signature Red typography */}
                    <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#D92F26] tracking-tight block">
                      {client.id}
                    </span>

                    {/* Thin horizontal divider below the number */}
                    <div className="w-full border-t border-[#E2E6EC] my-2.5 sm:my-3.5 group-hover:border-[#D92F26]/20 transition-colors" />

                    {/* Person's name in an elegant serif font */}
                    <h3 className="font-serif font-bold text-[#142C45] text-sm sm:text-base lg:text-lg tracking-tight mb-1.5 sm:mb-2 leading-snug">
                      {client.name}
                    </h3>

                    {/* Designation underneath in a clean sans-serif font */}
                    <p className="text-[11px] sm:text-xs lg:text-[13px] text-[#475569] leading-relaxed font-sans">
                      {client.role}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Rajkumar Memorial Highlight */}
      <section className="py-10 sm:py-12 lg:py-10 hero-diamond-pattern border-b border-[#E2E6EC] text-center relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <FadeIn>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-2 block">
              Legacy Photography Archive
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#142C45]">Dr. Rajkumar Memorial Events</h2>
            <p className="text-[#475569] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Among Prabhu's most significant achievements is photographing the legendary Dr. Rajkumar memorial events, preserving Karnataka's greatest cultural icon through the art of photography.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          JOURNEY Compact 3x3 Editorial Milestone Cards
      ══════════════════════════════════════════════ */}
      <section className="py-8 sm:py-10 lg:py-7 xl:py-8 bg-[#FFFFFF] border-b border-[#E2E6EC] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1100px]">
          <FadeIn className="text-center mb-5 sm:mb-6 max-w-2xl mx-auto">
            <span className="text-[#D92F26] text-[11px] sm:text-xs uppercase tracking-[0.2em] mb-1.5 block font-semibold">
              The Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#142C45] mb-1.5 leading-tight">
              The Journey
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-4.5 items-stretch">
            {journey.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.05 + Math.floor(i / 3) * 0.04, duration: 0.35 }}
                className="group relative rounded-[10px] border border-[#E2E6EC] bg-[#FFFFFF] p-3.5 sm:p-4 lg:p-4.5 min-h-[135px] flex flex-col justify-between shadow-[0_2px_8px_rgba(20,44,69,0.03)] hover:shadow-[0_6px_16px_rgba(20,44,69,0.06)] hover:-translate-y-0.5 hover:border-[#D92F26]/35 transition-all duration-200 text-left"
              >
                <div>
                  {/* Top Row: Sequential Number (left) & Year / Period (right) */}
                  <div className="flex items-center justify-between gap-2.5">
                    <span className="font-serif text-2xl lg:text-[26px] font-bold text-[#D92F26] tracking-tight leading-none block">
                      {item.id}
                    </span>
                    <span className="text-[10px] lg:text-[11px] uppercase tracking-wider font-semibold text-[#64748B] px-2 py-0.5 rounded bg-[#F8F9FB] border border-[#E2E6EC]/70">
                      {item.year}
                    </span>
                  </div>

                  {/* Thin horizontal divider */}
                  <div className="w-full border-t border-[#E2E6EC] my-2.5 group-hover:border-[#D92F26]/20 transition-colors" />

                  {/* Milestone title in elegant serif typography */}
                  <h3 className="font-serif font-bold text-[#142C45] text-[15px] sm:text-base leading-snug tracking-tight mb-1.5 group-hover:text-[#D92F26] transition-colors">
                    {item.title}
                  </h3>

                  {/* Short description underneath */}
                  <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CAREER TIMELINE 21 Years Behind the Lens
      ══════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-14 xl:py-16 hero-diamond-pattern border-b border-[#E2E6EC] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">

          {/* Section Heading & Subtitle */}
          <FadeIn className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] mb-2.5 block font-semibold">
              Career Journey &amp; Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#142C45] tracking-tight mb-3">
              21 Years Behind the Lens
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              From foundational darkroom apprenticeships under legendary masters to establishing Bangalore&apos;s leading photography and broadcast production studio.
            </p>
          </FadeIn>

          {/* Editorial Timeline Grid (Desktop 4 cols x 2 rows, Tablet 2 cols, Mobile 1 col) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-stretch">
            {careerMilestones.map((milestone, i) => (
              <motion.div
                key={milestone.id}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
                className="group relative rounded-xl sm:rounded-2xl bg-white border border-[#E2E6EC] p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(20,44,69,0.03)] hover:shadow-[0_12px_28px_rgba(20,44,69,0.08)] hover:border-[#258FEA]/40 transition-all duration-300 cursor-default h-full"
              >
                <div>
                  {/* Top Bar: Prominent Red Milestone Number + Year with generous spacing */}
                  <div className="flex items-baseline justify-between mb-3.5 gap-6">
                    <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#D92F26] leading-none select-none shrink-0">
                      {milestone.id}
                    </span>
                    <span className="text-[#D92F26] text-[10px] sm:text-[11px] uppercase tracking-widest font-bold leading-snug text-right pl-4">
                      {milestone.period}
                    </span>
                  </div>

                  {/* Thin clean divider */}
                  <div className="w-full h-px bg-[#E2E6EC] mb-4" />

                  {/* Milestone Title in Deep Navy */}
                  <h3 className="font-serif font-bold text-[#142C45] text-base sm:text-lg leading-snug mb-2.5 group-hover:text-[#D92F26] transition-colors duration-300">
                    {milestone.role}
                  </h3>

                  {/* Supporting Description in Slate */}
                  <p className="text-[#475569] text-xs sm:text-[13px] leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HERITAGE FAQ Questions about Prabhu & Studio
      ══════════════════════════════════════════════ */}
      <FAQSection
        subtitle="Studio Heritage & Career"
        title="About Prabhu & Studio Heritage FAQ"
        description="Insights into Prabhu's artistic lineage, legendary mentors, honors, and two decades of photographic leadership."
        items={[
          {
            q: 'What is the heritage and artistic background of Prabhu?',
            a: "Prabhu's creative foundation was shaped by his father, a renowned fine art artist. He honed his craft at Vishnu Studio in Bangalore, worked as assistant to legendary master Wasim Khan in the 1990s, and went on to establish Sushma Digital Studio with over 21 years of continuous excellence.",
          },
          {
            q: 'What state honors and industry recognitions has Prabhu received?',
            a: 'Prabhu was conferred with the prestigious Karnataka Chayarathna award (2022) by Photo Today magazine, the Chhaya Ratna, the Digi Image Chhaya Shree Prashasti, and Government of India NCVT certification in professional digital photography.',
          },
          {
            q: 'Which distinguished leaders and dignitaries has Prabhu photographed?',
            a: 'Prabhu served as personal photographer for Former Chief Minister of Karnataka S M Krishna, family photographer for MLA MTB Nagaraj, dedicated personal photographer for S N Nithesh Vasthu, and official photographer documenting Dr. Rajkumar memorial events.',
          },
          {
            q: 'What is Prabhu’s creative philosophy behind the lens?',
            a: 'Prabhu believes photography is about capturing the emotional soul of a fleeting moment before it disappears forever. His work balances traditional ritual reverence with cinematic composition and unobtrusive observation.',
          },
        ]}
      />

      {/* Full-Size Viewing Lightbox for Leader Photographs */}
      <AnimatePresence>
        {selectedLeaderIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedLeaderIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={leaderPhotos[selectedLeaderIndex].image}
                alt={leaderPhotos[selectedLeaderIndex].alt}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-md shadow-2xl border border-white/10"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedLeaderIndex(null)}
                aria-label="Close"
                className="absolute -top-12 right-0 sm:top-3 sm:right-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20 shadow-md"
              >
                <X size={18} />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedLeaderIndex((selectedLeaderIndex - 1 + leaderPhotos.length) % leaderPhotos.length);
                }}
                aria-label="Previous image"
                className="absolute left-2 sm:-left-12 md:-left-14 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20 shadow-md"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedLeaderIndex((selectedLeaderIndex + 1) % leaderPhotos.length);
                }}
                aria-label="Next image"
                className="absolute right-2 sm:-right-12 md:-right-14 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20 shadow-md"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Size Viewing Lightbox (No Visible Captions / Labels) */}
      <AnimatePresence>
        {selectedAwardIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedAwardIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={awardImages[selectedAwardIndex].image}
                alt={awardImages[selectedAwardIndex].alt}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-md shadow-2xl border border-white/10"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedAwardIndex(null)}
                aria-label="Close"
                className="absolute -top-12 right-0 sm:top-3 sm:right-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20 shadow-md"
              >
                <X size={18} />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedAwardIndex((selectedAwardIndex - 1 + awardImages.length) % awardImages.length);
                }}
                aria-label="Previous image"
                className="absolute left-2 sm:-left-12 md:-left-14 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20 shadow-md"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedAwardIndex((selectedAwardIndex + 1) % awardImages.length);
                }}
                aria-label="Next image"
                className="absolute right-2 sm:-right-12 md:-right-14 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20 shadow-md"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
