# Sushma Digital Studio Official Web Application

[![Deploy to GitHub Pages](https://github.com/GAGANGOWDAP/sushma_digital/actions/workflows/deploy.yml/badge.svg)](https://github.com/GAGANGOWDAP/sushma_digital/actions/workflows/deploy.yml)
[![Built with React](https://img.shields.io/badge/React-19.1-blue.svg)](https://react.dev/)
[![Built with Vite](https://img.shields.io/badge/Vite-7.3-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC.svg)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)

The official website for **Sushma Digital Studio**, Bangalore's premier photography and cinematic live broadcast production studio, founded and led by Karnataka State Honor recipient **Prabhu** (*Karnataka Chayarathna*, *Chhaya Ratna*).

🌐 **Production Website:** [https://sushmadigitalstudio.com](https://sushmadigitalstudio.com)  
📦 **GitHub Pages Mirror:** [https://gagangowdap.github.io/sushma_digital/](https://gagangowdap.github.io/sushma_digital/)

---

## ✨ Studio Highlights & Features

- **21+ Years of Heritage:** Founded in 1989 by Prabhu, with over 2,000+ weddings, state summits, and VIP assignments documented.
- **Cinematic Visual Experience:** Smooth page transitions, editorial layout, responsive 3-column service cards, and interactive modal lightbox.
- **Comprehensive Service Coverage:**
  1. Pre-Wedding Photography & Videography
  2. Traditional Photography, Videography & Candid Storytelling
  3. Baby Photo Shoots & Modelling Portfolios
  4. Matrimony Photography
  5. Webcast Live Streaming (Global HD)
  6. HD Live Video Mixing (Multi-Camera)
  7. 360° Degree VR Videos
  8. Indoor & Outdoor LED Wall Displays
  9. Drone Camera Aerial Videography
- **Technical SEO Ready:** Fully compliant XML sitemap (`/sitemap.xml`), `robots.txt`, dynamic canonical tags, Open Graph meta, and Schema.org `PhotographyStudio` JSON-LD.
- **Modern Tech Stack:** React 19, TypeScript, Vite 7, Tailwind CSS 4, Radix UI, Framer Motion, and Wouter client-side routing.

---

## 🗂 Project Structure

```text
├── .github/workflows/deploy.yml  # Automated deployment to GitHub Pages
├── attached_assets/              # High-res portraits, award certificates & event photos
├── docs/                         # Technical documentation
│   ├── ARCHITECTURE.md           # Architecture design & module communication
│   ├── DEVELOPMENT_GUIDE.md      # Onboarding guide & adding new pages/components
│   └── PROJECT_STRUCTURE.md      # Complete file & folder breakdown
├── public/                       # Static public assets (robots.txt, sitemap.xml, CNAME, portfolio)
├── scripts/                      # Developer maintenance & verification tools
└── src/
    ├── components/
    │   ├── common/               # SEO, FAQSection, ScrollToTop
    │   ├── layout/               # Navbar, Footer
    │   └── ui/                   # Radix UI / shadcn atomic primitives
    ├── constants/                # Routes, brand palette, studio details, social links
    ├── data/                     # Services, FAQs, portfolio, pricing, testimonials, blog
    ├── hooks/                    # Reusable React hooks (useMobile, useToast)
    ├── layouts/                  # RootLayout app wrapper
    ├── lib/                      # Third-party utilities (cn, assetUrl)
    ├── pages/                    # 13 canonical route pages
    ├── services/                 # Booking, contact, and newsletter dispatchers
    ├── styles/                   # Design system documentation
    ├── types/                    # Strict TypeScript interfaces & types
    ├── utils/                    # Formatting & pure helper functions
    ├── App.tsx                   # Main router & query client wrapper
    ├── index.css                 # Master Tailwind CSS 4 stylesheet
    └── main.tsx                  # React DOM entrypoint
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js:** `v20.x` or higher (v22 recommended)
- **Package Manager:** `pnpm` (recommended) or `npm`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/GAGANGOWDAP/sushma_digital.git
cd sushma_digital/artifacts/photography-studio

# 2. Install dependencies
pnpm install
```

### Local Development

```bash
pnpm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Type Checking & Build

```bash
# Verify static TypeScript types
pnpm run typecheck

# Build for production
pnpm run build

# Preview production build locally
pnpm run serve
```

---

## ☁️ Deployment

Deployments are automated through **GitHub Actions**:

1. Pushing to the `main` branch automatically triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
2. The workflow installs dependencies, runs `pnpm run build`, creates a fallback `404.html` for client-side routing, and deploys the `dist/public` folder to GitHub Pages.
3. The custom domain [`public/CNAME`](public/CNAME) ensures the site is continuously accessible at `https://sushmadigitalstudio.com`.

---

## 📄 License & Attribution

All media, photographs, and logos are copyright © **Sushma Digital Studio**. All rights reserved.
