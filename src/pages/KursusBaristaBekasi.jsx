import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";
import { useState } from "react";

export default function KursusBaristaBekasi() {
  const [isFabOpen, setIsFabOpen] = useState(false);

  const toggleFab = () => {
    setIsFabOpen(!isFabOpen);
  };

  return (
    <>
      <Navbar />

      <main className="bg-dark-charcoal text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-10">

          <h1 className="text-4xl font-bold mb-6">
            Kursus Barista Bekasi Profesional | Pelatihan Barista Bersertifikat
          </h1>

          <p className="mb-4">
             Barista Lab Academy menyediakan kursus barista di Bekasi untuk pemula,
karyawan coffee shop, hingga calon pengusaha kopi. Program pelatihan
dirancang untuk membantu peserta menguasai keterampilan barista
sesuai standar industri kopi modern.
          </p>

          <p className="mb-4">
            Program pelatihan dirancang berdasarkan kebutuhan industri kopi modern
            dengan kombinasi teori dan praktik langsung menggunakan mesin espresso
            standar komersial.
          </p>

          <p className="mb-4">
            Peserta akan mempelajari dasar-dasar kopi, teknik ekstraksi espresso,
            latte art, manual brewing, pelayanan pelanggan, hingga manajemen bisnis
            coffee shop.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Program Kursus Barista
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Barista Basic Class</li>
            <li>Espresso & Latte Art Class</li>
            <li>Manual Brew Class</li>
            <li>Barista Professional Class</li>
            <li>Barista Pro Business Class</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Kenapa Memilih Barista Lab Academy?
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Trainer profesional dan berpengalaman</li>
            <li>Praktik langsung menggunakan mesin espresso standar industri</li>
            <li>Sertifikat pelatihan resmi</li>
            <li>Cocok untuk pemula tanpa pengalaman</li>
            <li>Ruang belajar nyaman dan full AC</li>
            <li>Konsultasi bisnis coffee shop</li>
            <li>Dukungan jaringan alumni dan peluang kerja</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Peluang Karir Setelah Menjadi Barista
          </h2>

          <p className="mb-4">
            Industri kopi di Indonesia terus berkembang. Lulusan pelatihan
            barista memiliki peluang bekerja sebagai barista profesional,
            head barista, trainer kopi, quality control, maupun membuka
            usaha coffee shop sendiri.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Lokasi Pelatihan
          </h2>

          <p className="mb-4">
            Peserta dari Bekasi, Cikarang, Tambun, Babelan, dan sekitarnya dapat
mengikuti pelatihan barista di Barista Lab Academy dengan fasilitas
praktik lengkap dan instruktur profesional.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="https://wa.me/6285213541993"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-3 rounded-xl text-center font-semibold"
            >
              WhatsApp Cabang Jakarta
            </a>

            <a
              href="https://wa.me/6281356561721"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-3 rounded-xl text-center font-semibold"
            >
              WhatsApp Cabang Tangerang
            </a>
          </div>

        </div>
      </main>

      <Footer onConsultClick={toggleFab} />

      <Fab
        isOpen={isFabOpen}
        toggleOpen={toggleFab}
      />
    </>
  );
}
