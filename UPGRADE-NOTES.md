# Barista Lab Academy — Upgrade Pass 2

## Perubahan
- Redesigned homepage hero section with a premium editorial layout, stronger hierarchy, responsive CTA buttons, and concise trust points.
- Refined dark/gold design tokens, typography spacing, course-card presentation, section anchors, and reduced-motion behavior.
- Preserved existing React Router routes, language context, course data, and existing page components.

## Verifikasi
- Source files and project structure retained from upgrade pass 1.
- `npm ci` was attempted twice but dependency installation timed out in this environment. Therefore `npm run build` and browser-level visual QA have not yet been completed.

## Deployment
1. Extract ZIP.
2. Run `npm ci` in the project directory.
3. Run `npm run build` and resolve any environment-specific errors before deployment.
4. Preview on mobile and desktop, especially homepage hero, navigation menu, course cards, and WhatsApp CTA.
5. Deploy to the existing Vercel project only after build and preview checks pass.
