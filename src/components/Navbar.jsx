import { useState, useEffect } from "react";
import logoImg from "../images/Logo.png";
// 1. IMPORT DATA DARI DATABASE
import { navItems } from "../database";
// 2. IMPORT HOOK BAHASA
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // State untuk Dropdown Bahasa
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // 3. AMBIL STATE & FUNGSI SET BAHASA
  const { language, setLanguage } = useLanguage();

  // --- URL GAMBAR BENDERA (Menggunakan CDN agar muncul di Windows) ---
  const flags = {
    id: "https://flagcdn.com/w40/id.png",
    en: "https://flagcdn.com/w40/gb.png"
  };

  // Effect 1: Handle Background on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect 2: Handle Active State (ScrollSpy)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    const sections = document.querySelectorAll("section[id], footer[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Effect 3: FIX BUG SCROLL MOBILE (Scroll Locking)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper untuk mengubah bahasa
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false); // Tutup dropdown setelah memilih
  };

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
          isScrolled
            ? "py-4 border-white/5 bg-dark-charcoal/90 backdrop-blur-md"
            : "py-6 border-transparent"
        }`}
      >
        <div className="container mx-auto px-8 flex justify-between items-center">
          {/* --- LOGO --- */}
          <a href="#" className="group flex items-center gap-3">
            <img
              src={logoImg}
              alt="Barista Lab Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:rotate-12"
            />
            <div className="flex flex-col">
              <div className="text-2xl font-display font-bold text-white tracking-[0.15em] group-hover:text-gold transition duration-300">
                BARISTA<span className="text-gold font-light">LAB</span>
              </div>
              <div className="h-[1px] w-0 bg-gold group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
          </a>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex space-x-10 items-center text-sm font-medium tracking-widest uppercase">
            {/* 4. GUNAKAN 'navItems[language]' UNTUK MAPPING */}
            {navItems[language].map((item) => (
              <a
                key={item.label}
                href={`#${item.id}`}
                className={`transition duration-300 relative group ${
                  activeSection === item.id
                    ? "text-gold"
                    : "text-white hover:text-gold"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[1px] bg-gold transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}

            {/* 5. DROPDOWN BAHASA (DESKTOP - Dengan Gambar Bendera) */}
            <div className="relative">
                {/* Tombol Pemicu Dropdown */}
                <button 
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors py-2 border border-white/10 px-3 rounded-full hover:border-gold/50"
                >
                    {/* Tampilkan bendera aktif (Gambar) */}
                    <img 
                        src={flags[language]} 
                        alt={language} 
                        className="w-5 h-auto shadow-sm rounded-sm"
                    />
                    <span className="text-xs font-bold">{language.toUpperCase()}</span>
                    <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {/* Menu Dropdown */}
                {isLangDropdownOpen && (
                    <>
                        {/* Invisible Backdrop untuk menutup saat klik di luar */}
                        <div className="fixed inset-0 z-40 cursor-default" onClick={() => setIsLangDropdownOpen(false)}></div>
                        
                        {/* Isi Menu */}
                        <div className="absolute top-full right-0 mt-2 w-36 bg-dark-charcoal border border-white/10 shadow-2xl rounded-lg py-1 z-50 flex flex-col animate-fade-up overflow-hidden">
                            <button 
                                onClick={() => changeLanguage('id')}
                                className={`flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-wider hover:bg-white/5 transition-colors text-left ${language === 'id' ? 'text-gold bg-white/5' : 'text-gray-400'}`}
                            >
                                <img src={flags.id} alt="ID" className="w-5 h-auto rounded-sm" />
                                <span>Indonesia</span>
                            </button>
                            <button 
                                onClick={() => changeLanguage('en')}
                                className={`flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-wider hover:bg-white/5 transition-colors text-left ${language === 'en' ? 'text-gold bg-white/5' : 'text-gray-400'}`}
                            >
                                <img src={flags.en} alt="EN" className="w-5 h-auto rounded-sm" />
                                <span>English</span>
                            </button>
                        </div>
                    </>
                )}
            </div>

            <a
              href="#contact"
              className="border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-black transition-all duration-300 ease-out font-semibold"
            >
              {language === 'id' ? 'Daftar' : 'Join Now'}
            </a>
          </div>

          {/* --- MOBILE HAMBURGER BUTTON --- */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-2xl text-gold focus:outline-none transition-transform duration-300 active:scale-90"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`md:hidden fixed inset-0 z-[95] transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* 1. BACKDROP */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* 2. MENU CONTENT PANEL */}
        <div
          className={`absolute top-0 left-0 w-full h-dvh bg-dark-charcoal border-b border-white/10 shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Header Menu Mobile */}
          <div className="flex justify-between items-center px-8 py-6 border-b border-white/5 shrink-0">
            <span className="text-lg font-bold text-white tracking-widest">
              MENU
            </span>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-gold focus:outline-none hover:rotate-90 transition-transform duration-300"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* List Menu Items */}
          <div className="flex flex-col justify-center items-center flex-grow px-8 pb-20 space-y-8 text-center overflow-y-auto">
            {/* 6. GUNAKAN 'navItems[language]' UNTUK MOBILE JUGA */}
            {navItems[language].map((item) => (
              <a
                key={item.label}
                href={`#${item.id}`}
                onClick={handleMobileMenuClick}
                className={`block text-xl uppercase tracking-[0.2em] transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-gold font-bold"
                    : "text-white hover:text-gold active:text-gold/70"
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-8 w-full max-w-xs flex flex-col gap-6 items-center">
              <a
                href="#contact"
                onClick={handleMobileMenuClick}
                className="block w-full text-center border border-gold text-gold py-4 uppercase text-sm tracking-widest font-bold hover:bg-gold hover:text-black transition-all active:scale-95"
              >
                 {language === 'id' ? 'Daftar Sekarang' : 'Register Now'}
              </a>

              {/* 7. PILIHAN BAHASA (MOBILE) - STYLE DENGAN BENDERA */}
              <div className="flex items-center gap-2 border border-white/10 rounded-full p-1 bg-black/20">
                  <button 
                    onClick={() => changeLanguage('id')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${language === 'id' ? 'bg-gold text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                  >
                    <img src={flags.id} alt="ID" className="w-4 h-auto rounded-sm" />
                    Indo
                  </button>
                  <button 
                    onClick={() => changeLanguage('en')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${language === 'en' ? 'bg-gold text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                  >
                    <img src={flags.en} alt="EN" className="w-4 h-auto rounded-sm" />
                    Eng
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}