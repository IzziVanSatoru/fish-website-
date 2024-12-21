
# Fish World Store Website

Selamat datang di **Fish World Store**! Ini adalah website e-commerce untuk menjual berbagai produk terkait memancing, seperti pancingan, umpan, dan keranjang ikan. Website ini dibangun menggunakan Vue.js dengan TypeScript dan dilengkapi dengan animasi GSAP untuk pengalaman yang lebih menarik.

## Fitur Website

- **Halaman utama** yang menyambut pengguna dengan tampilan menarik dan produk-produk yang dapat dijelajahi.
- **Pencarian produk** untuk mencari barang dengan mudah.
- **Filter berdasarkan kategori** seperti Pancingan, Umpan, dan Keranjang.
- **Sortir produk** berdasarkan harga atau rating.
- **Efek animasi** menggunakan GSAP untuk pengalaman visual yang menarik.
- **Responsive design** yang memastikan website ini dapat digunakan dengan baik di perangkat mobile, tablet, dan desktop.

## Prasyarat

Sebelum memulai, pastikan kamu sudah menginstal hal-hal berikut:

- [Node.js](https://nodejs.org/) versi 14.x atau lebih tinggi
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/) sebagai package manager

## Instalasi

Ikuti langkah-langkah berikut untuk menjalankan website ini secara lokal:

1. **Clone repo** ini ke komputer lokal kamu:
   ```bash
   git clone https://github.com/IzziVanSatoru/fish-website-.git
   ```

2. **Masuk ke dalam folder proyek**:
   ```bash
   cd fish-website-
   ```

3. **Install dependencies** menggunakan npm atau yarn:
   - Jika menggunakan npm:
     ```bash
     npm install
     ```
   - Jika menggunakan yarn:
     ```bash
     yarn install
     ```

4. **Jalankan proyek** dengan perintah berikut:
   - Jika menggunakan npm:
     ```bash
     npm run dev
     ```
   - Jika menggunakan yarn:
     ```bash
     yarn dev
     ```

5. **Buka browser** dan akses website di:
   ```
   http://localhost:5173
   ```

## Struktur Folder

```plaintext
fish-world-store/
│
├── 📁 src/
│   ├── 📁 assets/           # Menyimpan gambar dan file statis
│   ├── 📁 components/       # Komponen-komponen Vue
│   ├── 📁 pages/            # Halaman website (Home, Cart, dll)
│   ├── 📁 store/            # Vuex store untuk manajemen state
│   └── 📁 styles/           # Gaya CSS untuk komponen
│
├── 📁 public/               # File-file statis yang dapat diakses langsung
│
├── 📄 index.html            # Template HTML utama
├── 📄 package.json          # Konfigurasi proyek dan dependencies
└── 📄 README.md             # File ini
```

## Pengembangan

Jika kamu ingin berkontribusi pada proyek ini, silakan ikuti langkah-langkah berikut:

1. Fork repository ini.
2. Buat branch baru untuk fitur yang akan dikembangkan:
   ```bash
   git checkout -b fitur-baru
   ```
3. Lakukan perubahan yang diperlukan.
4. Commit perubahan kamu:
   ```bash
   git commit -am "Deskripsi perubahan"
   ```
5. Push branch baru ke repository kamu:
   ```bash
   git push origin fitur-baru
   ```
6. Buat pull request ke repository utama.

## Lisensi

Website ini dilisensikan di bawah [MIT License](LICENSE).


Terima kasih telah mengunjungi **Fish World Store**!
