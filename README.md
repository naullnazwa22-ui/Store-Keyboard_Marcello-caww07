<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</p>

<h1 align="center">⌨️ Marcello Store - Mechanical Keyboard E-Commerce</h1>

<p align="center">
  <strong>Website E-Commerce Modern untuk Mechanical Keyboard dengan Fitur Keranjang & Checkout</strong><br>
  <a href="" target="_blank"><strong>🚀 Klik di sini untuk melihat Live Demo</strong></a>
</p>

---

## 📖 Deskripsi Proyek

**Marcello Store** adalah website e-commerce front-end yang dirancang khusus untuk penjualan *mechanical keyboard*. Website ini menampilkan katalog produk berkualitas dengan pengalaman pengguna (UX) yang mulus, mulai dari penjelajahan produk, manajemen keranjang belanja, hingga proses *checkout* dengan simulasi pembayaran digital.

Proyek ini dikembangkan menggunakan **HTML, CSS, dan Vanilla JavaScript** murni tanpa framework, serta memanfaatkan **LocalStorage** untuk menyimpan data keranjang secara persisten di browser pengguna.

---

## ✨ Fitur Utama

### 🏠 Halaman Utama (Storefront)
- **Hero Section** dengan banner visual yang menarik.
- **Katalog Produk Horizontal** dengan efek *smooth scroll* dan *snap*.
- **Pencarian Produk Real-time** (Live Search).
- **6 Produk Keyboard Unggulan** (RK61, Maxfit67, AK820, Keychron, Logitech, Razer).
- **Tautan Marketplace** langsung ke Shopee & Tokopedia.

### 🛒 Keranjang Belanja (Cart)
- Tambah, kurangi, dan hapus produk dari keranjang.
- Kalkulasi total harga otomatis secara *real-time*.
- Notifikasi *alert* saat produk berhasil ditambahkan.
- Data keranjang tersimpan aman di *LocalStorage*.

### 💳 Checkout & Pembayaran
- Form validasi data pembeli (Nama, Nomor HP, Alamat).
- **3 Pilihan Metode Pembayaran Digital:**
  - 💙 **DANA** (Menampilkan nomor rekening)
  - 💚 **GoPay** (Menampilkan nomor rekening)
  - 📱 **QRIS** (Menampilkan Barcode/QR Code)
- Ringkasan pesanan otomatis sebelum konfirmasi.

### 🎨 Desain & UI/UX
- **Fully Responsive:** Tampil sempurna di Desktop, Tablet, dan Smartphone.
- **Modern Aesthetics:** Palet warna elegan (Off-white, Dark Charcoal, Vibrant Orange).
- **Interactive Elements:** Efek *hover* pada kartu produk dan tombol.
- **Smooth Navigation:** *Smooth scroll* saat berpindah section.

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Fungsi |
|-----------|--------|
| **HTML5** | Membangun struktur semantik halaman web. |
| **CSS3** | Styling menggunakan Flexbox, CSS Grid, dan Custom Scrollbar. |
| **Vanilla JS** | Logika DOM manipulation, validasi form, dan routing simulasi. |
| **LocalStorage** | Database lokal browser untuk menyimpan Cart & Data Checkout. |
| **Google Fonts** | Tipografi modern menggunakan *Poppins* dan *Outfit*. |

---

## 📁 Struktur Direktori

Marcello-Store_Keyboard/
│
├── 📄 index.html              # Halaman utama etalase produk
├── 📄 cart.html               # Halaman keranjang belanja
├── 📄 checkout.html           # Halaman form checkout & pembayaran
├── 📄 README.md               # Dokumentasi proyek (file ini)
│
├── 📁 css/
│   ├── 📄 style.css           # Styling global & komponen utama
│   └── 📄 cart.css            # Styling khusus halaman keranjang
│
├── 📁 js/
│   ├── 📄 script.js           # Logika popup, search, & checkout langsung
│   ├── 📄 cart.js             # Logika manipulasi keranjang & LocalStorage
│   └── 📄 checkout.js         # Logika form checkout & kalkulasi total
│
└── 📁 img/
    ├── 📁 banner/             # Gambar hero banner
    ├── 📁 keyboard/           # Foto produk keyboard (6 item)
    ├── 📁 logo/               # Logo Shopee, Tokopedia, DANA, GoPay, QRIS
    └── 📁 payment/            # Gambar barcode QRIS