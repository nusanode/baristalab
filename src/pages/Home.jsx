import { useState, useRef, useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Program from "../components/Program";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Fab from "../components/Fab";
import ScrollToTop from "../components/ScrollToTop";
import FAQ from "../components/FAQ";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isFabOpen, setIsFabOpen] = useState(false);

  const closeTimerRef = useRef(null);

  useEffect(() => {
    // 1. Reset Judul Halaman Utama & Meta Description untuk Google AI
    document.title = "Kursus Barista Jakarta, Tangerang, Bekasi, Depok & Bogor | Barista Lab Academy";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Kursus barista profesional Jabodetabek. Pelatihan espresso, latte art, manual brew dan coffee business untuk pemula hingga profesional.");
    }

    // 2. Reset Open Graph ke Setelan Awal Halaman Beranda
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Kursus Barista Jakarta, Tangerang & Jabodetabek | Barista Lab Academy");

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Belajar barista dari nol hingga profesional. Pelatihan espresso, latte art, manual brew dan coffee business untuk peserta dari Jakarta, Tangerang, Bekasi, Depok dan Bogor.");

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://baristalab.co.id");

    // 3. Pastikan scroll dimulai dari paling atas saat beranda dimuat
    window.scrollTo(0, 0);
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

      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />

      <ScrollToTop />
    </div>
  );
}

