# Smily — Dental Care Landing Page

A pixel-inspired rebuild of the Smily dental clinic landing page, built with **Next.js (App Router)** and **Tailwind CSS v4**. Scaffolded following the official guide: https://nextjs.org/docs/app/getting-started/installation

## Quick start

```bash
cd smily-dental-care
npm install
npm run dev
```

Open http://localhost:3000. For production: `npm run build && npm start`.

> Note: photos load from Unsplash and the map from OpenStreetMap, so an internet connection is needed while developing.

## Pages (App Router routes)

| Route                    | Page                                              |
| ------------------------ | ------------------------------------------------- |
| `/`                      | Home — hero, services band, team, testimonials    |
| `/about`                 | About — intro video, stats, team                  |
| `/services`              | Services — 6-card grid + "Why choose us"          |
| `/services/dental-care`  | Service detail — article + opening-hours sidebar  |
| `/appointment`           | Booking — centered form + full-width map          |
| `/contact`               | Contact — info card + "Get in touch" form + map   |

## Project structure

```
smily-dental-care/
├── app/
│   ├── layout.jsx        # Root layout — loads Google fonts, metadata
│   ├── page.jsx          # Home page — assembles all sections in order
│   ├── globals.css       # Tailwind v4 @theme tokens + component classes
│   ├── about/page.jsx    # About page
│   ├── services/page.jsx           # Services overview
│   ├── services/dental-care/page.jsx  # Service detail page
│   ├── appointment/page.jsx        # Booking page
│   └── contact/page.jsx            # Contact page
├── components/
│   ├── Logo.jsx          # Brand mark (tooth icon + wordmark)
│   ├── Navbar.jsx        # Top navigation + "Book An Appointment" CTA
│   ├── Hero.jsx          # Headline, CTAs, address/hours, hero photo
│   ├── WorkWithUs.jsx    # Clinic photo + "2000+ Happy Clients" badge
│   ├── Services.jsx      # Dark-teal band: 4 service cards
│   ├── Growing.jsx       # Aqua band: benefits split with photo
│   ├── Team.jsx          # 3 dentist profile cards
│   ├── Testimonials.jsx  # 3 client reviews with star ratings
│   ├── Appointment.jsx   # Booking form + OpenStreetMap embed
│   └── Footer.jsx        # Link columns, socials, copyright
├── next.config.mjs       # Allows next/image to load Unsplash photos
├── postcss.config.mjs    # Tailwind v4 PostCSS plugin
└── jsconfig.json         # "@/…" import alias
```

## Theming (Tailwind CSS v4)

No `tailwind.config.js` — all design tokens live in `app/globals.css` inside an `@theme` block, so `bg-cyan`, `text-ink`, etc. work as normal utilities:

| Token             | Value     | Used for                        |
| ----------------- | --------- | ------------------------------- |
| `--color-cyan`    | `#0db4d4` | Primary buttons, links          |
| `--color-cyan-dark` | `#0a97b2` | Button hover                  |
| `--color-teal`    | `#12403c` | Services section & footer bg    |
| `--color-mint`    | `#e9f7f6` | Appointment section bg, icons   |
| `--color-ink`     | `#14303c` | Headings & body text            |
| `--color-stone`   | `#64707a` | Muted text                      |
| `--color-coral`   | `#f4502c` | Kickers, service icons, badge   |

Fonts: **Cabinet Grotesk** (headings, loaded from the free Fontshare CDN in `app/layout.jsx`) and **Lato** (body, self-hosted via `next/font/google`), wired to `--font-display` / `--font-body`.

Reusable component classes (defined in `@layer components`):

- `.section` — vertical/horizontal section rhythm with fluid padding
- `.wrap` — centered max-width (1536px) container
- `.kicker` — small uppercase coral label with the short line before it
- `.heading` — fluid display heading
- `.btn`, `.btn-solid`, `.btn-outline` — button variants
- `.field` — form input styling

The root `font-size` uses `clamp(16px, 1.041vw, 20px)`, so every rem-based utility scales fluidly with the viewport.

## Customizing

- **Change colors:** edit the `@theme` block in `app/globals.css`.
- **Change text/photos:** each section's content sits in small data arrays at the top of its component file (e.g. `services`, `members`, `testimonials`).
- **Add pages:** create folders under `app/` per the App Router convention.
# simily
