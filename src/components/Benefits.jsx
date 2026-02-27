import React from 'react';
// 1. IMPORT GAMBAR DI SINI
import certificateImg from '../images/certificate-sample.jpg'; 
// 2. IMPORT DATA DARI DATABASE
import { benefitsData, statsData } from '../database';
// 3. IMPORT HOOK BAHASA
import { useLanguage } from '../context/LanguageContext';

export default function Benefits() {
  // 4. AMBIL STATE BAHASA
  const { language } = useLanguage();

  // 5. DEFINISI TEKS STATIS
  const content = {
    id: {
      subtitle: "Mengapa Memilih Kami",
      headline: {
        t1: "Kami Tidak Sekadar Mengajar.",
        t2: "Kami ",
        highlight: "Mengubah."
      },
      cert: {
        badge: "Kredensial Terverifikasi",
        title: { t1: "Dapatkan Sertifikat yang ", highlight: "Membuka Peluang" },
        desc: "Setiap lulusan Barista Lab Academy menerima sertifikat fisik dan digital dengan Nomor Seri Unik. Sertifikat ini valid dan dapat diverifikasi oleh pemberi kerja.",
        list: [
            "Nomor Seri Unik untuk Validasi",
            "Ditandatangani oleh Master Barista & Kepala Akademi",
            "Diterima oleh 50+ Mitra Kerja"
        ]
      }
    },
    en: {
      subtitle: "Why Choose Us",
      headline: {
        t1: "We Don't Just Teach.",
        t2: "We ",
        highlight: "Transform."
      },
      cert: {
        badge: "Verified Credential",
        title: { t1: "Earn a Certificate That ", highlight: "Opens Doors" },
        desc: "Every Barista Lab Academy graduate receives a physical and digital certificate with a Unique Serial Number. This certificate is valid and verifiable by employers.",
        list: [
            "Unique Serial Number for Validation",
            "Signed by Master Baristas & Head of Academy",
            "Accepted by 50+ Hiring Partners"
        ]
      }
    }
  };

  const text = content[language];

  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- STATS BAR --- */}
        <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10 pb-16 mb-20 animate-fade-up">
          {statsData[language].map((stat, idx) => (
            <div key={idx} className="text-center px-2">
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-gold text-[10px] md:text-xs uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* --- HEADER --- */}
        <div className="text-center mb-16 max-w-2xl mx-auto animate-fade-up delay-100">
          <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4 font-medium">{text.subtitle}</p>
          <h2 className="text-3xl md:text-5xl font-display text-white leading-tight">
            {text.headline.t1}<br />
            {text.headline.t2}<span className="text-gold italic font-serif">{text.headline.highlight}</span>
          </h2>
        </div>

        {/* --- BENEFITS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefitsData[language].map((item, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-dark-charcoal border border-white/5 hover:border-gold/30 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.1)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-black border border-gold/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-colors duration-300">
                  <i className={`fas ${item.icon} text-xl text-gold group-hover:text-black transition-colors duration-300`}></i>
                </div>
                
                <h4 className="text-xl font-display text-white mb-4 group-hover:text-gold transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light border-l border-white/10 pl-4 group-hover:border-gold transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- CERTIFICATE SHOWCASE --- */}
        <div className="relative animate-fade-up delay-200">
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-br from-dark-charcoal to-black border border-white/10 p-8 md:p-12 rounded-3xl overflow-hidden relative">
                
                {/* Text Content */}
                <div className="lg:w-1/2 relative z-10 order-2 lg:order-1">
                    <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-bold uppercase tracking-widest mb-6">
                        {text.cert.badge}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display text-white mb-6">
                        {text.cert.title.t1} <span className="text-gold italic">{text.cert.title.highlight}</span>
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        {text.cert.desc}
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                        {text.cert.list.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                <i className="fas fa-check-circle text-gold"></i> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image Content (Certificate) */}
                <div className="lg:w-1/2 relative z-10 order-1 lg:order-2">
                    <div 
                        className="relative group max-w-xs mx-auto select-none" 
                        onContextMenu={(e) => e.preventDefault()}
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gold/20 rounded-lg blur-xl opacity-50 transition-opacity duration-500"></div>
                        
                        {/* Frame */}
                        <div className="relative rounded-lg overflow-hidden border-4 border-black shadow-2xl bg-white">
                             
                             {/* Gambar Sertifikat */}
                             <img 
                                src={certificateImg} 
                                alt="Barista Lab Certificate Sample" 
                                draggable="false"
                                className="w-full h-auto object-cover pointer-events-none"
                             />

                             {/* --- WATERMARK FIX --- 
                                 Perubahan: Menggunakan text-gray-900 (Hitam pudar) bukan text-white
                                 agar terlihat di atas kertas putih.
                             */}
                             <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none overflow-hidden">
                                <div className="transform -rotate-45 border-8 border-gray-900/10 p-4 rounded-xl">
                                    <p className="text-gray-900/20 text-4xl md:text-5xl font-black uppercase tracking-widest whitespace-nowrap text-center">
                                        BARISTA LAB
                                    </p>
                                    <p className="text-gray-900/15 text-lg font-bold uppercase tracking-[0.5em] whitespace-nowrap text-center mt-2">
                                        PREVIEW ONLY
                                    </p>
                                </div>
                                
                                {/* Pattern Garis Diagonal Halus (Optional texture) */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes-dark.png')] opacity-10 mix-blend-multiply"></div>
                             </div>

                             {/* Pelindung Transparan (Anti Klik Kanan/Save) */}
                             <div className="absolute inset-0 z-30 bg-transparent"></div>

                             {/* Badge Icon */}
                             <div className="absolute bottom-4 right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg border-2 border-black z-40">
                                <i className="fas fa-award text-xl text-black"></i>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Decorative BG Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none"></div>
            </div>
        </div>

      </div>
    </section>
  );
}