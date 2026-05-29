import { useState, useRef, useEffect } from "react";
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
          {/* PERBAIKAN: Mengubah H1 menjadi H2 karena H1 utama sudah ada di komponen Hero */}
          <h2 className="text-4xl font-bold mb-6 text-white font-serif">
            Kursus Barista Jakarta & Tangerang Profesional
          </h2>

          <p className="mb-4 text-gray-400">
            BaristaLab Academy menyediakan kursus barista profesional
            di Jakarta Timur dan Tangerang untuk pemula hingga calon pemilik coffee shop.
          </p>

          <p className="mb-4 text-gray-400">
            Materi meliputi espresso, latte art, manual brewing,
            hingga bisnis coffee shop modern.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">
            Kenapa Memilih BaristaLab Academy?
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Trainer profesional dan bersertifikat</li>
            <li>Praktek langsung menggunakan mesin espresso standar industri</li>
            <li>Sertifikat pelatihan barista resmi</li>
            <li>Kurikulum ramah pemula tanpa latar belakang kopi</li>
            <li>Tempat nyaman, kondusif, dan full AC</li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/6285213541993"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-gold text-black px-6 py-3 rounded-xl text-center font-bold hover:bg-yellow-600 transition"
            >
              Hubungi WhatsApp Cabang Jakarta
            </a>

            <a
              href="https://wa.me/6281356561721"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-gold text-gold px-6 py-3 rounded-xl text-center font-bold hover:bg-gold hover:text-black transition"
            >
              Hubungi WhatsApp Cabang Tangerang
            </a>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer onConsultClick={toggleFab} />

      {/* --- Komponen Overlay --- */}
      <Modal
        isOpen={isModalOpen}
        course={selectedCourse}
        onClose={handleCloseModal}
      />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
      <ScrollToTop />
    </div>
  );
}

export default App;
