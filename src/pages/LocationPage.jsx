import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { locationData } from "../data/locationData";

export default function LocationPage() {

  const location = useLocation();

  const slug = location.pathname.replace("/", "");

  const data = locationData[slug];

  if (!data) {
    return <h1>Halaman tidak ditemukan</h1>;
  }

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-16">

        <h1 className="text-4xl font-bold mb-6">
          {data.h1}
        </h1>

        <p className="mb-4">
          {data.description}
        </p>

        <p className="mb-4">
          Barista Lab Academy melayani peserta dari {data.location}
          dan sekitarnya dengan program pelatihan yang dirancang sesuai
          kebutuhan industri coffee shop modern.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Materi Pelatihan Barista
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Espresso Extraction</li>
          <li>Latte Art</li>
          <li>Manual Brew</li>
          <li>Customer Service</li>
          <li>Manajemen Coffee Shop</li>
        </ul>

      </main>

      <FAQ />
      <Footer />
    </>
  );
}
