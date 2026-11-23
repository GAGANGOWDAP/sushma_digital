# Sushma Digital Studio — Project Structure Reference

This document provides a comprehensive breakdown of the project architecture, directory organization, and file responsibilities for the Sushma Digital Studio codebase.

---

## 🗂 Directory Tree Overview

```text
artifacts/photography-studio/
├── .github/                      # CI/CD Workflows
│   └── workflows/
│       └── deploy.yml            # GitHub Pages automated deployment pipeline
├── .vscode/                      # VS Code workspace settings & recommended extensions
├── attached_assets/              # High-resolution source assets & certificates
│   ├── award-*.jpg               # Official state & national photography awards
│   ├── leader-*.jpg              # Dignitaries, VIPs & political leader event portraits
│   └── founder-portrait.jpg      # Founder & Lead Cinematographer Prabhu portrait
├── dist/                         # Vite production build output
│   └── public/                   # Static compiled SPA assets ready for web hosting
├── docs/                         # Architecture, guides, and technical documentation
│   ├── ARCHITECTURE.md           # System design & module communication
│   ├── DEVELOPMENT_GUIDE.md      # Developer workflows for adding pages/features
│   └── PROJECT_STRUCTURE.md      # This file
├── public/                       # Static public assets served from web root
│   ├── awards/                   # Publicly accessible award certificate images
│   ├── leaders/                  # High-profile event documentation portraits
│   ├── portfolio/                # WebP-optimized portfolio images
│   ├── videos/                   # Video reel showcases (MP4)
│   ├── CNAME                     # GitHub Pages custom domain definition (sushmadigitalstudio.com)
│   ├── favicon.svg               # SVG brand favicon
│   ├── logo.png                  # Studio signature logo
│   ├── robots.txt                # Search engine crawler directive file
│   └── sitemap.xml               # W3C-compliant XML sitemap for search engines
├── scripts/                      # Developer automation, verification & maintenance tools
│   ├── README.md                 # Scripts catalog
│   ├── check_svg.py              # SVG background pattern validator
│   ├── check_triangular.py       # Geometric lattice equations checker
│   ├── fix_svg.py                # SVG data URI optimizer
│   └── test_encoding.py          # UTF-8 encoding verification
├── src/                          # Main React + TypeScript application source
│   ├── components/               # UI Component Hierarchy
│   │   ├── common/               # Domain-specific shared components (SEO, FAQSection, ScrollToTop)
│   │   ├── layout/               # Global persistent layout components (Navbar, Footer)
│   │   └── ui/                   # Base atomic design primitives (Radix UI / shadcn)
│   ├── constants/                # Application-wide constants & brand configurations
│   │   ├── brand.ts              # Official brand color hex codes & studio metadata
│   │   ├── routes.ts             # Route paths dictionary & types
│   │   ├── social.ts             # Social media & contact links
│   │   └── index.ts              # Central constants exporter
│   ├── data/                     # Static dataset objects & mock models
│   │   ├── blog.ts               # Blog posts & categories
│   │   ├── faqs.ts               # Categorized & default FAQ datasets
│   │   ├── navigation.ts         # Navigation bars & footer link groups
│   │   ├── portfolio.ts          # Portfolio gallery items & filtering categories
│   │   ├── pricing.ts            # Service packages & tier feature lists
│   │   ├── services.ts           # 9 canonical photography/production service definitions
│   │   ├── testimonials.ts       # Verified client reviews
│   │   └── index.ts              # Central data exporter
│   ├── hooks/                    # Custom reusable React hooks
│   │   ├── use-mobile.tsx        # Responsive viewport detection hook
│   │   ├── use-toast.ts          # Toast notification state hook
│   │   └── index.ts              # Central hooks exporter
│   ├── layouts/                  # Structural page shells
│   │   ├── RootLayout.tsx        # Base application layout wrapper (Navbar, Main, Footer, Toaster)
│   │   └── index.ts              # Layouts exporter
│   ├── lib/                      # Third-party library initializations & utilities
│   │   └── utils.ts              # ClassName merger (cn) & asset URL resolver (assetUrl)
│   ├── pages/                    # Route-level page views (Wouter routes)
│   │   ├── About.tsx             # Studio history, founder bio, awards & leaders
│   │   ├── Blog.tsx              # Photography tips & client guides
│   │   ├── Book.tsx              # Interactive session booking form
│   │   ├── Contact.tsx           # Studio address, map, phone, email & enquiry form
│   │   ├── FAQ.tsx               # Categorized FAQ knowledge base
│   │   ├── Gallery.tsx           # Fullscreen visual showcase
│   │   ├── Home.tsx              # Landing page (hero, services, portfolio, awards)
│   │   ├── NotFound.tsx          # 404 error page (PascalCase)
│   │   ├── not-found.tsx         # 404 backwards-compatibility export
│   │   ├── Portfolio.tsx         # Filterable portfolio gallery with modal lightbox
│   │   ├── Pricing.tsx           # Investment packages & custom quote consultation
│   │   ├── Privacy.tsx           # Studio privacy policy
│   │   ├── Services.tsx          # 9 photography and broadcast services
│   │   ├── Terms.tsx             # Terms of service & booking agreement
│   │   ├── Testimonials.tsx      # Client reviews & endorsements
│   │   └── index.ts              # Central pages exporter
│   ├── services/                 # API, email & external dispatch services
│   │   ├── bookingService.ts     # Booking inquiry submission & WhatsApp link generation
│   │   ├── contactService.ts     # Contact form dispatch service
│   │   ├── newsletterService.ts  # Email newsletter subscription service
│   │   └── index.ts              # Central services exporter
│   ├── styles/                   # Styling documentation & CSS tokens
│   │   └── README.md             # Design tokens & color guide
│   ├── types/                    # TypeScript interfaces & type definitions
│   │   ├── blog.ts               # Blog post models & category types
│   │   ├── contact.ts            # Form data models
│   │   ├── faq.ts                # FAQ item & section models
│   │   ├── navigation.ts         # Navigation item models
│   │   ├── portfolio.ts          # Portfolio item & category models
│   │   ├── pricing.ts            # Pricing package models
│   │   ├── seo.ts                # Meta tag & SEO property types
│   │   ├── service.ts            # Photography service models
│   │   ├── testimonial.ts        # Client testimonial models
│   │   └── index.ts              # Central types exporter
│   ├── utils/                    # Helper functions & formatters
│   │   ├── format.ts             # Phone & string formatting helpers
│   │   └── index.ts              # Central utilities exporter
│   ├── App.tsx                   # Top-level routing & context providers
│   ├── index.css                 # Master Tailwind CSS 4 stylesheet
│   └── main.tsx                  # React DOM client entry point
├── components.json               # shadcn / Radix component configuration
├── index.html                    # Root HTML document with SEO meta & JSON-LD
├── package.json                  # Dependencies & execution scripts
├── pnpm-lock.yaml                # Deterministic lockfile
├── tsconfig.json                 # TypeScript strict compiler configuration
└── vite.config.ts                # Vite 7 build & bundler configuration
```

---

## 🔍 Major Folder Responsibilities

| Directory | Primary Responsibility |
|---|---|
| `src/components/common` | Domain-specific reusable components used across multiple pages (e.g. `SEO`, `FAQSection`, `ScrollToTop`). |
| `src/components/layout` | Global persistent shell components (`Navbar`, `Footer`) including mobile drawer and sticky scroll progress. |
| `src/components/ui` | Headless, accessible atomic design components built with Radix UI and styled with Tailwind CSS. |
| `src/constants` | Single source of truth for immutable application data: brand color hexes, route paths, studio credentials. |
| `src/data` | Clean static datasets (services list, portfolio items, FAQ answers, testimonials, pricing tiers). |
| `src/hooks` | Custom React hooks abstracting device detection, scrolling behaviors, and UI state. |
| `src/layouts` | Higher-order page shells wrapping pages with persistent headers, footers, and scroll restoration. |
| `src/pages` | Route components mounted by the Wouter router corresponding directly to user-facing URLs. |
| `src/services` | Logic layer handling user form submissions, WhatsApp direct link generation, and API integrations. |
| `src/types` | Centralized TypeScript declarations ensuring strict compile-time type safety across the application. |
| `src/utils` | Pure utility functions (class merging, asset URL resolution, text truncation, phone formatting). |
| `public` | Static root files (`robots.txt`, `sitemap.xml`, `CNAME`) and optimized media served directly. |
| `scripts` | Maintenance and verification scripts that keep root directory clean from temporary tooling. |
| `docs` | Architectural documentation, onboarding guides, and coding conventions. |
