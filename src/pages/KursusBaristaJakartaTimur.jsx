import React from "react";

export default function KursusBaristaJakartaTimur() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-6">
        Kursus Barista Jakarta Timur
      </h1>

      <p className="mb-4">
        BaristaLab Academy menyediakan kursus barista profesional di Jakarta Timur
        untuk pemula hingga calon pemilik coffee shop.
      </p>

      <p className="mb-4">
        Materi meliputi espresso, latte art, manual brewing,
        hingga manajemen bisnis coffee shop.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Kenapa Memilih BaristaLab Academy?
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Trainer profesional</li>
        <li>Praktek langsung mesin espresso</li>
        <li>Sertifikat pelatihan</li>
        <li>Cocok untuk pemula</li>
        <li>Tempat nyaman dan full AC</li>
      </ul>

      <div className="mt-8 flex flex-col gap-4">

        <a
          href="https://wa.me/6285213541993"
          target="_blank"
          className="bg-black text-white px-6 py-3 rounded-xl text-center"
        >
          WhatsApp Cabang Jakarta
        </a>

        <a
          href="https://wa.me/6281356561721"
          target="_blank"
          className="bg-black text-white px-6 py-3 rounded-xl text-center"
        >
          WhatsApp Cabang Tangerang
        </a>

      </div>

    </div>
  );
}
