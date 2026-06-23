import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";

export default function KursusBaristaBekasi() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    document.title =
      "Kursus Barista Bekasi Bersertifikat | Pelatihan Barista Profesional";

    const metaDesc = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Kursus Barista Bekasi untuk pemula hingga profesional. Belajar espresso, latte art, manual brew dan coffee business. Cocok untuk peserta dari Bekasi, Cikarang, Tambun, Babelan, Jatiasih dan sekitarnya."
      );
    }

    const ogUrl = document.querySelector(
      'meta[property="og:url"]'
    );

    if (ogUrl) {
      ogUrl.setAttribute(
        "content",
        "https://baristalab.co.id/kursus-barista-bekasi"
      );
    }

    const scriptId = "schema-course-bekasi";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");

      script.id = scriptId;
      script.type = "application/ld+json";

      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Kursus Barista Bekasi",
        description:
          "Pelatihan barista profesional untuk peserta dari Bekasi dan sekitarnya.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Barista Lab Academy",
          url: "https://baristalab.co.id",
        },
        educationalCredentialAwarded:
          "Sertifikat Pelatihan Barista",
        courseMode: "OnSite",
        inLanguage: "id-ID",
      });

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

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Kursus Barista Bekasi Profesional Bersertifikat
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Barista Lab Academy menyediakan kursus barista Bekasi
            untuk pemula, karyawan coffee shop, calon barista,
            maupun pengusaha kopi yang ingin meningkatkan
            kemampuan di industri kopi modern.
          </p>

          <p className="text-gray-300 leading-relaxed mb-10">
            Peserta berasal dari berbagai wilayah seperti
            Bekasi Timur, Bekasi Barat, Bekasi Utara,
            Bekasi Selatan, Jatiasih, Pondok Gede,
            Harapan Indah, Cikarang, Lippo Cikarang,
            Tambun Selatan, Tambun Utara, Babelan,
            Setu, dan Tarumajaya.
          </p>

          <h2 className="text-2xl font-semibold text-gold mb-4">
            Kenapa Memilih Barista Lab Academy?
          </h2>

          <ul className="list-disc pl-6 text-gray-300 space-y-3 mb-10">
            <li>1 peserta 1 mesin espresso</li>
            <li>Belajar langsung dengan instruktur berpengalaman</li>
            <li>Materi espresso, latte art dan manual brew</li>
            <li>Sertifikat pelatihan barista</li>
            <li>Kelas cocok untuk pemula maupun profesional</li>
            <li>Pendampingan membuka coffee shop</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gold mb-4">
            Materi Kursus Barista Bekasi
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Program pelatihan mencakup pengenalan kopi,
            karakter biji kopi, teknik ekstraksi espresso,
            steaming susu, latte art, manual brew,
            pelayanan pelanggan, hingga dasar pengelolaan
            bisnis coffee shop.
          </p>

          <h2 className="text-2xl font-semibold text-gold mb-4">
            Cocok Untuk Siapa?
          </h2>

          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-10">
            <li>Pemula tanpa pengalaman</li>
            <li>Barista yang ingin meningkatkan skill</li>
            <li>Pemilik coffee shop</li>
            <li>Mahasiswa dan fresh graduate</li>
            <li>Pencari kerja di industri F&B</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gold mb-4">
            Peluang Kerja Barista di Bekasi
          </h2>

          <p className="text-gray-300 leading-relaxed mb-10">
            Pertumbuhan coffee shop di Bekasi terus meningkat.
            Kebutuhan tenaga barista profesional juga semakin tinggi,
            sehingga pelatihan yang tepat dapat membantu peserta
            memperoleh keterampilan yang dibutuhkan industri.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-16">
            {/* SALIN TOMBOL WA DARI KELASLATTEART */}
          </div>

          <h2 className="text-2xl font-semibold text-gold mb-6">
            Kursus Barista Jabodetabek
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-16">
            <Link
              to="/kursus-barista-jakarta"
              className="hover:text-gold"
            >
              Kursus Barista Jakarta
            </Link>

            <Link
              to="/kursus-barista-jakarta-timur"
              className="hover:text-gold"
            >
              Kursus Barista Jakarta Timur
            </Link>

            <Link
              to="/kursus-barista-tangerang"
              className="hover:text-gold"
            >
              Kursus Barista Tangerang
            </Link>

            <Link
              to="/kursus-barista-bekasi"
              className="hover:text-gold"
            >
              Kursus Barista Bekasi
            </Link>

            <Link
              to="/kursus-barista-depok"
              className="hover:text-gold"
            >
              Kursus Barista Depok
            </Link>

            <Link
              to="/kursus-barista-bogor"
              className="hover:text-gold"
            >
              Kursus Barista Bogor
            </Link>
          </div>

          <h2 className="text-2xl font-semibold text-gold mb-6">
            FAQ Kursus Barista Bekasi
          </h2>

          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">
                Apakah pemula bisa mengikuti kursus?
              </h3>
              <p>
                Ya. Program dirancang untuk peserta tanpa
                pengalaman sekalipun.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">
                Apakah mendapatkan sertifikat?
              </h3>
              <p>
                Ya, peserta akan memperoleh sertifikat
                pelatihan setelah menyelesaikan program.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">
                Apakah tersedia kelas privat?
              </h3>
              <p>
                Tersedia kelas privat, corporate training,
                dan pelatihan untuk calon pemilik coffee shop.
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
