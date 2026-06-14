import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function KelasLatteArt() {
  return (
    <>
      <Navbar />

      <main className="bg-dark-charcoal text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-10">

          <h1 className="text-4xl font-bold mb-6">
            Kelas Latte Art Profesional Jakarta & Tangerang
          </h1>

          <p className="mb-4">
            Kelas Latte Art Barista Lab Academy dirancang untuk membantu
            peserta menguasai teknik milk steaming dan pembuatan berbagai
            pola latte art yang digunakan di coffee shop profesional.
          </p>

          <p className="mb-4">
            Program ini cocok untuk pemula, barista aktif, pemilik coffee
            shop, maupun pecinta kopi yang ingin meningkatkan keterampilan
            penyajian minuman berbasis espresso dan susu.
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
            <li>Pengenalan teknik milk steaming</li>
            <li>Milk texturing dan microfoam</li>
            <li>Kontrol suhu susu yang tepat</li>
            <li>Teknik pouring dasar</li>
            <li>Latte Art Heart</li>
            <li>Latte Art Tulip</li>
            <li>Latte Art Rosetta</li>
            <li>Kombinasi pola latte art</li>
            <li>Troubleshooting kesalahan latte art</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Keunggulan Kelas Latte Art Barista Lab Academy
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fokus 100% praktik</li>
            <li>Instruktur profesional berpengalaman</li>
            <li>Mesin espresso standar industri</li>
            <li>Rasio peserta dan alat yang ideal</li>
            <li>Sertifikat pelatihan</li>
            <li>Konsultasi setelah pelatihan</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Siapa yang Cocok Mengikuti Kelas Ini?
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Pemula tanpa pengalaman barista</li>
            <li>Barista yang ingin meningkatkan skill latte art</li>
            <li>Pemilik coffee shop</li>
            <li>Karyawan cafe dan restoran</li>
            <li>Pecinta kopi dan home barista</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Lokasi Pelatihan Latte Art
          </h2>

          <p className="mb-4">
            Kelas Latte Art tersedia untuk peserta dari Jakarta, Tangerang,
            Bekasi, Depok, Bogor, BSD, Gading Serpong, Cikarang dan wilayah
            Jabodetabek lainnya.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Sertifikat Pelatihan Latte Art
          </h2>

          <p className="mb-4">
            Setelah menyelesaikan pelatihan, peserta akan mendapatkan
            sertifikat pelatihan Latte Art dari Barista Lab Academy sebagai
            bukti kompetensi dan pengalaman belajar.
          </p>

          <div className="mt-8 flex flex-col gap-4">

            <a
              href="https://wa.me/6285213541993"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-3 rounded-xl text-center font-semibold"
            >
              Daftar Kelas Latte Art Jakarta
            </a>

            <a
              href="https://wa.me/6281356561721"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-3 rounded-xl text-center font-semibold"
            >
              Daftar Kelas Latte Art Tangerang
            </a>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
