import React from "react";
import logoImg from "../images/Logo.png";
// 1. IMPORT DATA DARI DATABASE
import { contactData } from "../database";
// 2. IMPORT HOOK BAHASA
import { useLanguage } from "../context/LanguageContext";

export default function Footer({ onConsultClick }) {
  // 3. AMBIL STATE BAHASA
  const { language } = useLanguage();

  // 4. DATA DINAMIS (Contact & Address)
  const currentContact = contactData[language];

  // --- KONFIGURASI WHATSAPP JAKARTA ---
  const jakartaWA = "6285213541993";
  const waLink = `https://wa.me/${jakartaWA}?text=Halo%20Barista%20Lab%20Jakarta,%20saya%20ingin%20bertanya%20tentang%20kursus.`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(waLink)}`;

  // 5. TEKS STATIS
  const content = {
    id: {
      desc: "Barista Lab Academy ditujukan untuk barista profesional dan bagi siapapun yang ingin mempelajari kopi. Para siswa akan mendapatkan semua materi yang berhubungan dengan pengenalan kopi, mengoperasikan mesin espresso, dan membuat minuman berbasis espresso sesuai dengan standar penyajian.",
      headers: {
        studios: "Studio",
        contact: "Kontak",
        hours: "Jam Operasional",
      },
      labels: {
        consult: "Konsultasi",
        email: "Email Support",
        partner: "Kemitraan",
        maps: "Lihat Peta",
        scan: "Scan chat Admin",
      },
      hours: {
        weekdays: "Senin - Sabtu",
  
        sunday: "Minggu",
        closed: "TUTUP",
      },
      rights: "Hak cipta dilindungi undang-undang.",
      links: ["Kebijakan Privasi", "Syarat Layanan", "Karir"],
    },
    en: {
      desc: "Barista Lab Academy is intended for professional baristas and anyone who wants to learn about coffee. Students will receive all materials related to an introduction to coffee, operating an espresso machine, and making espresso-based drinks according to serving standards.",
      headers: { studios: "Studios", contact: "Contact", hours: "Hours" },
      labels: {
        consult: "Consultation",
        email: "Email Support",
        partner: "Partnership",
        maps: "View on Maps",
        scan: "Scan to Chat",
      },
      hours: {
        weekdays: "Mon - Sat",

        sunday: "Sunday",
        closed: "CLOSED",
      },
      rights: "All rights reserved.",
      links: ["Privacy Policy", "Terms of Service", "Careers"],
    },
  };

  const t = content[language];

  return (
    <footer
      id="contact"
      className="bg-dark-charcoal text-gray-400 py-24 relative overflow-hidden font-sans"
    >
      {/* --- DECORATION: Top Gradient Border --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>

      {/* --- DECORATION: Watermark Background --- */}
      <div className="absolute -bottom-10 -right-10 select-none pointer-events-none opacity-[0.03]">
        <h1 className="text-[12rem] md:text-[15rem] font-display font-bold text-white leading-none">
          BREW
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* --- COLUMN 1: BRAND (4 Columns) --- */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="mb-8 flex items-center gap-3 group">
              <img
                src={logoImg}
                alt="Barista Lab Logo"
                className="h-12 w-auto opacity-90 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="text-2xl font-display font-bold text-white tracking-[0.15em] transition-colors duration-300 group-hover:text-gold">
                BARISTA<span className="text-gold font-light">LAB</span>
              </div>
            </a>

            <p className="text-sm leading-7 mb-8 text-gray-500 max-w-sm font-light">
              {t.desc}
            </p>

            {/* --- SOCIALS & QR CODE (SIDE BY SIDE) --- */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* 1. Social Icons */}
              <div className="flex space-x-3">
                {currentContact.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/70 hover:text-black hover:bg-gold hover:border-gold transition-all duration-300 group"
                  >
                    <i
                      className={`fab fa-${social.id} text-sm group-hover:scale-110 transition-transform`}
                    ></i>
                  </a>
                ))}
              </div>

              {/* 2. Vertical Divider (Garis Pemisah) */}
              <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>

              {/* 3. QR Code Mini (Di Samping) */}
              <div className="flex items-center gap-3 group">
                {/* QR Box */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-1 rounded shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={qrCodeUrl}
                    alt="WhatsApp QR"
                    className="w-10 h-10 object-contain"
                  />
                </a>

                {/* Text Label */}
                <div>
                  <span className="text-[10px] text-gold uppercase tracking-widest font-bold block mb-0.5">
                    <i className="fab fa-whatsapp mr-1"></i>Chat
                  </span>
                  <p className="text-[9px] text-gray-500 leading-none">
                    {t.labels.scan}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- COLUMN 2: STUDIOS (3 Columns) --- */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display text-sm font-bold mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold"></span> {t.headers.studios}
            </h4>
            <div className="space-y-8">
              {/* Jakarta Address (NORMAL KEMBALI) */}
              <div className="group">
                <span className="inline-block px-2 py-0.5 rounded-sm bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider mb-3 border border-gold/20">
                  {currentContact.addresses.jakarta.title}
                </span>
                <a
                  href={currentContact.addresses.jakarta.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-white transition-colors leading-relaxed"
                >
                  {currentContact.addresses.jakarta.text}
                  <br />
                  {currentContact.addresses.jakarta.zip}
                  <span className="block text-gold/50 text-xs mt-1 group-hover:translate-x-1 transition-transform duration-300">
                    {t.labels.maps}{" "}
                    <i className="fas fa-arrow-right ml-1 text-[10px]"></i>
                  </span>
                </a>
              </div>

              {/* Tangerang Address */}
              <div className="group">
                <span className="inline-block px-2 py-0.5 rounded-sm bg-gray-800 text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-3 border border-white/10">
                  {currentContact.addresses.tangerang.title}
                </span>
                <a
                  href={currentContact.addresses.tangerang.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-white transition-colors leading-relaxed"
                >
                  {currentContact.addresses.tangerang.text}
                  <br />
                  {currentContact.addresses.tangerang.zip}
                  <span className="block text-gold/50 text-xs mt-1 group-hover:translate-x-1 transition-transform duration-300">
                    {t.labels.maps}{" "}
                    <i className="fas fa-arrow-right ml-1 text-[10px]"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* --- COLUMN 3: CONTACT (2 Columns) --- */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display text-sm font-bold mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold"></span> {t.headers.contact}
            </h4>

            {/* List Kontak */}
            <ul className="space-y-6 text-sm">
              <li>
                <span className="text-xs text-gray-600 uppercase tracking-wider block mb-1">
                  {t.labels.consult}
                </span>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onConsultClick();
                  }}
                  className="text-white hover:text-gold transition font-medium flex items-center gap-2"
                >
                  +62 852-1354-1993
                </a>
              </li>
              <li>
                <span className="text-xs text-gray-600 uppercase tracking-wider block mb-1">
                  {t.labels.email}
                </span>
                <a
                  href={`mailto:${currentContact.email.support}`}
                  className="text-white hover:text-gold transition font-medium"
                >
                  {currentContact.email.support}
                </a>
              </li>
              {/* Partnership Email */}
              <li>
                <span className="text-xs text-gray-600 uppercase tracking-wider block mb-1">
                  {t.labels.partner}
                </span>
                <a
                  href={`mailto:${currentContact.email.partnership}`}
                  className="text-white hover:text-gold transition font-medium"
                >
                  {currentContact.email.partnership}
                </a>
              </li>
            </ul>
          </div>

          {/* --- COLUMN 4: HOURS (3 Columns) --- */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display text-sm font-bold mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold"></span> {t.headers.hours}
            </h4>
            <div className="bg-white/5 rounded-lg p-6 border border-white/5 backdrop-blur-sm">
              <ul className="text-sm space-y-4">
                <li className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-400">{t.hours.weekdays}</span>
                  <span className="text-white font-medium">
                    08:00 AM - 05:00 PM
                  </span>
                </li>
   
                <li className="flex justify-between items-center pt-1">
                  <span className="text-gray-400">{t.hours.sunday}</span>
                  <span className="text-gold font-bold text-xs bg-gold/10 px-2 py-1 rounded">
                    {t.hours.closed}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider uppercase text-gray-600">
          <p>© 2026 Barista Lab Academy. {t.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              {t.links[0]}
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              {t.links[1]}
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              {t.links[2]}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
