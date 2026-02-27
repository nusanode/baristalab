import { useState, useEffect } from 'react';
// 1. IMPORT HOOK BAHASA
import { useLanguage } from '../context/LanguageContext';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 2. AMBIL STATE BAHASA
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // 1. Hitung posisi scroll saat ini
      const scrollTop = window.scrollY;
      
      // 2. Hitung total tinggi yang bisa di-scroll (Tinggi Dokumen - Tinggi Layar)
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // 3. Update Visibility (Muncul setelah scroll 300px)
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 4. Update Progress Bar (0 sampai 100)
      if (windowHeight > 0) {
        const progress = (scrollTop / windowHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // --- Konfigurasi Lingkaran SVG ---
  const size = 60; // Ukuran referensi viewBox SVG
  const strokeWidth = 4; // Ketebalan garis
  const center = size / 2;
  const radius = (size / 2) - strokeWidth; // Jari-jari lingkaran
  const circumference = 2 * Math.PI * radius; // Keliling lingkaran
  // Menghitung offset garis putus-putus berdasarkan progress scroll
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-8 left-8 md:bottom-8 md:left-8 z-[90] transition-all duration-500 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      <button
        onClick={scrollToTop}
        // UBAH: Ukuran disamakan dengan Fab.jsx (w-16 h-16)
        className="relative w-16 h-16 rounded-full bg-black/80 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-gold/50 transition-all duration-300 flex items-center justify-center group"
        // 3. UPDATE ARIA LABEL SESUAI BAHASA
        aria-label={language === 'id' ? 'Kembali ke Atas' : 'Scroll to Top'}
      >
        {/* --- SVG PROGRESS RING --- */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 transform p-1" // p-1 memberi sedikit jarak dari tepi
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Lingkaran Background (Abu-abu tipis) */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
          />
          {/* Lingkaran Progress (Emas) */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#D4AF37"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-100 ease-out" // Animasi halus saat scroll
          />
        </svg>

        {/* --- ICON ARROW --- */}
        {/* UBAH: Text size diperbesar sedikit (text-xl) agar seimbang dengan tombol yang lebih besar */}
        <i className="fas fa-arrow-up text-gold text-xl group-hover:-translate-y-1 transition-transform duration-300 relative z-10 group-hover:text-white"></i>
      </button>
    </div>
  );
}