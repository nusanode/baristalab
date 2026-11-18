import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getUnsplashSrcSet } from "../utils/responsiveImage";

export default function PelatihanBarista() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#090907] text-white">
        <section className="relative isolate flex min-h-[480px] items-end overflow-hidden pt-28 md:min-h-[570px]">
          <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd" srcSet={getUnsplashSrcSet("https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd", [480, 768, 1200, 1920], 65)} sizes="100vw" alt="" width="1920" height="1080" loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-16 md:px-8 md:pb-20">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[.3em] text-gold">Professional Coffee Training</p>
            <h1 className="max-w-4xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">Pelatihan Barista <span className="font-serif italic text-gold">Profesional</span> Jakarta & Tangerang</h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75">Program praktik untuk pemula, calon barista profesional, karyawan coffee shop, dan calon pemilik usaha kopi.</p>
            <a href="https://wa.me/6285213541993" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-14 items-center justify-center bg-gold px-8 text-xs font-bold uppercase tracking-wider text-black">Konsultasi Pelatihan ↗</a>
          </div>
        </section>
        <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">

          <h2 className="text-2xl font-semibold mb-6 text-gold">
            Gambaran Program Pelatihan
          </h2>

          <p className="mb-4">
            Pelatihan Barista Barista Lab Academy merupakan program belajar
            kopi yang dirancang untuk pemula, calon barista profesional,
            karyawan coffee shop, hingga calon pemilik usaha kopi.
          </p>

          <p className="mb-4">
            Materi pelatihan menggabungkan teori dan praktik langsung
            menggunakan mesin espresso standar industri sehingga peserta
            memperoleh pengalaman yang sesuai dengan kebutuhan dunia kerja.
          </p>

          <p className="mb-4">
            Program ini cocok bagi siapa saja yang ingin membangun karir
            di industri kopi maupun membuka bisnis coffee shop sendiri.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Materi Pelatihan Barista
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Pengenalan kopi dan industri coffee shop</li>
            <li>Dasar-dasar profesi barista</li>
            <li>Pengenalan grinder dan mesin espresso</li>
            <li>Kalibrasi grinder</li>
            <li>Teknik ekstraksi espresso</li>
            <li>Milk steaming dan milk texturing</li>
            <li>Latte art dasar</li>
            <li>Manual brewing V60</li>
            <li>Customer service coffee shop</li>
            <li>Manajemen operasional coffee shop</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Program Pelatihan
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Barista Basic Class</li>
            <li>Espresso & Latte Art Class</li>
            <li>Manual Brew Class</li>
            <li>Barista Professional Class</li>
            <li>Barista Pro Business Class</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Keunggulan Pelatihan Barista Lab Academy
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Trainer profesional dan berpengalaman</li>
            <li>Praktik menggunakan mesin espresso komersial</li>
            <li>Sertifikat pelatihan resmi</li>
            <li>Kelas intensif dengan peserta terbatas</li>
            <li>Cocok untuk pemula tanpa pengalaman</li>
            <li>Konsultasi bisnis coffee shop</li>
            <li>Dukungan alumni dan peluang kerja</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Peluang Karir Setelah Mengikuti Pelatihan
          </h2>

          <p className="mb-4">
            Lulusan pelatihan barista memiliki peluang bekerja sebagai
            barista profesional, head barista, trainer kopi, coffee consultant,
            quality control, maupun membuka usaha coffee shop sendiri.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Area Peserta Pelatihan
          </h2>

          <p className="mb-4">
            Peserta pelatihan barista berasal dari Jakarta, Tangerang,
            Bekasi, Depok, Bogor, BSD, Gading Serpong, Cikarang, Banten, dan
            berbagai wilayah sekitarnya.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Sertifikat Pelatihan Barista
          </h2>

          <p className="mb-4">
            Setelah menyelesaikan program pelatihan, peserta akan memperoleh
            sertifikat pelatihan Barista Lab Academy sebagai bukti kompetensi
            dan pengalaman belajar di bidang kopi.
          </p>

          <div className="mt-8 flex flex-col gap-4">

            <a
              href="https://wa.me/6285213541993"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-3 rounded-xl text-center font-semibold"
            >
              Daftar Pelatihan Barista Jakarta
            </a>

            <a
              href="https://wa.me/6281356561721"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-3 rounded-xl text-center font-semibold"
            >
              Daftar Pelatihan Barista Tangerang
            </a>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
      }
