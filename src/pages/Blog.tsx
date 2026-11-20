import React, { useState } from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { Link } from 'wouter';
import { Clock, ArrowRight } from 'lucide-react';

const categories = ['All', 'Photography Tips', 'Wedding Planning', 'Behind the Scenes', 'Client Guides', 'Studio Updates'];

const posts = [
  {
    id: 1,
    title: 'The Art of Chiaroscuro in Modern Portraiture',
    category: 'Photography Tips',
    date: 'Oct 12, 2024',
    readTime: '7 min read',
    excerpt: 'Exploring how classical fine art painting principles elevate modern studio portraits through intentional shadow placement and dramatic lighting ratios.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Structuring Your Traditional Wedding Photography Timeline',
    category: 'Wedding Planning',
    date: 'Sep 28, 2024',
    readTime: '9 min read',
    excerpt: 'A comprehensive guide to planning muhurtham and reception schedules to capture sacred rituals with optimal cinematic lighting.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Why 4K Multi-Camera Live Mixing Transforms Grand Celebrations',
    category: 'Behind the Scenes',
    date: 'Sep 15, 2024',
    readTime: '6 min read',
    excerpt: 'An inside look at how our broadcast-grade switcher systems, LED wall feeds, and live webcasting connect loved ones across the globe.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Candid Posing & Natural Expression for Couples',
    category: 'Client Guides',
    date: 'Aug 30, 2024',
    readTime: '5 min read',
    excerpt: 'How Prabhu directs couples to achieve authentic, graceful poses without feeling stiff or self-conscious in front of the camera.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'The Magic of Pre-Wedding Outdoor Sessions',
    category: 'Wedding Planning',
    date: 'Aug 12, 2024',
    readTime: '4 min read',
    excerpt: 'Why an outdoor engagement session builds natural comfort between the couple and the photography crew ahead of the big day.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Archival Heirlooms: Selecting Your Fine-Art Album Materials',
    category: 'Studio Updates',
    date: 'Jul 22, 2024',
    readTime: '3 min read',
    excerpt: 'A showcase of metallic photographic papers, genuine leather bindings, and presentation boxes designed to endure generations.',
    image: 'https://images.unsplash.com/photo-1544396821-4dd40b9388c4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Golden Hour: Mastering Dramatic Natural Light',
    category: 'Photography Tips',
    date: 'Jul 5, 2024',
    readTime: '6 min read',
    excerpt: 'The fleeting window of sunset magic &mdash; exactly how our team scouts locations to capitalize on warm atmospheric backlighting.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Behind the Color Grading: Crafting the Sushma Aesthetic',
    category: 'Behind the Scenes',
    date: 'Jun 18, 2024',
    readTime: '8 min read',
    excerpt: 'A technical overview of our post-production pipeline &mdash; from raw sensor data to the rich, contrast-balanced cinematic finish.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = posts.find(p => p.featured);
  const filteredPosts = posts
    .filter(p => !p.featured)
    .filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-36 sm:pt-40 pb-12 bg-[#F5F6F8] text-center border-b border-[#E2E6EC]">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-3 block">
              Insights &amp; Stories
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4">Studio Journal</h1>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              Perspectives on photographic lighting, wedding heritage, video engineering &amp; visual storytelling.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <div className="bg-white/95 border-b border-[#E2E6EC] sticky top-[60px] sm:top-[68px] z-20 backdrop-blur-md">
        <div className="container mx-auto px-6 overflow-x-auto">
          <div className="flex gap-2 py-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`blog-filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
                className={`px-4 py-1.5 rounded-md text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#D92F26] text-white shadow-md shadow-[#D92F26]/20'
                    : 'text-[#64748B] hover:text-[#142C45] hover:bg-[#F5F6F8]'
                }`}
              >
                {cat}
                {cat === 'All' && <span className="ml-1.5 text-[10px] opacity-70">({posts.length})</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 pb-32 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">

          {/* Featured Post */}
          {featured && (activeCategory === 'All' || activeCategory === featured.category) && (
            <FadeIn className="mb-12">
              <Link
                href={`/blog/${featured.id}`}
                className="group block w-full bg-white border border-[#E2E6EC] hover:border-[#258FEA]/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md rounded-xl"
              >
                <div className="relative w-full overflow-hidden" style={{ height: 'clamp(260px, 36vw, 460px)' }}>
                  <span className="absolute top-5 left-5 z-10 bg-[#D92F26] text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold rounded-md shadow-md">
                    Featured
                  </span>
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142C45]/90 via-[#142C45]/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-[10px] font-bold text-[#258FEA] uppercase tracking-widest bg-white/90 border border-[#258FEA]/30 px-2.5 py-0.5 rounded-md">
                        {featured.category}
                      </span>
                      <span className="text-xs text-white/90 flex items-center gap-1">
                        <Clock size={12} /> {featured.readTime}
                      </span>
                      <span className="text-xs text-white/80">{featured.date}</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-4xl text-white mb-0 leading-snug group-hover:text-white transition-colors">
                      {featured.title}
                    </h2>
                  </div>
                </div>
                
                <div className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#E2E6EC] bg-white">
                  <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-2xl line-clamp-2">
                    {featured.excerpt}
                  </p>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#D92F26] flex items-center gap-2 group-hover:gap-3 transition-all whitespace-nowrap shrink-0">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          )}

          {/* Remaining Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <FadeIn key={post.id} delay={0.05} className="group">
                <Link
                  href={`/blog/${post.id}`}
                  className="flex flex-col sm:flex-row bg-white border border-[#E2E6EC] hover:border-[#258FEA]/50 transition-all duration-300 overflow-hidden rounded-xl h-full shadow-sm hover:shadow-md"
                  data-testid={`blog-card-${post.id}`}
                >
                  <div className="relative w-full sm:w-48 aspect-[16/10] sm:aspect-auto flex-shrink-0 overflow-hidden bg-[#F5F6F8]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col justify-between p-5 flex-grow">
                    <div>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-[10px] uppercase tracking-widest text-[#258FEA] font-bold">
                          {post.category}
                        </span>
                        <span className="text-[10px] text-[#64748B] flex items-center gap-1">
                          <Clock size={10} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-serif text-base font-bold text-[#142C45] mb-2 leading-snug group-hover:text-[#258FEA] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#E2E6EC] text-xs">
                      <span className="text-[#64748B]">{post.date}</span>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D92F26] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        Read <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-[#64748B]">
              <p className="font-serif text-xl">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
