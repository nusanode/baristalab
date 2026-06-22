import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";

export default function KelasLatteArt() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    document.title = "Kelas Latte Art Jakarta & Tangerang | Belajar Free Pour Kopi";
    let metaDesc = document.querySelector('meta[name="description"]');

if (!metaDesc) {
  metaDesc = document.createElement("meta");
  metaDesc.setAttribute("name", "description");
  document.head.appendChild(metaDesc);
}

metaDesc.setAttribute(
  "content",
  "Kursus Latte Art Jakarta dan Tangerang. Pelajari milk steaming, microfoam, tulip, rosetta, dan swan bersama instruktur profesional."
);
    let ogTitle = document.querySelector('meta[property="og:title"]');

if (!ogTitle) {
  ogTitle = document.createElement("meta");
  ogTitle.setAttribute("property", "og:title");
  document.head.appendChild(ogTitle);
}

ogTitle.setAttribute(
  "content",
  "Kelas Latte Art Jakarta & Tangerang | Kursus Latte Art Profesional"
);
    let ogDesc = document.querySelector('meta[property="og:description"]');
if (!ogDesc) {
  ogDesc = document.createElement("meta");
  ogDesc.setAttribute("property", "og:description");
  document.head.appendChild(ogDesc);
}

ogDesc.setAttribute(
  "content",
  "Belajar Latte Art profesional di Jakarta dan Tangerang. Kuasai milk steaming, tulip, rosetta hingga swan."
);
   let ogImage = document.querySelector('meta[property="og:image"]');

if (!ogImage) {
  ogImage = document.createElement("meta");
  ogImage.setAttribute("property", "og:image");
  document.head.appendChild(ogImage);
}

ogImage.setAttribute(
  "content",
  "https://www.baristalab.co.id/images/latte-art/latte-art-hero.png"
);
    let ogUrl = document.querySelector('meta[property="og:url"]');

if (!ogUrl) {
  ogUrl = document.createElement("meta");
  ogUrl.setAttribute("property", "og:url");
  document.head.appendChild(ogUrl);
}

ogUrl.setAttribute(
  "content",
  "https://www.baristalab.co.id/kelas-latte-art"
);
    if (!canonical) {
  canonical = document.createElement("link");
  canonical.rel = "canonical";
  document.head.appendChild(canonical);
}

canonical.href = "https://www.baristalab.co.id/kelas-latte-art";

    const scriptId = "schema-course-latteart";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
  "@type": "Course",
  "name": "Kelas Latte Art Profesional",
  "description": "Pelatihan Latte Art untuk pemula dan profesional.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Barista Lab Academy",
    "url": "https://www.baristalab.co.id"
  },
  "courseMode": "onsite",
  "inLanguage": "id-ID",
  "educationalLevel": "Beginner" });
      document.head.appendChild(script);
    }
    window.scrollTo(0, 0);
    return () => { const s = document.getElementById(scriptId); if (s) s.remove(); };
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-dark-charcoal text-white min-h-screen pt-20">
        
        {/* --- 1. HERO BANNER FOTO UTAMA ATAS --- */}
     {/* HERO BANNER */}
<div className="relative h-[350px] md:h-[450px] w-full overflow-hidden border-b border-white/5">
  
  <img
    src="/images/latte-art/latte-art-hero.png"
    alt="Kelas Latte Art Jakarta dan Tangerang"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal via-black/50 to-black/70 z-10"></div>

  <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
    <span className="text-gold text-xs md:text-sm uppercase tracking-[0.25em] mb-3 font-semibold">
      Specialist Program
    </span>

    <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white max-w-4xl tracking-wide">
      Kelas <span className="text-gold italic font-serif">Latte Art</span>
    </h1>

    <p className="mt-4 text-gray-200 max-w-2xl text-sm md:text-lg">
      Kuasai teknik milk steaming, microfoam, tulip, rosetta hingga swan bersama instruktur profesional.
    </p>
  </div>

</div>   

        {/* --- 2. KONTEN TEKS ARTIKEL --- */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="mb-8 text-gray-300 leading-relaxed text-lg font-light">
            Kelas Latte Art di Barista Lab Academy memfokuskan peserta pada penguasaan kontrol penuh terhadap susu (*milk handling*) guna menciptakan visual minuman berbasis espresso yang memikat dan berstandar kafe modern.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center my-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gold tracking-wide uppercase text-sm">Materi Pelatihan Kelas Latte Art</h2>
              <ul className="list-none space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-gold mt-1 text-sm"></i>
                  <span>Teknik <strong>milk steaming</strong> untuk menghasilkan tekstur microfoam yang halus (silky dan shiny).</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-gold mt-1 text-sm"></i>
                  <span>Seni memposisikan cangkir dan menjaga kestabilan aliran susu saat menuang (*pouring physics*).</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-gold mt-1 text-sm"></i>
                  <span>Praktik intensif pembuatan pola dasar Free Pour: <strong>Love, Tulip, Rosetta, dan Swan</strong>.</span>
                </li>
              </ul>
            </div>
            
            {/* --- 3. FOTO KEDUA DI SAMPING MATERI --- */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/5 h-64">
             <img
  src="/images/latte-art/kursus-latte-art.jpg"
  alt="Praktik Milk Steaming Barista Lab Academy"
  loading="lazy"
  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
/>
            </div>
          </div>

          <div className="mt-12 text-center md:text-left">
            <a 
              href="https://wa.me/6285213541993?text=Halo%20saya%20ingin%20daftar%20kelas%20Latte%20Art"
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gold text-black px-8 py-4 rounded-xl font-bold inline-block hover:bg-opacity-90 hover:scale-105 transform transition duration-300 shadow-lg shadow-gold/20"
            >
              Booking Jadwal Kelas Latte Art
            </a>
          </div>
        </div>
      </main>
      <Footer onConsultClick={toggleFab} />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
    </>
  );
}
