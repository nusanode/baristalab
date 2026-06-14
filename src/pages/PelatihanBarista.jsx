import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PelatihanBarista() {
  return (
    <>
      <Navbar />

      <main className="bg-dark-charcoal text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-10">

          <h1 className="text-4xl font-bold mb-6">
            Pelatihan Barista Profesional Jakarta & Tangerang
          </h1>

          <p className="mb-4">
            Pelatihan Barista Barista Lab Academy merupakan program belajar
            kopi yang dirancang untuk pemula, calon barista profesional,
            karyawan coffee shop, hingga calon pemilik usaha kopi.
          </p>

          <p className="mb-4">
            Materi pelatihan menggabungkan teori dan praktik langsung
            menggunakan mesin espresso standar industri sehingga peserta
            memperoleh pengalaman yang sesuai dengan kebutuhan dunia kerja.
          </p>

          <p className="mb-4">
            Program ini cocok bagi siapa saja yang ingin membangun karir
            di industri kopi maupun membuka bisnis coffee shop sendiri.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Materi Pelatihan Barista
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Pengenalan kopi dan industri coffee shop</li>
            <li>Dasar-dasar profesi barista</li>
            <li>Pengenalan grinder dan mesin espresso</li>
            <li>Kalibrasi grinder</li>
            <li>Teknik ekstraksi espresso</li>
            <li>Milk steaming dan milk texturing</li>
            <li>Latte art dasar</li>
            <li>Manual brewing V60</li>
            <li>Customer service coffee shop</li>
            <li>Manajemen operasional coffee shop</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Program Pelatihan
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Barista Basic Class</li>
            <li>Espresso & Latte Art Class</li>
            <li>Manual Brew Class</li>
            <li>Barista Professional Class</li>
            <li>Barista Pro Business Class</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Keunggulan Pelatihan Barista Lab Academy
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Trainer profesional dan berpengalaman</li>
            <li>Praktik menggunakan mesin espresso komersial</li>
            <li>Sertifikat pelatihan resmi</li>
            <li>Kelas intensif dengan peserta terbatas</li>
            <li>Cocok untuk pemula tanpa pengalaman</li>
            <li>Konsultasi bisnis coffee shop</li>
            <li>Dukungan alumni dan peluang kerja</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Peluang Karir Setelah Mengikuti Pelatihan
          </h2>

          <p className="mb-4">
            Lulusan pelatihan barista memiliki peluang bekerja sebagai
            barista profesional, head barista, trainer kopi, coffee consultant,
            quality control, maupun membuka usaha coffee shop sendiri.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Area Peserta Pelatihan
          </h2>

          <p className="mb-4">
            Peserta pelatihan barista berasal dari Jakarta, Tangerang,
            Bekasi, Depok, Bogor, BSD, Gading Serpong, Cikarang dan
            berbagai wilayah Jabodetabek lainnya.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Sertifikat Pelatihan Barista
          </h2>

          <p className="mb-4">
            Setelah menyelesaikan program pelatihan, peserta akan memperoleh
            sertifikat pelatihan Barista Lab Academy sebagai bukti kompetensi
            dan pengalaman belajar di bidang kopi.
          </p>

          <div className="mt-8 flex flex-col gap-4">

            <a
              href="https://wa.me/6285213541993"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-3 rounded-xl text-center font-semibold"
            >
              Daftar Pelatihan Barista Jakarta
            </a>

            <a
              href="https://wa.me/6281356561721"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-3 rounded-xl text-center font-semibold"
            >
              Daftar Pelatihan Barista Tangerang
            </a>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
      }
