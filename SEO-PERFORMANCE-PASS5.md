# Barista Lab Academy — Pass 5: Static Prerendering & Advanced SEO

## Main changes
- Added a server-render entry using React 19 `renderToString` and React Router `StaticRouter`.
- Added a build-time prerender step for all 12 existing indexable routes.
- Updated the browser entry to use `hydrateRoot`, preserving the server-rendered HTML and attaching client interactivity instead of replacing the HTML shell.
- Each prerendered route receives its own initial HTML title, meta description, canonical URL, Open Graph title/description/URL, Twitter title/description, and JSON-LD graph.
- Structured data is generated from one shared function for both prerendered HTML and client-side route changes. The graph includes EducationalOrganization, the two existing LocalBusiness branches, WebSite, Course where applicable, and BreadcrumbList for non-home pages.
- Added build-time checks to fail if a route renders no HTML, has no H1, or misses required metadata/schema.
- Added a homepage-only preload for the existing hero image and removed the image's React fetchPriority hint to avoid duplicate resource hints during server rendering.
- Updated sitemap lastmod dates to 2026-11-07 and upgraded Twitter cards to summary_large_image.
- Preserved robots.txt crawl access and existing Vercel cache/security headers.

## Build
`npm run build` now runs:
1. `vite build` for browser assets.
2. `vite build --ssr src/entry-server.jsx --outDir dist-ssr --emptyOutDir` for the static render bundle.
3. `node scripts/prerender.mjs` to write route-specific `index.html` files under `dist/`.

## Important verification status
- All 30 source JavaScript/JSX files passed a TypeScript parser syntax check in the working environment.
- `scripts/prerender.mjs` passed `node --check`.
- `public/sitemap.xml` passed XML parsing.
- A full Vite client/SSR build could not be run in this environment because `npm ci` timed out while reaching the package registry. Therefore, the actual prerender output and production build are not yet verified here. Run `npm ci` followed by `npm run build` locally or in Vercel before production deployment.

## Before deployment
1. Confirm the Tangerang studio address, postal code, phone number, and map pin against the current Google Business Profile. The project contains historical Cibodas/Panunggangan Barat address variants; do not publish conflicting address details.
2. Inspect the generated `dist/kursus-barista/index.html` and `dist/kursus-barista-tangerang/index.html` to confirm route-specific HTML, canonical, and JSON-LD.
3. Test internal navigation and language toggle after hydration.
4. Validate JSON-LD with Schema.org Validator and check key URLs in Google Search Console URL Inspection.
5. Measure mobile/desktop Core Web Vitals with PageSpeed Insights after deployment; no Lighthouse score or ranking gain is claimed without a live test.

## Google AI note
Google's published guidance says the same technical SEO and people-first content practices apply to AI Overviews and AI Mode; there is no special AI file or special schema required. This pass prioritizes crawlable route HTML, clear page metadata, helpful visible content, and accurate business details rather than claiming an AI-ranking shortcut.
- No `llms.txt` file is added as a Google AI ranking tactic: Google's current Search Central guidance says AI-specific text files and special markup are not required and do not improve Google Search visibility. A file like this may be maintained for other systems if there is a separate use case.
- The Tangerang structured-data postal code was removed because the source project mixed Cibodas/Panunggangan Barat with a different postal code area. Confirm the exact current Google Business Profile address and postal code before adding it back.
