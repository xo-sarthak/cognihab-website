# CogniHab website

The marketing site for CogniHab's VR digital-therapeutics platform, built with **Next.js** (App Router,
TypeScript) and exported as **static HTML**, so it can be hosted anywhere without a server.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
|---|---|
| `npm run dev` | Local development server with hot reload. |
| `npm run build` | Static export of all 20 pages to `out/`, plus `sitemap.xml` and `robots.txt`. |
| `npm start` | Serves `out/` locally to check the production build. |

## Layout

```
app/                 routes: one folder per URL, each page.tsx sets its SEO via pageMetadata()
  layout.tsx         header, footer, assistant, fonts, Organization structured data
  globals.css        the whole stylesheet
  sitemap.ts         robots.ts
  rehabilitation/[slug]/  vision/[slug]/  well-being/[slug]/   the 11 use-case pages
components/
  views/             page bodies (home, programmes, about, patent, research, advisors, contact)
  UseCasePage.tsx    the use-case page template, filled from content/useCases.ts
  Header.tsx Footer.tsx Assistant.tsx Announcements.tsx
  FaqList.tsx        FAQ accordion + FAQPage structured data
  Breadcrumbs.tsx    visible breadcrumb + BreadcrumbList structured data
  SiteEffects.tsx    scroll reveals, hero scrub, counters, flip plates, session tabs, forms
content/
  site.ts            contact details, form routing, announcement ticker, navigation
  pages.ts           title, meta description and breadcrumb name for every URL
  faqs.ts            every FAQ on the site
  useCases.ts        the 11 use cases (cards on programme pages and their own pages)
lib/seo.ts           metadata, canonical, Open Graph, breadcrumbs, Organization schema
public/              images/, media/ (logo, pillar photos, hero video), video/, docs/, og-cover.jpg
media-source/        the original hero footage (not published)
scripts/             post-build step for the static export
```

## Editing

- **Copy and FAQs:** most text lives in `content/` or in `components/views/`.
- **Adding a page:** create `app/<path>/page.tsx`, add its SEO entry to `content/pages.ts` (the sitemap
  picks it up from there), and use `<Breadcrumbs path="/<path>/" />` in the hero.
- **Adding a use case:** add an entry to `content/useCases.ts` and to `content/pages.ts`. The card,
  the page, the sitemap entry and the static route are generated from those.
- **Links:** use `next/link` for internal pages. `/blog/`, `/case-studies/` and the legal pages live on
  the main WordPress domain; `SmartLink` in `components/ui.tsx` renders those as plain links.

## Notes

- The hero is a video scrubbed by scroll position, with an SVG range-of-motion overlay driven by a
  keyframe table (`K` in `components/SiteEffects.tsx`) tracked from that specific footage.
  **Replacing the video means re-tracking the keyframes.**
- Forms have no backend. They POST to a relay service, with a `mailto:` fallback (`content/site.ts`).
- The 3:2 pillar photos are used full-bleed in tall boxes in two places (home chapters and
  programme-page heroes). Both need a per-image `object-position` *and* a matching
  `transform-origin`, or heads get cropped off on wide, short viewports.
- Fonts are self-hosted through `next/font`, so visitors make no request to Google Fonts.
