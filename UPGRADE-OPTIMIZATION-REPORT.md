# Catatan Upgrade — 14 November 2026

## Optimasi performa

- Poster Hero Unsplash memakai `srcSet` dan `sizes` agar browser memilih resolusi yang sesuai.
- Video Hero hanya dimuat pada layar desktop dan saat pengguna tidak meminta reduced motion.
- Video Hero di desktop menggunakan `hero-barista-optimized.mp4` (2.84 MB) dibanding sumber asli (4.95 MB); file video asli tetap tersedia.
- Gambar kursus, galeri, dan About memakai kandidat responsif Unsplash.
- Gambar sertifikat menggunakan WebP 580 × 820 (sekitar 57 KB), sesuai kebutuhan tampilan sekitar 290 × 410 pada skala 2x.
- Logo Navbar menggunakan WebP 58 × 79; logo Footer menggunakan WebP 70 × 95.
- Foto Latte Art yang sebelumnya PNG sekitar 2.30 MB kini memiliki versi WebP sekitar 103 KB; PNG sumber tetap dipertahankan.
- Favicon ICO dibuat ulang dari logo resmi dengan ukuran 16, 32, dan 48 px; favicon lama yang besar diganti dengan versi ringan. Semua ikon PWA tetap memakai logo yang sama.
- Preload lama 1600 px dihapus dan diganti preload responsif khusus halaman utama (480/768/1200/1600 px), karena foto yang sama juga menjadi poster Hero; browser memilih kandidat sesuai viewport.

## Perbaikan aksesibilitas

- Tombol carousel, indikator slide, tombol WhatsApp mengambang, tombol pencarian, tombol tutup modal, dan tautan sosial memiliki nama aksesibel.
- Area sentuh indikator carousel, tombol navigasi, filter kursus, dan tombol kontrol ditingkatkan.
- Struktur heading diperbaiki: teks statistik tidak lagi menjadi heading, judul kartu memakai tingkat yang sesuai, dan watermark Footer tidak menjadi H1.
- FAQ memiliki `aria-expanded`, `aria-controls`, label panel, dan heading semantik.
- Link sosial dan QR WhatsApp memiliki nama aksesibel.
- Teks kecil yang gagal pada pemeriksaan kontras di laporan sebelumnya dibuat lebih terang.
- Animasi carousel dan video Hero menghormati preferensi `prefers-reduced-motion`.

## Validasi yang dilakukan pada paket source

- 34 file JavaScript/JSX berhasil diparse tanpa kesalahan sintaks.
- `scripts/prerender.mjs` lolos pemeriksaan sintaks Node.js.
- ESLint untuk seluruh source dan konfigurasi proyek lolos tanpa error atau warning.
- Helper responsive image diuji menghasilkan kandidat 480/768/1200 px.
- Referensi aset lokal diperiksa; tidak ditemukan file gambar/video lokal yang hilang.
- Dimensi dan keberadaan aset WebP, MP4, favicon, dan logo diperiksa.

## Validasi yang masih harus dilakukan di Windows

Build produksi Vite belum dapat dijalankan di lingkungan audit ini karena paket native `esbuild` dan `sharp` yang disertakan di ZIP ditujukan untuk Windows, sedangkan lingkungan audit berjalan di Linux. Jalankan `npm.cmd run build` pada Windows setelah mengekstrak paket. Setelah build sukses, uji Lighthouse Mobile dan Desktop pada URL preview yang sama.

Skor Lighthouse 100/100 untuk semua kategori tidak dapat dijamin sebelum pengujian nyata pada perangkat dan kondisi jaringan yang digunakan.
