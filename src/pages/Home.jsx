import { useState, useRef } from "react";

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
