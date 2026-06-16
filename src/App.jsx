import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import KelasLatteArt from "./pages/KelasLatteArt";
import KursusBarista from "./pages/KursusBarista";
import LocationPage from "./pages/LocationPage";

// Regional Routes
import KursusBaristaJakarta from "./pages/KursusBaristaJakarta";
import KursusBaristaJakartaTimur from "./pages/KursusBaristaJakartaTimur";
import KursusBaristaTangerang from "./pages/KursusBaristaTangerang";
import KursusBaristaBekasi from "./pages/KursusBaristaBekasi";
import KursusBaristaDepok from "./pages/KursusBaristaDepok";
import KursusBaristaBogor from "./pages/KursusBaristaBogor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kursus-barista" element={<KursusBarista />} />
      <Route path="/kelas-latte-art" element={<KelasLatteArt />} />
      <Route path="/lokasi" element={<LocationPage />} />

      {/* Geo-Targeting Routes */}
      <Route path="/kursus-barista-jakarta" element={<KursusBaristaJakarta />} />
      <Route path="/kursus-barista-jakarta-timur" element={<KursusBaristaJakartaTimur />} />
      <Route path="/kursus-barista-tangerang" element={<KursusBaristaTangerang />} />
      <Route path="/kursus-barista-bekasi" element={<KursusBaristaBekasi />} />
      <Route path="/kursus-barista-depok" element={<KursusBaristaDepok />} />
      <Route path="/kursus-barista-bogor" element={<KursusBaristaBogor />} />
    </Routes>
  );
}

export default App;
