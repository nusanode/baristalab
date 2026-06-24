import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";

export default function KursusBaristaBekasi() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    // 1. OPTIMASI META UNTUK BEKASI (Sangat krusial untuk SEO Lokal)
    document.title = "Kursus Barista Terdekat dari Bekasi | Barista Lab Academy";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Ingin buka coffee shop atau berkarier jadi barista di Bekasi? Ikuti kursus barista bersertifikat di Barista Lab Academy. Akses cepat & mudah dari Bekasi!");
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Kursus Barista Terdekat dari Bekasi | Barista Lab Academy");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://baristalab.co.id");

    // 2. SCHEMA MARKUP BARU (Supaya Google tahu ini relevan untuk pencarian orang Bekasi)
    const scriptId = "schema-course-barista-bekasi";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Kursus Barista Terdekat dari Bekasi",
        "description": "Pelatihan barista intensif dengan akses strategis bagi warga Bekasi. Fasilitas 1 orang 1 mesin kopi komersial, gratis konsultasi bisnis setelah lulus.",
        "provider": { 
          "@type": "EducationalOrganization", 
          "name": "Barista Lab Academy", 
          "url": "https://baristalab.co.id" 
        }
      });
      document.head.appendChild(script);
    }
    window.scrollTo(0, 0);
    return () => { const s = document.getElementById(scriptId); if (s) s.remove(); };
  }, []);

  return (
    <>
      <Navbar />
      {/* Warna bg-dark-charcoal dipertahankan sesuai branding Anda */}
      <main className="bg-dark-charcoal text-white min-h-screen pt-24">
        <div className="max-w-5xl mx-auto px-4 py-10">
          
          {/* H1 YANG SUDAH DIOPTIMASI SEO LOKAL */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center md:text-left">
            Kursus Barista Profesional Bersertifikat: Pilihan Terbaik Warga Bekasi
          </h1>
          
          {/* PARAGRAF SOLUSI AKSES (Agar tidak dianggap Doorway Page/Spam oleh Google) */}
          <p className="mb-6 text-gray-300 leading-relaxed text-lg">
            Industri <em>coffee shop</em> di wilayah Bekasi, mulai dari Summarecon, Galaxy, hingga Harapan Indah berkembang sangat pesat. Bagi Anda warga Bekasi yang ingin berkarier sebagai barista profesional atau membangun bisnis kedai kopi sendiri, <strong>Barista Lab Academy</strong> menyediakan program pelatihan intensif berstandar industri.
          </p>
          <p className="mb-4 text-gray-300 leading-relaxed text-lg">
            Meskipun studio utama kami berada di <strong>Jakarta Timur (Duren Sawit)</strong> dan <strong>Tangerang (Kelapa Dua)</strong>, lokasi kami dirancang sangat strategis dan mudah dijangkau dari berbagai titik di Bekasi melalui akses Tol Becakayu, Tol JORR Kalimalang, maupun Commuter Line (KRL) menuju stasiun terdekat.
          </p>
          
          {/* AKSES TRANSPORTASI POINT (Nilai Tambah Pengguna & Google Bot) */}
          <div className="bg-neutral-900 border border-gray-800 p-6 rounded-xl my-8">
            <h3 className="text-xl font-semibold text-gold mb-3">Keunggulan Akses dari Bekasi:</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-400">
              <li><strong>Akses Tol Langsung:</strong> Hanya 15-20 menit berkendara dari Kalimalang atau Bekasi Barat menuju studio Jakarta Timur via Tol Becakayu.</li>
              <li><strong>Pilihan Jadwal Fleksibel:</strong> Tersedia kelas intensif reguler maupun kelas <em>weekend</em> (Sabtu-Minggu) sehingga Anda tidak perlu bolak-balik setiap hari.</li>
              <li><strong>Fasilitas Semi-Private:</strong> Rasio alat 1 orang 1 mesin kopi komersial, memastikan waktu praktik Anda tetap maksimal tanpa mengantre.</li>
            </ul>
          </div>
          
          {/* TABEL KURIKULUM (Dipertahankan karena sangat bagus untuk UX) */}
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

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cakupan Materi Pelatihan Barista</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
            <li>Pengenalan industri kopi global dan profesi barista modern.</li>
            <li>Teknik dasar hingga tingkat lanjut mengenai pengaturan <em>grinder</em> (grinding) dan kalibrasi espresso.</li>
            <li>Teknik ekstraksi espresso yang tepat dan konsisten serta teknik <em>milk steaming</em> untuk latte art.</li>
            <li>Alur kerja (workflow) efisien dan standar operasional bar cafe komersial.</li>
          </ul>

          <div className="mt-10 bg-neutral-950 p-6 rounded-xl border border-gray-800 text-center md:text-left">
            <p className="text-sm text-gray-400 mb-4">
              *Catatan: Seluruh keperluan bahan baku praktek (kopi & susu) sudah disediakan lengkap oleh pihak akademi selama kelas berlangsung tanpa biaya tambahan.
            </p>
            {/* LINK WHATSAPP DIKASIH TEXT TEMPLATE KHUSUS BEKASI AGAR LIKELY CLOSING LEBIH TINGGI */}
            <a href="https://wa.me." target="_blank" rel="noopener noreferrer" className="bg-gold text-black px-8 py-4 rounded-xl font-bold inline-block hover:bg-opacity-90 transition">
              Konsultasi Kelas untuk Area Bekasi Sekarang
            </a>
          </div>
        </div>
      </main>
      <Footer onConsultClick={toggleFab} />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
    </>
  );
          }
                                                           
