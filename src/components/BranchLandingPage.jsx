import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Fab from "./Fab";
import { coursesData } from "../database";
import { getUnsplashSrcSet } from "../utils/responsiveImage"; 
const programs = [
  {
    name: "Barista Basic",
    detail: "Fondasi kopi, pengenalan alat, espresso dasar, dan milk steaming.",
    audience: "Pemula dan coffee enthusiast",
    image: coursesData.id.basic.image,
  },
  {
    name: "Barista Profesional",
    detail: "Kalibrasi grinder, espresso extraction, milk texturing, latte art, dan workflow kafe.",
    audience: "Calon barista profesional",
    image: coursesData.id.pro.image,
  },
  {
    name: "Barista Pro Business",
    detail: "Teknik barista, penyusunan menu, costing, HPP, dan dasar operasional coffee shop.",
    audience: "Calon pemilik usaha kopi",
    image: coursesData.id.business.image,
  },
];

const benefits = ["Praktik langsung dengan mesin espresso", "Pendampingan instruktur selama sesi", "Materi terstruktur dari dasar hingga praktik", "Pilihan kelas di Jakarta dan Tangerang"];

export default function BranchLandingPage({ city, area, address, phone, mapUrl, slug, description }) {
  const [fabOpen, setFabOpen] = useState(false);
  const wa = `https://wa.me/${phone}?text=${encodeURIComponent(`Halo Barista Lab Academy, saya ingin bertanya tentang kursus barista di ${city}. Mohon informasi program, biaya, dan jadwal kelas.`)}`;

  useEffect(() => {
    document.title = `Kursus Barista ${city} | Barista Lab Academy`;
    const desc = `Ikuti kursus barista di ${city} bersama Barista Lab Academy. ${description} Konsultasikan program, biaya, dan jadwal kelas melalui WhatsApp.`;
    const setMeta = (selector, attr, value, tag, key, keyValue) => {
      let el = document.querySelector(selector);
      if (!el) { el = document.createElement(tag); el.setAttribute(key, keyValue); document.head.appendChild(el); }
      el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", desc, "meta", "name", "description");
    setMeta('meta[property="og:title"]', "content", `Kursus Barista ${city} | Barista Lab Academy`, "meta", "property", "og:title");
    setMeta('meta[property="og:description"]', "content", desc, "meta", "property", "og:description");
    const canonicalUrl = `https://www.baristalab.co.id/${slug}`;
    setMeta('meta[property="og:url"]', "content", canonicalUrl, "meta", "property", "og:url");
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = canonicalUrl;
    const id = `branch-course-${slug}`;
    let schema = document.getElementById(id);
    if (!schema) { schema = document.createElement("script"); schema.id = id; schema.type = "application/ld+json"; document.head.appendChild(schema); }
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Course", name: `Kursus Barista ${city}`, description: desc, url: canonicalUrl, inLanguage: "id-ID", provider: { "@type": "EducationalOrganization", name: "Barista Lab Academy", url: "https://www.baristalab.co.id/" } });
    window.scrollTo(0, 0);
    return () => { document.getElementById(id)?.remove(); };
  }, [city, description, slug]);

  return <>
    <Navbar />
    <main className="min-h-screen bg-[#090907] pb-20 pt-28 text-white md:pt-36">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(212,175,55,.16),transparent_42%),linear-gradient(120deg,#090907,#15130e_58%,#090907)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-8 md:grid-cols-[1.15fr_.85fr] md:items-end md:px-8 md:pb-24">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.32em] text-gold"><span className="h-px w-10 bg-gold" />Professional Coffee Training</p>
            <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Kursus Barista <span className="font-serif italic text-gold">{city}</span></h1>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 md:text-base md:leading-8">{description} Belajar melalui kombinasi pemahaman teori dan praktik langsung untuk membangun keterampilan yang dibutuhkan di industri kopi.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={wa} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center bg-gold px-7 text-[10px] font-bold uppercase tracking-[.17em] text-black transition hover:bg-[#ebcf72]">Tanya Jadwal & Biaya ↗</a>
              <Link to="/kursus-barista" className="inline-flex min-h-14 items-center justify-center border border-white/20 px-7 text-[10px] font-bold uppercase tracking-[.17em] text-white transition hover:border-gold hover:text-gold">Lihat Semua Program</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10">
            <div className="bg-[#11100c] p-5 sm:p-7"><span className="font-serif text-3xl text-gold">01</span><p className="mt-3 text-xs leading-5 text-white/65">Praktik langsung</p></div>
            <div className="bg-[#11100c] p-5 sm:p-7"><span className="font-serif text-3xl text-gold">02</span><p className="mt-3 text-xs leading-5 text-white/65">Pilihan kelas bertahap</p></div>
            <div className="bg-[#11100c] p-5 sm:p-7"><span className="font-serif text-3xl text-gold">03</span><p className="mt-3 text-xs leading-5 text-white/65">Pendampingan instruktur</p></div>
            <div className="bg-[#11100c] p-5 sm:p-7"><span className="font-serif text-3xl text-gold">04</span><p className="mt-3 text-xs leading-5 text-white/65">Studio {city}</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 max-w-2xl"><p className="text-[10px] font-bold uppercase tracking-[.3em] text-gold">Pilih jalur belajar</p><h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">Program kursus barista</h2><p className="mt-4 text-sm leading-7 text-white/75">Pilih program berdasarkan pengalaman dan tujuan belajar. Admin kami dapat membantu menjelaskan materi serta jadwal yang tersedia.</p></div>
       
<div className="grid gap-5 md:grid-cols-3">
  {programs.map((program, index) => (
    <article
      key={program.name}
      className="group flex min-h-[420px] flex-col overflow-hidden border border-white/10 bg-gradient-to-b from-[#1a1811] to-[#100f0c] transition duration-300 hover:-translate-y-1 hover:border-gold/50"
    >
      <div className="aspect-[16/9] overflow-hidden">
        
<img
  src={program.image}
  srcSet={getUnsplashSrcSet(program.image, [320, 480], 55)}
  sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 50vw, 33vw"
  alt={program.name}
  width="800"
  height="450"
  loading="lazy"
  decoding="async"
  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
/>

      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <span className="font-serif text-3xl text-gold/75">
          0{index + 1}
        </span>

        <h3 className="mt-5 text-xl font-semibold">
          {program.name}
        </h3>

        <p className="mt-3 text-xs leading-6 text-white/75">
          {program.detail}
        </p>

        <p className="mt-5 text-[10px] uppercase tracking-wider text-gold/80">
          {program.audience}
        </p>

        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-3 pt-8 text-[10px] font-bold uppercase tracking-[.16em] text-white transition group-hover:text-gold"
        >
          Konsultasi program <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  ))}
</div>

      </section>

      <section className="border-y border-white/10 bg-[#100f0c]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-gold">Pengalaman belajar</p><h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">Belajar dengan fokus pada keterampilan praktik</h2><p className="mt-5 text-sm leading-7 text-white/75">Pelatihan dirancang agar peserta memahami proses kerja barista, mengenal peralatan, dan berlatih menjalankan tahapan penyajian minuman kopi.</p></div>
          <ul className="grid content-center gap-4 sm:grid-cols-2">{benefits.map((benefit) => <li key={benefit} className="flex gap-3 border-b border-white/10 pb-4 text-sm leading-6 text-white/75"><span className="text-gold">✦</span>{benefit}</li>)}</ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[.9fr_1.1fr] md:px-8 md:py-24">
        <div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-gold">Kunjungi studio</p><h2 className="mt-4 font-display text-3xl font-medium">Lokasi pelatihan {city}</h2><p className="mt-4 text-sm leading-7 text-white/60">{area}</p></div>
        <div className="border border-white/10 bg-[#14120d] p-6 md:p-8"><p className="text-[10px] font-bold uppercase tracking-[.25em] text-gold">Studio {city}</p><p className="mt-4 text-sm leading-7 text-white/80">{address}</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center border border-white/20 px-5 text-[10px] font-bold uppercase tracking-wider hover:border-gold hover:text-gold">Petunjuk lokasi ↗</a><a href={wa} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center bg-gold px-5 text-[10px] font-bold uppercase tracking-wider text-black">Hubungi admin ↗</a></div></div>
      </section>
    </main>
    <Footer />
    <Fab isOpen={fabOpen} toggleOpen={() => setFabOpen((value) => !value)} />
  </>;
}
