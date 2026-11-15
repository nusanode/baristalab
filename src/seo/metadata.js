export const SITE_URL = "https://www.baristalab.co.id";

export const pageSEO = {
  "/": {
    title: "Barista Lab Academy | Kursus Barista Profesional Jakarta & Tangerang",
    description: "Kursus barista profesional di Jakarta dan Tangerang. Belajar espresso, latte art, manual brew, dan bisnis coffee shop dengan praktik langsung.",
  },
  "/kursus-barista": {
    title: "Kursus Barista Profesional | Barista Lab Academy",
    description: "Pilih program kursus barista dari basic hingga profesional. Praktik espresso, grinder, milk steaming, latte art, manual brew, dan operasional coffee shop.",
  },
  "/kelas-latte-art": {
    title: "Kelas Latte Art Jakarta & Tangerang | Barista Lab Academy",
    description: "Pelajari teknik steaming susu, microfoam, dan pouring latte art dari dasar hingga pola lanjutan bersama Barista Lab Academy.",
  },
  "/lokasi": {
    title: "Lokasi Barista Lab Academy Jakarta & Tangerang",
    description: "Temukan studio pelatihan Barista Lab Academy di Duren Sawit, Jakarta Timur dan Cibodas, Tangerang.",
  },
  "/pelatihan-barista": {
    title: "Pelatihan Barista untuk Individu & Bisnis | Barista Lab Academy",
    description: "Pelatihan barista dengan praktik langsung untuk calon barista, tim coffee shop, dan calon pemilik usaha kopi.",
  },
  "/sertifikasi-barista": {
    title: "Program Sertifikasi Barista | Barista Lab Academy",
    description: "Informasi program pelatihan dan sertifikat Barista Lab Academy di Jakarta dan Tangerang.",
  },
  "/kursus-barista-jakarta": {
    title: "Kursus Barista Jakarta | Barista Lab Academy",
    description: "Ikuti kursus barista di studio Jakarta Timur. Pelajari espresso, latte art, manual brew, dan keterampilan kerja barista melalui praktik langsung.",
  },
  "/kursus-barista-jakarta-timur": {
    title: "Kursus Barista Jakarta Timur, Duren Sawit | Barista Lab Academy",
    description: "Pelatihan barista di Duren Sawit, Jakarta Timur untuk pemula, calon barista profesional, dan calon pemilik coffee shop.",
  },
  "/kursus-barista-tangerang": {
    title: "Kursus Barista Tangerang | Barista Lab Academy",
    description: "Kursus barista di Tangerang dengan praktik espresso, grinder, milk steaming, latte art, dan manual brew di studio Barista Lab Academy.",
  },
  "/kursus-barista-bekasi": {
    title: "Kursus Barista untuk Peserta Bekasi | Barista Lab Academy",
    description: "Informasi kelas barista untuk peserta dari Bekasi dan sekitarnya dengan pilihan studio pelatihan di Jakarta Timur dan Tangerang.",
  },
  "/kursus-barista-depok": {
    title: "Kursus Barista untuk Peserta Depok | Barista Lab Academy",
    description: "Informasi kelas barista untuk peserta dari Depok dan sekitarnya dengan pilihan studio pelatihan di Jakarta Timur dan Tangerang.",
  },
  "/kursus-barista-bogor": {
    title: "Kursus Barista untuk Peserta Bogor | Barista Lab Academy",
    description: "Informasi kelas barista untuk peserta dari Bogor dan sekitarnya dengan pilihan studio pelatihan di Jakarta Timur dan Tangerang.",
  },
};


export function buildStructuredData(pathname) {
  const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const seo = pageSEO[path] || {
    title: "Barista Lab Academy | Kursus Barista Jakarta & Tangerang",
    description: "Program kursus dan pelatihan barista di Barista Lab Academy Jakarta dan Tangerang.",
  };
  const canonicalURL = `${SITE_URL}${path}`;
  const organization = {
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: "Barista Lab Academy",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.webp`,
    telephone: "+6285213541993",
    description: "Akademi pelatihan barista dengan program espresso, latte art, manual brew, dan coffee business di Jakarta dan Tangerang.",
    sameAs: ["https://www.instagram.com/baristalabtangerang.id/", "https://www.instagram.com/baristalabjakarta.id/"],
  };
  const branches = [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#jakarta-studio`,
      name: "Barista Lab Academy Jakarta",
      url: `${SITE_URL}/kursus-barista-jakarta`,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      telephone: "+6285213541993",
      address: { "@type": "PostalAddress", streetAddress: "Jl. Madrasah II No.1A, Duren Sawit", addressLocality: "Jakarta Timur", addressRegion: "DKI Jakarta", postalCode: "13440", addressCountry: "ID" },
      areaServed: ["Jakarta", "Jakarta Timur", "Jakarta Selatan", "Jakarta Barat", "Jakarta Pusat", "Jakarta Utara"],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#tangerang-studio`,
      name: "Barista Lab Academy Tangerang",
      url: `${SITE_URL}/kursus-barista-tangerang`,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      telephone: "+6281356561721",
      address: { "@type": "PostalAddress", streetAddress: "Jl. Kav. Perkebunan Raya No.139, Panunggangan Barat, Cibodas", addressLocality: "Kota Tangerang", addressRegion: "Banten", addressCountry: "ID" },
      areaServed: ["Kota Tangerang", "Tangerang Selatan", "BSD", "Gading Serpong", "Karawaci"],
    },
  ];
  const graph = [organization, ...branches, {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: "Barista Lab Academy",
    inLanguage: "id-ID",
    publisher: { "@id": `${SITE_URL}/#organization` },
  }];
  const courseRoutes = ["/kursus-barista", "/kelas-latte-art", "/pelatihan-barista", "/sertifikasi-barista"];
  if (courseRoutes.includes(path) || path.startsWith("/kursus-barista-")) {
    graph.push({
      "@type": "Course",
      "@id": `${canonicalURL}#course`,
      name: seo.title.split("|")[0].trim(),
      description: seo.description,
      url: canonicalURL,
      inLanguage: "id-ID",
      provider: { "@id": `${SITE_URL}/#organization` },
      courseMode: "onsite",
    });
  }
  if (path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${canonicalURL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: seo.title.split("|")[0].trim(), item: canonicalURL },
      ],
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

