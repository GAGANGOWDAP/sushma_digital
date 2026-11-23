import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogType?: string;
}

const DEFAULT_DESCRIPTION =
  'Sushma Digital Studio — 21+ years of premier wedding photography, candid storytelling, 4K aerial drones, multi-camera live broadcast streaming, and LED wall productions in Bangalore led by State Honor Karnataka Chayarathna awardee Prabhu.';

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogType = 'website',
}: SEOProps) => {
  const [location] = useLocation();
  const fullTitle = `${title} | Sushma Digital Studio`;
  const cleanPath = location === '/' ? '/' : location.replace(/\/$/, '');
  const canonicalUrl = canonical || `https://sushmadigitalstudio.com${cleanPath}`;

  useEffect(() => {
    // 1. Title
    document.title = fullTitle;

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Open Graph Meta Tags
    const ogTags: Record<string, string> = {
      'og:title': fullTitle,
      'og:description': description,
      'og:url': canonicalUrl,
      'og:type': ogType,
      'og:site_name': 'Sushma Digital Studio',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', content);
    });

    // 5. Twitter Meta Tags
    const twitterTags: Record<string, string> = {
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:card': 'summary_large_image',
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let twMeta = document.querySelector(`meta[name="${name}"]`);
      if (!twMeta) {
        twMeta = document.createElement('meta');
        twMeta.setAttribute('name', name);
        document.head.appendChild(twMeta);
      }
      twMeta.setAttribute('content', content);
    });
  }, [fullTitle, description, canonicalUrl, ogType]);

  return null;
};
