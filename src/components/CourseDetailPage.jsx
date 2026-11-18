import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Fab from "./Fab";
import { getUnsplashSrcSet } from "../utils/responsiveImage";

const WHATSAPP = "https://wa.me/6285213541993";

export default function CourseDetailPage({ eyebrow, title, highlight, description, image, duration, level, topics, outcomes }) {
  const [fabOpen, setFabOpen] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const wa = `${WHATSAPP}?text=${encodeURIComponent(`Halo Barista Lab Academy, saya ingin bertanya tentang ${title}. Mohon informasi biaya dan jadwal kelas.`)}`;

  return <>
    <Navbar />
    <main className="min-h-screen bg-[#090907] text-white">
      <section className="relative isolate flex min-h-[590px] items-end overflow-hidden pt-28 md:min-h-[680px]">
        <img src={image} srcSet={getUnsplashSrcSet(image, [480, 768, 1200, 1920], 65)} sizes="100vw" alt="" width="1920" height="1080" loading="eager" fetchPriority="high" decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#090907] via-transparent to-black/35" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-20 md:px-8 md:pb-24">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.3em] text-gold"><span className="h-px w-10 bg-gold" />{eyebrow}</p>
          <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-7xl">{title} <span className="font-serif italic text-gold">{highlight}</span></h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">{description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={wa} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center bg-gold px-7 text-[10px] font-bold uppercase tracking-[.16em] text-black transition hover:bg-[#ebcf72]">Tanya Jadwal & Biaya ↗</a>
            <Link to="/kursus-barista" className="inline-flex min-h-14 items-center justify-center border border-white/35 bg-black/20 px-7 text-[10px] font-bold uppercase tracking-[.16em] text-white transition hover:border-gold hover:text-gold">Lihat Program Lain</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[.8fr_1.2fr] md:px-8 md:py-24">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.28em] text-gold">Gambaran kelas</p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">Belajar melalui praktik yang terarah</h2>
          <p className="mt-5 text-sm leading-7 text-white/65">Program disusun agar peserta memahami konsep, mengenal peralatan, dan membangun keterampilan melalui sesi praktik langsung di lingkungan pelatihan.</p>
          <div className="mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10">
            <div className="bg-[#14120d] p-5"><span className="font-serif text-3xl text-gold">01</span><p className="mt-2 text-xs text-white/65">Durasi</p><p className="mt-1 text-sm font-semibold">{duration}</p></div>
            <div className="bg-[#14120d] p-5"><span className="font-serif text-3xl text-gold">02</span><p className="mt-2 text-xs text-white/65">Tingkat</p><p className="mt-1 text-sm font-semibold">{level}</p></div>
          </div>
        </div>
        <div className="border border-white/10 bg-[#12110d] p-7 md:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[.28em] text-gold">Materi pelatihan</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {topics.map((item) => <li key={item} className="flex gap-3 border-b border-white/10 pb-4 text-sm leading-6 text-white/80"><span className="text-gold">✦</span>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#11100c]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
          <div><p className="text-[10px] font-bold uppercase tracking-[.28em] text-gold">Setelah mengikuti kelas</p><h2 className="mt-4 font-display text-3xl">Fokus pada kemampuan yang dapat dipraktikkan</h2></div>
          <ul className="grid gap-4 sm:grid-cols-2">{outcomes.map((item) => <li key={item} className="border-b border-white/10 pb-4 text-sm leading-6 text-white/75"><span className="mr-2 text-gold">✓</span>{item}</li>)}</ul>
        </div>
      </section>
      <section className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8">
        <div><p className="text-[10px] font-bold uppercase tracking-[.28em] text-gold">Mulai belajar</p><h2 className="mt-3 font-display text-3xl">Konsultasikan kelas dan jadwal Anda</h2></div>
        <a href={wa} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center bg-gold px-8 text-xs font-bold uppercase tracking-wider text-black">Konsultasi via WhatsApp ↗</a>
      </section>
    </main>
    <Footer />
    <Fab isOpen={fabOpen} toggleOpen={() => setFabOpen((value) => !value)} />
  </>;
}
