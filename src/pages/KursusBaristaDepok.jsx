import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";

export default function KursusBaristaDepok() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    document.title = "Kursus Barista Depok Bersertifikat | Barista Lab Academy";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Daftar kursus barista profesional di Depok, Margonda, Cinere, & Sawangan. Pelatihan espresso, latte art, dan coffee business. 1 orang 1 mesin!");
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://baristalab.co.id");

    const scriptId = "schema-course-depok";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Kursus Barista Depok Profesional",
        "description": "Program pelatihan barista bersertifikat untuk area Kota Depok, Margonda, dan sekitarnya.",
        "provider": { "@type": "EducationalOrganization", "name": "Barista Lab Academy", "url": "https://baristalab.co.id" }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Kursus Barista Depok Profesional | Pelatihan Barista Bersertifikat
          </h1>
          <p className="mb-6 text-gray-300 leading-relaxed text-lg">
            Barista Lab Academy memfasilitasi akses pelatihan barista tatap muka langsung bagi peserta dari wilayah <strong>Depok, Margonda, Cinere, Sawangan, Cimanggis, Tapos, hingga Cibubur</strong> [•].
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gold">Program Unggulan Kelas</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
            <li>Sistem belajar intensif 1 peserta 1 mesin kopi komersial</li>
            <li>Materi bisnis manajemen kedai kopi dan perhitungan HPP Menu</li>
          </ul>

          <div className="mt-8">
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="bg-gold text-black px-8 py-4 rounded-xl text-center font-bold inline-block hover:bg-opacity-90 transition">
              Daftar Cabang Terdekat via WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer onConsultClick={toggleFab} />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
    </>
  );
}

