import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import React, { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { BLOG_POSTS } from '@/data/blog';
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, Tag, CheckCircle2, User } from 'lucide-react';
import NotFound from './NotFound';
import { assetUrl } from '@/lib/utils';

export default function BlogPostDetail() {
  const params = useParams<{ id: string }>();
  const postId = Number(params?.id);
  const post = BLOG_POSTS.find((p) => p.id === postId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [postId]);

  if (!post || isNaN(postId)) {
    return <NotFound />;
  }

  // Related articles (other posts in same or general category)
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);
  const prevPost = BLOG_POSTS.find((p) => p.id === post.id - 1);
  const nextPost = BLOG_POSTS.find((p) => p.id === post.id + 1);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <PageTransition>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`https://sushmadigitalstudio.com/blog/${post.id}`}
        ogType="article"
        image={post.image}
      />

      {/* JSON-LD Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: post.author?.name || 'Prabhu',
              jobTitle: 'Lead Photographer & Founder',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Sushma Digital Studio',
              logo: {
                '@type': 'ImageObject',
                url: 'https://sushmadigitalstudio.com/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://sushmadigitalstudio.com/blog/${post.id}`,
            },
          }),
        }}
      />

      {/* Article Header & Breadcrumbs */}
      <section className="pt-32 sm:pt-36 lg:pt-40 pb-8 hero-triangular-pattern border-b border-[#E2E6EC] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl relative z-10">
          <FadeIn>
            {/* Breadcrumb Navigation */}
            <Breadcrumbs
              items={[
                { label: 'Journal', href: '/blog' },
                { label: post.title },
              ]}
              className="mb-6"
            />

            {/* Category & Metadata */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="bg-[#D92F26] text-white text-[11px] uppercase tracking-widest font-bold px-3 py-1 rounded-md shadow-sm">
                {post.category}
              </span>
              <span className="text-xs text-[#64748B] flex items-center gap-1.5">
                <Calendar size={13} className="text-[#258FEA]" />
                {post.date}
              </span>
              <span className="text-xs text-[#64748B] flex items-center gap-1.5">
                <Clock size={13} className="text-[#258FEA]" />
                {post.readTime}
              </span>
            </div>

            {/* Main Article Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#142C45] font-bold leading-tight mb-5">
              {post.title}
            </h1>

            {/* Excerpt / Lead Paragraph */}
            <p className="text-[#475569] text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {post.excerpt}
            </p>

            {/* Author Byline & Share */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#E2E6EC]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#142C45] text-white flex items-center justify-center font-serif font-bold text-sm">
                  P
                </div>
                <div>
                  <p className="text-xs font-bold text-[#142C45]">{post.author?.name || 'Prabhu'}</p>
                  <p className="text-[11px] text-[#64748B]">{post.author?.role || 'Founder, Sushma Digital Studio'}</p>
                </div>
              </div>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#142C45] hover:text-[#D92F26] transition-colors self-start sm:self-auto cursor-pointer"
              >
                <Share2 size={14} className="text-[#258FEA]" />
                Share Article
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Cover Image */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#E2E6EC] shadow-md bg-[#F5F6F8]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article Body Content */}
      <article className="py-4 pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-3xl">
          <FadeIn>
            {/* Key Takeaways Callout */}
            {post.takeaways && post.takeaways.length > 0 && (
              <div className="mb-10 p-6 sm:p-7 rounded-xl bg-[#F8F9FB] border-l-4 border-[#D92F26] border border-[#E2E6EC] shadow-sm">
                <h2 className="font-serif text-lg font-bold text-[#142C45] mb-3 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#D92F26]" />
                  Key Takeaways for Couples &amp; Clients
                </h2>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {post.takeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#258FEA] shrink-0 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sections */}
            <div className="space-y-10 text-[#334155] leading-relaxed text-sm sm:text-base">
              {post.sections?.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#142C45] pt-2">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Tags */}
            {post.tags && (
              <div className="mt-12 pt-6 border-t border-[#E2E6EC] flex items-center gap-2 flex-wrap">
                <Tag size={14} className="text-[#64748B]" />
                <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mr-2">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#F5F6F8] border border-[#E2E6EC] text-[#475569] px-3 py-1 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author Profile Box */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F5F6F8] border border-[#E2E6EC] flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#142C45] text-white flex items-center justify-center font-serif font-bold text-2xl shadow-md shrink-0">
                P
              </div>
              <div className="text-center sm:text-left">
                <span className="text-[11px] font-bold text-[#D92F26] uppercase tracking-wider block mb-1">
                  About the Author
                </span>
                <h3 className="font-serif text-lg font-bold text-[#142C45] mb-2">
                  Prabhu, Founder, Sushma Digital Studio
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  Honored with the prestigious Karnataka Chayarathna award and Chhaya Ratna honors, Prabhu brings 21+ years of visionary wedding cinematography, high-profile documentary coverage, and broadcast engineering in Bangalore.
                </p>
                <div className="flex gap-3 justify-center sm:justify-start">
                  <Link href="/about" className="text-xs font-semibold text-[#258FEA] hover:underline">
                    Read Studio Story &rarr;
                  </Link>
                  <span className="text-[#CBD5E1]">&bull;</span>
                  <Link href="/portfolio" className="text-xs font-semibold text-[#D92F26] hover:underline">
                    View Portfolio &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="mt-12 pt-6 border-t border-[#E2E6EC] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.id}`}
                  className="p-4 rounded-xl border border-[#E2E6EC] hover:border-[#258FEA] transition-all bg-white group flex flex-col text-left"
                >
                  <span className="text-[11px] text-[#64748B] flex items-center gap-1 mb-1">
                    <ArrowLeft size={12} /> Previous Article
                  </span>
                  <span className="font-serif text-sm font-bold text-[#142C45] group-hover:text-[#258FEA] transition-colors line-clamp-1">
                    {prevPost.title}
                  </span>
                </Link>
              ) : <div />}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.id}`}
                  className="p-4 rounded-xl border border-[#E2E6EC] hover:border-[#258FEA] transition-all bg-white group flex flex-col text-right sm:text-right"
                >
                  <span className="text-[11px] text-[#64748B] flex items-center justify-end gap-1 mb-1">
                    Next Article <ArrowRight size={12} />
                  </span>
                  <span className="font-serif text-sm font-bold text-[#142C45] group-hover:text-[#258FEA] transition-colors line-clamp-1">
                    {nextPost.title}
                  </span>
                </Link>
              ) : <div />}
            </div>
          </FadeIn>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="py-16 bg-[#F8F9FB] border-t border-[#E2E6EC]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#D92F26] mb-2 block">
                Related Reading
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#142C45] font-bold">
                More Perspectives from Our Journal
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs uppercase tracking-wider font-semibold text-[#142C45] hover:text-[#D92F26] flex items-center gap-1.5 transition-colors"
            >
              All Articles <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <FadeIn key={rel.id}>
                <Link
                  href={`/blog/${rel.id}`}
                  className="group flex flex-col bg-white rounded-xl border border-[#E2E6EC] hover:border-[#258FEA]/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F6F8]">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 text-[#142C45] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                      {rel.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#142C45] group-hover:text-[#258FEA] transition-colors line-clamp-2 mb-2">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                        {rel.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#E2E6EC] flex items-center justify-between text-[11px] text-[#64748B]">
                      <span>{rel.readTime}</span>
                      <span className="font-semibold text-[#D92F26] flex items-center gap-1">
                        Read <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Book Session CTA Strip */}
      <section className="py-14 bg-[#142C45] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <FadeIn>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
              Capture Your Celebration with Sushma Digital Studio
            </h2>
            <p className="text-[#D5DFEA] text-xs sm:text-sm leading-relaxed mb-6 max-w-xl mx-auto">
              Reserve your wedding date, commercial shoot, or broadcast production with Prabhu and our seasoned creative crew in Bangalore.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Book a Consultation
              </Link>
              <Link href="/portfolio" className="btn-secondary text-white border-white/30 hover:bg-white/10">
                Explore Portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
