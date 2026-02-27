import { useState } from "react";
// 1. IMPORT DATA DARI DATABASE
import { heroData } from "../database";
// 2. IMPORT HOOK BAHASA
import { useLanguage } from "../context/LanguageContext";

export default function Hero({ onConsultClick }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // 3. AMBIL STATE BAHASA DARI CONTEXT
  const { language } = useLanguage();

  // 4. AMBIL DATA DARI heroData SESUAI BAHASA YANG AKTIF
  // Sebelumnya: const { ... } = heroData;
  // Sekarang akses array/objek menggunakan key [language] ('id' atau 'en')
  const { videoId, fallbackImage, tagline, headline, description, cta } =
    heroData[language];

  // Parameters
  const youtubeParams = `?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}${youtubeParams}`;

  return (
    <section
      id="home"
      className="h-dvh flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* --- YOUTUBE BACKGROUND START --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* GAMBAR FALLBACK (Data dari Database) */}
        <img
          src={fallbackImage}
          alt="Hero Background Fallback"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isVideoLoaded ? "opacity-0" : "opacity-50"
          }`}
        />

        {/* YOUTUBE IFRAME */}
        <iframe
          onLoad={() => setIsVideoLoaded(true)}
          className={`absolute top-1/2 left-1/2 w-[300vw] h-[300vh] -translate-x-1/2 -translate-y-1/2 mix-blend-overlay transition-opacity duration-1000 ease-in-out ${
            isVideoLoaded ? "opacity-80" : "opacity-0"
          }`}
          src={embedUrl}
          title="Hero Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ pointerEvents: "none" }}
        ></iframe>

        {/* Extra Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>
      {/* --- YOUTUBE BACKGROUND END --- */}

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark/90 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark to-transparent z-20 pointer-events-none"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-30 mt-10">
        <div className="animate-fade-up">
          <p className="text-gold text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-medium border-b border-white/10 inline-block pb-2">
            {tagline}
          </p>
        </div>
        <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-8xl font-display text-white mb-8 leading-tight text-glow">
          {headline.main}
          <br />
          <span className="italic font-serif text-gold-light">
            {headline.highlight}
          </span>
        </h1>
        <p className="animate-fade-up delay-200 text-gray-400 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="animate-fade-up delay-300 flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="#program"
            className="bg-gold text-black px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300 min-w-[200px]"
          >
            {cta.primary}
          </a>

          <button
            onClick={onConsultClick}
            className="text-white px-10 py-4 font-bold uppercase tracking-widest text-xs border border-white/20 hover:border-gold hover:text-gold transition-colors duration-300 min-w-[200px] flex items-center justify-center gap-3"
          >
            <i className="fab fa-whatsapp text-lg"></i> {cta.secondary}
          </button>
        </div>
      </div>
    </section>
  );
}