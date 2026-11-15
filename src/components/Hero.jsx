import Icon from "./Icon";
import { useEffect, useState } from "react";
import { getUnsplashSrcSet } from "../utils/responsiveImage";
import { heroData } from "../database";
import { useLanguage } from "../context/useLanguage.js";

export default function Hero({ onConsultClick }) {
  const { language } = useLanguage();
  const { fallbackImage, tagline, headline, description, cta } = heroData[language];
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 768px)");
    const motionMedia = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    let loadTimer;
    let waitingForPageLoad = false;

    const startMobileVideo = () => {
      waitingForPageLoad = false;
      // Let the poster and above-the-fold content finish loading before fetching video on phones.
      loadTimer = window.setTimeout(() => setShouldLoadVideo(true), 1800);
    };

    const updateVideoPreference = () => {
      window.clearTimeout(loadTimer);
      window.removeEventListener("load", startMobileVideo);
      waitingForPageLoad = false;
      setIsVideoLoaded(false);

      if (!motionMedia.matches || connection?.saveData) {
        setShouldLoadVideo(false);
        return;
      }

      if (desktopMedia.matches) {
        setShouldLoadVideo(true);
        return;
      }

      // Mobile uses the exact same video, but only after the page load event and a short delay.
      setShouldLoadVideo(false);
      if (document.readyState === "complete") {
        startMobileVideo();
      } else if (!waitingForPageLoad) {
        waitingForPageLoad = true;
        window.addEventListener("load", startMobileVideo, { once: true });
      }
    };

    updateVideoPreference();
    desktopMedia.addEventListener("change", updateVideoPreference);
    motionMedia.addEventListener("change", updateVideoPreference);

    return () => {
      window.clearTimeout(loadTimer);
      window.removeEventListener("load", startMobileVideo);
      desktopMedia.removeEventListener("change", updateVideoPreference);
      motionMedia.removeEventListener("change", updateVideoPreference);
    };
  }, []);

  const proof = language === "id"
    ? ["Praktik langsung", "Kelas Jakarta & Tangerang", "Pemula hingga profesional"]
    : ["Hands-on practice", "Jakarta & Tangerang studios", "Beginner to professional"];

  const videoUrl = "/videos/hero-barista-optimized.mp4";

  return (
    <section id="home" className="hero-premium relative flex min-h-[720px] h-[min(900px,100svh)] items-center overflow-hidden bg-black">
      <div className="absolute inset-0" aria-hidden="true">
        {/* The responsive poster protects LCP; the same video fades in after it is ready. */}
        <img
          src={fallbackImage}
          srcSet={getUnsplashSrcSet(fallbackImage, [480, 768, 1200], 50)}
          sizes="100vw"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1080"
         className={`absolute inset-0 h-full w-full object-cover object-center opacity-55 transition-opacity duration-700 ${isVideoLoaded ? "opacity-0" : ""}`}
        />

        
{/* Desktop and mobile use the same local video; mobile loading is deliberately deferred. */}
        {shouldLoadVideo && (
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            onCanPlay={() => setIsVideoLoaded(true)}
            onError={() => { setShouldLoadVideo(false); setIsVideoLoaded(false); }}
            aria-hidden="true"
          />
        )}

        

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/35" />
        <div className="hero-grain absolute inset-0 opacity-[.13]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pb-16 pt-32 md:px-10 lg:px-16">
        <div className="max-w-4xl">
          <div className="mb-7 flex items-center gap-4 animate-fade-up">
            <span className="h-px w-12 bg-gold" />
            <p className="text-[10px] font-semibold uppercase tracking-[.34em] text-gold md:text-xs">{tagline}</p>
          </div>
          <h1 className="max-w-4xl font-display text-[clamp(2.8rem,7vw,6.7rem)] font-medium leading-[1.04] tracking-[-.045em] text-white">
            {headline.main}<br />
            <span className="font-serif italic font-normal tracking-[-.035em] text-gold-light">{headline.highlight}</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-7 max-w-2xl text-base font-light leading-8 text-white/70 md:text-lg">{description}</p>
          <div className=" delay-300 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#program" className="inline-flex min-h-14 items-center justify-center gap-4 rounded-sm bg-gold px-8 text-[11px] font-bold uppercase tracking-[.18em] text-black shadow-[0_12px_40px_rgba(212,175,55,.16)] transition duration-300 hover:-translate-y-1 hover:bg-gold-light">
              {cta.primary}<span aria-hidden="true">↗</span>
            </a>
            <button onClick={onConsultClick} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-sm border border-white/25 bg-white/[.04] px-8 text-[11px] font-bold uppercase tracking-[.18em] text-white backdrop-blur-sm transition hover:border-gold hover:text-gold">
              <Icon name="whatsapp" className="inline-block h-4 w-4" />{cta.secondary}
            </button>
          </div>
          <div className="mt-14 grid max-w-3xl grid-cols-1 gap-4 border-t border-white/15 pt-6 sm:grid-cols-3 sm:gap-6">
            {proof.map((item, index) => (
              <div className="flex items-center gap-3 text-xs tracking-wide text-white/65" key={item}>
                <span className="font-serif text-lg text-gold">0{index + 1}</span><span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-10 right-8 hidden -rotate-90 items-center gap-3 text-[9px] uppercase tracking-[.35em] text-white/65 xl:flex">
        <span className="h-px w-12 bg-gold/60" />Barista Lab Academy
      </div>
    </section>
  );
}
