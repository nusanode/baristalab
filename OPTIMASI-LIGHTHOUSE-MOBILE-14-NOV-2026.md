# Optimasi Lighthouse Mobile — 14 November 2026

## Perubahan pada patch ini

- Kartu program di halaman utama membatasi kandidat gambar Unsplash ke 320w dan 480w (sebelumnya sampai 640w), dengan kualitas 45. Ini ditujukan untuk menghindari pengiriman kandidat 640w saat lebar tampilan kartu sekitar 378px.
- Kartu program di halaman cabang juga membatasi kandidat ke 320w dan 480w, dengan kualitas 55.
- Tidak ada perubahan pada aset/logo, video Hero, desain, route, metadata SEO, atau proses prerender.

## JavaScript tidak terpakai

Lighthouse memperkirakan sekitar 46,9 KiB JavaScript tidak digunakan pada audit tersebut. Patch ini sengaja tidak mengubah pemuatan route menjadi React.lazy/dynamic import. Proyek menggunakan SSR prerender dengan `renderToString`; pemecahan route tanpa penyesuaian SSR yang tepat berisiko membuat konten route tidak ikut ter-render pada HTML awal. Perubahan itu memerlukan pekerjaan terpisah dan validasi per-route.

## Validasi

Patch sumber telah diterapkan. Build lokal di lingkungan pengerjaan ini belum dapat diselesaikan karena instalasi dependensi tidak selesai (timeout; executable Vite tidak tersedia). Jalankan `npm.cmd ci` lalu `npm.cmd run build` di Windows pada folder proyek sebelum deploy. Setelah itu ulangi Lighthouse Mobile untuk mengukur dampak sebenarnya.
