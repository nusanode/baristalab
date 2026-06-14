import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import KursusBaristaTangerang from "./pages/KursusBaristaTangerang";
import KursusBaristaJakarta from "./pages/KursusBaristaJakarta";
import KursusBaristaBekasi from "./pages/KursusBaristaBekasi";
import KursusBaristaBogor from "./pages/KursusBaristaBogor";
import KursusBaristaDepok from "./pages/KursusBaristaDepok";
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
const HomePage = () => (
  <>
    <Navbar />
    <Hero onConsultClick={toggleFab} />
    <Benefits />
    <Program onOpenModal={handleOpenModal} />
    <About />
    <Testimonials />
    <FAQ />
    <Footer onConsultClick={toggleFab} />

    <Modal
      isOpen={isModalOpen}
      course={selectedCourse}
      onClose={handleCloseModal}
    />

    <Fab
      isOpen={isFabOpen}
      toggleOpen={toggleFab}
    />

    <ScrollToTop />
  </>
);
  return (
  <Routes>

    <Route path="/" element={<HomePage />} />

    <Route
      path="/kursus-barista-tangerang"
      element={<KursusBaristaTangerang />}
    />

    <Route
      path="/kursus-barista-jakarta"
      element={<KursusBaristaJakarta />}
    />

    <Route
      path="/kursus-barista-bekasi"
      element={<KursusBaristaBekasi />}
    />

    <Route
      path="/kursus-barista-bogor"
      element={<KursusBaristaBogor />}
    />

    <Route
      path="/kursus-barista-depok"
      element={<KursusBaristaDepok />}
    />

  </Routes>
);
}

export default App;
