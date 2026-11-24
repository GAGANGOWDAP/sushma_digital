import React from 'react';
import { Link, useLocation } from 'wouter';
import { Home, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const ROUTE_LABELS: Record<string, string> = {
  about: 'About Us',
  services: 'Services',
  portfolio: 'Portfolio',
  gallery: 'Gallery',
  pricing: 'Pricing & Packages',
  testimonials: 'Client Reviews',
  contact: 'Contact Us',
  book: 'Book a Session',
  faq: 'FAQ',
  blog: 'Journal',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  const [location] = useLocation();

  // Do not render breadcrumbs on root homepage
  if (location === '/') {
    return null;
  }

  // Derive breadcrumbs automatically if custom items are not provided
  let computedItems: BreadcrumbItem[] = items || [];

  if (!items || items.length === 0) {
    const segments = location.split('/').filter(Boolean);
    let accumulatedPath = '';

    computedItems = segments.map((seg, idx) => {
      accumulatedPath += `/${seg}`;
      const isLast = idx === segments.length - 1;
      const label = ROUTE_LABELS[seg.toLowerCase()] || decodeURIComponent(seg).replace(/-/g, ' ');

      return {
        label,
        href: isLast ? undefined : accumulatedPath,
      };
    });
  }

  if (computedItems.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center', className)}
    >
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E6EC] shadow-[0_2px_8px_rgba(20,44,69,0.04)] text-xs text-[#64748B] max-w-full overflow-x-auto whitespace-nowrap"
      >
        {/* Home Root */}
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="inline-flex items-center shrink-0"
        >
          <Link
            itemProp="item"
            href="/"
            className="inline-flex items-center gap-1.5 text-[#64748B] hover:text-[#D92F26] transition-colors font-medium py-0.5 group"
            title="Sushma Digital Studio Home"
          >
            <Home size={13} className="text-[#D92F26] shrink-0 transition-transform group-hover:scale-110" />
            <span itemProp="name" className="hover:underline">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {/* Trail Items */}
        {computedItems.map((item, index) => {
          const isLast = index === computedItems.length - 1;
          const position = index + 2;

          return (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="inline-flex items-center shrink-0"
            >
              <ChevronRight
                size={12}
                className="text-[#94A3B8] mx-0.5 sm:mx-1 shrink-0"
                aria-hidden="true"
              />
              {isLast || !item.href ? (
                <span
                  itemProp="name"
                  className="text-[#142C45] font-semibold truncate max-w-[140px] xs:max-w-[200px] sm:max-w-[320px] md:max-w-none"
                  aria-current="page"
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  itemProp="item"
                  href={item.href}
                  className="text-[#64748B] hover:text-[#D92F26] transition-colors font-medium hover:underline truncate max-w-[120px] sm:max-w-none"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(position)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
