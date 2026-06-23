import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";

export default function KursusBaristaBekasi() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    document.title = "Kursus Barista Bekasi Terbaik #1 Bersertifikat | Barista Lab";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Kursus barista profesional & sekolah kopi terbaik di Bekasi. Paket kilat bersertifikat untuk kerja/bisnis di Cikarang, Tambun, & Jatiasih. Metode privat 1 orang 1 mesin!"
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", "Kursus Barista Bekasi Terbaik #1 Bersertifikat | Barista Lab");

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", "Pelatihan barista intensif di Bekasi. Kuasai teknik kalibrasi espresso, latte art, hingga bisnis kopi dengan rasio privat 1 orang 1 mesin.");

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", "https://baristalab.co.id");
    }

    const scriptId = "schema-baristalab-bekasi";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Kursus Barista Bekasi Profesional",
          "description": "Program pelatihan barista intensif bersertifikat resmi di Bekasi. Menjamin metode privat 1 peserta 1 mesin espresso komersial untuk persiapan kerja dan bisnis kedai kopi.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Barista Lab Academy",
            "url": "https://baristalab.co.id"
          },
          "educationalCredentialAwarded": "Sertifikat Pelatihan Barista",
          "courseMode": "OnSite",
          "inLanguage": "id-ID"
        },
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Barista Lab Academy - Cabang Bekasi",
          "description": "Tempat pelatihan dan sekolah barista kopi terdekat di wilayah Bekasi dan Cikarang.",
          "url": "https://baristalab.co.id",
          "image": "https://baristalab.co.id",
          "telephone": "+6285213541993",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Area Operasional Bekasi & Jangkauan Se-Bekasi Raya",
            "addressLocality": "Bekasi",
            "addressRegion": "Jawa Barat",
            "postalCode": "17111",
            "addressCountry": "ID"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Apakah pemula tanpa latar belakang kopi bisa ikut kelas di Bekasi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sangat bisa. Program kami dirancang khusus dari dasar (*zero experience*) untuk pemula agar bisa memahami kalibrasi espresso dan teknik menyeduh kopi dengan benar."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah pendaftar dari Cikarang dan Tambun bisa ikut pelatihan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bisa. Lokasi pelatihan kami dirancang strategis sehingga mudah dijangkau oleh peserta dari wilayah Bekasi Timur, Tambun, Cikarang, Jatiasih, hingga Harapan Indah."
              }
            }
          ]
        }
      ]);
      document.head.appendChild(script);
    }

    window.scrollTo(0, 0);

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, []);
    return (
    <>
      <Navbar />

      <main className="bg-dark-charcoal text-white min-h-screen pt-24">
        <div className="max-w-5xl mx-auto px-6 py-12">

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Kursus Barista Bekasi Profesional Bersertifikat
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Barista Lab Academy menyediakan program sekolah kopi dan kursus barista Bekasi terbaik untuk pemula, karyawan coffee shop, calon barista kerja, maupun pengusaha kopi yang ingin meningkatkan daya saing di industri F&B modern.
          </p>

          <p className="text-gray-300 leading-relaxed mb-10">
            Kami siap melayani kebutuhan pelatihan intensif untuk peserta yang berasal dari berbagai wilayah jangkauan komersial seperti <strong className="text-white">Bekasi Timur, Bekasi Barat, Bekasi Utara, Bekasi Selatan, Jatiasih, Pondok Gede, Harapan Indah, Cikarang, Lippo Cikarang, Tambun Selatan, Tambun Utara, Babelan, Setu, hingga Tarumajaya</strong>.
          </p>

          {/* GALLERY KURSUS BARISTA BEKASI */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gold mb-6">
              Dokumentasi Kursus Barista Bekasi
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                <img
                  src="/images/kursus-barista-bekasi/kursus-barista-bekasi.jpg"
                  alt="Kursus Barista Bekasi Profesional"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>

              <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                <img
                  src="/images/kursus-barista-bekasi/kursus-barista-bekasi.jpg"
                  alt="Kelas Latte Art Bekasi"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>

              <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                <img
                  src="/images/kursus-barista-bekasi/kursus-barista-bekasi.jpg"
                  alt="Pelatihan Barista Bekasi Bersertifikat"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>

              <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                <img
                  src="/images/kursus-barista-bekasi/kursus-barista-bekasi.jpg"
                  alt="Sertifikasi Barista Bekasi"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gold mb-4">
            Kenapa Memilih Barista Lab Academy?
          </h2>

          <ul className="list-disc pl-6 text-gray-300 space-y-3 mb-10">
            <li>Sistem belajar privat: <strong className="text-gold">1 peserta 1 mesin espresso komersial</strong></li>
            <li>Bimbingan praktik langsung bersama instruktur ahli berpengalaman industri</li>
            <li>Modul komprehensif mencakup teknik Kalibrasi Espresso, Latte Art, dan Manual Brew</li>
            <li>Mendapatkan Sertifikat Pelatihan Resmi sebagai portfolio melamar kerja</li>
            <li>Kurikulum inklusif yang ramah untuk pemula maupun tingkat lanjut</li>
            <li>Fasilitas sesi konsultasi gratis pasca-kelas untuk pendampingan membuka coffee shop</li>
          </ul>
                    <h2 className="text-2xl font-semibold text-gold mb-4">
            Materi Kursus Barista Bekasi
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Program sekolah kopi kami mencakup teori fundamental sejarah kopi, identifikasi karakter rasa biji kopi (Arabika & Robusta), teknik ekstraksi espresso prima, durasi milk steaming untuk *microfoam*, free pour latte art (pola dasar tulip & rosetta), metode manual brewing (V60), standar pelayanan kedai kopi, hingga kalkulasi HPP dasar untuk pengelolaan bisnis coffee shop.
          </p>

          <h2 className="text-2xl font-semibold text-gold mb-4">
            Cocok Untuk Siapa?
          </h2>

          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-10">
            <li>Pemula murni tanpa latar belakang industri F&B</li>
            <li>Barista aktif yang ingin melakukan *up-skilling* sertifikasi keahlian</li>
            <li>Calon pemilik kedai kopi mandiri (*coffee shop owner*)</li>
            <li>Mahasiswa dan fresh graduate yang ingin mencari pekerjaan sampingan</li>
            <li>Pencari kerja profesional yang membidik karier barista di dalam maupun luar negeri</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gold mb-4">
            Peluang Kerja Barista di Bekasi
          </h2>

          <p className="text-gray-300 leading-relaxed mb-10">
            Pertumbuhan ekosistem *coffee shop* modern di wilayah kota maupun kabupaten Bekasi terus melonjak pesat. Kebutuhan industri terhadap tenaga peracik kopi yang profesional dan terlatih secara taktis menjadi semakin tinggi. Mengikuti program pelatihan kopi yang tepat akan memberi Anda keunggulan kompetitif untuk diserap langsung oleh pasar industri F&B Jabodetabek.
          </p>

          {/* IMPLEMENTASI CTA BUTTON DENGAN DESIGN LATTEART */}
          <div className="flex flex-col md:flex-row gap-4 mb-16 text-center md:text-left">
            <a 
              href="https://wa.me"
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gold text-black px-8 py-4 rounded-xl font-bold inline-block hover:bg-opacity-90 hover:scale-105 transform transition duration-300 shadow-lg shadow-gold/20"
            >
              Booking Jadwal Kursus Bekasi
            </a>
          </div>

          <h2 className="text-2xl font-semibold text-gold mb-6">
            Kursus Barista Jabodetabek
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-16">
            <Link to="/kursus-barista-jakarta" className="hover:text-gold transition">Kursus Barista Jakarta</Link>
            <Link to="/kursus-barista-jakarta-timur" className="hover:text-gold transition">Kursus Barista Jakarta Timur</Link>
            <Link to="/kursus-barista-tangerang" className="hover:text-gold transition">Kursus Barista Tangerang</Link>
            <Link to="/kursus-barista-bekasi" className="hover:text-gold transition">Kursus Barista Bekasi</Link>
            <Link to="/kursus-barista-depok" className="hover:text-gold transition">Kursus Barista Depok</Link>
            <Link to="/kursus-barista-bogor" className="hover:text-gold transition">Kursus Barista Bogor</Link>
          </div>

          <h2 className="text-2xl font-semibold text-gold mb-6">
            FAQ Kursus Barista Bekasi
          </h2>

          <div className="space-y-6 text-gray-300 mb-12 text-sm">
            <div className="p-4 bg-neutral-900 rounded-xl border border-gray-800">
              <h3 className="font-semibold text-white mb-2">
                Apakah pemula tanpa pengalaman bisa mengikuti kursus?
              </h3>
              <p className="text-gray-400">
                Seluruh kurikulum program pelatihan kopi di Barista Lab dirancang bertahap dari level nol agar mudah dipahami secara cepat oleh pemula sekalipun.
              </p>
            </div>

            <div className="p-4 bg-neutral-900 rounded-xl border border-gray-800">
              <h3 className="font-semibold text-white mb-2">
                Apakah alumni akan langsung mendapatkan sertifikat?
              </h3>
              <p className="text-gray-400">
                Ya, seluruh peserta yang telah merampungkan program secara penuh akan memperoleh sertifikat kompetensi resmi kelulusan dari Barista Lab Academy.
              </p>
            </div>

            <div className="p-4 bg-neutral-900 rounded-xl border border-gray-800">
              <h3 className="font-semibold text-white mb-2">
                Apakah tersedia jenis kelas privat khusus?
              </h3>
              <p className="text-gray-400">
                Kami menyediakan opsi Kelas Privat VIP, Corporate B2B Training, serta konsultasi intensif susunan menu bagi calon pemilik kedai kopi komersial.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer onConsultClick={toggleFab} />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
    </>
  );
}

  
