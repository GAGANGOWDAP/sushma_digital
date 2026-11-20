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
  Star,
  Award,
  Camera,
  Globe,
  Briefcase,
  Trophy,
  Users,
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  Landmark,
  ShieldCheck,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

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
    { year: 'Childhood', icon: Heart, title: "Father's Fine Art Influence", desc: "Father was a renowned fine art artist — art and aesthetics were part of everyday life, sparking a lifelong passion." },
    { year: '1990s', icon: Camera, title: 'Vishnu Studio — First Steps', desc: 'Spent school holidays at Vishnu Studio, Bangalore, learning the craft of photography from the ground up.' },
    { year: '1990s', icon: Star, title: "Assistant to Wasim Khan", desc: "Worked as assistant to the legendary photographer Wasim Khan — one of India's finest — gaining world-class training." },
    { year: 'Early 2000s', icon: Briefcase, title: 'Printing → Photography', desc: 'Started career in the printing industry, then made a bold shift to professional photography full-time.' },
    { year: '2000s', icon: Globe, title: 'Studio + B.Com Degree', desc: 'Worked at 2 professional studios while completing a B.Com degree — freelancing simultaneously to build a client base.' },
    { year: '2006', icon: Award, title: 'VP — Bangalore Photography Assoc.', desc: 'Elected Vice President of Bangalore Photography Association — recognized as a leader in the Bangalore photo community.' },
    { year: '2006–2015', icon: Users, title: 'VIP & Political Clients', desc: 'Personal photographer for Former CM S M Krishna, MLA MTB Nagaraj family, MLA Krishnappa, MLA Somanna & more.' },
    { year: 'Ongoing', icon: Trophy, title: 'Rajkumar Memorial Events', desc: "Documented the legendary Dr. Rajkumar memorial events — a priceless record of Karnataka's cultural legacy." },
    { year: '2022', icon: Star, title: 'Karnataka Chayarathna', desc: 'Honoured with the prestigious Karnataka Chayarathna award by Photo Today magazine — highest recognition in Karnataka photography.' },
  ];

  const workExperience = [
    { role: 'Apprentice — Vishnu Studio', period: '1990s', icon: Camera, color: 'from-blue-600 to-blue-400', desc: 'Learned foundational photography during school holidays at Vishnu Studio, Bangalore.' },
    { role: 'Assistant — Wasim Khan', period: '1990s', icon: Star, color: 'from-purple-600 to-purple-400', desc: 'Worked under renowned photographer Wasim Khan; gained advanced technical and creative mastery.' },
    { role: 'Printing Industry', period: 'Early career', icon: Briefcase, color: 'from-gray-600 to-gray-400', desc: 'Began career in the printing industry before decisively transitioning to photography full-time.' },
    { role: 'Studio Photographer (2 Studios)', period: '2000s', icon: Globe, color: 'from-teal-600 to-teal-400', desc: 'Worked at two photography studios while pursuing B.Com and freelancing simultaneously.' },
    { role: 'Personal Photographer — S N Nithesh Vasthu', period: '2000s–Present', icon: Users, color: 'from-orange-600 to-orange-400', desc: 'Appointed dedicated personal photographer — a mark of exceptional trust and professionalism.' },
    { role: 'Family Photographer — MLA MTB Nagaraj', period: '2000s–Present', icon: Heart, color: 'from-pink-600 to-pink-400', desc: 'Trusted family personal photographer for MLA MTB Nagaraj — Bangalore.' },
    { role: 'Photographer — S M Krishna (Former CM)', period: 'Special Assignments', icon: Award, color: 'from-red-600 to-red-400', desc: 'Worked for the Former Chief Minister of Karnataka — a distinction reserved for only the finest.' },
    { role: 'Founder, Sushma Digital Studio', period: '21+ Years – Present', icon: Trophy, color: 'from-yellow-600 to-yellow-400', desc: "Built Bangalore's trusted photography studio covering weddings, corporate, modelling, events and VIP clientele." },
  ];

  const [selectedAwardIndex, setSelectedAwardIndex] = useState<number | null>(null);
  const [selectedLeaderIndex, setSelectedLeaderIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const awardImages = [
    { id: 'chhaya-ratna', image: awardChhayaRatna, alt: 'Award Photograph 1' },
    { id: 'karnataka-chayarathna-2022', image: awardKarnatakaChayarathna, alt: 'Award Photograph 2' },
    { id: 'chhaya-shree-cert', image: awardChhayaShreeCert, alt: 'Award Photograph 3' },
    { id: 'national-certificate-ncvt', image: awardNationalCertificate, alt: 'National Certificate in Digital Camera Photography — Government of India NCVT' },
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
      desc: "Honoured to have served as personal photographer to one of Karnataka's most distinguished and respected leaders. A partnership built on trust, discretion, and the highest standard of professional excellence.",
      serviceTags: ['Personal Photography', 'Official Events', 'VIP Assignments', 'Confidential Portfolio'],
      icon: Landmark,
      accent: '#258FEA', // Electric Blue
      category: 'VIP Dignitary',
    },
    {
      id: '02',
      name: 'MLA Krishnappa',
      role: 'Member of Legislative Assembly, Bangalore',
      desc: 'Official event and political photography.',
      serviceTags: ['Official Events', 'Political Photography'],
      icon: Landmark,
      accent: '#D92F26', // Signature Red
      category: 'State Assembly',
    },
    {
      id: '03',
      name: 'MLA Somanna',
      role: 'Member of Legislative Assembly, Bangalore',
      desc: 'Official event and political photography.',
      serviceTags: ['Official Events', 'Political Photography'],
      icon: Landmark,
      accent: '#D92F26', // Signature Red
      category: 'State Assembly',
    },
    {
      id: '04',
      name: 'MLA MTB Nagaraj',
      role: 'Member of Legislative Assembly, Bangalore',
      desc: 'Trusted family personal photographer — capturing private moments and official events.',
      serviceTags: ['Family Personal Photography', 'Official Events'],
      icon: ShieldCheck,
      accent: '#D92F26', // Signature Red
      category: 'Personal Retainer',
    },
    {
      id: '05',
      name: 'S N Nithesh Vasthu',
      role: 'Business & Vasthu Consultant',
      desc: 'Appointed as dedicated personal photographer for professional and personal assignments.',
      serviceTags: ['Personal Photography', 'Professional Assignments'],
      icon: Briefcase,
      accent: '#258FEA', // Electric Blue
      category: 'Consultant',
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
      {/* Header */}
      <section className="pt-28 sm:pt-32 lg:pt-28 pb-6 lg:pb-8 hero-diamond-pattern text-center border-b border-[#E2E6EC] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <FadeIn>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-2 block">The Visionary</span>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-serif text-[#142C45] mb-2">Meet Prabhu</h1>
            <p className="text-[#64748B] text-xs sm:text-sm max-w-xl mx-auto">Founder &amp; Lead Photographer &mdash; Sushma Digital Studio, Bangalore</p>
          </FadeIn>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-10 sm:py-12 lg:py-10 xl:py-12 bg-[#FFFFFF] border-b border-[#E2E6EC]">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <FadeIn className="flex justify-center items-center w-full">
              <img
                src={founderImg}
                alt="Prabhu — Founder, Sushma Digital Studio"
                className="w-full max-w-[440px] xl:max-w-[480px] h-auto object-contain rounded-2xl sm:rounded-3xl shadow-xl border border-[#E2E6EC] block"
              />
            </FadeIn>
            <FadeIn delay={0.2} className="lg:pt-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#142C45] mb-1">Prabhu</h2>
              <p className="text-xs uppercase tracking-widest text-[#D92F26] font-semibold mb-4">Lead Photographer &amp; Studio Founder &mdash; 21+ Years</p>
              <div className="space-y-3 text-[#475569] leading-relaxed text-xs sm:text-sm">
                <p className="text-base sm:text-lg italic font-serif text-[#142C45] border-l-2 border-[#258FEA] pl-3">
                  "Photography isn't about cameras and lenses. It's about capturing the soul of a moment before it's gone forever."
                </p>
                <p>
                  Prabhu's love for photography was kindled by his father, a respected fine art artist. Growing up surrounded by art, he spent his school holidays at <strong className="text-[#142C45]">Vishnu Studio, Bangalore</strong> &mdash; absorbing every technical detail, every ray of light, every composition principle he could find.
                </p>
                <p>
                  He began his professional career in the printing industry, before making a decisive shift to photography full-time. He worked at two reputed studios and pursued his <strong className="text-[#142C45]">B.Com degree simultaneously</strong> &mdash; freelancing throughout college to sharpen his commercial edge.
                </p>
                <p>
                  One of his most formative experiences was working as an assistant to the celebrated <strong className="text-[#142C45]">Wasim Khan</strong> &mdash; a legendary name in Indian photography &mdash; in the 1990s. That mentorship shaped the precision and artistry that defines Prabhu's work today.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
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

      {/* Stats — Editorial Soft Grey Band */}
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
          DISTINGUISHED CLIENTELE — Premium Light Theme
      ══════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 lg:py-10 bg-[#FFFFFF] border-b border-[#E2E6EC] relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          {/* Section Heading — Compact & Editorial */}
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
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-4.5 items-stretch">
            {distinguishedClients.map((client, i) => (
              <FadeIn key={client.id} delay={i * 0.05} className="h-full">
                <div className="group relative rounded-xl border border-[#E2E6EC] bg-[#FFFFFF] p-5 sm:p-5.5 h-full flex flex-col justify-between shadow-[0_2px_8px_rgba(20,44,69,0.04)] hover:shadow-[0_8px_20px_rgba(20,44,69,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Subtle top hairline accent detail */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] transition-colors duration-300"
                    style={{ backgroundColor: client.accent }}
                  />

                  <div>
                    {/* Small minimal line icon / subtle visual identifier */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-8 h-8 rounded-lg bg-[#F5F6F8] border border-[#E2E6EC] flex items-center justify-center transition-colors"
                        style={{ color: client.accent }}
                      >
                        <client.icon size={16} strokeWidth={1.75} />
                      </div>
                      <span className="font-mono text-[10px] text-[#64748B]/60 tracking-wider font-semibold">
                        {client.id}
                      </span>
                    </div>

                    {/* Client Name in Deep Navy */}
                    <h3 className="font-serif font-bold text-[#142C45] text-base sm:text-lg tracking-tight mb-1.5 leading-snug">
                      {client.name}
                    </h3>

                    {/* Professional Designation in Signature Red or Electric Blue */}
                    <p
                      className="text-xs font-semibold leading-relaxed"
                      style={{ color: client.accent }}
                    >
                      {client.role}
                    </p>
                  </div>

                  {/* Subtle bottom detail */}
                  <div className="border-t border-[#E2E6EC]/60 pt-3 mt-4 flex items-center justify-between text-[11px] text-[#64748B]">
                    <span className="tracking-wider uppercase text-[10px] font-medium text-[#64748B]/70">
                      {client.category}
                    </span>
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-125"
                      style={{ backgroundColor: client.accent }}
                    />
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
            <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E2E6EC] mb-4 shadow-sm">
              <Trophy size={16} className="text-[#D92F26]" />
              <span className="text-[#142C45] text-xs uppercase tracking-widest font-semibold">Legacy Photography</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#142C45]">Dr. Rajkumar Memorial Events</h2>
            <p className="text-[#475569] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Among Prabhu's most significant achievements is photographing the legendary Dr. Rajkumar memorial events &mdash; preserving Karnataka's greatest cultural icon through the art of photography.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          JOURNEY — Compact two-column vertical stepper
      ══════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-10 xl:py-12 bg-[#FFFFFF] border-b border-[#E2E6EC] overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <FadeIn className="text-center mb-8 sm:mb-10">
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.2em] mb-2 block font-semibold">The Story</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#142C45] mb-2">The Journey</h2>
            <div className="w-12 h-0.5 bg-[#D92F26] mx-auto" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 + Math.floor(i / 2) * 0.07, duration: 0.45 }}
                className="flex gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F5F6F8] border border-[#E2E6EC] hover:border-[#258FEA]/50 transition-colors group shadow-sm"
              >
                <div className="shrink-0 mt-1">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E6EC] flex items-center justify-center text-[#258FEA] group-hover:text-[#D92F26] group-hover:border-[#D92F26] transition-colors shadow-sm">
                    <item.icon size={16} />
                  </div>
                </div>
                <div>
                  <span className="text-[#D92F26] text-[10px] font-bold uppercase tracking-widest">{item.year}</span>
                  <h4 className="font-serif text-sm font-semibold text-[#142C45] mt-0.5 mb-1 leading-snug">{item.title}</h4>
                  <p className="text-[#475569] text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WORK EXPERIENCE — Card Grid
      ══════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-10 xl:py-12 hero-diamond-pattern border-b border-[#E2E6EC] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <FadeIn className="text-center mb-8 sm:mb-10">
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.2em] mb-2 block font-semibold">Career Path</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#142C45] mb-2">Work Experience</h2>
            <div className="w-12 h-0.5 bg-[#D92F26] mx-auto" />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workExperience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative group rounded-xl bg-white border border-[#E2E6EC] p-6 overflow-hidden hover:border-[#258FEA]/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D92F26] to-[#258FEA] opacity-70 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-[#F5F6F8] border border-[#E2E6EC] flex items-center justify-center mb-4 text-[#258FEA] shadow-sm">
                  <exp.icon size={18} />
                </div>

                {/* Period badge */}
                <div className="inline-flex items-center bg-[#F5F6F8] border border-[#E2E6EC] rounded-full px-2.5 py-0.5 mb-3">
                  <span className="text-[#64748B] text-[9px] uppercase tracking-widest font-semibold">{exp.period}</span>
                </div>

                <h3 className="text-[#142C45] font-bold text-sm leading-snug mb-2 group-hover:text-[#D92F26] transition-colors">{exp.role}</h3>
                <p className="text-[#475569] text-xs leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HONORS & PRESTIGIOUS AWARDS — Minimalist Gallery
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
          TRUSTED BY LEADERS — Floating Photo Collage
      ══════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-8 xl:py-10 bg-[#FFFFFF] border-b border-[#E2E6EC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          {/* Rounded outer section canvas with hero diamond pattern background */}
          <div className="rounded-3xl sm:rounded-[2.5rem] lg:rounded-[36px] hero-diamond-pattern border border-[#E2E6EC] p-5 sm:p-8 lg:p-6 xl:p-8 relative overflow-hidden shadow-[0_8px_30px_rgba(20,44,69,0.04)] min-h-[560px] lg:min-h-[520px] xl:min-h-[550px] flex items-center">
            
            {/* Desktop Staggered Floating Collage (lg and xl) */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-5 xl:gap-6 items-center w-full">
              {/* Left Wing — 7 Balanced Photographs in 2 Asymmetric Staggered Columns */}
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

              {/* Right Wing — 8 Balanced Photographs in 2 Asymmetric Staggered Columns */}
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
