# Sushma Digital Studio — Developer Onboarding & Contribution Guide

Welcome to the **Sushma Digital Studio** project. This guide outlines standard workflows and best practices for creating new pages, adding reusable components, managing static assets, and maintaining code quality.

---

## 🛠 Local Setup & Commands

Run commands from the project root (`artifacts/photography-studio`):

```bash
# 1. Install dependencies
pnpm install

# 2. Start local development server (with HMR)
pnpm run dev

# 3. Perform static type checking (zero-emit)
pnpm run typecheck

# 4. Create production build
pnpm run build

# 5. Preview production build locally
pnpm run serve
```

---

## 📄 Adding a New Page

To add a new route and page to the website:

1. **Create the Page Component:**
   Create a new `.tsx` file inside `src/pages/` (e.g. `src/pages/Equipment.tsx`):
   ```tsx
   import React from 'react';
   import { SEO } from '@/components/common/SEO';
   import { PageTransition, FadeIn } from '@/components/ui/motion';
   import { FAQSection } from '@/components/common/FAQSection';

   export default function Equipment() {
     return (
       <PageTransition>
         <SEO
           title="Broadcast Equipment & Optics"
           description="Explore our in-house 4K Sony cinema cameras, prime G-Master lenses, broadcast switchers, and drone fleet."
           canonical="https://sushmadigitalstudio.com/equipment"
         />
         <section className="pt-36 pb-16">
           <div className="container mx-auto px-6">
             <FadeIn>
               <h1 className="text-4xl font-serif text-[#142C45]">Broadcast Equipment</h1>
             </FadeIn>
           </div>
         </section>
         <FAQSection />
       </PageTransition>
     );
   }
   ```

2. **Export the Page from `src/pages/index.ts`:**
   ```ts
   export { default as Equipment } from './Equipment';
   ```

3. **Register Route in `src/constants/routes.ts`:**
   ```ts
   export const ROUTES = {
     // ...
     EQUIPMENT: '/equipment',
   } as const;
   ```

4. **Add Route to `src/App.tsx`:**
   ```tsx
   import { Equipment } from '@/pages';
   // Inside <Router>:
   <Route path="/equipment" component={Equipment} />
   ```

5. **Update Navigation & Sitemap:**
   - Add the link to `src/data/navigation.ts`.
   - Add the canonical URL `<url>` to `public/sitemap.xml`.

---

## 🧩 Adding Reusable Components

Follow the established three-tier component hierarchy:

1. **Base Primitive (`src/components/ui/`):**
   - Headless, atomic, accessible components (dialogs, buttons, toggles).
   - Styled primarily with Tailwind CSS utility classes and `cn()`.
2. **Domain-Specific Common (`src/components/common/`):**
   - Reusable composite components shared across multiple pages (e.g. `SEO`, `FAQSection`, `ScrollToTop`).
   - Defined with TypeScript interfaces in `src/types/`.
3. **Layout Shells (`src/components/layout/` & `src/layouts/`):**
   - High-level wrappers (`Navbar`, `Footer`, `RootLayout`).

---

## 🎨 Design & Styling Guidelines

Strictly observe the official brand design system:

- **Typography:**
  - Headings / Editorial elements: `font-serif` (`Lora`)
  - Body text / UI elements: `font-sans` (`Plus Jakarta Sans`)
- **Brand Colors:**
  - Headings & Primary Text: Deep Navy (`#142C45`)
  - Primary CTAs & Accents: Signature Red (`#D92F26`)
  - Interactive Accents & Focus Rings: Electric Blue (`#258FEA`)
  - Card & Container Borders: Light Border (`#E2E6EC`)
  - Paragraph Descriptions: Slate (`#475569`) or Muted Slate (`#64748B`)
- **Never hardcode arbitrary random colors.** Use the tokens defined in `src/constants/brand.ts` or `src/index.css`.

---

## 🖼 Asset Handling & Relative URLs

Always wrap public assets in `assetUrl()` from `@/lib/utils` to maintain compatibility with subpaths (e.g. GitHub Pages `/sushma_digital/`):

```tsx
import { assetUrl } from '@/lib/utils';

<img src={assetUrl('/logo.png')} alt="Sushma Digital Studio" />
<img src={assetUrl('/portfolio/0I0A3419.webp')} alt="Royal Wedding" />
```

For high-resolution source images, place them in `attached_assets/` and use the `@assets/` alias:
```tsx
import founderPortrait from '@assets/founder-portrait.jpg';
```

---

## 🔍 Pre-Commit Quality Checklist

Before committing or pushing changes:
1. Run `pnpm run typecheck` to verify zero TypeScript errors.
2. Run `pnpm run build` to verify clean compilation.
3. Verify that all URLs in `public/sitemap.xml` are valid HTTPS canonical links.
4. Ensure mobile responsiveness on viewports from 320px to 1920px.
