import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fab from "../components/Fab";
import LocationPage from "./LocationPage"; // Panggil hub lokasi yang sudah kita buat

export default function KelasLatteArt() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const toggleFab = () => setIsFabOpen(!isFabOpen);

  useEffect(() => {
    // 1. OPTIMASI META SPESIFIK LATTE ART
    document.title = "Kursus Latte Art Profesional & Basic | Barista Lab Academy";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Daftar kursus latte art di Jakarta & Tangerang. Pelatihan intensif milk steaming, frothing, teknik pouring pattern heart, tulip, rosetta. Kelas 100% praktik!");
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Kursus Latte Art Profesional & Basic | Barista Lab Academy");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://baristalab.co.id");

    // 2. SCHEMA MARKUP GOOGLE UNTUK KURSUS SPESIFIK
    const scriptId = "schema-latte-art-course";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Kelas Pelatihan Latte Art Profesional",
        "description": "Kursus intensif menguasai teknik pembuatan gambar di atas kopi (Latte Art) dari basic frothing hingga advanced pattern.",
        "provider": { "@type": "EducationalOrganization", "name": "Barista Lab Academy", "url": "https://baristalab.co.id" }
      });
      document.head.appendChild(script);
    }
    window.scrollTo(0, 0);
    return () => { const s = document.getElementById(scriptId); if (s) s.remove(); };
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-dark-charcoal text-white min-h-screen pt-24">
        <div className="max-w-5xl mx-auto px-4 py-10">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center md:text-left">
            Kursus & Kelas Latte Art Profesional Jakarta - Tangerang
          </h1>
          
          <p className="mb-6 text-gray-300 leading-relaxed text-lg">
            Membuat <em>Latte Art</em> yang indah bukan sekadar menuangkan susu, melainkan kombinasi keahlian motorik, kontrol suhu, dan pemahaman sains tentang susu (*milk science*). Kelas Latte Art di <strong>Barista Lab Academy</strong> dirancang khusus untuk membantu barista maupun pencinta kopi menguasai teknik menggambar di atas kopi secara konsisten.
          </p>

          {/* MATERI UTAMA / SILABUS */}
          <h2 className="text-2xl font-semibold mt-10 mb-6 text-gold">Silabus Kelas Latte Art (Basic to Advanced)</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Sesi 1 */}
            <div className="bg-neutral-900 border border-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gold mb-2">Sesi 1: Milk Science & Frothing</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                <li>Pemilihan jenis susu komersial terbaik untuk <em>microfoam</em> yang stabil.</li>
                <li>Teknik *stretching* dan *rolling* susu menggunakan steam wand mesin komersial.</li>
                <li>Manajemen suhu ideal susu agar rasa manis alami (*lactose*) tetap terjaga.</li>
              </ul>
            </div>

            {/* Sesi 2 */}
            <div className="bg-neutral-900 border border-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gold mb-2">Sesi 2: Pouring Foundation</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                <li>Teknik memegang *milk jug* dan menjaga stabilitas posisi cangkir.</li>
                <li>Memahami konsep *canvas creation* (membuat dasar crema espresso yang bersih).</li>
                <li>Mengatur jarak tuangan (*height control*) dan laju kecepatan aliran susu (*flow rate*).</li>
              </ul>
            </div>

            {/* Sesi 3 */}
            <div className="bg-neutral-900 border border-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gold mb-2">Sesi 3: Basic Pattern (Free Pour)</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                <li>Praktik intensif membuat pola **Heart** (Hati) dengan simetris.</li>
                <li>Teknik goyangan (*wobbling*) dasar untuk membentuk pola **Tulip**.</li>
                <li>Teknik memotong pola gambar (*cut-through*) agar hasil akhir terlihat tajam.</li>
              </ul>
            </div>

            {/* Sesi 4 */}
            <div className="bg-neutral-900 border border-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gold mb-2">Sesi 4: Advanced Pattern & Speed</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                <li>Teknik pembuatan pola **Rosetta** dengan daun yang rapi dan rapat.</li>
                <li>Kombinasi pola (*multi-pattern*) untuk meningkatkan nilai visual kopi di bar.</li>
                <li>Simulasi kecepatan pembuatan menu latte art komersial sesuai standar pesanan kafe.</li>
              </ul>
            </div>
          </div>

          {/* FASILITAS KELAS */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">Fasilitas & Benefit Peserta Kelas</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
            <li><strong>Susu & Kopi Unlimited:</strong> Anda dibebaskan melakukan praktik tuang tanpa batasan bahan baku selama jam kelas berlangsung.</li>
            <li><strong>Pendampingan Face-to-Face:</strong> Koreksi langsung dari instruktur berpengalaman untuk memperbaiki sudut tuangan tangan Anda secara presisi.</li>
            <li>Sertifikat Kelulusan Resmi Kelas Latte Art dari Barista Lab Academy.</li>
          </ul>

          <div className="mt-10 bg-neutral-950 p-6 rounded-xl border border-gray-800 text-center md:text-left">
            <p className="text-sm text-gray-400 mb-4">
              *Kelas ini dibuka untuk umum (pemula maupun barista aktif yang ingin memantapkan teknik visual bar mereka).
            </p>
            <a href="https://wa.me." target="_blank" rel="noopener noreferrer" className="bg-gold text-black px-8 py-4 rounded-xl font-bold inline-block hover:bg-opacity-90 transition">
              Amankan Slot Kelas Latte Art Sekarang
            </a>
          </div>

        </div>
      </main>

      {/* HUB INTERNAL LINKING UTK BOT GOOGLE */}
      <LocationPage />

      <Footer onConsultClick={toggleFab} />
      <Fab isOpen={isFabOpen} toggleOpen={toggleFab} />
    </>
  );
}
