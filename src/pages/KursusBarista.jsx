import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function KursusBarista() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">
          Kursus Barista Profesional Bersertifikat
        </h1>

        <p>
          Belajar espresso, latte art, manual brew dan bisnis coffee
          shop bersama Barista Lab Academy.
        </p>
      </main>

      <Footer />
    </>
  );
}
