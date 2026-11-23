# Sushma Digital Studio — Styling & Design System

This directory documents the styling architecture and design system for Sushma Digital Studio.

## Architecture

The project uses **Tailwind CSS v4** via the `@tailwindcss/vite` plugin.
The master stylesheet is located at [`src/index.css`](../index.css) and is imported in [`src/main.tsx`](../main.tsx).

## Official Brand Color Palette

| Token Name | Hex Code | Purpose |
|---|---|---|
| `Signature Red` | `#D92F26` | Primary CTAs, highlights, brand badges, active hover states |
| `Deep Navy` | `#142C45` | Headings, serif titles, default icons, authoritative text |
| `Electric Blue` | `#258FEA` | Interactive accents, hover borders, links, focus rings |
| `Pure White` | `#FFFFFF` | Service cards, clean backgrounds, crisp modal surfaces |
| `Warm Ivory` | `#F8F6F1` | Editorial section backgrounds, warm highlights |
| `Soft Grey` | `#F5F6F8` | Secondary surfaces, subtle card containers |
| `Slate` | `#475569` | Body descriptions, readable paragraph typography |
| `Muted Slate` | `#64748B` | Category labels, secondary dates, meta descriptions |
| `Light Border` | `#E2E6EC` | Subtle card borders, dividers, table borders |
| `Navy Border` | `#1F3A59` | Footer border and dark contrast dividers |

## Typography

- **Headings / Editorial:** `'Lora', Georgia, serif` (`font-serif`)
- **Body / Interface:** `'Plus Jakarta Sans', sans-serif` (`font-sans`)

## Custom Utility Classes

- `.hero-triangular-pattern` — Subtle geometric lattice background for hero banners
- `.footer-diamond-pattern` — Deep navy geometric diamond lattice for footers
- `.btn-primary` — Signature Red branded button with subtle hover elevation
- `.btn-secondary` — Outlined / Deep Navy complementary action button
