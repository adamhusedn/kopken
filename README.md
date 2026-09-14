# NgopsKuy Website

Website katalog dan order WhatsApp untuk **NgopsKuy**. Versi ini dibuat agar produk, kategori, dan katalog lebih mendekati referensi yang kamu berikan, tetapi desain background, font, warna, dan hiasan dibuat berbeda.

## Isi project

- `index.html` — struktur halaman website
- `styles.css` — desain, font, background, responsive layout
- `script.js` — konfigurasi toko, nomor WhatsApp, produk, harga, dan keranjang
- `assets/logo.svg` — logo NgopsKuy
- `assets/products/` — gambar produk ilustrasi SVG
- `vercel.json` — konfigurasi deploy statis ke Vercel

## Catatan aset gambar

Gambar produk di folder `assets/products` adalah ilustrasi buatan sendiri agar aman untuk hosting. Jika kamu punya izin menggunakan foto/aset asli dari brand lain, kamu bisa mengganti file SVG tersebut dengan gambar resmi.

## Cara edit nomor WhatsApp

Buka `script.js`, lalu ubah:

```js
whatsappNumber: "6281234567890"
```

Gunakan format Indonesia tanpa tanda `+`, contoh:

```js
whatsappNumber: "6281234567890"
```

## Cara edit status buka/tutup

Di `script.js`:

```js
isOpen: true
```

Ubah menjadi:

```js
isOpen: false
```

Kalau toko sedang tutup.

## Cara edit produk

Buka `script.js`, lalu edit data pada bagian:

```js
const PRODUCTS = [
  ...
]
```

Contoh format produk:

```js
{
  id: "kopi-kenangan-mantan",
  name: "Kopi Kenangan Mantan",
  category: "Resto's Picks",
  price: 22000,
  desc: "Kopi susu gula aren favorit dengan rasa creamy dan manis yang balance.",
  tag: "Favorite",
  image: "assets/products/kopi-kenangan-mantan.svg"
}
```

## Cara buka di laptop lokal

Masuk ke folder project, lalu jalankan:

```bash
python -m http.server 8080
```

Buka browser:

```text
http://localhost:8080
```

## Cara hosting ke Vercel

1. Upload semua file ke GitHub.
2. Login ke Vercel.
3. Klik **Add New Project**.
4. Pilih repository NgopsKuy.
5. Framework preset: **Other** atau **Static**.
6. Deploy.
7. Untuk domain custom, buka **Settings → Domains** di project Vercel.

## Struktur kategori saat ini

- Resto's Picks
- Coffee
- Non Coffee
- Seliter
- Roti & Snack

Harga dan menu bisa berbeda tergantung outlet/kota. Silakan sesuaikan lagi dengan data final kamu.
