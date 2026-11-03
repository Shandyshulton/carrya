"use client";

import { selectProduct } from "@/lib/actions";
import ProductShowcase3D from "@/components/ProductShowcase3D";

const dimensions = [
  { label: "Tinggi Tas", value: "38 cm" },
  { label: "Lebar Tas", value: "35 cm" },
  { label: "Panjang Tali (Strap)", value: "28 cm" },
  { label: "Saku Depan", value: "18 x 20 cm" },
];

const features = [
  "Bahan luar 100% Upcycled Denim Jeans padat.",
  "Kantong depan dengan button snap besi & patch CARRYA.",
  "Tali bahu kuat dan nyaman tidak mudah pegal.",
];

export default function Products() {
  return (
    <section id="products" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-amberGold font-bold text-xs sm:text-sm uppercase tracking-wider">
            Koleksi Utama
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-denim-950 mt-1 sm:mt-2">
            Hasil Produk Totebag CARRYA
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-base">
            Desain <em>Crafted Edition</em> yang dirancang untuk mendukung
            produktivitas dan gaya sehari-hari.
          </p>
        </div>

        {/* Product Interactive Details */}
        <div className="bg-denim-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-denim-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Product Image Viewer */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-white p-3 sm:p-6 rounded-2xl shadow-md sm:shadow-lg border border-slate-200 text-center relative overflow-hidden">
                <span className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-amberGold text-denim-950 font-extrabold text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full uppercase z-10">
                  Best Seller
                </span>

                <div className="py-2 sm:py-4">
                  <ProductShowcase3D />
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 italic">
                  Model 3D interaktif Totebag CARRYA
                </p>
              </div>
            </div>

            {/* Product Specifications */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-amberGold uppercase tracking-widest">
                  Detail Ukuran & Spesifikasi
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-denim-950 mt-1">
                  CARRYA Tote - Crafted Edition
                </h3>
                <p className="text-amberGold font-extrabold text-xl sm:text-2xl mt-1.5 sm:mt-2">
                  Rp 200.000{" "}
                  <span className="text-xs text-slate-500 font-normal">/ pcs</span>
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Dirancang khusus untuk memuat laptop berukuran hingga 15.6 inch,
                dokumen A4, botol minum, serta pernak-pernik lainnya secara rapi.
              </p>

              {/* Measurement Grid Box */}
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-denim-200 space-y-3 sm:space-y-4">
                <h4 className="font-bold text-denim-900 text-xs sm:text-sm border-b pb-2 flex items-center gap-2">
                  <i className="fa-solid fa-ruler text-amberGold"></i> Panduan
                  Ukuran Totebag (Dimensions):
                </h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  {dimensions.map((d) => (
                    <div
                      key={d.label}
                      className="p-2.5 sm:p-3 bg-denim-50 rounded-lg"
                    >
                      <span className="text-slate-500 block text-[10px] sm:text-xs">
                        {d.label}
                      </span>
                      <strong className="text-denim-950 text-sm sm:text-base">
                        {d.value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-emerald-600 shrink-0"></i>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buy */}
              <div className="pt-2">
                <button
                  onClick={() =>
                    selectProduct("CARRYA Tote - Crafted Edition (Rp 200.000)")
                  }
                  className="w-full bg-denim-900 hover:bg-denim-800 text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <i className="fa-brands fa-whatsapp text-emerald-400 text-lg sm:text-xl"></i>{" "}
                  Order via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
