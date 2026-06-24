import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";

export default function KursusBaristaBogor() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    document.title = "Sekolah & Kursus Barista Terdekat dari Bogor | Barista Lab Academy";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Ingin belajar meracik kopi profesional di Bogor? Daftar pelatihan barista bersertifikat di Barista Lab Academy. Akses mudah via KRL & Tol Jagorawi.");
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Sekolah & Kursus Barista Terdekat dari Bogor | Barista Lab Academy");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://baristalab.co.id");

    const scriptId = "schema-course-barista-bogor";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Sekolah & Kursus Barista Terdekat dari Bogor",
        "description": "Kelas barista komprehensif 1 orang 1 mesin kopi komersial yang mudah dijangkau dari Bogor dan sekitarnya.",
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
            Sekolah Barista Profesional & Sertifikasi Terpercaya untuk Area Bogor
          </h1>
          
          <p className="mb-6 text-gray-300 leading-relaxed text-lg">
            Bogor dikenal memiliki budaya nongkrong dan industri kedai kopi lokal yang sangat hidup. Untuk memenuhi kebutuhan tenaga ahli barista serta pemilik bisnis kedai kopi bersertifikat di Bogor, <strong>Barista Lab Academy</strong> menyediakan kurikulum belajar berbasis 100% praktik langsung.
          </p>
          <p className="mb-4 text-gray-300 leading-relaxed text-lg">
            Meskipun lokasi workshop kami berada di wilayah <strong>Jakarta Timur</strong> dan <strong>Tangerang</strong>, para peserta dari Bogor dapat mengakses lokasi kami secara mudah lewat jalur bebas hambatan Tol Jagorawi atau memanfaatkan moda Commuter Line.
          </p>
          
          <div className="bg-neutral-900 border border-gray-800 p-6 rounded-xl my-8">
            <h3 className="text-xl font-semibold text-gold mb-3">Mengapa Peserta Asal Bogor Memilih Kami?</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-400">
              <li><strong>Pilihan Kelas Akhir Pekan (Weekend):</strong> Sangat cocok bagi mahasiswa atau pekerja asal Bogor yang hanya memiliki waktu luang di hari Sabtu dan Minggu.</li>
              <li><strong>Fasilitas Mesin Komersial Lengkap:</strong> Pengenalan dan praktik langsung menggunakan mesin espresso standar bisnis cafe dunia.</li>
              <li><strong>Modul Cetak Eksklusif & Sertifikat Resmi:</strong> Dokumen validasi kompetensi yang diakui untuk mempermudah karier profesional Anda.</li>
            </ul>
          </div>
          
          {/* TABEL KURIKULUM (Gunakan kode komponen tabel Anda yang sudah ada di sini) */}
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gold">Perbandingan Program Kelas Barista Lab Academy</h2>
          {/* ... [Salin elemen <div> table-container dari script asli Anda] ... */}

          <h2 className="text-2xl font-semibold mt-8 mb-4">Materi Pelatihan yang Akan Anda Kuasai</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
            <li>Pengenalan dasar botani kopi, proses pasca-panen, dan profil sangrai (roasting).</li>
            <li>Metode penataan area kerja (bar layout) serta pemeliharaan kebersihan mesin.</li>
            <li>Formula takaran ekstraksi espresso yang seimbang demi menghasilkan rasa kopi yang konsisten.</li>
            <li>Teknik pembuatan kreasi minuman kopi berbasis susu (*signature menu milk beverage*).</li>
          </ul>

          <div className="mt-10 bg-neutral-950 p-6 rounded-xl border border-gray-800 text-center md:text-left">
            <p className="text-sm text-gray-400 mb-4">
              *Catatan: Seluruh peralatan keamanan kerja dan bahan penunjang praktik sudah disiapkan gratis.
            </p>
            <a href="https://wa.me." target="_blank" rel="noopener noreferrer" className="bg-gold text-black px-8 py-4 rounded-xl font-bold inline-block hover:bg-opacity-90 transition">
              Dapatkan Brosur Lengkap Kelas Bogor
            </a>
          </div>
        </div>
      </main>
      <Footer onConsultClick={toggleFab} />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
    </>
  );
}

