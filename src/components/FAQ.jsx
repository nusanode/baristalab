import { useState } from 'react';
// 1. IMPORT DATA DARI DATABASE
import { faqData, contactData } from '../database';
// 2. IMPORT HOOK BAHASA
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  // State to track which accordion is open (null = all closed)
  const [activeIndex, setActiveIndex] = useState(null);
  
  // 3. AMBIL STATE BAHASA
  const { language } = useLanguage();

  // 4. DEFINISI TEKS STATIS
  const content = {
    id: {
      subtitle: "Pertanyaan Umum",
      title: { t1: "Pertanyaan yang Sering ", highlight: "Diajukan" },
      cta: "Masih punya pertanyaan lain?",
      button: "Chat Dengan Admin Kami"
    },
    en: {
      subtitle: "Common Questions",
      title: { t1: "Frequently Asked ", highlight: "Questions" },
      cta: "Still have other questions?",
      button: "Chat With Our Admin"
    }
  };

  const text = content[language];

  // Handler to toggle accordion
  const toggleAccordion = (index) => {
    // If clicking the same index, close it (set null). If different, open new index.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // UBAH 1: bg-black menjadi bg-charcoal
    <section id="faq" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute -left-20 top-40 w-64 h-64 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -right-20 bottom-20 w-80 h-80 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-gold text-xs uppercase tracking-[0.3em] mb-3 font-medium">
            {text.subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white">
            {text.title.t1}
            <span className="text-gold italic font-serif">{text.title.highlight}</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 animate-fade-up delay-100">
          {/* Mapping menggunakan faqData SESUAI BAHASA */}
          {faqData[language].map((faq, index) => (
            <div
              key={faq.id || index}
              className={`border rounded-lg transition-all duration-500 overflow-hidden ${
                activeIndex === index
                  ? // UBAH 2: bg-dark-charcoal menjadi bg-glass
                    "bg-glass border-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                  : "bg-transparent border-white/10 hover:border-gold/30"
              }`}
            >
              {/* Accordion Header (Button) */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
              >
                <span
                  className={`text-lg font-display tracking-wide transition-colors duration-300 pr-8 ${
                    activeIndex === index
                      ? "text-gold"
                      : "text-white group-hover:text-gold/80"
                  }`}
                >
                  {faq.question}
                </span>

                {/* Chevron Icon (Rotates when active) */}
                <span
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-500 ${
                    activeIndex === index
                      ? "border-gold bg-gold text-black rotate-180"
                      : "border-white/20 text-gold group-hover:border-gold"
                  }`}
                >
                  <i className="fas fa-chevron-down text-xs"></i>
                </span>
              </button>

              {/* Accordion Content (Answer) */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Call to Action */}
        <div className="mt-12 text-center animate-fade-up delay-200">
          <p className="text-gray-500 text-sm mb-4">
            {text.cta}
          </p>
          <a
            // Menggunakan data contactData SESUAI BAHASA
            href={`https://wa.me/${contactData[language].whatsapp.general}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-all uppercase text-xs tracking-widest font-bold"
          >
            <i className="fab fa-whatsapp"></i> {text.button}
          </a>
        </div>
      </div>
    </section>
  );
}