import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";

export default function KelasLatteArt() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    document.title = "Kelas Latte Art Jakarta & Tangerang | Belajar Free Pour Kopi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Kursus latte art terdekat di Jabodetabek. Kuasai teknik steaming susu microfoam hingga pembuatan pola tulip, rosetta, dan swan. 1 orang 1 mesin!");
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Kelas Latte Art Jakarta & Tangerang | Belajar Free Pour Kopi");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://baristalab.co.id");

    const scriptId = "schema-course-latteart";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Kelas Pelatihan Latte Art Intensif",
        "description": "Kursus khusus menguasai teknik steaming susu microfoam dan pembuatan pola free pour latte art seperti tulip, rosetta, dan swan.",
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
            Kelas Latte Art Jakarta & Tangerang: Kuasai Seni Gambar di Atas Kopi
          </h1>
          <p className="mb-4 text-gray-300 leading-relaxed text-lg">
            Kelas Latte Art di Barista Lab Academy memfokuskan peserta pada penguasaan kontrol penuh terhadap susu (*milk handling*) guna menciptakan visual minuman berbasis espresso yang memikat dan berstandar kafe modern [•].
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gold">Materi Pelatihan Kelas Latte Art</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
            <li>Teknik milk steaming untuk menghasilkan tekstur microfoam yang halus (silky dan shiny)</li>
            <li>Seni memposisikan cangkir dan menjaga kestabilan aliran susu saat menuang</li>
            <li>Praktik intensif pembuatan pola dasar Free Pour: <strong>Love, Tulip, Rosetta, dan Swan</strong></li>
          </ul>

          <div className="mt-10">
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="bg-gold text-black px-8 py-4 rounded-xl font-bold inline-block hover:bg-opacity-90 transition">
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
