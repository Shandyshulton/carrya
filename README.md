# CARRYA — Upcycled Denim Totebag (Next.js)

Konversi dari landing page HTML tunggal ke aplikasi **Next.js 14** (App Router) dengan **TypeScript** dan **Tailwind CSS**.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (palette `denim`, `amberGold`, `sandBg` dari desain asli)
- `next/font/google` untuk font Syne & Plus Jakarta Sans
- `next/image` untuk optimasi gambar (Unsplash)
- FontAwesome via CDN

## Struktur

```
app/
  layout.tsx       # root layout, font, metadata, FontAwesome
  page.tsx         # merakit seluruh section
  globals.css      # style kustom (glassmorphism, scrollbar, dsb)
components/
  Navbar.tsx       # navigasi + menu mobile (client)
  Hero.tsx
  About.tsx
  Craftsmanship.tsx
  Products.tsx     # ilustrasi SVG + tombol pilih produk (client)
  Exhibition.tsx   # galeri BIFEST 2025 (client)
  OrderForm.tsx    # form pesanan WhatsApp (client, controlled)
  Footer.tsx
lib/
  actions.ts       # helper scroll & pilih produk
```

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000

Untuk build produksi:

```bash
npm run build
npm start
```

## Catatan

- Nomor WhatsApp tujuan ada di `components/OrderForm.tsx` (`TARGET_PHONE`).
- Foto exhibition menggunakan gambar fallback Unsplash. Untuk memakai foto asli,
  letakkan file di folder `public/` lalu ganti `src` di `components/Exhibition.tsx`.
