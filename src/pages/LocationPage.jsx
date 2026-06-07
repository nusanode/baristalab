import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LocationPage({ city, keyword }) {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">
          {keyword}
        </h1>

        <p className="mb-4">
          Barista Lab Academy menyediakan {keyword.toLowerCase()}
          untuk pemula, calon barista profesional,
          dan pemilik coffee shop.
        </p>

        <p className="mb-4">
          Materi meliputi espresso, latte art,
          manual brewing, customer service,
          hingga bisnis coffee shop modern.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Mengapa Memilih Barista Lab?
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Trainer profesional</li>
          <li>Sertifikat pelatihan</li>
          <li>Praktek langsung</li>
          <li>Cocok untuk pemula</li>
          <li>Konsultasi bisnis coffee shop</li>
        </ul>
      </main>

      <Footer />
    </>
  );
}
