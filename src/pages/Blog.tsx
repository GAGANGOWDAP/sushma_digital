import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import React, { useState } from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { Link } from 'wouter';
import { Clock, ArrowRight } from 'lucide-react';
import { FAQSection } from '@/components/common/FAQSection';
import { BLOG_CATEGORIES, BLOG_POSTS } from '@/data/blog';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = BLOG_POSTS.find(p => p.featured);
  const filteredPosts = BLOG_POSTS
    .filter(p => !p.featured)
    .filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <PageTransition>
      <SEO
        title="Photography Journal & Insights"
        description="Read wedding photography tips, Bangalore photoshoot location guides, ritual timeline advice, and lighting insights from 21+ years of professional photography on the Sushma Digital Studio Journal."
        canonical="https://sushmadigitalstudio.com/blog"
      />
      {/* Header */}
      <section className="pt-36 sm:pt-40 pb-12 hero-triangular-pattern text-center border-b border-[#E2E6EC] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <FadeIn>
            <div className="flex justify-center mb-4">
              <Breadcrumbs />
            </div>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-3 block">
              Insights &amp; Stories
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4">
              Photography Journal &amp; Wedding Guides
            </h1>
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
            {BLOG_CATEGORIES.map((cat) => (
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
                {cat === 'All' && <span className="ml-1.5 text-[10px] opacity-70">({BLOG_POSTS.length})</span>}
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
          <h2 className="sr-only">Recent Articles &amp; Photography Insights</h2>
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

      {/* Journal & Editorial FAQ */}
      <FAQSection
        subtitle="Journal & Guidance"
        title="Photography Tips & Planning FAQ"
        description="Helpful guidance for wedding schedule planning, photoshoot preparation, lighting advice, and feature submissions."
        items={[
          {
            q: 'What insights and advice are shared on the Sushma Studio Journal?',
            a: 'Our journal provides practical guides for wedding planning in Bangalore, muhurtham timing advice, pre-wedding location scouting tips, and technical lighting insights from 21+ years behind the lens.',
          },
          {
            q: 'Can couples submit their wedding stories to be featured on the blog?',
            a: 'Yes! We love celebrating our couples. If Prabhu documented your wedding or celebration, contact our editorial team to have your love story featured in our visual journal.',
          },
          {
            q: 'What are the best locations in Bangalore for a pre-wedding shoot?',
            a: 'From heritage architecture like Bangalore Palace and Sheshadri Iyer Memorial to scenic spots in Nandi Hills, Kanakapura resorts, and studio sets, we guide you to optimal locations based on your concept.',
          },
          {
            q: 'Do you offer consultation on wedding lighting and stage design for optimal photos?',
            a: 'Yes. We frequently consult with couples and wedding decorators regarding stage lighting temperatures, LED positioning, and backdrop hues to ensure photos look cinematic and flattering.',
          },
        ]}
      />
    </PageTransition>
  );
}
