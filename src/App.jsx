import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import KelasLatteArt from "./pages/KelasLatteArt";
import KursusBarista from "./pages/KursusBarista";
import LocationPage from "./pages/LocationPage";
import PelatihanBarista from "./pages/PelatihanBarista";
import SertifikasiBarista from "./pages/SertifikasiBarista";

// Regional Routes
import KursusBaristaJakarta from "./pages/KursusBaristaJakarta";
import KursusBaristaJakartaTimur from "./pages/KursusBaristaJakartaTimur";
import KursusBaristaTangerang from "./pages/KursusBaristaTangerang";
import KursusBaristaBekasi from "./pages/KursusBaristaBekasi";
import KursusBaristaDepok from "./pages/KursusBaristaDepok";
import KursusBaristaBogor from "./pages/KursusBaristaBogor";

import { SITE_URL, pageSEO, buildStructuredData } from "./seo/metadata.js";

function RouteSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Run after page-level legacy effects so one central source owns canonical + metadata.
    const timer = window.setTimeout(() => {
      const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
      const canonicalURL = `${SITE_URL}${path}`;
      const seo = pageSEO[path] || {
        title: "Barista Lab Academy | Kursus Barista Jakarta & Tangerang",
        description: "Program kursus dan pelatihan barista di Barista Lab Academy Jakarta dan Tangerang.",
      };
      document.title = seo.title;

      const setMeta = (selector, attribute, value, tag = "meta", key = "name", keyValue = "") => {
        let element = document.head.querySelector(selector);
        if (!element) {
          element = document.createElement(tag);
          if (keyValue) element.setAttribute(key, keyValue);
          document.head.appendChild(element);
        }
        element.setAttribute(attribute, value);
      };
      setMeta('meta[name="description"]', "content", seo.description, "meta", "name", "description");
      setMeta('meta[property="og:type"]', "content", "website", "meta", "property", "og:type");
      setMeta('meta[property="og:title"]', "content", seo.title, "meta", "property", "og:title");
      setMeta('meta[property="og:description"]', "content", seo.description, "meta", "property", "og:description");
      setMeta('meta[property="og:url"]', "content", canonicalURL, "meta", "property", "og:url");
      setMeta('meta[property="og:image"]', "content", `${SITE_URL}/logo.webp`, "meta", "property", "og:image");
      setMeta('meta[name="twitter:card"]', "content", "summary", "meta", "name", "twitter:card");
      setMeta('meta[name="twitter:title"]', "content", seo.title, "meta", "name", "twitter:title");
      setMeta('meta[name="twitter:description"]', "content", seo.description, "meta", "name", "twitter:description");
      setMeta('meta[name="twitter:image"]', "content", `${SITE_URL}/logo.webp`, "meta", "name", "twitter:image");

      let canonical = document.head.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalURL;

      // Keep structured data factual and share the same graph with the prerendered HTML.
      document.head.querySelectorAll('script[type="application/ld+json"]').forEach((node) => node.remove());
      const structuredData = buildStructuredData(path);
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.routeSchema = "true";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <main className="min-h-screen bg-dark-charcoal text-white flex items-center justify-center px-6 text-center">
      <div className="max-w-xl">
        <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">404 — Page not found</p>
        <h1 className="font-display text-4xl md:text-5xl mb-4">Halaman Tidak Ditemukan</h1>
        <p className="text-gray-400 mb-8">Halaman yang Anda cari tidak tersedia atau alamatnya telah berubah.</p>
        <a href="/" className="inline-flex bg-gold text-black font-bold px-7 py-3 rounded-full">Kembali ke Beranda</a>
      </div>
    </main>
  );
}

function App() {
  return (
    <>
      <RouteSEO />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kursus-barista" element={<KursusBarista />} />
      <Route path="/kelas-latte-art" element={<KelasLatteArt />} />
      <Route path="/lokasi" element={<LocationPage />} />
      <Route path="/pelatihan-barista" element={<PelatihanBarista />} />
      <Route path="/sertifikasi-barista" element={<SertifikasiBarista />} />

      {/* Geo-Targeting Routes */}
      <Route path="/kursus-barista-jakarta" element={<KursusBaristaJakarta />} />
      <Route path="/kursus-barista-jakarta-timur" element={<KursusBaristaJakartaTimur />} />
      <Route path="/kursus-barista-tangerang" element={<KursusBaristaTangerang />} />
      <Route path="/kursus-barista-bekasi" element={<KursusBaristaBekasi />} />
      <Route path="/kursus-barista-depok" element={<KursusBaristaDepok />} />
      <Route path="/kursus-barista-bogor" element={<KursusBaristaBogor />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
