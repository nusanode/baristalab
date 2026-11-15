import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import { SITE_URL, pageSEO, buildStructuredData } from "./seo/metadata.js";
import { LanguageProvider } from "./context/LanguageContext.jsx";

const DEFAULT_SEO = {
  title: "Barista Lab Academy | Kursus Barista Profesional Jakarta & Tangerang",
  description: "Kursus barista profesional di Jakarta dan Tangerang. Belajar espresso, latte art, manual brew, dan bisnis coffee shop dengan praktik langsung.",
};

export function render(url) {
  const rawPathname = new URL(url, "https://www.baristalab.co.id").pathname;
  const pathname = rawPathname === "/" ? "/" : rawPathname.replace(/\/+$/, "");
  const seo = pageSEO[pathname] || DEFAULT_SEO;
  const html = renderToString(
    <StaticRouter location={pathname}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StaticRouter>
  );

  return {
    html,
    title: seo.title,
    description: seo.description,
    canonical: `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/+$/, "")}`,
    structuredData: buildStructuredData(pathname),
  };
}
