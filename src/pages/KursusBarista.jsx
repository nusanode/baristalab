import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";

export default function KursusBarista() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    document.title = "Kursus Barista Profesional & Sertifikasi | Barista Lab Academy";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Daftar kursus barista profesional di Jakarta & Tangerang. Pelatihan intensif setting grinder, kalibrasi espresso, dan manajemen bar. Bersertifikat resmi!");
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Kursus Barista Profesional & Sertifikasi | Barista Lab Academy");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://www.baristalab.co.id");

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
      <main className="bg-dark-charcoal text-white min-h-screen pt-24">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center md:text-left">
            Kursus Barista Profesional Bersertifikat Jakarta & Tangerang
          </h1>
          <p className="mb-4 text-gray-300 leading-relaxed text-lg">
            Kursus Barista Barista Lab Academy dirancang untuk membantu peserta menguasai keterampilan barista profesional mulai dari dasar hingga tingkat lanjutan sesuai standar industri kopi modern [•].
          </p>
          
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
                <tr className="border-b border-gray-850"><td className="p-4 font-medium text-white">Manual Brewing</td><td className="p-4 text-center text-rose-400">✘ Tidak Ada</td><td className="p-4 text-center bg-neutral-800/40 text-emerald-400 font-semibold">✔ Ya</td><td className="p-4 text-center text-emerald-400">✔ Ya</td></tr>
                <tr className="border-b border-gray-850"><td className="p-4 font-medium text-white">HPP & Bisnis Kafe</td><td className="p-4 text-center text-rose-400">✘ Tidak Ada</td><td className="p-4 text-center bg-neutral-800/40 text-rose-400">✘ Tidak Ada</td><td className="p-4 text-center text-emerald-400 font-semibold">✔ Strategi Bisnis</td></tr>
                <tr><td className="p-4 font-medium text-white">Sertifikat Resmi</td><td className="p-4 text-center text-emerald-400">✔ Ada</td><td className="p-4 text-center bg-neutral-800/40 text-emerald-400 font-semibold">✔ Ada</td><td className="p-4 text-center text-emerald-400">✔ Ada</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Materi Kursus Barista Profesional</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
            <li>Pengenalan industri kopi dan profesi barista</li>
            <li>Teknik grinding dan kalibrasi grinder</li>
            <li>Teknik espresso extraction dan milk steaming</li>
            <li>Workflow dan standar operasional cafe modern [•]</li>
          </ul>

          <div className="mt-10">
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="bg-gold text-black px-8 py-4 rounded-xl font-bold inline-block hover:bg-opacity-90 transition">
              Daftar Kursus Barista Sekarang
            </a>
          </div>
        </div>
      </main>
      <Footer onConsultClick={toggleFab} />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
    </>
  );
}
