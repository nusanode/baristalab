import { useLocation } from "react-router-dom";
import { useEffect } from "react"; // <-- Tambahkan ini
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { locationData } from "../data/locationData";

export default function LocationPage() {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");
  const data = locationData[slug];

  useEffect(() => {
    if (data) {
      // 1. Otomatis mengubah Judul Tab Browser berdasarkan wilayah dinamis
      document.title = `${data.h1} Bersertifikat | Barista Lab Academy`;
      
      // 2. Otomatis mengubah Meta Description untuk Google AI
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", `${data.description} Fasilitas praktik 1 orang 1 mesin kopi komersial, bimbingan karier, & bersertifikat resmi.`);
      }

      // 3. Otomatis mengubah Open Graph URL
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute("content", `https://baristalab.co.id{slug}`);
      }

      // 4. SUNTIKKAN SKEMA COURSE OTOMATIS BERDASARKAN WILAYAH
      const scriptId = `schema-course-${slug}`;
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": data.h1,
          "description": data.description,
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Barista Lab Academy",
            "url": "https://baristalab.co.id"
          }
        });
        document.head.appendChild(script);
      }

      // Kembalikan scroll ke paling atas tiap ganti halaman regional
      window.scrollTo(0, 0);

      // Bersihkan script skema lama saat user pindah halaman regional lain
      return () => {
        const existingScript = document.getElementById(scriptId);
        if (existingScript) existingScript.remove();
      };
    }
  }, [slug, data]); // Memicu ulang kode jika rute wilayah berubah

  if (!data) {
    return (
      <div className="min-h-screen bg-dark-charcoal text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Halaman Tidak Ditemukan</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-dark-charcoal text-white min-h-screen pt-24">
        <div className="max-w-5xl mx-auto px-4 py-10">

          <h1 className="text-4xl font-bold mb-6 leading-tight">
            {data.h1}
          </h1>

          <p className="mb-4 text-gray-300 leading-relaxed text-lg">
            {data.description}
          </p>

          <p className="mb-8 text-gray-300 leading-relaxed">
            Barista Lab Academy melayani peserta dari {data.location} dan sekitarnya dengan program pelatihan yang dirancang khusus sesuai dengan kebutuhan standar tinggi industri coffee shop modern.
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

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Materi Utama Pelatihan Barista
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-10">
            <li><strong>Espresso Extraction:</strong> Teknik kalibrasi grinder, yield rasio, dan ekstraksi ideal.</li>
            <li><strong>Latte Art:</strong> Teknik steaming susu microfoam silky dan seni pola dasar pouring.</li>
            <li><strong>Manual Brew:</strong> Penguasaan seduh manual V60, Aeropress, dan parameter ekstraksi kopi.</li>
            <li><strong>Customer Service:</strong> Standar komunikasi pelayanan, keramahtamahan, dan efisiensi bar.</li>
            <li><strong>Manajemen Coffee Shop:</strong> Perhitungan HPP menu, inventory, dan penyusunan SOP kedai kopi.</li>
          </ul>

          <div className="mt-10">
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-3 rounded-xl font-semibold inline-block hover:bg-opacity-90 transition"
            >
              Konsultasi Kelas Regional via WhatsApp
            </a>
          </div>

        </div>
      </main>

      <FAQ />
      <Footer />
    </>
  );
          }

