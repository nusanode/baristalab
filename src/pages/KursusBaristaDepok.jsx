import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";

export default function KursusBaristaDepok() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    document.title = "Tempat Kursus Barista Terdekat dari Depok | Barista Lab Academy";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Rekomendasi tempat kursus barista bersertifikat bagi warga Depok, Margonda, Cinere & sekitarnya. Pelatihan intensif siap kerja & bisnis kopi.");
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Tempat Kursus Barista Terdekat dari Depok | Barista Lab Academy");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://baristalab.co.id");

    const scriptId = "schema-course-barista-depok";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Tempat Kursus Barista Terdekat dari Depok",
        "description": "Program pelatihan barista intensif dengan akses transportasi mudah untuk masyarakat Depok dan sekitarnya.",
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center md:text-left">
            Pelatihan & Kursus Barista Bersertifikat Resmi untuk Warga Depok
          </h1>
          
          <p className="mb-6 text-gray-300 leading-relaxed text-lg">
            Pertumbuhan kedai kopi estetik di kawasan Margonda, UI, Grand Depok City, hingga Cinere menciptakan peluang besar bagi profesi barista dan pebisnis kuliner baru. <strong>Barista Lab Academy</strong> hadir memberikan solusi pelatihan berstandar tinggi bagi Anda yang berdomisili di Depok.
          </p>
          <p className="mb-4 text-gray-300 leading-relaxed text-lg">
            Meskipun pusat pelatihan fisik kami berlokasi di <strong>Jakarta Timur</strong> dan <strong>Tangerang</strong>, siswa dari Depok dapat menjangkau studio kami dengan sangat praktis melalui rute Tol Desari/Cijago maupun jalur kereta Commuter Line langsung menuju stasiun terdekat.
          </p>
          
          <div className="bg-neutral-900 border border-gray-800 p-6 rounded-xl my-8">
            <h3 className="text-xl font-semibold text-gold mb-3">Kemudahan Akses Khusus dari Depok:</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-400">
              <li><strong>Rute Kereta (KRL) Langsung:</strong> Akses Commuter Line langsung tanpa transit dari Stasiun Depok Baru / Pondok Cina menuju area terdekat studio.</li>
              <li><strong>Sistem Kelas Semi-Private:</strong> Pembatasan kuota murid agar setiap orang memegang 1 mesin espresso mandiri tanpa mengantre bergantian.</li>
              <li><strong>Konsultasi Bisnis Pasca Kelulusan:</strong> Fasilitas diskusi berkala gratis bagi alumni yang berniat mendirikan kedai kopi mandiri di Depok.</li>
            </ul>
          </div>
          
          {/* TABEL KURIKULUM (Gunakan kode komponen tabel Anda yang sudah ada di sini) */}
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gold">Perbandingan Program Kelas Barista Lab Academy</h2>
          {/* ... [Salin elemen <div> table-container dari script asli Anda] ... */}

          <h2 className="text-2xl font-semibold mt-8 mb-4">Kurikulum Pelatihan Terpadu</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
            <li>Pemahaman mendalam peta industri kopi serta etika profesi barista.</li>
            <li>Praktik kalibrasi rasa (espresso calibration) dan penyetelan kehalusan mesin penggiling.</li>
            <li>Metode penyiapan susu yang tepat (milk texturing) untuk pembuatan menu latte art dasar.</li>
            <li>Manajemen alur kerja bar komersial demi efisiensi pelayanan pelanggan.</li>
          </ul>

          <div className="mt-10 bg-neutral-950 p-6 rounded-xl border border-gray-800 text-center md:text-left">
            <p className="text-sm text-gray-400 mb-4">
              *Catatan: Seluruh konsumsi biji kopi dan susu selama masa pelatihan telah ditanggung penuh oleh akademi.
            </p>
            <a href="https://wa.me." target="_blank" rel="noopener noreferrer" className="bg-gold text-black px-8 py-4 rounded-xl font-bold inline-block hover:bg-opacity-90 transition">
              Hubungi Admin untuk Info Kelas Depok
            </a>
          </div>
        </div>
      </main>
      <Footer onConsultClick={toggleFab} />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
    </>
  );
}
