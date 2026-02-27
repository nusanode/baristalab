import { useEffect } from "react";
// 1. IMPORT DATA DARI DATABASE
import { contactData } from "../database";
// 2. IMPORT HOOK BAHASA
import { useLanguage } from "../context/LanguageContext";

export default function Modal({ isOpen, course, onClose }) {
  // 3. AMBIL STATE BAHASA
  const { language } = useLanguage();

  // 1. BEST PRACTICE: Handle Body Scroll & Escape Key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      // Kunci scroll halaman belakang
      document.body.style.overflow = "hidden";
      // Tambahkan event listener untuk tombol Escape
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup saat komponen unmount atau modal tertutup
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // 2. LOGIC FIX: Jangan render konten null di awal untuk animasi,
  // tapi pastikan course ada jika ingin menampilkan detail.
  if (!course && !isOpen) return null;
  if (!course) return null;

  // 4. DEFINISI TEKS STATIS
  const content = {
    id: {
      breadcrumb: "Program > Detail",
      learn: "Materi yang akan dipelajari:",
      btnAction: "Tanya Program Ini",
      btnClose: "Tutup",
      // Pesan WA Bahasa Indonesia
      waTemplate: (title) =>
        `Halo Admin BaristaLab, nama saya [Nama Anda], saya ingin bertanya seputar program: ${title}`,
    },
    en: {
      breadcrumb: "Programs > Details",
      learn: "What you'll learn:",
      btnAction: "Inquire About Program",
      btnClose: "Close",
      // Pesan WA Bahasa Inggris
      waTemplate: (title) =>
        `Hello BaristaLab Admin, my name is [Your Name], I would like to inquire about the program: ${title}`,
    },
  };

  const text = content[language];

  // --- WHATSAPP CONFIGURATION ---
  // MENGGUNAKAN DATA DARI DATABASE SESUAI BAHASA
  const phoneNumber = contactData[language].whatsapp.general;

  // Menggunakan template pesan sesuai bahasa
  const message = text.waTemplate(course.title);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // --- CEK JUMLAH SILABUS ---
  const isSyllabusLong = course.syllabus && course.syllabus.length > 5;

  return (
    // 3. CONTAINER TRANSITION
    <div
      className={`fixed inset-0 z-[100] flex justify-center p-0 md:p-4 transition-all duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        ${/* UX Fix: Mobile = items-end (bottom sheet), Desktop = items-center */ ""}
        items-end md:items-center
      `}
    >
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Container */}
      {/* 4. ANIMATION & STYLE FIX: Bottom Sheet Style untuk Mobile */}
      <div
        className={`relative bg-dark-charcoal border-t md:border border-gold/20 w-full max-w-4xl shadow-2xl transition-all duration-300 transform
          ${/* Mobile: Rounded Top only. Desktop: Normal box */ ""}
          rounded-t-[2rem] md:rounded-none
          ${/* Animation Logic: Mobile Slide Up vs Desktop Scale */ ""}
          ${
            isOpen
              ? "translate-y-0 scale-100"
              : "translate-y-full md:translate-y-10 md:scale-95"
          }
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button (Top Right - Icon only) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white/70 hover:text-gold text-2xl transition-colors p-2"
          aria-label="Close modal"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Scrollable Content Wrapper */}
        <div className="flex flex-col md:flex-row h-[85vh] md:h-auto overflow-hidden">
          {/* Left Side: Course Image */}
          <div className="md:w-5/12 relative h-48 md:h-auto flex-shrink-0">
            <img
              src={course.image}
              alt={`Ilustrasi untuk kelas ${course.title}`}
              className="absolute inset-0 w-full h-full object-cover filter grayscale"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gold/10 mix-blend-multiply"></div>
          </div>

          {/* Right Side: Course Details */}
          <div className="md:w-7/12 p-8 md:p-12 flex flex-col overflow-y-auto">
            {/* Breadcrumb / Label */}
            <div className="mb-2 flex items-center gap-3">
              <span className="text-gold text-[10px] md:text-xs font-bold uppercase border border-gold px-2 py-1 tracking-wider">
                {text.breadcrumb}
              </span>
              <span className="text-white font-display text-lg">
                {course.price}
              </span>
            </div>

            <h3
              id="modal-title"
              className="text-2xl md:text-4xl font-display text-white mb-4 md:mb-6"
            >
              {course.title}
            </h3>

            <p className="text-gray-400 font-light mb-6 md:mb-8 text-sm leading-relaxed">
              {course.desc}
            </p>

            {/* Syllabus List */}
            <div className="bg-black/20 p-6 border-l-2 border-gold mb-8 rounded-r-lg">
              <h4 className="text-white text-xs font-bold uppercase mb-3 tracking-widest">
                {text.learn}
              </h4>
              {/* UBAH: Tambahkan kondisi scroll jika > 5 item */}
              <ul 
                className={`space-y-2 text-sm text-gray-400 ${
                  isSyllabusLong 
                    ? "max-h-48 overflow-y-auto pr-2 custom-scrollbar" 
                    : ""
                }`}
              >
                {course.syllabus &&
                  course.syllabus.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check text-gold mr-3 mt-1 text-[10px]"></i>
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* --- ACTION BUTTONS --- */}
            <div className="mt-auto flex flex-col gap-3 pt-4">
              {/* 1. Contact Admin Button (Primary Action) */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gold text-black py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group rounded-sm"
              >
                <i className="fab fa-whatsapp text-lg group-hover:text-green-600 transition-colors"></i>
                {text.btnAction}
              </a>

              {/* 2. Close Button (Secondary Action) */}
              <button
                onClick={onClose}
                className="w-full border border-white/10 text-gray-400 py-3 font-bold uppercase tracking-widest text-xs hover:text-white hover:border-white transition-all duration-300 rounded-sm"
              >
                {text.btnClose}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}