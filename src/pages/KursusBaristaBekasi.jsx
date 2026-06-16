import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";

export default function KursusBaristaBekasi() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    document.title = "Kursus Barista Bekasi Bersertifikat | Barista Lab Academy";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Daftar kursus barista profesional di Bekasi, Cikarang, Tambun, & Babelan. Pelatihan espresso, latte art, dan coffee business. 1 orang 1 mesin!");
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://baristalab.co.id");

    const scriptId = "schema-course-bekasi";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Kursus Barista Bekasi Profesional",
        "description": "Program pelatihan barista bersertifikat untuk area Bekasi, Cikarang, dan sekitarnya.",
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
            Kursus Barista Bekasi Profesional | Pelatihan Barista Bersertifikat
          </h1>
          <p className="mb-6 text-gray-300 leading-relaxed text-lg">
            Barista Lab Academy menyediakan kursus barista di Bekasi untuk pemula, karyawan coffee shop, hingga calon pengusaha kopi se-wilayah Bekasi, Cikarang, Tambun, dan Babelan [•].
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gold">Kenapa Memilih Barista Lab Academy?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
            <li>Praktik langsung menggunakan mesin espresso standar industri (1 orang 1 mesin)</li>
            <li>Kurikulum berstandar internasional dengan sertifikat resmi pelatihan [•]</li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="bg-gold text-black px-6 py-3 rounded-xl text-center font-bold flex-1 hover:bg-opacity-90 transition">
              WhatsApp Cabang Jakarta (Terdekat ke Bekasi)
            </a>
          </div>
        </div>
      </main>
      <Footer onConsultClick={toggleFab} />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
    </>
  );
}
