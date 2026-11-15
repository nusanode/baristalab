import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../images/logo-ui.webp";
import { navItems } from "../database";
import { useLanguage } from "../context/useLanguage.js";

export default function Navbar() {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuState, setMenuState] = useState({ key: location.key, open: false });
  const menuOpen = menuState.key === location.key && menuState.open;
  const setMenuOpen = useCallback((value) => {
    const nextOpen = typeof value === "function" ? value(menuOpen) : value;
    setMenuState({ key: location.key, open: nextOpen });
  }, [location.key, menuOpen]);
  const [activeSectionState, setActiveSectionState] = useState({ key: location.key, id: "home" });
  const activeSection = activeSectionState.key === location.key
    ? activeSectionState.id
    : (location.pathname === "/" ? "home" : "");
  const setActiveSection = useCallback((id) => {
    setActiveSectionState({ key: location.key, id });
  }, [location.key]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, setMenuOpen]);

  useEffect(() => {
    if (location.pathname !== "/" || !("IntersectionObserver" in window)) return undefined;
    const sections = document.querySelectorAll("section[id], footer[id]");
    if (!sections.length) return undefined;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-25% 0px -55% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname, setActiveSection]);

  const items = navItems[language] || navItems.id;
  const navHref = (id) => location.pathname === "/" ? `#${id}` : `/#${id}`;

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || menuOpen ? "border-white/10 bg-[#090907]/95 py-3 shadow-xl backdrop-blur-xl" : "border-transparent bg-gradient-to-b from-black/60 to-transparent py-5"}`}>
        <nav aria-label="Navigasi utama" className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <Link to="/" aria-label="BARISTALAB ACADEMY - Beranda" className="flex min-w-0 items-center gap-3">
            <img src={logoImg} alt="Logo Barista Lab Academy" width="58" height="79" className="h-10 w-10 object-contain" />
            <span className="font-display text-lg font-bold tracking-[.13em] text-white sm:text-xl">BARISTA<span className="font-light text-gold">LAB</span><span className="mt-0.5 block text-[8px] font-medium tracking-[.34em] text-white/70">ACADEMY</span></span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {items.map((item) => (
              <a key={item.id} href={navHref(item.id)} className={`relative py-2 text-[10px] font-semibold uppercase tracking-[.18em] transition-colors hover:text-gold ${activeSection === item.id && location.pathname === "/" ? "text-gold" : "text-white/75"}`}>
                {item.label}
                <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all ${activeSection === item.id && location.pathname === "/" ? "w-full" : "w-0"}`} />
              </a>
            ))}
            <Link to="/kursus-barista" className="inline-flex min-h-11 items-center border border-gold/80 px-6 text-[10px] font-bold uppercase tracking-[.17em] text-gold transition hover:bg-gold hover:text-black">Lihat Program <span className="ml-2" aria-hidden="true">↗</span></Link>
            <button type="button" onClick={() => setLanguage(language === "id" ? "en" : "id")} aria-label={language === "id" ? "ID - Ganti bahasa" : "EN - Change language"} className="min-h-11 min-w-11 rounded-full border border-white/15 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-white/70 hover:border-gold hover:text-gold">{language === "id" ? "ID" : "EN"}</button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button type="button" onClick={() => setLanguage(language === "id" ? "en" : "id")} className="min-h-11 min-w-11 rounded-full border border-white/20 px-3 py-2 text-[10px] font-bold text-white" aria-label={language === "id" ? "ID - Ganti bahasa" : "EN - Change language"}>{language.toUpperCase()}</button>
            <button type="button" aria-label={menuOpen ? "Tutup menu" : "Buka menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)} className="flex h-11 w-11 items-center justify-center border border-white/15 text-xl text-gold">{menuOpen ? "×" : "☰"}</button>
          </div>
        </nav>
      </header>

      <div className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity lg:hidden ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      <aside id="mobile-navigation" aria-label="Menu navigasi mobile" aria-hidden={!menuOpen} inert={!menuOpen}
        className={`fixed right-0 top-0 z-[45] flex h-dvh w-[min(88vw,390px)] flex-col border-l border-white/10 bg-[#0b0a08] px-7 pb-8 pt-28 shadow-2xl transition-transform duration-300 lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <p className="mb-7 text-[9px] font-semibold uppercase tracking-[.32em] text-gold">Barista Lab Academy</p>
        <div className="flex flex-col">
          {items.map((item, index) => (
            <a key={item.id} href={navHref(item.id)} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-white/10 py-5 text-sm font-medium tracking-wide text-white/85 transition hover:text-gold">
              <span>{item.label}</span><span className="font-serif text-gold/60">0{index + 1}</span>
            </a>
          ))}
        </div>
        <div className="mt-auto space-y-4">
          <Link to="/kursus-barista" onClick={() => setMenuOpen(false)} className="flex min-h-14 items-center justify-center bg-gold px-5 text-xs font-bold uppercase tracking-[.18em] text-black">Jelajahi Program ↗</Link>
          <a href="https://wa.me/6285213541993?text=Halo%20Barista%20Lab%20Academy%2C%20saya%20ingin%20konsultasi%20program%20kursus." target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center justify-center border border-white/20 text-xs font-semibold text-white">Konsultasi WhatsApp</a>
        </div>
      </aside>
    </>
  );
}
