# Barista Lab Academy — Optimasi Performa 14 November 2026

## Perubahan yang diterapkan

1. Menghapus stylesheet Font Awesome dari CDN (`all.min.css`) setelah seluruh pemanggilan ikon pada komponen React diganti dengan komponen SVG lokal `src/components/Icon.jsx`.
   - Ikon sosial Instagram, LinkedIn, YouTube, TikTok, dan WhatsApp tetap disediakan.
   - Tidak ada dependensi ikon eksternal baru.
2. Mengoptimalkan gambar sertifikat untuk ukuran tampil sekitar 320 px:
   - Sebelumnya: 580 × 820, sekitar 56 KiB.
   - Versi baru: 320 × 452, sekitar 18 KiB.
   - Foto/desain sertifikat tidak diganti; hanya ukuran dan kompresi WebP.
3. Mengurangi kandidat ukuran gambar Unsplash untuk kartu program menjadi 320/480/640 px dan kualitas 60 agar browser tidak mengambil gambar terlalu besar pada layar mobile.
4. Menyesuaikan kandidat gambar Hero dan preload prerender agar memakai ukuran 480/768/1200 px dan kualitas 60.
5. Video Hero tetap dipertahankan dan masih hanya dimuat pada desktop yang mengizinkan motion; tidak mengubah desain, logo, rute, schema, maupun daftar 12 halaman prerender.

## Validasi yang dilakukan

- Semua 35 file JavaScript/JSX berhasil diparse.
- Semua import relatif pada source berhasil di-resolve.
- Pencarian source memastikan tidak ada lagi stylesheet Font Awesome CDN atau tag ikon `<i>` Font Awesome.

## Langkah setelah ekstraksi di Windows

Jalankan di PowerShell pada folder `baristalab-main`:

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd run preview -- --host 127.0.0.1 --port 4179
```

Lalu buka `http://127.0.0.1:4179/`.

Catatan: build production penuh belum dapat dijalankan pada lingkungan pemeriksaan ini karena ZIP asal berisi dependensi native Windows, sedangkan lingkungan pemeriksaan Linux membutuhkan binary Rollup/esbuild Linux yang berbeda. Source sudah lolos pemeriksaan sintaks dan import, tetapi hasil build dan skor Lighthouse final tetap perlu diverifikasi di Windows setelah `npm.cmd ci`.
