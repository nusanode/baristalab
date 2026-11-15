import Icon from "../components/Icon";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";
import { Link } from "react-router-dom";
export default function KelasLatteArt() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-dark-charcoal text-white min-h-screen pt-20">
        
        {/* --- 1. HERO BANNER FOTO UTAMA ATAS --- */}
     {/* HERO BANNER */}

  <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden border-b border-white/5 bg-black">
  <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal via-black/50 to-black/70"></div>

  <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
    <span className="text-gold text-xs md:text-sm uppercase tracking-[0.25em] mb-3 font-semibold">
      Specialist Program
    </span>

    <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white max-w-4xl tracking-wide">
      Kelas <span className="text-gold italic font-serif">Latte Art</span>
    </h1>

    <p className="mt-4 text-gray-200 max-w-2xl text-sm md:text-lg">
      Kuasai teknik milk steaming, microfoam, tulip, rosetta hingga swan bersama instruktur profesional.
    </p>
  </div>
</div>
        {/* --- 2. KONTEN TEKS ARTIKEL --- */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="mb-8 text-gray-300 leading-relaxed text-lg font-light">
            Kelas Latte Art di Barista Lab Academy memfokuskan peserta pada penguasaan kontrol penuh terhadap susu (*milk handling*) guna menciptakan visual minuman berbasis espresso yang memikat dan berstandar kafe modern.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center my-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gold tracking-wide uppercase text-sm">Materi Pelatihan Kelas Latte Art</h2>
              <ul className="list-none space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <span>Teknik <strong>milk steaming</strong> untuk menghasilkan tekstur microfoam yang halus (silky dan shiny).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <span>Seni memposisikan cangkir dan menjaga kestabilan aliran susu saat menuang (*pouring physics*).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <span>Praktik intensif pembuatan pola dasar Free Pour: <strong>Love, Tulip, Rosetta, dan Swan</strong>.</span>
                </li>
              </ul>
            </div>
            
            {/* --- 3. FOTO KEDUA DI SAMPING MATERI --- */}
            <div className="bg-neutral-900 border border-white/10 rounded-lg p-8 h-64 flex items-center justify-center">
  <div className="text-center">
    <h3 className="text-gold text-xl font-bold mb-3">
      Praktik Intensif Latte Art
    </h3>
    <p className="text-gray-300">
      Milk Steaming • Microfoam • Tulip • Rosetta • Swan
    </p>
  </div>
</div>
</div>            
{/* ===== TENTANG KELAS LATTE ART ===== */}
<section className="mt-20">
  <h2 className="text-2xl md:text-3xl font-bold text-gold mb-6">
    Mengapa Memilih Kelas Latte Art Barista Lab Academy?
  </h2>

  <div className="space-y-5 text-gray-300 leading-relaxed">
    <p>
      Kelas Latte Art Barista Lab Academy dirancang untuk peserta pemula
      maupun barista profesional yang ingin meningkatkan kemampuan
      presentasi minuman berbasis espresso. Program ini berfokus pada
      penguasaan teknik milk steaming, pembentukan microfoam, serta
      pengendalian aliran susu saat proses pouring.
    </p>

    <p>
      Peserta akan belajar secara langsung menggunakan mesin espresso
      profesional dan mendapatkan bimbingan dari instruktur berpengalaman.
      Metode pembelajaran lebih banyak praktik sehingga peserta dapat
      memahami teknik latte art secara lebih cepat dan efektif.
    </p>

    <p>
      Materi pelatihan mencakup pembuatan pola dasar hingga pola lanjutan
      seperti Heart, Tulip, Rosetta dan Swan. Setelah mengikuti pelatihan,
      peserta diharapkan mampu menghasilkan tampilan minuman yang menarik
      dan memiliki standar penyajian seperti di coffee shop modern.
    </p>

    <p>
      Barista Lab Academy menyediakan fasilitas pelatihan lengkap dengan
      mesin espresso, grinder, pitcher, susu latihan serta perlengkapan
      praktik lainnya sehingga peserta dapat fokus mengembangkan
      keterampilan tanpa perlu membawa peralatan sendiri.
    </p>
  </div>
</section>

{/* ===== FAQ ===== */}
<section className="mt-20">
  <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8">
    Pertanyaan Yang Sering Diajukan
  </h2>

  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">
        Apakah kelas latte art cocok untuk pemula?
      </h3>
      <p className="text-gray-300">
        Ya. Program ini dirancang untuk pemula maupun barista yang ingin
        meningkatkan kemampuan latte art.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white mb-2">
        Apakah peserta mendapatkan sertifikat?
      </h3>
      <p className="text-gray-300">
        Ya, peserta akan mendapatkan sertifikat pelatihan setelah
        menyelesaikan program.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white mb-2">
        Apakah semua alat praktik disediakan?
      </h3>
      <p className="text-gray-300">
        Ya. Mesin espresso, grinder, pitcher, susu latihan dan peralatan
        lainnya telah disediakan selama pelatihan berlangsung.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white mb-2">
        Berapa lama durasi pelatihan?
      </h3>
      <p className="text-gray-300">
        Durasi pelatihan menyesuaikan program yang dipilih. Silakan hubungi
        admin untuk informasi jadwal terbaru.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white mb-2">
        Apakah bisa mengikuti kelas secara privat?
      </h3>
      <p className="text-gray-300">
        Ya. Tersedia pilihan kelas privat maupun kelas reguler sesuai
        kebutuhan peserta.
      </p>
    </div>
  </div>
</section>
          {/* ===== INTERNAL LINK ===== */}
<section className="mt-16 border-t border-white/10 pt-10">
  <h2 className="text-xl font-bold text-gold mb-4">
    Program Pelatihan Lainnya
  </h2>

  <div className="flex flex-col gap-3">
    <Link
      to="/kursus-barista"
      className="text-gold hover:text-white transition"
    >
      Kursus Barista Profesional
    </Link>

    <Link
      to="/kelas-brewing"
      className="text-gold hover:text-white transition"
    >
      Kelas Manual Brewing
    </Link>

    <Link
      to="/kelas-basic-barista"
      className="text-gold hover:text-white transition"
    >
      Kelas Basic Barista
    </Link>
  </div>
</section>
          <div className="mt-12 text-center md:text-left">
            <a 
              href="https://wa.me/6285213541993?text=Halo%20saya%20ingin%20daftar%20kelas%20Latte%20Art"
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gold text-black px-8 py-4 rounded-xl font-bold inline-block hover:bg-opacity-90 hover:scale-105 transform transition duration-300 shadow-lg shadow-gold/20"
            >
              Booking Jadwal Kelas Latte Art
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
    </>
  );
            }
