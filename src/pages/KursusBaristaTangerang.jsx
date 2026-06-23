import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";

export default function KursusBaristaTangerang() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    // 1. Atur Judul Halaman & Meta Description Khusus Tangerang untuk Google AI
    document.title = "Kursus Barista Tangerang Bersertifikat | Barista Lab Academy";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Daftar kursus barista profesional di Tangerang, BSD, Gading Serpong, & Karawaci. Pelatihan espresso, latte art, dan coffee business. 1 orang 1 mesin!");
    }

    // 2. Atur Open Graph untuk Sosial Media
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Kursus Barista Tangerang Bersertifikat | Barista Lab Academy");

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Pelatihan barista intensif di wilayah Tangerang. Kuasai kalibrasi espresso, latte art, hingga manajemen bisnis kopi dengan instruktur profesional.");

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://baristalab.co.id");

    // ==========================================
    // INJECTOR SKEMA COURSE TANGERANG (GOOGLE AI OPTIMIZATION)
    // ==========================================
    const scriptId = "schema-course-tangerang";
    
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Kursus Barista Tangerang Profesional",
        "description": "Program pelatihan barista bersertifikat untuk area Tangerang, Tangerang Selatan, dan sekitarnya di Barista Lab Academy. Belajar menggunakan mesin espresso komersial.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Barista Lab Academy",
          "url": "https://baristalab.co.id"
        }
      });
      document.head.appendChild(script);
    }

    // 3. Kembalikan scroll ke posisi paling atas
    window.scrollTo(0, 0);

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

      <main className="bg-dark-charcoal text-white min-h-screen pt-24">
        <div className="max-w-5xl mx-auto px-4 py-10">

          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Kursus Barista Tangerang Profesional | Pelatihan Barista Bersertifikat
          </h1>

          <p className="mb-4 text-gray-300 leading-relaxed text-lg">
            Barista Lab Academy hadir menyediakan pusat kursus barista profesional untuk area Tangerang Raya [•]. Metode pengajaran kami menekankan porsi praktik langsung (*hands-on training*) guna mempercepat pembentukan *muscle memory* mekanika barista [•].
          </p>

          <p className="mb-8 text-gray-300 leading-relaxed">
            Setiap kelas dijamin menggunakan pendekatan privat dengan rasio satu slot mesin espresso dan *grinder* komersial eksklusif hanya untuk satu orang peserta sepanjang durasi program pelatihan kopi [•].
          </p>

          {/* TABEL PERBANDINGAN PROGRAM */}
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gold">Perbandingan Program Kelas Barista Lab Academy</h2>
          <div className="table-container overflow-x-auto mb-10 rounded-xl border border-gray-800">
            <table className="w-full border-collapse min-w-[600px] text-sm text-left bg-neutral-900 text-gray-300">
              <thead>
                <tr className="bg-neutral-950 text-white border-b border-gray-800">
                  <th className="p-4 font-semibold">Fitur &amp; Materi Kelas</th>
                  <th className="p-4 font-semibold text-center">Barista Basic</th>
                  <th className="p-4 font-semibold text-center text-gold">Barista Professional</th>
                  <th className="p-4 font-semibold text-center">Barista Pro Business</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-850 hover:bg-neutral-850">
                  <td className="p-4 font-medium text-white">Target Peserta</td>
                  <td className="p-4 text-center">Pemula &amp; Hobi</td>
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
                  <td className="p-4 font-medium text-white">Manual Brewing</td>
                  <td className="p-4 text-center text-rose-400">✘ Tidak Ada</td>
                  <td className="p-4 text-center text-emerald-400 font-semibold bg-neutral-800/40">✔ Ya</td>
                  <td className="p-4 text-center text-emerald-400">✔ Ya</td>
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

          <h2 className="text-2xl font-semibold mt-8 mb-4">Lokasi Kampus Tangerang</h2>
          <p className="mb-6 text-gray-300 leading-relaxed">
            Sesi tatap muka dilaksanakan langsung di workshop regional kami: <strong>Jl. Kav. Perkebunan Raya, Cibodas, Tangerang</strong> [•]. Lokasi strategis ini dirancang dekat akses bagi pendaftar dari area <strong>BSD City, Gading Serpong, Karawaci, Alam Sutera, Tangerang Selatan, hingga Cikupa</strong>.
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-3 rounded-xl font-semibold inline-block hover:bg-opacity-90 transition"
            >
              Hubungi Admin Tangerang via WhatsApp
            </a>
          </div>

        </div>
      </main>

      <Footer onConsultClick={toggleFab} />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
    </>
  );
                    }
