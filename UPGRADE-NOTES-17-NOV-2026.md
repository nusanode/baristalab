# Upgrade Barista Lab Academy — 17 November 2026

## Perubahan pada source

- Memangkas blok SEO panjang di bagian About homepage menjadi ringkasan yang lebih singkat dan terstruktur.
- Mempertahankan kata kunci Jakarta, Tangerang, Bekasi, Depok, Bogor, dan menambahkan Banten.
- Mempertahankan aset logo yang sudah ada tanpa mengganti desain atau file logo.
- Mempertahankan kedua aset video Hero asli dan versi optimasinya; mekanisme pemuatan video Hero tetap menggunakan versi optimasi agar lebih ramah mobile.
- Menambahkan halaman `/kelas-brewing` dan `/kelas-basic-barista`, termasuk route React, metadata SEO, prerender, dan sitemap.
- Memperbarui visual halaman `/kelas-latte-art`, `/kursus-barista`, `/pelatihan-barista`, dan `/sertifikasi-barista` dengan identitas hitam-emas serta fotografi Unsplash.
- Memperbarui Hero halaman cabang Jakarta dan Tangerang dengan foto latar, overlay agar teks terbaca, dan CTA WhatsApp.
- Menambahkan tautan internal dari halaman kursus ke kelas Basic Barista, Latte Art, dan Manual Brewing.
- Menggunakan `srcSet`/`sizes` untuk foto Unsplash utama agar browser dapat memilih ukuran gambar yang lebih sesuai dengan layar.

## Aset yang dipertahankan

- `public/logo.webp`
- `public/logo.png`
- `public/videos/hero-barista.mp4`
- `public/videos/hero-barista-optimized.mp4`

Tidak ada desain logo yang dibuat ulang dan tidak ada aset Unsplash yang dihapus.

## Catatan verifikasi

- ZIP sumber dapat dibaca dan struktur proyek lengkap.
- Route React, metadata, prerender list, dan sitemap untuk dua halaman baru telah ditambahkan.
- Build Vite belum dapat dijalankan di lingkungan kerja ini karena instalasi dependency `npm ci` mengalami timeout dan executable Vite tidak tersedia. Jalankan `npm.cmd ci` lalu `npm.cmd run build` di Windows/VS Code untuk verifikasi build akhir.
