# Barista Lab Academy — SEO & Performance Pass 4

## Changes
- Centralized route-aware title, meta description, canonical URL, Open Graph, Twitter metadata, and JSON-LD graph in `src/App.jsx`.
- Removed conflicting homepage and Latte Art page metadata overrides so route metadata has one owner.
- Added factual EducationalOrganization and two LocalBusiness entities for the Jakarta and Tangerang studios, plus Course markup on course routes. No ratings, opening hours, coordinates, or external accreditation claims are fabricated.
- Removed duplicate static organization JSON-LD from `index.html`; route-aware schema is emitted by the app.
- Added optimized WebP logo assets and updated navbar/footer and social metadata to use them.
- Deferred Font Awesome stylesheet loading to reduce render-blocking work; retained a no-JavaScript fallback.
- Added web app manifest, sitemap refresh, Vercel cache/security headers, and explicit hero image dimensions.

## Deployment checks
1. Run `npm ci` and `npm run build` in CI/Vercel. Dependency installation could not be completed in this environment because the package registry request timed out, so a production build is **not verified** here.
2. After deployment, test `/`, `/kursus-barista`, `/kelas-latte-art`, `/kursus-barista-jakarta`, and `/kursus-barista-tangerang` in Google Search Console URL Inspection.
3. Validate rendered JSON-LD with Schema.org Validator and inspect canonical URLs.
4. Check PageSpeed Insights on mobile and desktop; compare LCP, INP, and CLS before/after.
5. Confirm the Tangerang address and phone against the current Google Business Profile before treating the LocalBusiness data as final. The source project currently contains the older Panunggangan Barat/Cibodas address.

## Important architecture note
This project is a client-rendered Vite + React SPA. Search engines can render JavaScript, but social preview bots and some crawlers may only see the initial HTML shell. For the strongest SEO coverage, the next architecture step is static prerendering/SSG or SSR for each indexable route, with route-specific HTML metadata present in the initial response.
