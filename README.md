# Alur Register / Login — Satu Kenangan (Kopi Kenangan)

Situs statis yang menampilkan **visualisasi alur autentikasi "Login via WhatsApp" (reverse OTP)**
aplikasi Satu Kenangan / Kopi Kenangan, hasil analisis file bundle front-end publik.

Halaman utama (`index.html`) merender **flowchart** dan **sequence diagram** Mermaid secara
otomatis, dilengkapi tabel endpoint, contoh body/response, dan panduan pakai.

## File

- **`index.html`** — halaman utama (self-contained: CSS inline, Mermaid dari CDN).
- **`vercel.json`** — konfigurasi deploy.
- **`docs/auth-flow/`** — salinan halaman + versi Markdown (`alur-register-login-satu-kenangan.md`).

## Kesimpulan

Tidak ada endpoint `register` terpisah. Register & login **digabung** dalam alur
**reverse OTP via WhatsApp**: aplikasi memanggil `whatsapp_reply_otp`, lalu user
**mengirim** pesan berisi kode unik dari WhatsApp-nya sendiri ke nomor resmi.
Server memverifikasi berdasarkan **nomor pengirim**. Jika nomor belum terdaftar,
pesan pertama itu otomatis membuatkan akun.

## Jalankan lokal

```bash
npx serve .
# atau
python3 -m http.server 8080
```

## Deploy ke Vercel

Situs statis, tanpa build step. Vercel otomatis mendeteksi dan men-deploy `index.html`
di root sebagai halaman utama.

> Dibuat untuk keperluan edukasi & penggunaan dengan akun sendiri.
