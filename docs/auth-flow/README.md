# Alur Register / Login — Satu Kenangan (Kopi Kenangan)

Halaman web interaktif yang menjelaskan alur autentikasi **Login via WhatsApp (reverse OTP)**
aplikasi **Satu Kenangan / Kopi Kenangan**, hasil analisis statis file bundle front-end publik:

- `api-iqBu4Ynb.js` — kumpulan fungsi API client
- `view.Landing-DRUkapcY.js` — halaman Landing yang menjalankan alur login/register
- `satu_kenangan-BiKgLHwO.js` — bundle inti (Vue + Vue Router + objek `share`)

## Isi

- **`index.html`** — halaman web statis (diagram Mermaid dirender otomatis: flowchart + sequence).
- **`alur-register-login-satu-kenangan.md`** — versi Markdown lengkap dengan diagram Mermaid.
- **`vercel.json`** — konfigurasi deploy.

## Kesimpulan

Tidak ada endpoint `register` terpisah. Register & login **digabung** dalam alur
**reverse OTP via WhatsApp**: aplikasi memanggil `whatsapp_reply_otp`, lalu user
**mengirim** pesan berisi kode unik dari WhatsApp-nya sendiri ke nomor resmi.
Server memverifikasi berdasarkan **nomor pengirim**. Jika nomor belum terdaftar,
pesan pertama itu otomatis membuatkan akun.

## Jalankan lokal

Cukup buka `index.html` di browser (butuh koneksi internet untuk memuat Mermaid dari CDN),
atau jalankan server statis sederhana:

```bash
npx serve .
# atau
python3 -m http.server 3000
```

## Deploy ke Vercel

Situs ini murni statis — tanpa build step.

- **Via dashboard:** Import repo GitHub ini di [vercel.com/new](https://vercel.com/new). Vercel otomatis mendeteksi sebagai static site. Klik Deploy.
- **Via CLI:**
  ```bash
  npm i -g vercel
  vercel
  ```

> Dibuat untuk keperluan edukasi & penggunaan dengan akun sendiri.
