export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
  GALLERY: '/gallery',
  PRICING: '/pricing',
  TESTIMONIALS: '/testimonials',
  BLOG: '/blog',
  CONTACT: '/contact',
  BOOK: '/book',
  FAQ: '/faq',
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
