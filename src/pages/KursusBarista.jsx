import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";
import { getUnsplashSrcSet } from "../utils/responsiveImage";
import { Link } from "react-router-dom";

export default function KursusBarista() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    document.title = "Kursus Barista Profesional & Sertifikasi | Barista Lab Academy";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Daftar kursus barista profesional di Jakarta, Tangerang, dan wilayah sekitarnya. Pelatihan praktik espresso, setting grinder, kalibrasi, latte art, dan manajemen bar.");
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Kursus Barista Profesional & Sertifikasi | Barista Lab Academy");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://www.baristalab.co.id/kursus-barista");

    const scriptId = "schema-course-barista";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Kursus Barista Profesional Bersertifikat",
        "description": "Program pelatihan barista intensif dari dasar hingga mahir di Jakarta & Tangerang. Fasilitas 1 orang 1 mesin kopi komersial.",
        "provider": { "@type": "EducationalOrganization", "name": "Barista Lab Academy", "url": "https://www.baristalab.co.id" }
      });
      document.head.appendChild(script);
    }
    window.scrollTo(0, 0);
    return () => { const s = document.getElementById(scriptId); if (s) s.remove(); };
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-[#090907] text-white min-h-screen">
        <section className="relative isolate flex min-h-[520px] items-end overflow-hidden pt-28 md:min-h-[610px]">
          <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1920&q=75" srcSet={getUnsplashSrcSet("https://images.unsplash.com/photo-1521017432531-fbd92d768814", [480, 768, 1200, 1920], 65)} sizes="100vw" alt="" width="1920" height="1080" loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#090907] via-transparent to-black/25" />
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-16 md:px-8 md:pb-20">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[.3em] text-gold">Professional Coffee Training</p>
            <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-7xl">Kursus Barista <span className="font-serif italic text-gold">Profesional</span></h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">Pilih program dari kelas basic hingga profesional. Bangun keterampilan espresso, latte art, manual brew, dan operasional coffee shop melalui praktik langsung.</p>
            <a href="https://wa.me/6285213541993?text=Halo%20Barista%20Lab%20Academy%2C%20saya%20ingin%20konsultasi%20program%20kursus." target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-14 items-center justify-center bg-gold px-8 text-xs font-bold uppercase tracking-wider text-black">Konsultasi Program via WhatsApp ↗</a>
          </div>
        </section>
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="max-w-3xl text-sm leading-7 text-white/70">Program kursus Barista Lab Academy dirancang untuk membantu peserta menguasai keterampilan barista profesional mulai dari dasar hingga tingkat lanjutan sesuai standar industri kopi modern.</p>
          
          {/* TABEL KURIKULUM */}
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gold">Perbandingan Program Kelas Barista Lab Academy</h2>
          <div className="table-container overflow-x-auto mb-10 rounded-xl border border-gray-800">
            <table className="w-full border-collapse min-w-[600px] text-sm text-left bg-neutral-900 text-gray-300">
              <thead>
                <tr className="bg-neutral-950 text-white border-b border-gray-800">
                  <th className="p-4 font-semibold">Fitur & Materi Kelas</th>
                  <th className="p-4 font-semibold text-center">Barista Basic</th>
                  <th className="p-4 font-semibold text-center text-gold">Barista Professional</th>
                  <th className="p-4 font-semibold text-center">Barista Pro Business</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-850"><td className="p-4 font-medium text-white">Target Peserta</td><td className="p-4 text-center">Pemula & Hobi</td><td className="p-4 text-center bg-neutral-800/40 font-semibold text-white">Calon Barista Kerja</td><td className="p-4 text-center">Calon Pemilik Kafe</td></tr>
                <tr className="border-b border-gray-850"><td className="p-4 font-medium text-white">Rasio Alat</td><td className="p-4 text-center">1 Orang 1 Mesin</td><td className="p-4 text-center bg-neutral-800/40 font-semibold text-white">1 Orang 1 Mesin</td><td className="p-4 text-center">1 Orang 1 Mesin</td></tr>
                <tr className="border-b border-gray-850"><td className="p-4 font-medium text-white">Kalibrasi Espresso</td><td className="p-4 text-center text-emerald-400">✔ (Dasar)</td><td className="p-4 text-center bg-neutral-800/40 text-emerald-400 font-semibold">✔ (Advance)</td><td className="p-4 text-center text-emerald-400">✔ (Lengkap)</td></tr>
                <tr className="border-b border-gray-850"><td className="p-4 font-medium text-white">Manual Brewing</td><td className="p-4 text-center text-emerald-400 font-semibold">✔ Ya</td><td className="p-4 text-center bg-neutral-800/40 text-emerald-400 font-semibold">✔ Ya</td><td className="p-4 text-center text-emerald-400">✔ Ya</td></tr>
                <tr className="border-b border-gray-850"><td className="p-4 font-medium text-white">HPP & Bisnis Kafe</td><td className="p-4 text-center text-rose-400">✘ Tidak Ada</td><td className="p-4 text-center bg-neutral-800/40 text-rose-400">✘ Tidak Ada</td><td className="p-4 text-center text-emerald-400 font-semibold">✔ Strategi Bisnis</td></tr>
                <tr><td className="p-4 font-medium text-white">Sertifikat Resmi</td><td className="p-4 text-center text-emerald-400">✔ Ada</td><td className="p-4 text-center bg-neutral-800/40 text-emerald-400 font-semibold">✔ Ada</td><td className="p-4 text-center text-emerald-400">✔ Ada</td></tr>
              </tbody>
            </table>
          </div>

          <section className="mb-14 grid gap-4 md:grid-cols-3" aria-label="Pilihan kelas spesialis">
            <Link to="/kelas-basic-barista" className="group border border-white/10 bg-[#14120d] p-6 transition hover:border-gold/60">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-gold">Foundation</p>
              <h2 className="mt-3 text-xl font-semibold text-white group-hover:text-gold">Kelas Basic Barista</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">Dasar kopi, espresso, peralatan, dan pengenalan workflow bar.</p>
              <span className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-gold">Lihat kelas ↗</span>
            </Link>
            <Link to="/kelas-latte-art" className="group border border-white/10 bg-[#14120d] p-6 transition hover:border-gold/60">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-gold">Specialist</p>
              <h2 className="mt-3 text-xl font-semibold text-white group-hover:text-gold">Kelas Latte Art</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">Milk steaming, microfoam, dan teknik pouring pola latte art.</p>
              <span className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-gold">Lihat kelas ↗</span>
            </Link>
            <Link to="/kelas-brewing" className="group border border-white/10 bg-[#14120d] p-6 transition hover:border-gold/60">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-gold">Specialist</p>
              <h2 className="mt-3 text-xl font-semibold text-white group-hover:text-gold">Kelas Manual Brewing</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">V60, Kalita, rasio seduh, grind size, dan eksplorasi rasa.</p>
              <span className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-gold">Lihat kelas ↗</span>
            </Link>
          </section>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Materi Kursus Barista Profesional</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
            <li>Pengenalan industri kopi dan profesi barista</li>
            <li>Teknik grinding dan kalibrasi grinder</li>
            <li>Teknik espresso extraction dan milk steaming</li>
            <li>Workflow dan standar operasional coffee shop modern</li>
          </ul>

          <div className="mt-10">
            <a href="https://wa.me/6285213541993" target="_blank" rel="noopener noreferrer" className="bg-gold text-black px-8 py-4 rounded-xl font-bold inline-block hover:bg-opacity-90 transition">
              Daftar Kursus Barista Sekarang
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
    </>
  );
}
