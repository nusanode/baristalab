import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Fab from "../components/Fab";

export default function KelasLatteArt() {
const [isFabOpen, setIsFabOpen] = useState(false);

const toggleFab = () => setIsFabOpen(!isFabOpen);

return (
<>
<Navbar />

  <Hero onConsultClick={toggleFab} />

  <main className="bg-dark-charcoal text-white min-h-screen">
    <div className="max-w-5xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-6">
        Kelas Latte Art Profesional Jakarta & Tangerang
      </h1>

      <p className="mb-4">
        Kelas Latte Art Barista Lab Academy dirancang untuk membantu
        peserta menguasai teknik pembuatan latte art yang digunakan
        di coffee shop profesional. Program ini cocok untuk pemula,
        barista aktif maupun pemilik coffee shop yang ingin meningkatkan
        kualitas penyajian minuman berbasis espresso dan susu.
      </p>

      <p className="mb-4">
        Pelatihan dilakukan secara praktik langsung menggunakan mesin
        espresso komersial dan didampingi instruktur berpengalaman dari
        industri kopi.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Materi Kelas Latte Art
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Pengenalan dasar latte art</li>
        <li>Teknik milk steaming</li>
        <li>Milk texturing dan microfoam</li>
        <li>Kontrol suhu susu yang tepat</li>
        <li>Teknik pouring dasar</li>
        <li>Latte Art Heart</li>
        <li>Latte Art Tulip</li>
        <li>Latte Art Rosetta</li>
        <li>Kombinasi pola latte art</li>
        <li>Troubleshooting latte art</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Keunggulan Kelas Latte Art
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Fokus 100% praktik</li>
        <li>Instruktur profesional berpengalaman</li>
        <li>Mesin espresso standar industri</li>
        <li>Rasio peserta dan alat yang ideal</li>
        <li>Sertifikat pelatihan</li>
        <li>Konsultasi pasca pelatihan</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Siapa yang Cocok Mengikuti Kelas Ini?
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Pemula tanpa pengalaman</li>
        <li>Barista aktif yang ingin meningkatkan skill</li>
        <li>Pemilik coffee shop</li>
        <li>Karyawan cafe dan restoran</li>
        <li>Pecinta kopi dan home barista</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Manfaat Menguasai Latte Art
      </h2>

      <p className="mb-4">
        Latte art bukan hanya mempercantik tampilan minuman, tetapi
        juga menunjukkan kualitas milk texturing dan keterampilan
        seorang barista. Kemampuan latte art menjadi nilai tambah
        penting bagi barista profesional di industri kopi modern.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Lokasi Pelatihan Latte Art
      </h2>

      <p className="mb-4">
        Kelas Latte Art tersedia untuk peserta dari Jakarta,
        Tangerang, BSD, Gading Serpong, Karawaci, Bekasi,
        Depok, Bogor, Cikarang, Karawang dan wilayah Jabodetabek lainnya.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Sertifikat Kelas Latte Art
      </h2>

      <p className="mb-4">
        Setelah menyelesaikan pelatihan, peserta akan mendapatkan
        sertifikat pelatihan Latte Art dari Barista Lab Academy
        sebagai bukti kompetensi dan pengalaman belajar.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        FAQ Kelas Latte Art
      </h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">
            Apakah pemula bisa mengikuti kelas ini?
          </h3>
          <p>
            Ya. Program ini dirancang untuk pemula hingga barista aktif.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            Apakah mendapatkan sertifikat?
          </h3>
          <p>
            Ya, setiap peserta akan mendapatkan sertifikat pelatihan.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            Apakah fokus praktik?
          </h3>
          <p>
            Ya. Sebagian besar sesi dilakukan dengan praktik langsung.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <a
          href="https://wa.me/6285213541993"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-black px-6 py-3 rounded-xl font-semibold inline-block"
        >
          Daftar Kelas Latte Art Sekarang
        </a>
      </div>

    </div>
  </main>

  <Footer />

  <Fab
    isOpen={isFabOpen}
    toggleOpen={toggleFab}
  />
</>

);
}
