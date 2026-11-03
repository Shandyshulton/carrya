"use client";

import { FormEvent, useState } from "react";

// Target WhatsApp Number (bisa disesuaikan)
const TARGET_PHONE = "6281212181182";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState(
    "CARRYA Tote - Crafted Edition (Rp 200.000)"
  );
  const [qty, setQty] = useState(1);
  const [address, setAddress] = useState("");

  const handleOrder = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text =
      `Halo Admin CARRYA, saya ingin memesan totebag:\n\n` +
      `*Nama:* ${name}\n` +
      `*No WA:* ${phone}\n` +
      `*Produk:* ${product}\n` +
      `*Jumlah:* ${qty} pcs\n` +
      `*Alamat/Catatan:* ${address}\n\n` +
      `Mohon diproses pesanan saya. Terima kasih!`;

    const waUrl = `https://wa.me/${TARGET_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  const inputClass =
    "w-full bg-denim-900 border border-denim-700 text-white rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-amberGold transition";
  const labelClass =
    "block text-xs font-semibold text-slate-300 mb-1.5";

  return (
    <section id="order-section" className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-denim-950 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden border border-amberGold/30">
          <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <span className="text-amberGold text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              Fast Pre-Order
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold">
              Form Pemesanan Totebag CARRYA
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Isi data di bawah ini untuk pemesanan cepat via WhatsApp resmi
              CARRYA.
            </p>
          </div>

          <form onSubmit={handleOrder} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="cust-name" className={labelClass}>
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="cust-name"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="cust-phone" className={labelClass}>
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  id="cust-phone"
                  required
                  placeholder="0812xxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="cust-product" className={labelClass}>
                  Pilihan Produk
                </label>
                <select
                  id="cust-product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className={inputClass}
                >
                  <option value="CARRYA Tote - Crafted Edition (Rp 200.000)">
                    CARRYA Tote - Crafted Edition (Rp 200.000)
                  </option>
                  <option value="CARRYA Custom Upcycled Tote">
                    CARRYA Custom Denim Tote
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="cust-qty" className={labelClass}>
                  Jumlah (Pcs)
                </label>
                <input
                  type="number"
                  id="cust-qty"
                  min={1}
                  required
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="cust-address" className={labelClass}>
                Alamat Pengiriman / Catatan Khusus
              </label>
              <textarea
                id="cust-address"
                rows={3}
                placeholder="Masukkan alamat pengiriman atau permintaan khusus..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={inputClass}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amberGold hover:bg-amber-500 text-denim-950 font-extrabold py-3.5 sm:py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              <i className="fa-brands fa-whatsapp text-xl sm:text-2xl"></i> Kirim
              Pesanan via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
