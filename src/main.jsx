import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./Context/LanguageContext.jsx";

// Simpan elemen root ke dalam variabel
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>

      <BrowserRouter>

        <LanguageProvider>
          <App />
        </LanguageProvider>

      </BrowserRouter>

    </StrictMode>,
  );

  // KODE OPTIMASI SEO
  document.dispatchEvent(new Event('custom-render-trigger'));
}
