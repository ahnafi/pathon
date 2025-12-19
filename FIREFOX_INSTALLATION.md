# Instalasi Pathon di Firefox dan Zen Browser

Pathon sekarang kompatibel dengan Firefox dan Zen Browser (berbasis Firefox). Ikuti panduan di bawah untuk memasang extension.

## Instalasi di Firefox

### Metode 1: Mode Pengembang (Rekomendasi untuk Testing)

1. Buka Firefox dan navigasikan ke `about:debugging#/runtime/this-firefox`
2. Klik "Load Temporary Add-on"
3. Pilih file `manifest.json` dari folder `/home/sulthon/code/pathon`
4. Extension akan dimuat sementara (berlaku hingga Firefox ditutup)

**Catatan**: Untuk instalasi permanen, extension perlu ditandatangani oleh Mozilla atau di-package sebagai XPI.

### Metode 2: Instalasi Permanen (XPI Package)

Untuk mendistribusikan extension:

1. Buat file ZIP yang berisi semua file (manifest.json, background.js, script.js, main.html, icons/)
2. Ganti nama file ZIP menjadi `pathon.xpi`
3. Pengguna dapat membuka file XPI di Firefox untuk memasang extension

Atau kirimkan ke [Mozilla Add-ons](https://addons.mozilla.org/) untuk review dan distribusi resmi.

## Instalasi di Zen Browser

Zen Browser berbasis Firefox, jadi prosesnya serupa:

1. Buka Zen Browser dan navigasikan ke `about:debugging#/runtime/this-firefox`
2. Klik "Load Temporary Add-on"
3. Pilih file `manifest.json` dari folder `/home/sulthon/code/pathon`
4. Extension akan mulai berfungsi

## Kompatibilitas

Extension ini telah dioptimalkan untuk:
- ✅ Firefox 109+ (Manifest V3)
- ✅ Zen Browser (berbasis Firefox)
- ✅ Chrome/Chromium (backward compatible)

## Perubahan yang Dilakukan untuk Kompatibilitas

1. **API Kompatibilitas**: Menggunakan polyfill yang mendukung both `browser` (Firefox) dan `chrome` (Chrome) APIs
2. **Manifest V3**: Mengubah dari `service_worker` (Chrome-only) ke `scripts` (supported by Firefox)
3. **Browser Specific Settings**: Menambahkan konfigurasi `gecko` untuk Firefox/Zen

## Fitur

Sama seperti versi Chrome:
- **Pengaturan Otomatis**: File unduhan otomatis diarahkan ke folder yang sesuai
- **Mapping Berdasarkan Ekstensi**: Mendukung berbagai jenis file
- **Popup Informasi**: Klik ikon extension untuk melihat mapping folder

## Troubleshooting

### Extension tidak berfungsi di Firefox

1. Pastikan Firefox versi 109 atau lebih baru
2. Periksa console browser (`F12` → Console tab)
3. Pastikan permission `downloads` sudah diberikan ke extension

### Download tidak masuk ke folder yang benar

1. Periksa bahwa folder target sudah ada di direktori Downloads
2. Verifikasi extension sedang aktif di halaman `about:addons`
