import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  image?: string;
}

const DEFAULT_DESCRIPTION =
  'Sushma Digital Studio 21+ years of premier wedding photography, candid storytelling, 4K aerial drones, multi-camera live broadcast streaming, and LED wall productions in Bangalore led by State Honor Karnataka Chayarathna awardee Prabhu.';

const DEFAULT_IMAGE = 'https://sushmadigitalstudio.com/founder-portrait.jpg';

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogType = 'website',
  image = DEFAULT_IMAGE,
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
      'og:image': image,
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
      'twitter:image': image,
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

    // 6. JSON-LD LocalBusiness & WebSite Structured Data
    const businessSchema = {
      '@type': 'PhotographyBusiness',
      '@id': 'https://sushmadigitalstudio.com/#business',
      name: 'Sushma Digital Studio',
      alternateName: "Prabhu's Photography",
      url: 'https://sushmadigitalstudio.com',
      logo: 'https://sushmadigitalstudio.com/logo.png',
      image: image,
      description: description,
      telephone: '+91-9845000000',
      email: 'sushmadigistudio1989@gmail.com',
      priceRange: '₹₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No 540, 8th Main, 4th Cross, R.P.C. Layout, Vijaynagar 2nd Stage',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560040',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.9605509,
        longitude: 77.5345199,
      },
      areaServed: [
        { '@type': 'City', name: 'Bangalore' },
        { '@type': 'AdministrativeArea', name: 'Karnataka' },
        { '@type': 'Country', name: 'India' },
      ],
      founder: {
        '@type': 'Person',
        name: 'Prabhu',
        jobTitle: 'Founder & Lead Cinematographer',
        award: 'State Honor Karnataka Chayarathna',
      },
      sameAs: [
        'https://instagram.com/Prabhus_phtography',
        'https://facebook.com',
        'https://maps.google.com/?q=Sushma+digital+studio+prabhu\'s+photography+Vijayanagar+Bangalore',
      ],
    };

    const websiteSchema = {
      '@type': 'WebSite',
      '@id': 'https://sushmadigitalstudio.com/#website',
      url: 'https://sushmadigitalstudio.com',
      name: 'Sushma Digital Studio',
      description: DEFAULT_DESCRIPTION,
      publisher: {
        '@id': 'https://sushmadigitalstudio.com/#business',
      },
    };

    const graph: any[] = [businessSchema, websiteSchema];

    // Add BreadcrumbList for subpages
    if (cleanPath !== '/') {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://sushmadigitalstudio.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: title,
            item: canonicalUrl,
          },
        ],
      });
    }

    let schemaScript = document.querySelector('script[data-schema="sushma-seo"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-schema', 'sushma-seo');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
  }, [fullTitle, description, canonicalUrl, ogType, image, cleanPath]);

  return null;
};
