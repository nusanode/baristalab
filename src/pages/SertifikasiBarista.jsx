import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getUnsplashSrcSet } from "../utils/responsiveImage";

export default function SertifikasiBarista() {
  const heroImage = "https://images.unsplash.com/photo-1521017432531-fbd92d768814";
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#090907] text-white">
        <section className="relative isolate flex min-h-[480px] items-end overflow-hidden pt-28 md:min-h-[570px]">
          <img src={heroImage} srcSet={getUnsplashSrcSet(heroImage, [480, 768, 1200, 1920], 65)} sizes="100vw" alt="" width="1920" height="1080" loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-16 md:px-8 md:pb-20">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[.3em] text-gold">Professional Development</p>
            <h1 className="max-w-4xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">Sertifikasi Barista <span className="font-serif italic text-gold">Profesional</span></h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75">Program pelatihan untuk mengembangkan kemampuan teknik kopi, espresso, latte art, manual brewing, dan standar pelayanan coffee shop.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.28em] text-gold">Program sertifikasi</p>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">Bangun dasar keterampilan dan kesiapan kerja</h2>
              <p className="mt-5 text-sm leading-7 text-white/70">Barista Lab Academy menyediakan program sertifikasi barista profesional untuk pemula, calon barista, pekerja coffee shop, hingga pelaku usaha kopi. Program dirancang untuk meningkatkan kemampuan peserta dalam menguasai teknik dasar kopi dan standar pelayanan industri coffee shop.</p>
            </div>
            <div className="border border-white/10 bg-[#14120d] p-7 md:p-9">
              <h2 className="text-xl font-semibold text-gold">Materi Sertifikasi Barista</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {["Pengenalan jenis kopi dan karakteristiknya", "Teknik grinding dan kalibrasi espresso", "Ekstraksi espresso profesional", "Milk steaming dan latte art", "Manual brewing", "Hygiene dan standar operasional barista", "Pelayanan pelanggan coffee shop"].map((item) => <li key={item} className="flex gap-3 border-b border-white/10 pb-3 text-sm leading-6 text-white/75"><span className="text-gold">✦</span>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <article className="border border-white/10 p-7">
              <h2 className="text-xl font-semibold text-gold">Manfaat Sertifikat Barista</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/75">
                {["Meningkatkan kepercayaan diri sebagai barista", "Menambah nilai profesional di industri kopi", "Membantu persiapan kerja di coffee shop", "Mendukung pengembangan bisnis kopi"].map((item) => <li key={item}> <span className="mr-2 text-gold">✓</span>{item}</li>)}
              </ul>
            </article>
            <article className="border border-white/10 p-7">
              <h2 className="text-xl font-semibold text-gold">Siapa yang Cocok Mengikuti?</h2>
              <p className="mt-5 text-sm leading-7 text-white/75">Program ini cocok untuk pemula yang ingin memulai karir barista, barista aktif yang ingin meningkatkan skill, dan pemilik coffee shop yang ingin memahami standar operasional kopi.</p>
              <h3 className="mt-7 text-lg font-semibold text-white">Lokasi Pelatihan</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">Pelatihan tersedia di cabang Barista Lab Academy Jakarta Timur dan Tangerang dengan fasilitas praktik mesin espresso standar industri.</p>
            </article>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-10 sm:flex-row">
            <a href="https://wa.me/6285213541993" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 flex-1 items-center justify-center bg-gold px-6 text-xs font-bold uppercase tracking-wider text-black">WhatsApp Jakarta ↗</a>
            <a href="https://wa.me/6281356561721" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 flex-1 items-center justify-center border border-white/25 px-6 text-xs font-bold uppercase tracking-wider text-white transition hover:border-gold hover:text-gold">WhatsApp Tangerang ↗</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
