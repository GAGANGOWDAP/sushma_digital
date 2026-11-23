import type { BlogPost, BlogCategory } from '@/types/blog';

export const BLOG_CATEGORIES: BlogCategory[] = [
  'All',
  'Photography Tips',
  'Wedding Planning',
  'Behind the Scenes',
  'Client Guides',
  'Studio Updates',
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of Chiaroscuro in Modern Portraiture',
    category: 'Photography Tips',
    date: 'Oct 12, 2024',
    readTime: '7 min read',
    excerpt:
      'Exploring how classical fine art painting principles elevate modern studio portraits through intentional shadow placement and dramatic lighting ratios.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Structuring Your Traditional Wedding Photography Timeline',
    category: 'Wedding Planning',
    date: 'Sep 28, 2024',
    readTime: '9 min read',
    excerpt:
      'A comprehensive guide to planning muhurtham and reception schedules to capture sacred rituals with optimal cinematic lighting.',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Why 4K Multi-Camera Live Mixing Transforms Grand Celebrations',
    category: 'Behind the Scenes',
    date: 'Sep 15, 2024',
    readTime: '6 min read',
    excerpt:
      'An inside look at how our broadcast-grade switcher systems, LED wall feeds, and live webcasting connect loved ones across the globe.',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Candid Posing & Natural Expression for Couples',
    category: 'Client Guides',
    date: 'Aug 30, 2024',
    readTime: '5 min read',
    excerpt:
      'How Prabhu directs couples to achieve authentic, graceful poses without feeling stiff or self-conscious in front of the camera.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'The Magic of Pre-Wedding Outdoor Sessions',
    category: 'Wedding Planning',
    date: 'Aug 14, 2024',
    readTime: '4 min read',
    excerpt:
      'Why pre-wedding shoots build comfort with your cinematographer and provide stunning heirloom imagery for wedding invitations.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Preserving Heirlooms: Archival Prints vs Digital Only',
    category: 'Studio Updates',
    date: 'Jul 22, 2024',
    readTime: '8 min read',
    excerpt:
      'Why physical fine-art albums with metallic photographic paper and handcrafted leather covers endure for generations beyond digital hard drives.',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
  },
];
