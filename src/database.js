// src/database.js

import yulianaImg from "./images/testimonials/yuliana.jpeg";
import josvianImg from "./images/testimonials/josvian.jpeg";
import rinandhiImg from "./images/testimonials/rinandhi.jpeg";
import enricoImg from "./images/testimonials/enrico.jpeg";
import natashaImg from "./images/testimonials/natasha.jpeg";
  
// --- 1. DATA NAVIGASI ---
export const navItems = {
  id: [
    { label: "Beranda", id: "home" },
    { label: "Program", id: "program" },
    { label: "Profil", id: "about" },
    { label: "Testimoni", id: "testimonials" },
  ],
  en: [
    { label: "Home", id: "home" },
    { label: "Programs", id: "program" },
    { label: "Profile", id: "about" },
    { label: "Testimonials", id: "testimonials" },
  ],
};

// --- 2. DATA BENEFITS ---
export const statsData = {
  id: [
    { number: "1.500+", label: "Lulusan" },
    { number: "98%", label: "Kepuasan" },
    { number: "50+", label: "Mitra Kerja" },
  ],
  en: [
    { number: "1.500+", label: "Graduates" },
    { number: "98%", label: "Satisfaction" },
    { number: "50+", label: "Hiring Partners" },
  ],
};

// --- 3. DATA BENEFITS ---
export const benefitsData = {
  id: [
    {
      icon: "fa-certificate",
      title: "Diakui Industri",
      desc: "Sertifikat resmi yang diakui oleh kedai kopi papan atas dan jaringan hotel bintang lima.",
    },
    {
      icon: "fa-users",
      title: "Mentor Ahli",
      desc: "Diajar langsung oleh juara barista nasional dan praktisi bisnis kopi berpengalaman.",
    },
    {
      icon: "fa-mug-hot",
      title: "Alat 1-on-1",
      desc: "Jaminan satu peserta satu mesin. Maksimalkan waktu latihan tanpa perlu antre alat.",
    },
    {
      icon: "fa-handshake",
      title: "Dukungan Karir",
      desc: "Akses eksklusif ke jaringan alumni dan lowongan kerja dari 50+ mitra kedai kopi kami.",
    },
  ],
  en: [
    {
      icon: "fa-certificate",
      title: "Industry Recognized",
      desc: "Official certificate recognized by top-tier coffee shops and five-star hotel chains.",
    },
    {
      icon: "fa-users",
      title: "Expert Mentors",
      desc: "Taught directly by national barista champions and experienced coffee business practitioners.",
    },
    {
      icon: "fa-mug-hot",
      title: "1-on-1 Equipment",
      desc: "One participant, one machine guarantee. Maximize practice time without queuing for equipment.",
    },
    {
      icon: "fa-handshake",
      title: "Career Support",
      desc: "Exclusive access to alumni networks and job openings from our 50+ coffee shop partners.",
    },
  ],
};

// --- 4. DATA ABOUT  ---
export const aboutFeatures = {
  id: [
    {
      id: "01",
      title: "Satu Orang, Satu Mesin",
      desc: "Kami menjamin eksklusivitas. Tanpa antre, tanpa berbagi. Fokus penuh pada latihan Anda.",
    },
    {
      id: "02",
      title: "Keahlian Bersertifikat",
      desc: "Kurikulum berstandar industri dan sertifikasi nasional yang diakui secara resmi.",
    },
  ],
  en: [
    {
      id: "01",
      title: "One Person, One Machine",
      desc: "We guarantee exclusivity. No queuing, no sharing. Full focus on your practice.",
    },
    {
      id: "02",
      title: "Certified Mastery",
      desc: "Industry-standardized curriculum and officially recognized national certification.",
    },
  ],
};

// --- 5. DATA KURSUS (COURSE) ---
export const coursesData = {
  id: {
    business: {
      title: "Barista Pro Business",
      price: "IDR 4.450.000",
      duration: "4 Hari",
      level: "Advanced",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
      desc: "Program masterclass untuk calon owner. Fokus pada manajemen operasional kedai kopi, perhitungan profit (HPP), hingga strategi rekrutmen tim.",
      syllabus: [
        "Intro Kopi: Sensory, Cupping, Roasting & Alat",
        "Manual Brew: V60, Vietnam Drip, dll",
        "Espresso: Mesin, Ekstraksi, Kalibrasi & Maintenance",
        "Latte Art: Steaming, Foam, Pola (Heart, Tulip, Rosetta)",
        "Manajemen Kafe: Konsep, Branding, SOP & Operasional Bar",
        "Marketing, Promosi & Manajemen Karyawan",
        "Kreasi Menu Kafe & Signature Menu",
      ],
    },
    pro: {
      title: "Barista Professional",
      price: "IDR 3.450.000",
      duration: "3 Hari",
      level: "Advanced",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      desc: "Transisi intensif dari pemula ke pro. Dirancang untuk siap kerja dengan standar kecepatan industri, workflow bar yang efisien, dan hospitality.",
      syllabus: [
        "Intro Kopi: Sensory, Cupping, Roasting & Alat",
        "Seleksi Biji Kopi & Ukuran Gilingan (Grind Size)",
        "Manual Brew: V60, Vietnam Drip, dll",
        "Espresso: Mesin, Ekstraksi, Kalibrasi & Maintenance",
        "Latte Art: Steaming, Foam, Pola (Heart, Tulip, Rosetta)",
      ],
    },
    espresso: {
      title: "Espresso Calibration",
        price: "IDR 1.450.000", 
      duration: "2 Hari",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      desc: "Kelas pendalaman teknik kalibrasi rasa (dial-in). Memahami rasio, yield, dan variabel ekstraksi untuk mencapai sweet spot espresso.",
      syllabus: [
        "Teori Ekstraksi & Variabel",
        "Memahami Brew Ratio",
        "Teknik Dial-in (Kalibrasi Rasa)",
        "Analisis Sensorik (Tasting)",
        "Troubleshooting Espresso",
      ],
    },
    latte: {
      title: "Espresso & Latte Art",
      price: "IDR 2.450.000",
      duration: "2 Hari",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
      desc: "Kombinasi teknik ekstraksi espresso yang presisi dan seni melukis susu (Free Pour). Fokus pada konsistensi rasa dan visual.",
      syllabus: [
        "Ekstraksi Espresso Sempurna",
        "Sains Texturing Susu (Microfoam)",
        "Kontrol Tangan & Laju Tuang",
        "Pola: Heart, Tulip, Rosetta",
        "Presentasi Cangkir & Etika",
      ],
    },
    manual: {
      title: "Manual Brew Class",
      price: "IDR 2.450.000",
      duration: "2 Hari",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
      desc: "Eksplorasi spektrum rasa kopi (Artisan). Memahami variabel seduh manual seperti suhu, rasio, dan ukuran gilingan.",
      syllabus: [
        "Profiling Biji Single Origin",
        "Metode Seduh: V60, Kalita, Aeropress",
        "Immersion vs Pour Over",
        "Kemampuan Sensorik & Cupping",
        "Rasio Seduh & Desain Resep",
      ],
    },
    basic: {
      title: "Barista Basic Class",
      price: "IDR 1.950.000",
      duration: "1 Hari",
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      desc: "Langkah pertama masuk ke dunia kopi spesialti. Cocok untuk hobiis atau pemula yang ingin memahami fundamental kopi yang benar.",
      syllabus: [
        "Intro Kopi: Sensory, Cupping, Roasting & Alat",
        "Manual Brew: V60, Vietnam Drip, dll",
        "Espresso: Mesin, Ekstraksi, Kalibrasi & Maintenance",
        "Latte Art: Steaming, Foam, Pola Dasar",
      ],
    },
    latte_art_only: {
      title: "Latte Art Focus",
      price: "IDR 1.450.000",
      duration: "1 Hari",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      desc: "Kelas khusus bagi yang sudah bisa membuat espresso dan ingin fokus penuh mempertajam teknik gambar (Artistic Skill).",
      syllabus: [
        "Teknik Frothing Lanjutan",
        "Simetri & Kontras",
        "Pola: Swan & Slow Pour",
        "Aturan Latte Art Throwdown",
        "Kecepatan & Konsistensi",
      ],
    },
  },
  en: {
    business: {
      title: "Barista Pro Business",
      price: "IDR 4.450.000",
      duration: "4 Days",
      level: "Advanced",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
      desc: "Masterclass program for aspiring owners. Focuses on coffee shop operational management, profit calculation (COGS), and team recruitment strategies.",
      syllabus: [
        "Intro to Coffee: Sensory, Cupping, Roasting & Tools",
        "Manual Brew: V60, Vietnam Drip, etc",
        "Espresso: Machine, Extraction, Calibration & Maintenance",
        "Latte Art: Steaming, Foam, Patterns (Heart, Tulip, Rosetta)",
        "Cafe Management: Concept, Branding, SOP & Bar Ops",
        "Marketing, Promotion & Employee Management",
        "Cafe Menu Creation & Signature Menu",
      ],
    },
    pro: {
      title: "Barista Professional",
      price: "IDR 3.450.000",
      duration: "3 Days",
      level: "Advanced",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      desc: "Intensive transition from beginner to pro. Designed to be work-ready with industry speed standards, efficient bar workflow, and hospitality.",
      syllabus: [
        "Intro to Coffee: Sensory, Cupping, Roasting & Tools",
        "Beans Selection & Grind Size",
        "Manual Brew: V60, Vietnam Drip, etc",
        "Espresso: Machine, Extraction, Calibration & Maintenance",
        "Latte Art: Steaming, Foam, Patterns (Heart, Tulip, Rosetta)",
      ],
    },
    espresso: {
      title: "Espresso Calibration",
      price: "IDR 1.450.000", 
      duration: "2 Days",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      desc: "Deep focus on espresso extraction variables. Learn how to find the best recipe (dial-in) and train your sensory palate.",
      syllabus: [
        "Extraction Theory & Variables",
        "Understanding Brew Ratio",
        "Dial-in Technique",
        "Sensory Analysis (Tasting)",
        "Troubleshooting Espresso",
      ],
    },
    latte: {
      title: "Espresso & Latte Art",
      price: "IDR 2.450.000",
      duration: "2 Days",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
      desc: "Combination of precise espresso extraction techniques and milk painting art (Free Pour). Focuses on taste consistency and visuals.",
      syllabus: [
        "Perfect Espresso Extraction",
        "Milk Texturing Science",
        "Hand Control & Flow Rate",
        "Pattern: Heart, Tulip, Rosetta",
        "Cup Presentation & Etiquette",
      ],
    },
    manual: {
      title: "Manual Brew Class",
      price: "IDR 2.450.000",
      duration: "2 Days",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
      desc: "Exploration of the coffee flavor spectrum (Artisan). Understanding manual brewing variables such as temperature, ratio, and grind size.",
      syllabus: [
        "Single Origin Beans Profiling",
        "Brewing Methods: V60, Kalita, Aeropress",
        "Immersion vs Pour Over",
        "Sensory Skills & Cupping",
        "Brew Ratio & Recipe Design",
      ],
    },
    basic: {
      title: "Barista Basic Class",
      price: "IDR 1.950.000",
      duration: "1 Day",
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      desc: "The first step into the world of specialty coffee. Suitable for hobbyists or beginners who want to understand the correct coffee fundamentals.",
      syllabus: [
        "Intro to Coffee: Sensory, Cupping, Roasting & Tools",
        "Manual Brew: V60, Vietnam Drip, etc",
        "Espresso: Machine, Extraction, Calibration & Maintenance",
        "Latte Art: Steaming, Foam, Basic Patterns",
      ],
    },
    latte_art_only: {
      title: "Latte Art Focus",
      price: "IDR 1.450.000",
      duration: "1 Day",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      desc: "Special class for those who can already make espresso and want to fully focus on sharpening their drawing techniques (Artistic Skill).",
      syllabus: [
        "Advanced Frothing Technique",
        "Symmetry & Contrast",
        "Pattern: Swan & Slow Pour",
        "Latte Art Throwdown Rules",
        "Speed & Consistency",
      ],
    },
  },
};
// --- 6. DATA GALLERY ---
export const galleryImages = [
  // 1. Latte Art
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80",

  // 2. Barista Pouring
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",

  // 3. Espresso Machine Portafilter
  "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?auto=format&fit=crop&w=600&q=80",

  // 4. Coffee Beans
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",

  // 5. Manual Brew V60/Pour Over
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80",

  // 6. Coffee Shop Atmosphere
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
];

// --- 7. DATA TESTIMONIALS ---
export const testimonialsData = {
  id: [
    {
      id: 1,
      name: "Yuliana Pratiwi",
      role: "Alumni Barista Lab",
      workplace: "Professional Barista",
      image: yulianaImg,
      quote:
        "Tempat yang bagus untuk belajar tentang kopi, dan orang-orangnya juga baik. Terima kasih untuk ilmu dan pelayanannya. Semoga sukses selalu.",
      rating: 5,
    },
    {
      id: 2,
      name: "Josvian Salim",
      role: "Alumni Barista Lab",
      workplace: "Entrepreneur",
      image: josvianImg,
      quote:
        "Mantap 👍, teori dan praktek semuanya diajarin, trainer berpengalaman. Bisa lgsg on hand megang alat, coba terus ampe bisa, puas banget training disini. Terima kasih atas kesempatannya 🙏",
      rating: 5,
    },
    {
      id: 3,
      name: "Rinandhi Vian",
      role: "Alumni Barista Lab",
      workplace: "Coffee Enthusiast",
      image: rinandhiImg,
      quote:
        "Mengikuti kelas kopi ini adalah pengalaman yang luar biasa. Pelatihnya ramah, terampil, dan sangat mendukung. Fasilitasnya disiapkan dengan baik dan nyaman, membuat proses belajar menjadi menyenangkan dan efektif.",
      rating: 5,
    },
    {
      id: 4,
      name: "Enrico Frassino",
      role: "Alumni Barista Lab",
      workplace: "Coffee Shop Owner",
      image: enricoImg,
      quote:
        "Kalau mau belajar tentang barista dan manajemennya disini sangat rekomendasi. Karyawan ramah, trainernya asik berwawasan yang luas lah tentang dunia perkopian. Untuk harga paling worth it lah setelah nyari-nyari di sekitaran Jabodetabek.",
      rating: 5,
    },
    {
      id: 5,
      name: "Natasha Sylviani",
      role: "Alumni Barista Lab",
      workplace: "Home Brewer",
      image: natashaImg,
      quote:
        "Saya dari yang cuman minum kopi di café sudah bisa mengerti teori-teori dan praktik kopi dengan lancar berkat pembelajaran di barista lab dimana yang mengajari memberikan cara dan arahan yang mudah dimengerti dan menjadi new experience bagi Saya.",
      rating: 5,
    },
  ],
  en: [
    {
      id: 1,
      name: "Yuliana Pratiwi",
      role: "Barista Lab Graduate",
      workplace: "Professional Barista",
      image: yulianaImg,
      quote:
        "A good place to learn about coffee, and good people too. Thank you for the knowledge and service. Wishing you continued success.",
      rating: 5,
    },
    {
      id: 2,
      name: "Josvian Salim",
      role: "Barista Lab Graduate",
      workplace: "Entrepreneur",
      image: josvianImg,
      quote:
        "Awesome 👍, both theory and practice are taught, and the trainers are experienced. You get hands-on experience with the equipment, trying until you get it right. Very satisfied training here. Thank you for the opportunity 🙏",
      rating: 5,
    },
    {
      id: 3,
      name: "Rinandhi Vian",
      role: "Barista Lab Graduate",
      workplace: "Coffee Enthusiast",
      image: rinandhiImg,
      quote:
        "Joining this coffee class was an amazing experience. The trainer was friendly, skilled, and very supportive. The facilities were well-prepared and comfortable, making the learning process enjoyable and effective.",
      rating: 5,
    },
    {
      id: 4,
      name: "Enrico Frassino",
      role: "Barista Lab Graduate",
      workplace: "Coffee Shop Owner",
      image: enricoImg,
      quote:
        "If you want to learn about barista skills and management, I highly recommend this place. The staff is friendly, the trainers are fun and have broad knowledge about the coffee world. The price is the most worth it after searching around Greater Jakarta.",
      rating: 5,
    },
    {
      id: 5,
      name: "Natasha Sylviani",
      role: "Barista Lab Graduate",
      workplace: "Home Brewer",
      image: natashaImg,
      quote:
        "From just drinking coffee in cafes, I can now understand coffee theories and practices fluently thanks to learning at Barista Lab. The instructors provide methods and directions that are easy to understand, making it a new experience for me.",
      rating: 5,
    },
  ],
};
// --- 8. PARTNERS ---
export const partnersData = [
  "Starbucks",
  "Excelso",
  "Fore Coffee",
  "Tanamera",
  "Anomali",
  "Kopi Kenangan",
];

// --- 9. DATA FAQ ---
export const faqData = {
  id: [
    {
      id: 1,
      question: "Bisakah pemula tanpa pengalaman bergabung?",
      answer:
        "Tentu saja! Kurikulum kami dirancang dari dasar (Basic hingga Pro). Sebagian besar alumni kami memulai tanpa latar belakang kopi dan sekarang bekerja sebagai barista profesional.",
    },
    {
      id: 2,
      question: "Apakah saya mendapatkan sertifikat resmi?",
      answer:
        "Ya, setiap lulusan menerima sertifikat fisik dan digital dengan Nomor Seri Unik. Sertifikat ini valid dan diakui oleh mitra kerja kami serta industri perhotelan nasional.",
    },
    {
      id: 3,
      question: "Berapa lama durasi kursusnya?",
      answer:
        "Durasi bervariasi tergantung program. Mulai dari 1 hari (Kelas Dasar) hingga 4 hari intensif (Bisnis Pro). Silakan cek detail durasi pada setiap kartu di bagian Program.",
    },
    {
      id: 4,
      question: "Apakah alat dan bahan disediakan selama kursus?",
      answer:
        "Semuanya sudah termasuk (All-inclusive). Mesin espresso komersial, grinder, susu segar, dan biji kopi premium disediakan sepenuhnya oleh kami. Anda hanya perlu membawa semangat belajar.",
    },
    {
      id: 5,
      question:
        "Bagaimana jika saya berhalangan hadir pada jadwal yang ditentukan?",
      answer:
        "Kami menyediakan opsi Reschedule satu kali, dengan pemberitahuan minimal 3 hari sebelum kelas dimulai. Silakan hubungi admin kami segera jika ada perubahan jadwal.",
    },
  ],
  en: [
    {
      id: 1,
      question: "Can beginners with no experience join?",
      answer:
        "Absolutely! Our curriculum is designed from the ground up (Basic to Pro). Most of our alumni started with zero coffee background and are now working as professional baristas.",
    },
    {
      id: 2,
      question: "Do I receive an official certificate?",
      answer:
        "Yes, every graduate receives both a physical and digital certificate with a Unique Serial Number. This certificate is valid and recognized by our hiring partners and the national hospitality industry.",
    },
    {
      id: 3,
      question: "How long is the course duration?",
      answer:
        "Durations vary depending on the program. They range from 1 day (Basic Class) to 4 intensive days (Business Pro). Please check the duration details on each card in the Programs section.",
    },
    {
      id: 4,
      question: "Are tools and materials provided during the course?",
      answer:
        "Everything is all-inclusive. Commercial espresso machines, grinders, fresh milk, and premium coffee beans are fully provided by us. You only need to bring your enthusiasm to learn.",
    },
    {
      id: 5,
      question: "What if I am unable to attend on the scheduled date?",
      answer:
        "We provide a Reschedule option once, with a minimum notice of 3 days before the class starts. Please contact our admin immediately if there is a change in your schedule.",
    },
  ],
};

// --- 10. KONTAK & SOCIAL (FAB & FOOTER) ---
export const contactData = {
  id: {
    whatsapp: {
      jakarta: "6285213541993",
      tangerang: "6281356561721",
      general: "6285213541993",
    },
    email: {
      support: "admin@baristalab.id",
      partnership: "admin@baristalab.id",
    },
    // UBAH STRUKTUR: Sekarang berisi objek { id, link }
    socials: [
      { id: "instagram", link: "https://www.instagram.com/baristalabjakarta.id/" },
      { id: "linkedin-in", link: "#" }, // Link placeholder
      { id: "youtube", link: "#" },     // Link placeholder
      { id: "tiktok", link: "https://www.tiktok.com/@baristalab.id" },
    ],
    addresses: {
      jakarta: {
        title: "Jakarta HQ",
        text: "Jl. Madrasah II No.1A, Duren Sawit, Jakarta Timur",
        zip: "Jakarta Timur, 13440",
        // TAMBAH LINK MAPS
        mapLink: "https://maps.app.goo.gl/WFVcwu185iuZZcdp7",
      },
      tangerang: {
        title: "Tangerang Hub",
        text: "Jl. Kav. Perkebunan Raya No.139, Cibodas, Banten",
        zip: "Cibodas, Banten",
        // TAMBAH LINK MAPS
        mapLink: "https://maps.app.goo.gl/ZtByeSPviSn4f1cj9",
      },
    },
  },
  en: {
    whatsapp: {
      jakarta: "6285213541993",
      tangerang: "6281356561721",
      general: "6285213541993",
    },
    email: {
      support: "baristalabjakarta@gmail.com",
      partnership: "baristalabjakarta@gmail.com",
    },
    // UBAH STRUKTUR: Sekarang berisi objek { id, link }
    socials: [
      { id: "instagram", link: "https://www.instagram.com/baristalabjakarta.id/" },
      { id: "tiktok", link: "https://www.tiktok.com/@baristalab.id" },
    ],
    addresses: {
      jakarta: {
        title: "Jakarta HQ",
        text: "Jl. Madrasah II No.1A, Duren Sawit, Jakarta Timur",
        zip: "East Jakarta, 13440",
        // TAMBAH LINK MAPS
        mapLink: "https://maps.app.goo.gl/WFVcwu185iuZZcdp7",
      },
      tangerang: {
        title: "Tangerang Hub",
        text: "Jl. Kav. Perkebunan Raya No.139, Cibodas, Banten",
        zip: "Cibodas, Banten",
        // TAMBAH LINK MAPS
        mapLink: "https://maps.app.goo.gl/ZtByeSPviSn4f1cj9",
      },
    },
  },
};

// --- 11. DATA HERO ---
export const heroData = {
  id: {
    videoId: "aTC_RNYtEb0",
    fallbackImage:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80",
    tagline: "Seni Menyeduh Kopi",
    headline: {
      main: "Kuasai",
      highlight: "Cangkir Sempurna",
    },
    description:
      "Akademi barista terdepan. Dari teknik fundamental hingga manajemen bisnis, kami membentuk pengrajin kopi masa depan.",
    cta: {
      primary: "Lihat Kursus",
      secondary: "Konsultasi",
    },
  },
  en: {
    videoId: "aTC_RNYtEb0",
    fallbackImage:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80",
    tagline: "The Art of Brewing",
    headline: {
      main: "Master The",
      highlight: "Perfect Cup",
    },
    description:
      "The premier barista academy. From fundamental techniques to business management, we shape the coffee artisans of the future.",
    cta: {
      primary: "Explore Courses",
      secondary: "Consult",
    },
  },
};