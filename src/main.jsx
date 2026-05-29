import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from "./context/LanguageContext.jsx";

// Simpan elemen root ke dalam variabel
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StrictMode>,
  );

  // KODE OPTIMASI SEO: Memicu Vite Prerender untuk merekam teks halaman menjadi HTML kaku
  document.dispatchEvent(new Event('custom-render-trigger'));
}
