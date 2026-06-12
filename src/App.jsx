import { useState, useRef } from "react";
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

  // 1. Buat Ref untuk menyimpan ID timer closing
  const closeTimerRef = useRef(null);

  const handleOpenModal = (course) => {
    // 2. Batalkan timer penghapusan data jika user membuka modal lagi dengan cepat
    // Ini mencegah modal menjadi "blank" jika dibuka-tutup-buka dengan sangat cepat
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    // 3. Simpan ID timer ke ref agar bisa dibatalkan nanti jika perlu
    // Timeout 300ms disesuaikan dengan durasi animasi CSS di Modal.jsx
    closeTimerRef.current = setTimeout(() => {
      setSelectedCourse(null);
      closeTimerRef.current = null; // Reset ref setelah selesai
    }, 300);
  };

  const toggleFab = () => setIsFabOpen(!isFabOpen);

  return (
    <div className="relative">
      <Navbar />
      <Hero onConsultClick={toggleFab} />

      <Benefits />

      <Program onOpenModal={handleOpenModal} />
      <About />
      <Testimonials />

      <FAQ />

      <Footer onConsultClick={toggleFab} />

      {/* --- Komponen Overlay (Fixed Position) --- */}
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
