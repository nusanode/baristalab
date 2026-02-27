import { useState, useEffect } from "react";
// 1. IMPORT DATA DARI DATABASE
// Mengambil galleryImages DAN aboutFeatures
import { galleryImages, aboutFeatures } from "../database";
// 2. IMPORT HOOK BAHASA
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // 3. AMBIL STATE BAHASA
  const { language } = useLanguage();

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
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView]);

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
              src="https://images.unsplash.com/photo-1507914372368-b2b085b925a1?auto=format&fit=crop&w=800&q=80"
              alt="About"
              className="relative z-10 shadow-2xl grayscale hover:grayscale-0 transition duration-700 w-full object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-display text-white mb-8">
              The <span className="text-gold">Privilege</span>
            </h2>
            <div className="space-y-12">
              {/* 4. GUNAKAN DATA 'aboutFeatures' SESUAI BAHASA */}
              {aboutFeatures[language].map((feature) => (
                <div key={feature.id} className="group">
                  <div className="flex items-start gap-6">
                    <div className="text-gold text-3xl mt-1 opacity-50 group-hover:opacity-100 transition duration-300 font-serif">
                      {feature.id}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white uppercase tracking-widest mb-2 group-hover:text-gold transition">
                        {feature.title}
                      </h4>
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
                Atmosphere
              </p>
              <h3 className="text-3xl font-display text-white">
                Inside the{" "}
                <span className="text-gold italic font-serif">Lab</span>
              </h3>
            </div>
            <div className="hidden md:block h-[1px] bg-gold/30 w-1/3"></div>
          </div>

          <div className="relative">
            {/* Tombol-tombol navigasi */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-16 bg-black/60 text-gold flex items-center justify-center -translate-x-full group-hover/gallery:translate-x-0 transition-all duration-300 hover:bg-gold hover:text-black rounded-r-md backdrop-blur-sm"
            >
              <i className="fas fa-chevron-left text-xl"></i>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-16 bg-black/60 text-gold flex items-center justify-center translate-x-full group-hover/gallery:translate-x-0 transition-all duration-300 hover:bg-gold hover:text-black rounded-l-md backdrop-blur-sm"
            >
              <i className="fas fa-chevron-right text-xl"></i>
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
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-700 ease-in-out"
                      />

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <i className="fas fa-eye text-black"></i>
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
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-gold"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}