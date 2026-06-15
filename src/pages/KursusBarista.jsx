import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Fab from "../components/Fab";

export default function KursusBarista() {
  const [isFabOpen, setIsFabOpen] = useState(false);

const toggleFab = () => setIsFabOpen(!isFabOpen);
  return (
    <>
      <Navbar />

<Hero onConsultClick={toggleFab} />

<main className="bg-dark-charcoal text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-10">

          <h1 className="text-4xl font-bold mb-6">
            Kursus Barista Profesional Bersertifikat Jakarta & Tangerang
          </h1>

          <p className="mb-4">
            Kursus Barista Barista Lab Academy dirancang untuk membantu peserta
            menguasai keterampilan barista profesional mulai dari dasar hingga
            tingkat lanjutan. Program pelatihan ini cocok untuk pemula,
            karyawan cafe, pemilik coffee shop, maupun siapa saja yang ingin
            berkarir di industri kopi.
          </p>

          <p className="mb-4">
            Peserta akan belajar langsung menggunakan mesin espresso komersial,
            grinder profesional, serta berbagai peralatan yang digunakan di
            coffee shop modern.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Materi Kursus Barista Profesional
          </h2>

          <ul className="list-disc pl-6 space-y-2">
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

          <ul className="list-disc pl-6 space-y-2">
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

          <ul className="list-disc pl-6 space-y-2">
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

          <p className="mb-4">
            Industri kopi di Indonesia terus berkembang. Setelah mengikuti
            pelatihan, peserta dapat berkarir sebagai barista, head barista,
            trainer kopi, coffee consultant, hingga membuka usaha coffee shop
            sendiri.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Lokasi Kursus Barista
          </h2>

          <p className="mb-4">
            Barista Lab Academy melayani peserta dari Jakarta, Tangerang,
            Bekasi, Depok, Bogor, BSD, Gading Serpong, Karawaci, Cikarang,
            Karawang dan wilayah Jabodetabek lainnya.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Sertifikat Kursus Barista
          </h2>

          <p className="mb-4">
            Setelah menyelesaikan program pelatihan, peserta akan mendapatkan
            sertifikat Kursus Barista dari Barista Lab Academy sebagai bukti
            kompetensi dan pengalaman belajar.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            FAQ Kursus Barista
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">
                Apakah pemula bisa mengikuti kursus ini?
              </h3>
              <p>
                Ya. Program dirancang untuk peserta yang belum memiliki
                pengalaman sekalipun.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Apakah mendapatkan sertifikat?
              </h3>
              <p>
                Ya, setiap peserta yang menyelesaikan pelatihan akan
                mendapatkan sertifikat.
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
              Daftar Kursus Barista Sekarang
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
