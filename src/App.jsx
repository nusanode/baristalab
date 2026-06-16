import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import KursusBarista from "./pages/KursusBarista";
import KelasLatteArt from "./pages/KelasLatteArt";
import KursusBaristaBekasi from "./pages/KursusBaristaBekasi";
import KursusBaristaDepok from "./pages/KursusBaristaDepok";  
import KursusBaristaBogor from "./pages/KursusBaristaBogor";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/kursus-barista"
        element={<KursusBarista />}
      />

      <Route
        path="/kelas-latte-art"
        element={<KelasLatteArt />}
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
    
    </Routes>
  );
}

export default App;
