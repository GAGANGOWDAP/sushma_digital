import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import React, { useState } from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { Link } from 'wouter';
import {
  Globe,
  Camera,
  BookOpen,
  HelpCircle,
  Shield,
  FileText,
  Search,
  CheckCircle,
  ExternalLink,
  Layers,
  ChevronRight,
  FolderTree,
  FileCode,
  Radio,
  Tv,
  Users,
  Video,
  Monitor,
  Send,
  Baby,
  Box,
  Star,
  Award,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog';

interface SiteRoute {
  path: string;
  name: string;
  description: string;
  category: string;
  priority: string;
  changefreq: string;
  isExternal?: boolean;
  badge?: string;
  icon?: any;
}

const CATEGORIES = [
  'All',
  'Core Heritage',
  'Services & Production',
  'Portfolio & Visuals',
  'Journal & Articles',
  'Support & Legal',
];

const SITE_SECTIONS: {
  title: string;
  description: string;
  badge: string;
  icon: any;
  routes: SiteRoute[];
}[] = [
    {
      title: 'Core Heritage & Studio',
      description: 'Foundational pages detailing studio heritage, leadership, and contact locations.',
      badge: 'Core Architecture',
      icon: Globe,
      routes: [
        {
          path: '/',
          name: 'Home',
          description: 'Premier studio showcase, founder highlights, clientele list, and featured offerings.',
          category: 'Core Heritage',
          priority: '1.0',
          changefreq: 'weekly',
          badge: 'Root Canonical',
        },
        {
          path: '/about',
          name: 'About Prabhu & Studio Heritage',
          description: '21+ year journey, Wasim Khan mentorship, and State Honors Karnataka Chayarathna.',
          category: 'Core Heritage',
          priority: '0.9',
          changefreq: 'monthly',
        },
        {
          path: '/contact',
          name: 'Studio Location & Contact',
          description: 'Direct studio address in RPC Layout Vijaynagar, Google Maps, and contact inquiries.',
          category: 'Core Heritage',
          priority: '0.9',
          changefreq: 'monthly',
        },
        {
          path: '/book',
          name: 'Date Availability & Booking',
          description: 'Dedicated appointment scheduling and reservation questionnaire for weddings & shoots.',
          category: 'Core Heritage',
          priority: '0.8',
          changefreq: 'monthly',
        },
      ],
    },
    {
      title: 'Specialized Services & Live Production',
      description: 'Comprehensive photography, 4K videography, live broadcasting, and event technology in Bangalore.',
      badge: '9 Core Offerings',
      icon: Camera,
      routes: [
        {
          path: '/services',
          name: 'Services Hub',
          description: 'Comprehensive overview of all 9 specialized studio and live event production offerings.',
          category: 'Services & Production',
          priority: '0.9',
          changefreq: 'monthly',
          badge: 'Hub',
        },
        {
          path: '/services',
          name: 'Pre-Wedding Photography & Videography',
          description: 'Cinematic couple concepts, romantic location scouting, and HD video highlights.',
          category: 'Services & Production',
          priority: '0.8',
          changefreq: 'monthly',
          icon: Camera,
        },
        {
          path: '/services',
          name: 'Photography, Videography & Candid Moments',
          description: 'Complete ceremony documentation combining traditional rigor with emotional candid capture.',
          category: 'Services & Production',
          priority: '0.8',
          changefreq: 'monthly',
          icon: Video,
        },
        {
          path: '/services',
          name: 'Baby Photo Shoot & Portfolios',
          description: 'Milestone baby photography, newborn portraits, and high-fashion modelling lookbooks.',
          category: 'Services & Production',
          priority: '0.8',
          changefreq: 'monthly',
          icon: Baby,
        },
        {
          path: '/services',
          name: 'Matrimony Photography',
          description: 'Refined personal profile and matrimony portraits celebrating individual elegance.',
          category: 'Services & Production',
          priority: '0.8',
          changefreq: 'monthly',
          icon: Users,
        },
        {
          path: '/services',
          name: 'Webcast Live Streaming',
          description: 'Global HD online broadcasting for weddings and conferences accessible worldwide.',
          category: 'Services & Production',
          priority: '0.8',
          changefreq: 'monthly',
          icon: Radio,
        },
        {
          path: '/services',
          name: 'HD Live Video Mixing',
          description: 'Broadcast-grade multi-camera vision switcher control and real-time lower-third graphics.',
          category: 'Services & Production',
          priority: '0.8',
          changefreq: 'monthly',
          icon: Tv,
        },
        {
          path: '/services',
          name: '360 Degree VR Videos',
          description: 'Immersive virtual reality capture providing interactive 3D spatial event experiences.',
          category: 'Services & Production',
          priority: '0.8',
          changefreq: 'monthly',
          icon: Box,
        },
        {
          path: '/services',
          name: 'LED Wall Live Display',
          description: 'High-resolution indoor and outdoor P2/P3 LED screen rentals and seamless live video feeds.',
          category: 'Services & Production',
          priority: '0.8',
          changefreq: 'monthly',
          icon: Monitor,
        },
        {
          path: '/services',
          name: 'Drone Camera Aerial Videography',
          description: 'Licensed 4K drone aerial sweeps capturing magnificent scale across outdoor venues.',
          category: 'Services & Production',
          priority: '0.8',
          changefreq: 'monthly',
          icon: Send,
        },
      ],
    },
    {
      title: 'Visual Showcase & Clientele',
      description: 'Curated galleries, transparent pricing structures, client feedback, and state honors.',
      badge: 'Portfolio Showcase',
      icon: Sparkles,
      routes: [
        {
          path: '/portfolio',
          name: 'Curated Portfolio',
          description: 'Categorized gallery of royal weddings, couple portraits, emotional candid shots, and events.',
          category: 'Portfolio & Visuals',
          priority: '0.9',
          changefreq: 'weekly',
          badge: 'Featured Work',
        },
        {
          path: '/gallery',
          name: 'Full High-Res Gallery',
          description: 'Unfiltered collection of high-resolution captures across wedding and portrait collections.',
          category: 'Portfolio & Visuals',
          priority: '0.8',
          changefreq: 'weekly',
        },
        {
          path: '/testimonials',
          name: 'Client Reviews & State Honors',
          description: 'Endorsements from high-profile leaders, Karnataka honors, and verified client testimonials.',
          category: 'Portfolio & Visuals',
          priority: '0.8',
          changefreq: 'monthly',
        },
        {
          path: '/pricing',
          name: 'Investment & Pricing Packages',
          description: 'Transparent investment tiers for wedding cinematography, portraiture, and live mixing.',
          category: 'Portfolio & Visuals',
          priority: '0.8',
          changefreq: 'monthly',
        },
      ],
    },
    {
      title: 'Photography Journal & Editorial Guides',
      description: 'In-depth perspectives on wedding lighting, muhurtham timelines, and studio technology.',
      badge: '8 Articles Published',
      icon: BookOpen,
      routes: [
        {
          path: '/blog',
          name: 'Journal Hub',
          description: 'Complete index of articles, technical guides, and behind-the-scenes studio insights.',
          category: 'Journal & Articles',
          priority: '0.8',
          changefreq: 'weekly',
          badge: 'Blog Index',
        },
        ...BLOG_POSTS.map((post) => ({
          path: `/blog/${post.id}`,
          name: post.title,
          description: post.excerpt,
          category: 'Journal & Articles',
          priority: '0.7',
          changefreq: 'monthly',
          badge: post.category,
        })),
      ],
    },
    {
      title: 'Support, Legal & Technical Discovery',
      description: 'Frequently asked questions, privacy policies, client terms, and crawler endpoints.',
      badge: 'Technical & Legal',
      icon: Shield,
      routes: [
        {
          path: '/faq',
          name: 'Frequently Asked Questions',
          description: 'Clear answers regarding booking timelines, travel, equipment, and heirloom album design.',
          category: 'Support & Legal',
          priority: '0.8',
          changefreq: 'monthly',
        },
        {
          path: '/sitemap',
          name: 'Visual Website Sitemap',
          description: 'Hierarchical navigation architecture and directory of all pages across the website.',
          category: 'Support & Legal',
          priority: '0.7',
          changefreq: 'monthly',
          badge: 'Current Page',
        },
        {
          path: '/privacy',
          name: 'Privacy Policy',
          description: 'Data protection standards, image licensing rights, and client confidentiality terms.',
          category: 'Support & Legal',
          priority: '0.3',
          changefreq: 'yearly',
        },
        {
          path: '/terms',
          name: 'Terms of Service',
          description: 'Service agreement, delivery timelines, payment milestones, and studio booking policies.',
          category: 'Support & Legal',
          priority: '0.3',
          changefreq: 'yearly',
        },
        {
          path: '/sitemap.xml',
          name: 'Technical XML Sitemap',
          description: 'Official search engine XML sitemap adhering to sitemaps.org protocol for indexation.',
          category: 'Support & Legal',
          priority: 'N/A',
          changefreq: 'auto',
          isExternal: true,
          badge: 'XML Protocol',
        },
        {
          path: '/robots.txt',
          name: 'Crawler Directives (robots.txt)',
          description: 'Root search engine crawler access policies and official XML sitemap declaration.',
          category: 'Support & Legal',
          priority: 'N/A',
          changefreq: 'auto',
          isExternal: true,
          badge: 'Robots.txt',
        },
      ],
    },
  ];

export default function Sitemap() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allRoutes = SITE_SECTIONS.flatMap((s) => s.routes);

  // Filter sections based on category and search query
  const filteredSections = SITE_SECTIONS.map((section) => {
    const matchesCategory =
      activeCategory === 'All' ||
      section.title.toLowerCase().includes(activeCategory.toLowerCase()) ||
      section.routes.some((r) => r.category === activeCategory);

    if (!matchesCategory) return null;

    const filteredRoutes = section.routes.filter((route) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        route.name.toLowerCase().includes(q) ||
        route.path.toLowerCase().includes(q) ||
        route.description.toLowerCase().includes(q)
      );
    });

    if (filteredRoutes.length === 0) return null;

    return {
      ...section,
      routes: filteredRoutes,
    };
  }).filter(Boolean) as typeof SITE_SECTIONS;

  return (
    <PageTransition>
      <SEO
        title="Visual Website Sitemap & Architecture"
        description="Explore the complete visual website sitemap and hierarchical architecture of Sushma Digital Studio discovering all wedding photography services, portfolios, journal articles, and technical links."
        canonical="https://sushmadigitalstudio.com/sitemap"
      />

      {/* Hero Header */}
      <section className="pt-36 sm:pt-40 pb-12 hero-triangular-pattern text-center relative overflow-hidden border-b border-[#E2E6EC]">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="flex justify-center mb-4">
              <Breadcrumbs />
            </div>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.25em] font-semibold mb-3 block">
              Sushma Digital Studio &bull; Site Architecture &amp; Directory
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4">
              Visual Website Sitemap &amp; Hierarchy
            </h1>
            <p className="text-[#64748B] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              A comprehensive directory of all public pages, specialized production services, curated portfolios, and editorial guides across Sushma Digital Studio.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-200 rounded-md font-semibold cursor-pointer ${activeCategory === cat
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

      {/* Search & Architecture Overview Bar */}
      <section className="py-6 bg-[#F8F9FB] border-b border-[#E2E6EC]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
              <input
                type="text"
                placeholder="Search page name, route path, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-[#E2E6EC] rounded-lg text-xs sm:text-sm text-[#142C45] placeholder-[#94A3B8] focus:outline-none focus:border-[#258FEA] transition-colors shadow-sm"
              />
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs text-[#64748B] flex-wrap justify-center md:justify-end">
              <span className="flex items-center gap-1.5">
                <FolderTree size={14} className="text-[#258FEA]" />
                <strong className="text-[#142C45]">5</strong> Main Sections
              </span>
              <span className="text-[#CBD5E1]">&bull;</span>
              <span className="flex items-center gap-1.5">
                <FileCode size={14} className="text-[#D92F26]" />
                <strong className="text-[#142C45]">{allRoutes.length}</strong> Registered Pages
              </span>
              <span className="text-[#CBD5E1]">&bull;</span>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#258FEA] hover:underline font-semibold flex items-center gap-1"
              >
                XML Sitemap <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hierarchical Sitemap Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          {/* Root Node Display */}
          <FadeIn className="mb-12">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#142C45] to-[#1E3A5A] text-white shadow-lg relative overflow-hidden border border-[#2B4B70]">
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#D92F26] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded">
                      Root Domain
                    </span>
                    <span className="text-xs text-[#93C5FD]">Canonical Origin</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                    https://sushmadigitalstudio.com/
                  </h2>
                  <p className="text-xs sm:text-sm text-[#D5DFEA] mt-1 max-w-xl">
                    Bangalore's premier photography &amp; live production studio led by State Honor Karnataka Chayarathna awardee Prabhu.
                  </p>
                </div>
                <Link
                  href="/"
                  className="px-5 py-2.5 bg-white text-[#142C45] hover:bg-[#D92F26] hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all self-start sm:self-auto shrink-0 shadow"
                >
                  Visit Homepage &rarr;
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Section Branches */}
          <div className="space-y-12">
            {filteredSections.map((section, sIdx) => {
              const SectionIcon = section.icon;
              return (
                <FadeIn key={sIdx} delay={sIdx * 0.05}>
                  <div className="border border-[#E2E6EC] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                    {/* Section Header */}
                    <div className="p-5 sm:p-6 bg-[#F8F9FB] border-b border-[#E2E6EC] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E6EC] text-[#D92F26] flex items-center justify-center shadow-sm shrink-0">
                          <SectionIcon size={18} />
                        </div>
                        <div>
                          <h2 className="font-serif text-lg sm:text-xl font-bold text-[#142C45]">
                            {section.title}
                          </h2>
                          <p className="text-xs text-[#64748B] mt-0.5">{section.description}</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#258FEA] bg-white border border-[#258FEA]/30 px-3 py-1 rounded-full self-start sm:self-auto">
                        {section.badge}
                      </span>
                    </div>

                    {/* Section Route Cards Grid */}
                    <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.routes.map((route, rIdx) => {
                        const isExt = route.isExternal;
                        const CardWrapper = isExt ? 'a' : Link;
                        const linkProps = isExt
                          ? { href: route.path, target: '_blank', rel: 'noopener noreferrer' }
                          : { href: route.path };

                        return (
                          <CardWrapper
                            key={rIdx}
                            {...(linkProps as any)}
                            className="group p-4 rounded-xl border border-[#E2E6EC] hover:border-[#258FEA] hover:bg-[#F8FAFC] transition-all duration-200 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="font-mono text-xs font-semibold text-[#258FEA] bg-[#EFF6FD] px-2 py-0.5 rounded border border-[#BFDBFE]">
                                  {route.path}
                                </span>
                                {route.badge && (
                                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F1F5F9] text-[#475569] border border-[#E2E6EC]">
                                    {route.badge}
                                  </span>
                                )}
                              </div>
                              <h3 className="font-serif text-base font-bold text-[#142C45] group-hover:text-[#D92F26] transition-colors flex items-center justify-between">
                                <span>{route.name}</span>
                                <ChevronRight size={14} className="text-[#CBD5E1] group-hover:text-[#D92F26] group-hover:translate-x-1 transition-all" />
                              </h3>
                              <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                                {route.description}
                              </p>
                            </div>

                            <div className="mt-3 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[10px] text-[#94A3B8]">
                              <span>Priority: {route.priority}</span>
                              <span className="capitalize">Frequency: {route.changefreq}</span>
                            </div>
                          </CardWrapper>
                        );
                      })}
                    </div>
                  </div>
                </FadeIn>
              );
            })}

            {filteredSections.length === 0 && (
              <div className="text-center py-16 bg-[#F8F9FB] rounded-2xl border border-[#E2E6EC]">
                <HelpCircle size={32} className="mx-auto text-[#64748B] mb-2" />
                <h3 className="font-serif text-lg font-bold text-[#142C45]">No matching pages found</h3>
                <p className="text-xs text-[#64748B] mt-1">Try clearing your search query or selecting "All" categories.</p>
              </div>
            )}
          </div>

          {/* Technical Architecture & SEO Summary Box */}
          <FadeIn className="mt-14">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F9FB] border border-[#E2E6EC]">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={18} className="text-[#D92F26]" />
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#142C45]">
                  Technical SEO &amp; Crawling Protocol Compliance
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                All URLs listed in this sitemap resolve to valid 200 OK responses, use canonical HTTPS URLs under the official production domain, and are published to search engine crawlers via our XML sitemap and robots.txt directives.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-[#E2E6EC]">
                  <strong className="block text-[#142C45] mb-0.5">XML Sitemap</strong>
                  <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-[#258FEA] hover:underline flex items-center gap-1 font-mono text-[11px]">
                    /sitemap.xml <ExternalLink size={10} />
                  </a>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-[#E2E6EC]">
                  <strong className="block text-[#142C45] mb-0.5">Robots.txt</strong>
                  <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="text-[#258FEA] hover:underline flex items-center gap-1 font-mono text-[11px]">
                    /robots.txt <ExternalLink size={10} />
                  </a>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-[#E2E6EC]">
                  <strong className="block text-[#142C45] mb-0.5">Canonical Protocol</strong>
                  <span className="text-[#64748B] font-mono text-[11px]">https://sushmadigitalstudio.com</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
