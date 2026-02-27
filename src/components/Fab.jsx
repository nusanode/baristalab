import { useState } from 'react';
// 1. IMPORT DATA DATABASE
import { contactData } from '../database';
// 2. IMPORT HOOK BAHASA
import { useLanguage } from "../context/LanguageContext";

export default function Fab({ isOpen, toggleOpen }) {
  // 3. AMBIL STATE BAHASA & DATA KONTAK
  const { language } = useLanguage();
  const currentContact = contactData[language];

  // Helper untuk membuat pesan WA yang ter-encode dengan rapi
  const createWaLink = (phone, message) => {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed bottom-8 right-8 md:bottom-8 md:right-8 z-[90] flex flex-col items-end gap-4">
      {/* Menu Options */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Tombol Jakarta */}
        <a
          href={createWaLink(
            currentContact.whatsapp.jakarta, // DATA DARI DATABASE SESUAI BAHASA
            language === 'id' 
              ? "Halo BaristaLab, saya tertarik dengan kursus di Jakarta. Mohon informasinya."
              : "Hello BaristaLab, I am interested in courses in Jakarta. Please provide information."
          )}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between gap-4 bg-black/80 backdrop-blur-md border border-gold/30 hover:border-gold text-white pl-6 pr-2 py-2 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-gold/10"
        >
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-gold group-hover:text-white transition-colors">
              Jakarta
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <i className="fas fa-map-marker-alt text-white text-sm"></i>
          </div>
        </a>

        {/* Tombol Tangerang */}
        <a
          href={createWaLink(
            currentContact.whatsapp.tangerang, // DATA DARI DATABASE SESUAI BAHASA
            language === 'id'
              ? "Halo BaristaLab, saya tertarik dengan kursus di Tangerang. Mohon informasinya."
              : "Hello BaristaLab, I am interested in courses in Tangerang. Please provide information."
          )}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between gap-4 bg-black/80 backdrop-blur-md border border-gold/30 hover:border-gold text-white pl-6 pr-2 py-2 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-gold/10"
        >
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-gold group-hover:text-white transition-colors">
              Tangerang
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <i className="fas fa-map-marker-alt text-white text-sm"></i>
          </div>
        </a>
      </div>

      {/* Main Trigger Button */}
      <button
        onClick={toggleOpen}
        className={`relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl transition-all duration-500 border border-white/10 outline-none focus:outline-none ${
          isOpen
            ? "bg-dark-charcoal rotate-90 ring-2 ring-gold/50"
            : "bg-gradient-to-br from-[#25D366] to-[#128C7E] wa-pulse hover:scale-110"
        }`}
      >
        <i
          className={`fab ${
            isOpen ? "fa-times text-gold" : "fa-whatsapp text-white"
          } transition-all duration-300`}
        ></i>
      </button>
    </div>
  );
}