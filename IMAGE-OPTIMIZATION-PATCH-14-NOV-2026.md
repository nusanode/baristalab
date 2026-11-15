# Patch optimasi gambar — 14 November 2026

Patch ini dibuat di atas arsip `BaristaLab-Performance-Optimization-14-Nov-2026.zip`.

## Perubahan
- Foto kartu program Unsplash `photo-1447933601403-0c6688de566e`: fallback src diturunkan ke 480 px / quality 50; kandidat responsif menjadi 320, 480, dan 768 px / quality 50.
- Poster Hero Unsplash `photo-1495474472287-4d71bcdd2085`: quality kandidat responsif diturunkan dari 60 ke 50; ukuran kandidat tetap 480, 768, dan 1200 px agar tetap tajam pada layar besar/retina.
- Preload Hero pada prerender diselaraskan ke quality 50 agar tidak meminta varian berbeda dari srcset.
- Sertifikat WebP yang sudah berukuran 320 × 452 dikompresi ulang dengan kualitas WebP 52; desain dan dimensi tetap.

## Yang sengaja tidak diubah
- Foto yang digunakan, komposisi Hero, video desktop, logo/favicons, teks, rute, schema SEO, dan desain halaman.
- File sertifikat asli dan versi 580 px tetap disimpan sebagai aset sumber/alternatif.

## Penting saat pengujian
Laporan Lighthouse yang dikirim menunjukkan URL `w=768&q=70` untuk kedua gambar Unsplash dan file sertifikat `certificate-sample-580...webp`. Itu tidak cocok dengan source arsip ini, yang seharusnya menghasilkan kandidat Program sampai 768 px / q50, Hero q50, dan import sertifikat 320 px. Kemungkinan preview port 4179 sebelumnya menyajikan build lama atau folder proyek berbeda. Setelah mengekstrak patch ini, jalankan `npm.cmd ci`, `npm.cmd run build`, lalu preview dari folder hasil ekstraksi pada port baru (mis. 4180) untuk menghindari server lama.

Skor Lighthouse belum dapat dijamin sebelum build dan pengujian ulang pada browser/Windows.
