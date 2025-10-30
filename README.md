# PATHON

Ekstensi browser Chrome yang mengatur path unduhan berdasarkan jenis file, seperti download manager sederhana.

## CREATOR
```
Name: Sulthon
```

## Tentang

Pathon adalah ekstensi Chrome yang secara otomatis mengarahkan file unduhan ke folder tertentu berdasarkan ekstensinya. Ini membantu menjaga folder Download tetap terorganisir tanpa perlu memindahkan file secara manual.

## Fitur

- **Pengaturan Otomatis**: File unduhan otomatis diarahkan ke folder yang sesuai.
- **Mapping Berdasarkan Ekstensi**: Mendukung berbagai jenis file seperti video, gambar, dokumen, audio, arsip, dan eksekutabel.
- **Popup Informasi**: Klik ikon ekstensi untuk melihat mapping folder yang tersedia.

## Instalasi

1. Unduh atau clone repositori ini.
2. Buka Chrome dan navigasi ke `chrome://extensions/`.
3. Aktifkan "Developer mode" di pojok kanan atas.
4. Klik "Load unpacked" dan pilih folder `/home/sulthon/code/pathon`.
5. Ekstensi akan muncul di daftar ekstensi dan siap digunakan.

## Penggunaan

Setelah diinstal, ekstensi akan bekerja secara otomatis. Saat Anda mengunduh file, ekstensi akan mengubah path unduhan berdasarkan ekstensi file.

### Mapping Folder

File akan diarahkan ke folder berikut berdasarkan ekstensi:

- **Videos**: mp4, mkv, avi, mov, wmv, flv, webm, m4v, 3gp → `Download/videos/`
- **Images**: jpg, jpeg, png, gif, bmp, tiff, svg, webp → `Download/images/`
- **Documents**: pdf, doc, docx, txt, xls, xlsx, ppt, pptx, rtf, odt → `Download/documents/`
- **Audio**: mp3, wav, flac, aac, ogg, wma → `Download/audio/`
- **Archives**: zip, rar, 7z, tar, gz, bz2 → `Download/archives/`
- **Executables**: exe, msi, dmg, pkg → `Download/executables/`
- **Lainnya**: Tetap di folder default `Download/`

Klik ikon ekstensi di toolbar untuk melihat daftar mapping ini.

## Kontribusi

Jika Anda ingin menambahkan mapping baru atau memperbaiki bug, silakan buat pull request atau issue di repositori ini.

## Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file LICENSE untuk detail lebih lanjut.