import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Fab from "../components/Fab";

export default function KelasLatteArt() {
  const [isFabOpen, setIsFabOpen] = useState(false);

  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    // 1. Atur Judul Halaman & Meta Description untuk Google AI
    document.title = "Kelas Latte Art Jakarta & Tangerang | Belajar Free Pour Kopi";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Kursus latte art terdekat di Jabodetabek. Kuasai teknik steaming susu microfoam hingga pembuatan pola tulip, rosetta, dan swan. 1 orang 1 mesin!");
    }

    // 2. Atur Open Graph (Untuk Tampilan Share WhatsApp / Sosial Media)
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Kelas Latte Art Jakarta & Tangerang | Belajar Free Pour Kopi");

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Kursus latte art terdekat di Jabodetabek. Kuasai teknik steaming susu microfoam hingga pembuatan pola tulip, rosetta, dan swan.");

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://baristalab.co.id"); // <-- Selesai Diperbaiki

    // 3. Kembalikan scroll ke posisi paling atas saat halaman dibuka
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero onConsultClick={toggleFab} />

      <main className="bg-dark-charcoal text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-10">

          <h1 className="text-4xl font-bold mb-6">
            Kelas Latte Art Jakarta & Tangerang: Kuasai Seni Gambar di Atas Kopi
          </h1>

          <p className="mb-4 text-gray-300 leading-relaxed">
            Kelas Latte Art di Barista Lab Academy dirancang khusus bagi Anda yang ingin menguasai teknik menggambar di atas kopi secara estetis. Pelatihan ini memfokuskan peserta pada penguasaan kontrol penuh terhadap susu (milk handling) guna menciptakan visual minuman berbasis espresso yang memikat dan berstandar kafe modern.
          </p>

          <p className="mb-8 text-gray-300 leading-relaxed">
            Sama seperti program utama kami, kelas intensif ini menerapkan metode praktik langsung dengan fasilitas 1 peserta menggunakan 1 mesin espresso komersial dan grinder profesional sepanjang sesi.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gold">
            Materi Pelatihan Kelas Latte Art
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Pengenalan karakteristik susu dan pengaruh suhu terhadap foam</li>
            <li>Teknik milk steaming untuk menghasilkan tekstur microfoam yang halus (silky dan shiny)</li>
            <li>Seni memposisikan cangkir dan menjaga kestabilan aliran susu saat menuang (pouring posture)</li>
            <li>Pemahaman teknik dasar menuang: piercing, foam stretching, dan cutting</li>
            <li>Praktik intensif pembuatan pola dasar Free Pour: <strong>Love (Hati)</strong></li>
            <li>Praktik tingkat lanjut pembuatan pola: <strong>Tulip (Slammed Tulip)</strong></li>
            <li>Praktik kombinasi pola rumit: <strong>Rosetta</strong> hingga teknik dasar menggambar <strong>Swan (Angsa)</strong></li>
            <li>Evaluasi visual latte art (analisis simetris, kontras, dan ketebalan foam)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Keunggulan Belajar Latte Art di Barista Lab
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Fasilitas praktik 1 Orang 1 Mesin (tidak perlu mengantre dengan peserta lain)</li>
            <li>Dipandu oleh instruktur berpengalaman yang menguasai teknik anatomi latte art</li>
            <li>Dukungan bahan praktik susu berkualitas tinggi yang melimpah selama kelas</li>
            <li>Mendapatkan sertifikat resmi pelatihan khusus Latte Art</li>
            <li>Sesi konsultasi gratis setelah kelas selesai untuk menjaga konsistensi skill</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Target Peserta Kelas Ini
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Barista pemula yang ingin menaikkan nilai jual portofolio kerja</li>
            <li>Home barista atau pecinta kopi yang ingin menyajikan kopi cantik di rumah</li>
            <li>Pemilik kedai kopi yang ingin mengontrol standar estetika visual menu kafe mereka</li>
            <li>Peserta umum yang ingin mendalami seni keindahan kopi sebagai hobi baru</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Cakupan Wilayah & Lokasi Kelas
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            Kami menyelenggarakan pelatihan secara tatap muka langsung di laboratorium kopi kami yang berlokasi strategis di Jakarta Timur dan Tangerang. Kelas ini juga dirancang ramah jarak bagi peserta dari Bekasi, Depok, Bogor, BSD, Serpong, hingga Cikarang.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            FAQ Kelas Latte Art
          </h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="font-semibold text-white text-base">
                Apakah saya harus bisa dasar espresso sebelum ikut kelas ini?
              </h3>
              <p className="mt-1">
                Akan lebih baik jika Anda sudah memahami cara mengekstrak espresso dasar. Namun jika belum, instruktur kami akan tetap memberikan pengenalan singkat teknik brewing dasar sebelum masuk ke sesi susu.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white text-base">
                Berapa banyak susu yang digunakan selama praktik?
              </h3>
              <p className="mt-1">
                Kami menyediakan kuota susu segar yang melimpah bagi setiap peserta agar Anda dapat melakukan pengulangan teknik pouring berkali-kali hingga membentuk muscle memory yang tepat.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white text-base">
                Apakah langsung diajarkan gambar yang sulit seperti Swan?
              </h3>
              <p className="mt-1">
                Pembelajaran dimulai secara bertahap dari pola dasar Love dan Tulip terlebih dahulu untuk melatih kestabilan tangan, baru kemudian naik ke pola kompleks seperti Rosetta dan Swan.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-3 rounded-xl font-semibold inline-block hover:bg-opacity-90 transition-all duration-250"
            >
              Hubungi Admin & Booking Jadwal Kelas
            </a>
          </div>

        </div>
      </main>

      <Footer />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
    </>
  );
}
