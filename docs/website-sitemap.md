# Sushma Digital Studio | Website Sitemap & Technical SEO Documentation

This document serves as the comprehensive architectural and SEO guide for developers, content editors, and SEO specialists maintaining the [Sushma Digital Studio](https://sushmadigitalstudio.com) website.

---

## 1. Complete Website Page Hierarchy

The website is structured into a hierarchical architecture centered around the root domain and organized into five functional clusters:

```
https://sushmadigitalstudio.com/ (Root / Homepage)
│
├── Core Heritage & Studio
│   ├── /about (About Prabhu & Studio Heritage | 21+ Years, Chayarathna Award)
│   ├── /contact (Studio Location, Google Maps, RPC Layout Bangalore)
│   └── /book (Date Availability & Booking Consultation)
│
├── Specialized Services & Live Production
│   ├── /services (Services Hub | 9 Specialized Offerings)
│   ├── /services#pre-wedding (01: Pre-Wedding Photography & Videography)
│   ├── /services#wedding (02: Photography, Videography & Candid Photography)
│   ├── /services#portfolios (03: Baby Photo Shoot & Portfolios)
│   ├── /services#matrimony (04: Matrimony Photography)
│   ├── /services#webcast (05: Webcast Live Streaming)
│   ├── /services#mixing (06: HD Live Video Mixing)
│   ├── /services#vr (07: 360 Degree VR Videos)
│   ├── /services#led (08: LED Wall Live Display)
│   └── /services#drone (09: Drone Camera Aerial Videography)
│
├── Visual Showcase & Clientele
│   ├── /portfolio (Curated Portfolio with Interactive Category Filter)
│   ├── /gallery (High-Resolution Visual Showcase)
│   ├── /testimonials (Client Endorsements, VIP Testimonials & State Honors)
│   └── /pricing (Transparent Packages & Investment Tiers)
│
├── Photography Journal & Editorial Guides
│   ├── /blog (Journal Index & Category Filter)
│   └── /blog/:id (Dynamic Article Route)
│       ├── /blog/1 (The Art of Chiaroscuro in Modern Portraiture)
│       ├── /blog/2 (Structuring Your Traditional Wedding Photography Timeline)
│       ├── /blog/3 (Why 4K Multi-Camera Live Mixing Transforms Grand Celebrations)
│       ├── /blog/4 (Candid Posing & Natural Expression for Couples)
│       ├── /blog/5 (The Magic of Pre-Wedding Outdoor Sessions)
│       ├── /blog/6 (Archival Heirlooms: Selecting Your Fine-Art Album Materials)
│       ├── /blog/7 (Golden Hour: Mastering Dramatic Natural Light)
│       └── /blog/8 (Behind the Color Grading: Crafting the Sushma Aesthetic)
│
└── Support, Legal & Directives
    ├── /faq (Frequently Asked Questions with Category Filtering)
    ├── /privacy (Privacy & Data Protection Policy)
    ├── /terms (Client Terms & Service Agreement)
    ├── /sitemap.xml (Technical Search Engine XML Sitemap)
    └── /robots.txt (Crawler Access Policy)
```

---

## 2. Route Structure in Code

The client-side routing is powered by `wouter` in `src/App.tsx`:

| Route Path | Component | Description | Canonical URL |
| :--- | :--- | :--- | :--- |
| `/` | `Home` | Main landing page | `https://sushmadigitalstudio.com/` |
| `/about` | `About` | Prabhu profile, awards, heritage | `https://sushmadigitalstudio.com/about` |
| `/services` | `Services` | 9 core photography & broadcast services | `https://sushmadigitalstudio.com/services` |
| `/portfolio` | `Portfolio` | Curated showcase with lightbox | `https://sushmadigitalstudio.com/portfolio` |
| `/gallery` | `Gallery` | Full-width photo showcase | `https://sushmadigitalstudio.com/gallery` |
| `/pricing` | `Pricing` | Investment packages & inclusions | `https://sushmadigitalstudio.com/pricing` |
| `/testimonials` | `Testimonials` | Client reviews & awards | `https://sushmadigitalstudio.com/testimonials` |
| `/blog` | `Blog` | Journal index with category filters | `https://sushmadigitalstudio.com/blog` |
| `/blog/:id` | `BlogPostDetail` | Individual dynamic blog article | `https://sushmadigitalstudio.com/blog/:id` |
| `/contact` | `Contact` | Studio address, inquiry form, map | `https://sushmadigitalstudio.com/contact` |
| `/book` | `Book` | Multi-step booking questionnaire | `https://sushmadigitalstudio.com/book` |
| `/faq` | `FAQ` | Categorized accordion questions | `https://sushmadigitalstudio.com/faq` |
| `/privacy` | `Privacy` | Client privacy & copyright policy | `https://sushmadigitalstudio.com/privacy` |
| `/terms` | `Terms` | Terms of service & booking rules | `https://sushmadigitalstudio.com/terms` |
| `*` | `NotFound` | Graceful 404 error page | N/A (excluded from sitemap) |

---

## 3. Blog Dynamic Routing Architecture

Blog data is centralized in `src/data/blog.ts` with strict TypeScript validation (`src/types/blog.ts`).

### Routing Behavior:
1. **Dynamic URL**: `/blog/:id` reads `:id` via `useParams<{ id: string }>()`.
2. **Data Resolution**: Finds the article where `p.id === Number(params.id)`.
3. **Invalid Route Handling**: If the article ID is non-numeric, does not exist, or is unpublished, the component immediately renders the official `<NotFound />` component without crashing.
4. **Rich Metadata**: Each article injects unique `<SEO>` tags and Schema.org `BlogPosting` JSON-LD markup.
5. **Pagination**: Automatic next and previous article cross-linking.

---

## 4. Technical XML Sitemap & Robots.txt Protocol

### XML Sitemap Location:
`public/sitemap.xml` &rarr; Served directly at `https://sushmadigitalstudio.com/sitemap.xml`.

### Standards Applied:
- Complies with the official [sitemaps.org 0.9 protocol](http://www.sitemaps.org/schemas/sitemap/0.9).
- Exclusively contains canonical, published, 200 OK HTTPS URLs.
- Priority values:
  - Homepage: `1.0`
  - Core service & conversion pages (`/about`, `/services`, `/portfolio`, `/contact`): `0.9`
  - Secondary pages (`/pricing`, `/gallery`, `/blog`, `/book`, `/faq`): `0.8`
  - Blog articles & visual sitemap: `0.7`
  - Legal pages (`/privacy`, `/terms`): `0.3`
- Change frequencies: `weekly` for dynamic portfolios and journals; `monthly` for services; `yearly` for legal policies.
- Accurate `lastmod` format: `YYYY-MM-DD`.

### Robots.txt:
`public/robots.txt` &rarr; Served directly at `https://sushmadigitalstudio.com/robots.txt`:
```txt
User-agent: *
Allow: /

Sitemap: https://sushmadigitalstudio.com/sitemap.xml
```

---

## 5. Technical SEO Guidelines & Metadata

Every indexable page incorporates the `<SEO />` component (`src/components/common/SEO.tsx`), managing:

1. **Document Title**: Formatted as `{Page Title} | Sushma Digital Studio`.
2. **Meta Description**: Highly descriptive, unique 150–160 character summaries including Bangalore local keywords.
3. **Canonical Link**: Absolute HTTPS URL ensuring search engines never index duplicate or trailing-slash variations.
4. **Open Graph Tags**: `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, and `og:image`.
5. **Twitter Card**: `twitter:card` set to `summary_large_image`, `twitter:title`, `twitter:description`, and `twitter:image`.
6. **Local SEO Integration**: Mentions of Bangalore, Karnataka, Vijaynagar, and RPC Layout are naturally woven into relevant page titles and descriptions.

---

## 6. Instructions for Developers

### How to Add a New Website Page:
1. Create the page component in `src/pages/YourNewPage.tsx`.
2. Wrap the page with `<PageTransition>` and include `<SEO title="..." description="..." />`.
3. Register the route in `src/App.tsx` inside `<Switch>`.
4. Add the canonical URL entry to `public/sitemap.xml`.

### How to Publish a New Blog Article:
1. Open `src/data/blog.ts`.
2. Append a new `BlogPost` object with an incremented numerical `id`:
   ```ts
   {
     id: 9,
     title: 'Your Article Title',
     category: 'Wedding Planning',
     date: 'Nov 24, 2024',
     readTime: '6 min read',
     excerpt: 'Short summary for SEO and cards.',
     image: 'https://images.unsplash.com/...',
     author: { name: 'Prabhu', role: 'Founder & Lead Cinematographer' },
     takeaways: ['Takeaway 1', 'Takeaway 2'],
     sections: [
       { heading: 'Section 1', paragraphs: ['Paragraph text...'] }
     ]
   }
   ```
3. Add the URL `<url><loc>https://sushmadigitalstudio.com/blog/9</loc>...</url>` to `public/sitemap.xml`.

---

## 7. Quality Assurance Checklist

- [x] All 21 canonical URLs in `public/sitemap.xml` resolve to working pages.
- [x] `public/robots.txt` points to `https://sushmadigitalstudio.com/sitemap.xml`.
- [x] Visual sitemap `/sitemap` decommissioned and safely returns 404.
- [x] Dynamic blog routing works for `/blog/:id` (ids 1 to 8).
- [x] Non-existent blog IDs (e.g. `/blog/999`) return `<NotFound />`.
- [x] Open Graph and Twitter card metadata are properly wired up.
- [x] Footer clean and links only to Privacy Policy & Terms of Service.
