import { Routes, Route } from "react-router-dom";
import { useState, useRef } from "react";
import KursusBaristaJakarta from "./pages/KursusBaristaJakarta";
import KursusBaristaTangerang from "./pages/KursusBaristaTangerang";
import KursusBaristaBekasi from "./pages/KursusBaristaBekasi";
import KursusBaristaDepok from "./pages/KursusBaristaDepok";
import KursusBaristaBogor from "./pages/KursusBaristaBogor";
import SertifikasiBarista from "./pages/SertifikasiBarista";
import KelasLatteArt from "./pages/KelasLatteArt";
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


const handleOpenModal = (course) => {

if(closeTimerRef.current){
clearTimeout(closeTimerRef.current);
}

setSelectedCourse(course);
setIsModalOpen(true);

};


const handleCloseModal = () => {

setIsModalOpen(false);

closeTimerRef.current=setTimeout(()=>{

setSelectedCourse(null);

},300);

};


const toggleFab = () => {
setIsFabOpen(!isFabOpen);
};



return (

<Routes>


<Route
path="/"
element={
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


<Fab 
isOpen={isFabOpen}
toggleOpen={toggleFab}
/>


<ScrollToTop />


</div>
}
/>



<Route
path="/kursus-barista-jakarta"
element={<KursusBaristaJakarta />}
/>


<Route
path="/kursus-barista-tangerang"
element={<KursusBaristaTangerang />}
/>


<Route
path="/kursus-barista-bekasi"
element={<KursusBaristaBekasi />}
/>


<Route
path="/kursus-barista-depok"
element={<KursusBaristaDepok />}
/>


<Route
path="/kursus-barista-bogor"
element={<KursusBaristaBogor />}
/>


<Route
path="/sertifikasi-barista"
element={<SertifikasiBarista />}
/>


<Route
path="/kelas-latte-art"
element={<KelasLatteArt />}
/>


</Routes>

);

}


export default App;
