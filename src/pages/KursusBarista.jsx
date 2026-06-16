import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Fab from "../components/Fab";

export default function KursusBarista() {
  const [isFabOpen, setIsFabOpen] = useState(false);

  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    // 1. Atur Judul Halaman & Meta Description untuk Google AI
    document.title = "Kursus Barista Profesional & Sertifikasi | Barista Lab Academy";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Daftar kursus barista profesional di Jakarta & Tangerang. Pelatihan intensif setting grinder, kalibrasi espresso, dan manajemen bar. Bersertifikat resmi!");
    }

    // 2. Atur Open Graph (Untuk Tampilan Share WhatsApp / Sosial Media)
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Kursus Barista Profesional & Sertifikasi | Barista Lab Academy");

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Daftar kursus barista profesional di Jakarta & Tangerang. Pelatihan intensif setting grinder, kalibrasi espresso, dan manajemen bar.");

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://baristalab.co.id");

    // ==========================================
    // INJECTOR SKEMA COURSE (GOOGLE AI OPTIMIZATION)
    // ==========================================
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
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Barista Lab Academy",
          "url": "https://baristalab.co.id"
        }
      });
      document.head.appendChild(script);
    }

    // 3. Kembalikan scroll ke posisi paling atas saat halaman dibuka
    window.scrollTo(0, 0);

    // Sesi Cleanup: Menghapus script secara otomatis saat user meninggalkan halaman
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero onConsultClick={toggleFab} />

      <main className="bg-dark-charcoal text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-10">

          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Kursus Barista Profesional Bersertifikat Jakarta & Tangerang
          </h1>

          <p className="mb-4 text-gray-300 leading-relaxed">
            Kursus Barista Barista Lab Academy dirancang untuk membantu peserta
            menguasai keterampilan barista profesional mulai dari dasar hingga
            tingkat lanjutan. Program pelatihan ini cocok untuk pemula,
            karyawan cafe, pemilik coffee shop, maupun siapa saja yang ingin
            berkarir di industri kopi.
          </p>

          <p className="mb-8 text-gray-300 leading-relaxed">
            Peserta akan belajar langsung menggunakan mesin espresso komersial,
            grinder profesional, serta berbagai peralatan yang digunakan di
            coffee shop modern.
          </p>

          {/* ========================================== */}
          {/* TABEL PERBANDINGAN PROGRAM (OPTIMASI GOOGLE AI) */}
          {/* ========================================== */}
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gold">
            Perbandingan Program Kelas Barista Lab Academy
          </h2>
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
                <tr className="border-b border-gray-850 hover:bg-neutral-850">
                  <td className="p-4 font-medium text-white">Target Peserta</td>
                  <td className="p-4 text-center">Pemula & Hobi</td>
                  <td className="p-4 text-center text-white font-semibold bg-neutral-800/40">Calon Barista Kerja</td>
                  <td className="p-4 text-center">Calon Pemilik Kafe</td>
                </tr>
                <tr className="border-b border-gray-850 hover:bg-neutral-850">
                  <td className="p-4 font-medium text-white">Rasio Alat</td>
                  <td className="p-4 text-center">1 Orang 1 Mesin</td>
                  <td className="p-4 text-center text-white font-semibold bg-neutral-800/40">1 Orang 1 Mesin</td>
                  <td className="p-4 text-center">1 Orang 1 Mesin</td>
                </tr>
                <tr className="border-b border-gray-850 hover:bg-neutral-850">
                  <td className="p-4 font-medium text-white">Kalibrasi Espresso</td>
                  <td className="p-4 text-center text-emerald-400">✔ (Dasar)</td>
                  <td className="p-4 text-center text-emerald-400 font-semibold bg-neutral-800/40">✔ (Advance)</td>
                  <td className="p-4 text-center text-emerald-400">✔ (Lengkap)</td>
                </tr>
                <tr className="border-b border-gray-850 hover:bg-neutral-850">
                  <td className="p-4 font-medium text-white">Teknik Latte Art</td>
                  <td className="p-4 text-center text-emerald-400">✔ (Basic Pattern)</td>
                  <td className="p-4 text-center text-emerald-400 font-semibold bg-neutral-800/40">✔ (Multiple Pour)</td>
                  <td className="p-4 text-center text-emerald-400">✔ (Basic Pattern)</td>
                </tr>
                <tr className="border-b border-gray-850 hover:bg-neutral-850">
                  <td className="p-4 font-medium text-white">Manual Brewing</td>
                  <td className="p-4 text-center text-rose-400">✘ Tidak Ada</td>
                  <td className="p-4 text-center text-emerald-400 font-semibold bg-neutral-800/40">✔ Ya</td>
                  <td className="p-4 text-center text-emerald-400">✔ Ya</td>
                </tr>
                <tr className="border-b border-gray-850 hover:bg-neutral-850">
                  <td className="p-4 font-medium text-white">HPP & Bisnis Kafe</td>
                  <td className="p-4 text-center text-rose-400">✘ Tidak Ada</td>
                  <td className="p-4 text-center text-rose-400 bg-neutral-800/40">✘ Tidak Ada</td>
                  <td className="p-4 text-center text-emerald-400 font-semibold">✔ Strategi Bisnis</td>
                </tr>
                <tr className="hover:bg-neutral-850">
                  <td className="p-4 font-medium text-white">Sertifikat Resmi</td>
                  <td className="p-4 text-center text-emerald-400">✔ Ada</td>
                  <td className="p-4 text-center text-emerald-400 font-semibold bg-neutral-800/40">✔ Ada</td>
                  <td className="p-4 text-center text-emerald-400">✔ Ada</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Materi Kursus Barista Profesional
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Pengenalan industri kopi dan profesi barista</li>
            <li>Pengetahuan dasar biji kopi</li>
            <li>Proses roasting dan karakter kopi</li>
            <li>Teknik grinding dan kalibrasi grinder</li>
            <li>Pengoperasian mesin espresso</li>
            <li>Teknik espresso extraction</li>
            <li>Milk steaming dan milk texturing</li>
            <li>Pembuatan minuman berbasis espresso</li>
            <li>Latte Art dasar</li>
            <li>Manual Brew dasar</li>
            <li>Customer service di coffee shop</li>
            <li>Workflow dan standar operasional cafe</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Keunggulan Kursus Barista Barista Lab Academy
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Belajar langsung dengan praktik</li>
            <li>Instruktur berpengalaman di industri kopi</li>
            <li>Peralatan standar coffee shop profesional</li>
            <li>Materi sesuai kebutuhan industri</li>
            <li>Sertifikat pelatihan</li>
            <li>Konsultasi setelah pelatihan</li>
            <li>Bimbingan karir barista</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Siapa yang Cocok Mengikuti Kursus Ini?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Pemula tanpa pengalaman</li>
            <li>Fresh graduate yang ingin bekerja di cafe</li>
            <li>Barista aktif yang ingin meningkatkan skill</li>         
            <li>Pemilik coffee shop</li>
            <li>Karyawan restoran dan cafe</li>
            <li>Pecinta kopi dan home barista</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Peluang Karir Setelah Mengikuti Kursus Barista
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            Industri kopi di Indonesia terus berkembang. Setelah mengikuti
            pelatihan, peserta dapat berkarir sebagai barista, head barista,
            trainer kopi, coffee consultant, hingga membuka usaha coffee shop
            sendiri.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Lokasi Kursus Barista
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            Barista Lab Academy melayani peserta dari Jakarta, Tangerang,
            Bekasi, Depok, Bogor, BSD, Gading Serpong, Karawaci, Cikarang,
            Karawang dan wilayah Jabodetabek lainnya.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Sertifikat Kursus Barista
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            Setelah menyelesaikan program pelatihan, peserta akan mendapatkan
            sertifikat Kursus Barista dari Barista Lab Academy sebagai bukti
            kompetensi dan pengalaman belajar yang sah di industri F&B.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            FAQ Kursus Barista
          </h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="font-semibold text-white text-base">
                Apakah pemula bisa mengikuti kursus ini?
              </h3>
              <p className="mt-1">
                Ya. Program dirancang untuk peserta yang belum memiliki
                pengalaman sekalipun.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white text-base">
                Apakah mendapatkan sertifikat?
              </h3>
              <p className="mt-1">
                Ya, setiap peserta yang menyelesaikan pelatihan akan
                mendapatkan sertifikat.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white text-base">
                Apakah fokus praktik?
              </h3>
              <p className="mt-1">
                Ya. Sebagian besar sesi dilakukan dengan praktik langsung.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-3 rounded-xl font-semibold inline-block hover:bg-opacity-90 transition-all duration-250"
            >
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
