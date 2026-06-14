import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function KursusBaristaTangerang() {
  return (
    <>
      <Navbar />

      <main className="bg-dark-charcoal text-white min-h-screen">

        {/* HERO */}
        <section className="relative h-[350px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80"
            alt="Kursus Barista Tangerang"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70 flex items-center">

            <div className="max-w-5xl mx-auto px-6">

              <img
                src="/logo.png"
                alt="Barista Lab Academy"
                className="w-24 mb-6"
              />

              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Kursus Barista Tangerang Profesional
              </h1>

              <p className="text-lg text-gray-300 max-w-2xl">
                Pelatihan barista profesional untuk pemula, karyawan coffee shop,
                hingga calon pemilik usaha kopi.
              </p>

            </div>

          </div>

        </section>

        {/* CONTENT */}
        <section className="max-w-5xl mx-auto px-6 py-16">

          <p className="mb-6 text-gray-300 leading-relaxed">
            Barista Lab Academy merupakan lembaga pelatihan barista profesional
            yang menyediakan kursus barista di Tangerang untuk pemula,
            karyawan coffee shop, hingga calon pemilik usaha kopi.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Program pelatihan dirancang berdasarkan kebutuhan industri kopi modern
            dengan kombinasi teori dan praktik langsung menggunakan mesin espresso
            standar komersial.
          </p>

          <p className="mb-10 text-gray-300 leading-relaxed">
            Peserta akan mempelajari dasar-dasar kopi, teknik ekstraksi espresso,
            latte art, manual brewing, pelayanan pelanggan, hingga manajemen bisnis
            coffee shop.
          </p>

          {/* PROGRAM */}
          <h2 className="text-3xl font-bold mb-6 text-gold">
            Program Kursus Barista
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-300 mb-12">
            <li>Barista Basic Class</li>
            <li>Espresso & Latte Art Class</li>
            <li>Manual Brew Class</li>
            <li>Barista Professional Class</li>
            <li>Barista Pro Business Class</li>
          </ul>

          {/* KEUNGGULAN */}
          <h2 className="text-3xl font-bold mb-6 text-gold">
            Kenapa Memilih Barista Lab Academy?
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-300 mb-12">
            <li>Trainer profesional dan berpengalaman</li>
            <li>Praktik langsung menggunakan mesin espresso standar industri</li>
            <li>Sertifikat pelatihan resmi</li>
            <li>Cocok untuk pemula tanpa pengalaman</li>
            <li>Ruang belajar nyaman dan full AC</li>
            <li>Konsultasi bisnis coffee shop</li>
            <li>Dukungan jaringan alumni dan peluang kerja</li>
          </ul>

          {/* KARIR */}
          <h2 className="text-3xl font-bold mb-6 text-gold">
            Peluang Karir Setelah Menjadi Barista
          </h2>

          <p className="mb-10 text-gray-300 leading-relaxed">
            Industri kopi di Indonesia terus berkembang pesat. Lulusan kursus
            barista memiliki peluang bekerja sebagai barista profesional,
            head barista, trainer kopi, quality control, coffee consultant,
            hingga membuka usaha coffee shop sendiri.
          </p>

          {/* LOKASI */}
          <h2 className="text-3xl font-bold mb-6 text-gold">
            Lokasi Pelatihan
          </h2>

          <p className="mb-10 text-gray-300 leading-relaxed">
            Barista Lab Academy memiliki lokasi pelatihan yang mudah dijangkau
            dari wilayah Tangerang, Cikokol, Karawaci, BSD, Gading Serpong,
            Alam Sutera, Cipondoh, Ciledug, dan sekitarnya.
          </p>

          {/* FAQ */}
          <h2 className="text-3xl font-bold mb-6 text-gold">
            FAQ Kursus Barista Tangerang
          </h2>

          <div className="space-y-6 mb-12">

            <div>
              <h3 className="font-bold mb-2">
                Apakah pemula bisa mengikuti kursus?
              </h3>
              <p className="text-gray-300">
                Ya. Program dirancang khusus untuk peserta tanpa pengalaman.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">
                Apakah mendapatkan sertifikat?
              </h3>
              <p className="text-gray-300">
                Ya. Seluruh peserta akan memperoleh sertifikat pelatihan.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">
                Apakah ada praktik langsung?
              </h3>
              <p className="text-gray-300">
                Ya. Peserta akan menggunakan mesin espresso komersial secara langsung.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="grid md:grid-cols-2 gap-4">

            <a
              href="https://wa.me/6285213541993"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black font-bold px-6 py-4 rounded-xl text-center hover:opacity-90 transition"
            >
              WhatsApp Cabang Jakarta
            </a>

            <a
              href="https://wa.me/6281356561721"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black font-bold px-6 py-4 rounded-xl text-center hover:opacity-90 transition"
            >
              WhatsApp Cabang Tangerang
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
