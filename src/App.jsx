import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import KursusBarista from "./pages/KursusBarista";
import KelasLatteArt from "./pages/KelasLatteArt";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/kursus-barista" element={<KursusBarista />} />

      <Route path="/kelas-latte-art" element={<KelasLatteArt />} />
    </Routes>
  );
}

export default App;
