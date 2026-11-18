import Icon from "./Icon";
import { useState, useEffect } from "react";
// 1. IMPORT DATA DARI DATABASE
// Mengambil galleryImages DAN aboutFeatures
import { galleryImages, aboutFeatures } from "../database";
// 2. IMPORT HOOK BAHASA
import { useLanguage } from "../context/useLanguage.js";
import { getUnsplashSrcSet } from "../utils/responsiveImage";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // 3. AMBIL STATE BAHASA
  const { language } = useLanguage();
const text = {
  id: {
    privilege: "Keunggulan",
    privilegeGold: "Kami",
    atmosphere: "Suasana Pelatihan",
    gallery: "Galeri",
    galleryGold: "Barista Lab Academy",
  },
  en: {
    privilege: "The",
    privilegeGold: "Privilege",
    atmosphere: "Atmosphere",
    gallery: "Inside the",
    galleryGold: "Academy",
  },
};

const t = text[language];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= galleryImages.length - itemsPerView ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - itemsPerView : prev - 1,
    );
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (previous >= galleryImages.length - itemsPerView ? 0 : previous + 1));
    }, 5000);
    return () => window.clearInterval(interval);
  }, [itemsPerView]);

  return (
    // FIX: Tambahkan 'overflow-hidden' di sini untuk memotong elemen yang keluar layar
    <section
      id="about"
      className="py-32 bg-dark-charcoal relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* --- Top Section --- */}
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 z-0"></div>
            <img
  loading="lazy"
  decoding="async"
  width="800"
  height="1000"
  src="https://images.unsplash.com/photo-1507914372368-b2b085b925a1?auto=format&fit=crop&w=800&q=75"
  srcSet={getUnsplashSrcSet("https://images.unsplash.com/photo-1507914372368-b2b085b925a1?auto=format&fit=crop&w=800&q=75", [480, 768, 960], 75)}
  sizes="(max-width: 1023px) calc(100vw - 3rem), 50vw"
  alt="Suasana pelatihan barista di Barista Lab Academy"
  className="relative z-10 shadow-2xl grayscale hover:grayscale-0 transition duration-700 w-full aspect-[4/5] object-cover"
/>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-display text-white mb-8">
  {t.privilege}{" "}
  <span className="text-gold">
    {t.privilegeGold}
  </span>
</h2>
            <div className="space-y-12">
              {/* 4. GUNAKAN DATA 'aboutFeatures' SESUAI BAHASA */}
              {aboutFeatures[language].map((feature) => (
                <div key={feature.id} className="group">
                  <div className="flex items-start gap-6">
                    <div className="text-gold text-3xl mt-1 opacity-80 group-hover:opacity-100 transition duration-300 font-serif">
                      {feature.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2 group-hover:text-gold transition">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 font-light leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Gallery Carousel --- */}
        <div className="animate-fade-up relative group/gallery">
          <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-4">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">
  {t.atmosphere}
</p>
              <h3 className="text-3xl font-display text-white">
  {t.gallery}{" "}
  <span className="text-gold italic font-serif">
    {t.galleryGold}
  </span>
</h3>
            </div>
            <div className="hidden md:block h-[1px] bg-gold/30 w-1/3"></div>
          </div>

          <div className="relative">
            {/* Tombol navigasi sebelumnya */}
<button
  type="button"
  onClick={prevSlide}
  aria-label="Gambar galeri sebelumnya"
  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-16 bg-black/60 text-gold flex items-center justify-center -translate-x-full group-hover/gallery:translate-x-0 transition-all duration-300 hover:bg-gold hover:text-black rounded-r-md backdrop-blur-sm"
>
              <Icon name="chevron-left" className="text-xl" />
            </button>

            <button
  type="button"
  onClick={nextSlide}
  aria-label="Gambar galeri berikutnya"
  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-16 bg-black/60 text-gold flex items-center justify-center translate-x-full group-hover/gallery:translate-x-0 transition-all duration-300 hover:bg-gold hover:text-black rounded-l-md backdrop-blur-sm"
>
  <Icon name="chevron-right" className="text-xl" />
</button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {/* 3. MAPPING GALLERY (Tetap sama, karena galleryImages tidak perlu translate) */}
                {galleryImages.map((img, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div className="group relative overflow-hidden h-72 border border-white/5 bg-black">
                      <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>

                      
<img
  loading="lazy"
  decoding="async"
  width="600"
  height="450"
  src={img}
  srcSet={getUnsplashSrcSet(img, [480, 768, 960], 70)}
  sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 50vw, 33vw"
  alt={`Galeri pelatihan barista ${index + 1}`}
  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-700 ease-in-out"
/>


                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <Icon name="eye" className="text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {Array.from({
  length: galleryImages.length - (itemsPerView - 1),
}).map((_, idx) => (
  <button
    key={idx}
    type="button"
    aria-label={`Lihat gambar galeri ${idx + 1}`}
    aria-current={currentIndex === idx ? "true" : undefined}
    onClick={() => setCurrentIndex(idx)}
    className="flex min-h-11 min-w-11 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
  >
    <span className={`h-1 rounded-full transition-all duration-300 ${
      currentIndex === idx
        ? "w-8 bg-gold"
        : "w-2 bg-white/40 hover:bg-white/70"
    }`} />
  </button>
))}
            </div>
          </div>
        </div>
      </div>
      {/* SEO Content Section */}
      <div className="mx-auto mt-20 max-w-5xl border-t border-white/10 pt-12 md:mt-24 md:pt-16">
        <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:gap-14">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.28em] text-gold">Barista Lab Academy</p>
            <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
              Kursus Barista Profesional <span className="font-serif italic text-gold">Jakarta & Tangerang</span>
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-gray-300">
            <p>
              Barista Lab Academy menghadirkan pelatihan barista berbasis praktik untuk pemula,
              calon barista profesional, dan calon pemilik coffee shop. Peserta mempelajari
              espresso, grinder setting, milk steaming, latte art, manual brew, serta dasar
              operasional coffee shop bersama instruktur.
            </p>
            <p>
              Kami melayani peserta dari <strong className="font-medium text-white">Jakarta, Tangerang,
              Bekasi, Depok, Bogor, dan berbagai wilayah Banten</strong>. Pilihan program dan lokasi
              pelatihan dapat dikonsultasikan melalui admin.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-xs font-semibold uppercase tracking-wider">
              <a href="/kursus-barista-jakarta" className="text-gold transition hover:text-white">Kursus Barista Jakarta ↗</a>
              <a href="/kursus-barista-tangerang" className="text-gold transition hover:text-white">Kursus Barista Tangerang ↗</a>
              <a href="/kursus-barista" className="text-gold transition hover:text-white">Semua Program ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
