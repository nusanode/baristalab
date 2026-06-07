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
  <section className="max-w-5xl mx-auto px-4 py-16">

  <h2 className="text-4xl font-bold mb-6">  
  Kursus Barista Jakarta, Tangerang & Jabodetabek  
</h2>    <p className="mb-4">  
  Barista Lab Academy menyediakan kursus dan pelatihan barista profesional  
  di Jakarta, Tangerang, dan wilayah Jabodetabek untuk pemula, calon barista,  
  maupun pemilik coffee shop.  
</p>    <p className="mb-4">  
    Materi meliputi espresso, latte art, manual brewing,  
    hingga bisnis coffee shop modern.  
  </p>    <h3 className="text-2xl font-semibold mt-8 mb-4">  
    Kenapa Memilih BaristaLab Academy?  
  </h3>    <ul className="list-disc pl-6 space-y-2">  
    <li>Trainer profesional</li>  
    <li>Praktek langsung mesin espresso</li>  
    <li>Sertifikat pelatihan</li>  
    <li>Cocok untuk pemula</li>  
    <li>Tempat nyaman dan full AC</li>  
  </ul>    <div className="mt-8 flex flex-col gap-4">  <a  
  href="https://wa.me/6285213541993"  
  target="_blank"  
  className="bg-black text-white px-6 py-3 rounded-xl text-center"  
>  
  WhatsApp Cabang Jakarta  
</a>  

<a  
  href="https://wa.me/6281356561721"  
  target="_blank"  
  className="bg-black text-white px-6 py-3 rounded-xl text-center"  
>  
  WhatsApp Cabang Tangerang  
</a>

  </div>  </section>  <FAQ />  

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
