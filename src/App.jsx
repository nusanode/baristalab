import { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import KursusBaristaJakartaTimur from "./pages/KursusBaristaJakartaTimur";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Program from "./components/Program";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Fab from "./components/Fab";
import ScrollToTop from "./components/ScrollToTop";
import FAQ from "./components/FAQ";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isFabOpen, setIsFabOpen] = useState(false);
  const closeTimerRef = useRef(null);

  // 1. Pemicu Prerender otomatis untuk Googlebot (Solusi Vite CSR)
  useEffect(() => {
    document.dispatchEvent(new Event('custom-render-trigger'));
  }, []);

  const handleOpenModal = (course) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    closeTimerRef.current = setTimeout(() => {
      setSelectedCourse(null);
      closeTimerRef.current = null;
    }, 300);
  };

  const toggleFab = () => setIsFabOpen(!isFabOpen);

  return (
    <div className="relative">
  <Routes>

    <Route
      path="/"
      element={
        <>
      <Navbar />
      
      {/* 2. Mengubah tag div pembungkus menjadi komponen semantik HTML5 untuk Google */}
      <main>
        <Hero onConsultClick={toggleFab} />
        <Benefits />
        <Program onOpenModal={handleOpenModal} />
        <About />
        <Testimonials />

        {/* Seksi SEO Lokal - Dioptimasi dengan struktur Heading yang Benar */}
        <section className="max-w-5xl mx-auto px-4 py-16 bg-dark text-gray-300">
  <h2 className="text-4xl font-bold mb-6 text-white font-serif">
    Kursus Barista Jakarta & Tangerang Profesional
  </h2>

  <p className="mb-6 text-gray-400">
    Barista Lab Academy merupakan pusat kursus barista Jakarta dan
    Tangerang yang menyediakan pelatihan barista profesional untuk
    pemula, calon barista, karyawan coffee shop, hingga calon pemilik
    usaha kopi. Program pelatihan dirancang berdasarkan kebutuhan
    industri kopi modern dengan metode praktik langsung menggunakan
    mesin espresso komersial.
  </p>

  <p className="mb-6 text-gray-400">
    Sebagai sekolah barista Jakarta yang berfokus pada keterampilan
    praktis, peserta akan mempelajari teknik espresso, latte art,
    manual brew, cupping, roasting dasar, hingga manajemen bisnis
    coffee shop. Materi diajarkan oleh trainer berpengalaman dengan
    pendekatan yang mudah dipahami bahkan untuk peserta tanpa latar
    belakang kopi.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gold">
    Program Barista Professional
  </h3>

  <p className="mb-6 text-gray-400">
    Program Barista Professional merupakan pelatihan barista Jakarta
    yang dirancang untuk mempersiapkan peserta bekerja di coffee shop,
    hotel, restoran, dan industri F&B. Materi mencakup espresso,
    latte art, workflow bar, customer service, serta standar operasional
    industri kopi modern.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gold">
    Program Barista Pro Business
  </h3>

  <p className="mb-6 text-gray-400">
    Kelas ini ditujukan bagi calon pemilik usaha kopi yang ingin
    memahami operasional coffee shop, pengelolaan SDM, penyusunan SOP,
    strategi pemasaran, perhitungan HPP, dan pengembangan menu minuman.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gold">
    Espresso & Latte Art
  </h3>

  <p className="mb-6 text-gray-400">
    Pelatihan espresso dan latte art fokus pada teknik ekstraksi yang
    konsisten, steaming susu, pembuatan microfoam, serta pola latte art
    seperti Heart, Tulip, dan Rosetta.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gold">
    Manual Brew Class
  </h3>

  <p className="mb-6 text-gray-400">
    Kelas manual brew membahas metode penyeduhan V60, Kalita Wave,
    Aeropress, French Press, dan teknik cupping untuk memahami karakter
    rasa kopi secara lebih mendalam.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gold">
    Barista Basic Class
  </h3>

  <p className="mb-6 text-gray-400">
    Program dasar yang cocok bagi pemula yang ingin belajar kopi dari
    nol. Peserta akan memahami pengenalan kopi, dasar espresso,
    pengoperasian mesin espresso, dan teknik dasar latte art.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4 text-gold">
    Latte Art Focus
  </h3>

  <p className="mb-6 text-gray-400">
    Kelas khusus latte art dengan fokus pada pouring technique,
    konsistensi pola, kontrol susu, serta pengembangan desain latte art
    profesional.
  </p>
          <h3 className="text-2xl font-semibold mt-10 mb-4 text-gold">
  Kursus Barista Jakarta Timur
</h3>

<p className="mb-6 text-gray-400">
  Cabang Jakarta melayani peserta dari Cakung, Pulogadung,
  Rawamangun, Kelapa Gading, Bekasi, dan wilayah Jakarta lainnya.
  Program kursus barista Jakarta dirancang untuk pemula hingga
  profesional dengan praktik langsung menggunakan mesin espresso
  standar industri.
</p>

<h3 className="text-2xl font-semibold mt-10 mb-4 text-gold">
  Kursus Barista Tangerang
</h3>

<p className="mb-6 text-gray-400">
  Cabang Tangerang melayani peserta dari Karawaci, Cikokol,
  Gading Serpong, BSD, Alam Sutera, Ciledug, dan sekitarnya.
  Pelatihan barista Tangerang mencakup espresso, latte art,
  manual brew, serta manajemen bisnis coffee shop.
</p>

  <h3 className="text-2xl font-semibold mt-10 mb-4 text-white">
    Kenapa Memilih Barista Lab Academy?
  </h3>

  <ul className="list-disc pl-6 space-y-3 text-gray-400">
    <li>Trainer profesional dan berpengalaman</li>
    <li>Sertifikat pelatihan barista</li>
    <li>Praktik langsung menggunakan mesin espresso komersial</li>
    <li>Satu peserta satu mesin saat praktik</li>
    <li>Cocok untuk pemula hingga profesional</li>
    <li>Dukungan karir dan jaringan industri kopi</li>
    <li>Lokasi mudah dijangkau dari Jakarta dan Tangerang</li>
  </ul>
     <div className="mt-10">
  <h3 className="text-2xl font-semibold mb-4 text-white">
    Hubungi Cabang Terdekat
  </h3>

  <p className="mb-6 text-gray-400">
    Tim Barista Lab Academy siap membantu informasi jadwal kursus,
    biaya pelatihan barista, dan konsultasi pembukaan coffee shop
    untuk wilayah Jakarta dan Tangerang.
  </p>

  <div className="flex flex-col sm:flex-row gap-4">
    <a
      href="https://wa.me/6285213541993"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gold text-black px-6 py-3 rounded-xl text-center font-bold hover:bg-yellow-600 transition"
    >
      WhatsApp Cabang Jakarta
    </a>

    <a
      href="https://wa.me/6281356561721"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-transparent border-2 border-gold text-gold px-6 py-3 rounded-xl text-center font-bold hover:bg-gold hover:text-black transition"
    >
      WhatsApp Cabang Tangerang
    </a>
  </div>
</div>     
</section>
        <FAQ />
      </main>

      <Footer onConsultClick={toggleFab} />

      <Modal
        isOpen={isModalOpen}
        course={selectedCourse}
        onClose={handleCloseModal}
      />

      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
<ScrollToTop />

        </>
      }
    />

    <Route
      path="/kursus-barista-jakarta-timur"
      element={<KursusBaristaJakartaTimur />}
    />

  </Routes>
      
    </div>
  );
}

export default App;
