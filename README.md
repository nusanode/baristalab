# Barista Lab Academy — Upgrade Performance & Accessibility

Proyek React + Vite untuk website Barista Lab Academy.

## Menjalankan di Windows

1. Ekstrak ZIP ke folder kerja baru.
2. Buka folder `baristalab-main` melalui VS Code.
3. Buka terminal PowerShell pada folder proyek.
4. Jalankan build:

   ```powershell
   npm.cmd run build
   ```

5. Jika muncul pesan bahwa Vite atau dependensi tidak ditemukan, jalankan:

   ```powershell
   npm.cmd ci
   npm.cmd run build
   ```

6. Jalankan pemeriksaan kode:

   ```powershell
   npm.cmd run lint
   ```

7. Setelah build berhasil, jalankan preview:

   ```powershell
   npm.cmd run preview -- --host 127.0.0.1 --port 4180
   ```

8. Buka `http://127.0.0.1:4180/`.

Laporan Lighthouse HTML lama yang menunjuk ke `localhost:4173` tidak disertakan karena berasal dari build sebelumnya. Folder `dist` dan `dist-ssr` tidak disertakan dalam paket ini agar hasil build dibuat ulang dari source terbaru, bukan memakai output lama. Folder `node_modules` disertakan untuk lingkungan Windows yang digunakan pada proyek ini; bila dependensi tidak cocok atau tidak lengkap, gunakan `npm.cmd ci`.

## Catatan

- Logo asli Barista Lab Academy dipertahankan. File sumber asli tidak dihapus atau ditimpa.
- Video Hero asli tetap disimpan. Website menggunakan salinan MP4 yang lebih ringan untuk desktop; pada mobile, poster responsif digunakan agar video besar tidak otomatis diunduh.
- Gambar sumber asli tetap dipertahankan; versi WebP yang lebih kecil ditambahkan untuk pemuatan halaman.
- Setelah build, uji semua 12 URL prerender dan jalankan Lighthouse pada port preview yang sama.
