# Barista Lab Academy — Upgrade Pass 3

## Perubahan
- Menyederhanakan dan merapikan navigasi desktop/mobile.
- Mengganti navigasi logo dengan React Router Link.
- Menambahkan perilaku menu mobile: overlay, penguncian scroll, tombol Escape, dan inert saat tertutup.
- Membuat komponen landing page cabang yang reusable dengan hero editorial, pilihan program, benefit, lokasi, dan CTA WhatsApp.
- Menggunakan komponen baru untuk halaman Kursus Barista Jakarta dan Tangerang.
- Menambahkan title, meta description, Open Graph, canonical, dan Course JSON-LD khusus halaman cabang.
- Memastikan tombol CTA memiliki pesan WhatsApp yang relevan dengan lokasi.

## Perlu verifikasi sebelum production
- `npm ci` belum berhasil diselesaikan di lingkungan pengerjaan karena timeout jaringan.
- Jalankan `npm ci` lalu `npm run build` di komputer lokal atau pipeline Vercel.
- Periksa ulang alamat studio Tangerang dan titik peta sebelum publikasi. Halaman saat ini meminta calon pengunjung mengonfirmasi titik studio kepada admin.
- Verifikasi nomor WhatsApp dan link Google Maps masing-masing cabang.
