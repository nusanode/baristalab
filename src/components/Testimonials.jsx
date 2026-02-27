import { useState, useEffect } from 'react';
// PERUBAHAN: Import data dari file database pusat, bukan dari folder data/
import { testimonialsData, partnersData } from '../database';
// 1. IMPORT HOOK BAHASA
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  // Menggunakan data import untuk Marquee loop
  const infinitePartners = [...partnersData, ...partnersData];

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // 2. AMBIL STATE BAHASA
  const { language } = useLanguage();

  // 3. AMBIL DATA TESTIMONI SESUAI BAHASA
  const currentTestimonials = testimonialsData[language];

  // 4. DEFINISI TEKS STATIS
  const content = {
    id: {
      subtitle: "Kisah Sukses",
      title: { t1: "Jaringan ", highlight: "Alumni", t2: " Kami" },
      partners: "Alumni kami bekerja di"
    },
    en: {
      subtitle: "Success Stories",
      title: { t1: "Our ", highlight: "Alumni", t2: " Network" },
      partners: "Our alumni work at"
    }
  };
  const text = content[language];

  // Responsive Handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Desktop: 3 Cards
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // Tablet: 2 Cards
      } else {
        setItemsPerView(1); // Mobile: 1 Card
      }
    };

    handleResize(); // Init
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation Functions
  const maxIndex = currentTestimonials.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto Play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, itemsPerView]);

  // Star Render Helper
  const renderStars = (rating) => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`fas fa-star text-xs ${i < rating ? "text-gold shadow-glow" : "text-gray-600"}`}
        ></i>
      ))}
    </div>
  );

  return (
    <section
      id="testimonials"
      className="py-24 bg-dark relative overflow-hidden"
    >
      {/* Local CSS for Marquee */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll 30s linear infinite;
        }
      `}</style>
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px]"></div>
      {/* --- CONTAINER UTAMA (Hanya membungkus Header & Carousel) --- */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-gold text-xs md:text-sm uppercase tracking-[0.3em] mb-3 font-medium">
            {text.subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
            {text.title.t1}<span className="text-gold italic font-serif">{text.title.highlight}</span>{text.title.t2}
          </h2>
        </div>

        {/* --- CAROUSEL AREA --- */}
        <div className="relative max-w-7xl mx-auto mb-20 group/carousel">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-gold/10 border border-gold/30 hover:bg-gold hover:text-black text-gold flex items-center justify-center transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-gold/10 border border-gold/30 hover:bg-gold hover:text-black text-gold flex items-center justify-center transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Wrapper Overflow Hidden */}
          <div className="overflow-hidden px-2 py-4">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {/* 5. MAPPING DATA TESTIMONI YANG SUDAH DIFILTER BAHASA */}
              {currentTestimonials.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3 md:px-4"
                >
                  <div className="bg-dark-charcoal border border-white/5 p-8 relative h-full hover:border-gold/30 transition-all duration-300 hover:-translate-y-1">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-8 text-6xl text-gold/10 font-serif leading-none">
                      "
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-gold/20"
                      />
                      <div>
                        <h4 className="text-white font-display text-lg tracking-wide">
                          {item.name}
                        </h4>
                        <p className="text-gold text-xs uppercase tracking-wider">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {renderStars(item.rating)}

                    <p className="text-gray-400 text-sm leading-loose italic relative z-10">
                      "{item.quote}"
                    </p>

                    <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2">
                      <i className="fas fa-briefcase text-white/20 text-xs"></i>
                      <span className="text-white/40 text-xs uppercase tracking-widest">
                        {item.workplace}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
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
      </div>{" "}
      {/* <--- PERBAIKAN: CONTAINER DITUTUP DI SINI */}
      {/* --- Partner Logos (DILUAR CONTAINER AGAR FULL WIDTH) --- */}
      {/* --- Partner Logos (DILUAR CONTAINER AGAR FULL WIDTH) --- */}
      {/* UBAH: Menambahkan pb-16 agar ada jarak di bawah huruf */}
      <div className="border-t bg-dark-charcoal border-white/5 pt-16 pb-16 overflow-hidden relative z-10">
        <p className="text-center text-white/30 text-xs uppercase tracking-[0.2em] mb-12">
          {text.partners}
        </p>

        {/* Gradient Overlay (kiri & kanan) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-charcoal to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-charcoal to-transparent z-20 pointer-events-none"></div>

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {infinitePartners.map((partner, idx) => (
            <div
              key={idx}
              className="mx-8 md:mx-16 flex items-center justify-center"
            >
              <h3 className="text-xl md:text-3xl font-display font-bold text-white/40 hover:text-gold transition-colors duration-300 cursor-default whitespace-nowrap">
                {partner}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}