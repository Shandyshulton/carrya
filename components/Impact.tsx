const pillars = [
  {
    icon: "fa-recycle",
    title: "Lingkungan",
    desc: "Mengurangi limbah tekstil dengan memanfaatkan ulang denim bekas menjadi produk baru yang tahan lama.",
  },
  {
    icon: "fa-people-group",
    title: "Sosial & UMKM",
    desc: "Rencana menggandeng UMKM tukang vermak sebagai mitra penjahitan, membuka peluang pendapatan tambahan.",
  },
  {
    icon: "fa-store",
    title: "Ekonomi Lokal",
    desc: "Mendukung rantai produksi lokal yang terdesentralisasi, dari pengumpulan bahan hingga penjahitan.",
  },
];

const roadmap = [
  {
    step: "01",
    title: "Pemetaan Mitra",
    desc: "Mengidentifikasi tukang vermak di sekitar area produksi yang tertarik bermitra.",
  },
  {
    step: "02",
    title: "Standar & Pelatihan",
    desc: "Menyusun panduan kualitas dan pelatihan singkat agar hasil jahitan konsisten.",
  },
  {
    step: "03",
    title: "Produksi Bersama",
    desc: "Menyuplai kain potongan & pola kepada mitra untuk dijahit menjadi totebag.",
  },
  {
    step: "04",
    title: "Pengukuran Dampak",
    desc: "Mencatat jumlah mitra, unit produksi, dan limbah yang dialihkan secara transparan.",
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="py-14 sm:py-20 bg-denim-950 text-white border-t border-denim-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 bg-amberGold/15 border border-amberGold/30 text-amberGold text-xs sm:text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Visi Dampak
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white mt-3">
            Lebih dari Sekadar Totebag
          </h2>
          <p className="text-slate-300 mt-3 text-xs sm:text-base leading-relaxed">
            CARRYA ingin memberi dampak yang lebih luas. Selain mendaur ulang
            denim bekas, kami berkomitmen membangun kemitraan dengan UMKM tukang
            vermak sebagai bagian dari rantai produksi. Inisiatif ini masih dalam
            tahap rencana, dan akan kami jalankan secara bertahap.
          </p>
        </div>

        {/* Three impact pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-denim-900 rounded-2xl border border-denim-800 p-6 space-y-3 hover:border-amberGold/40 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-amberGold/15 text-amberGold flex items-center justify-center text-xl">
                <i className={`fa-solid ${p.icon}`}></i>
              </div>
              <h3 className="font-bold text-lg text-white">{p.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership feature */}
        <div className="bg-denim-900 rounded-2xl sm:rounded-3xl border border-denim-800 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-denim-800 to-denim-950 flex flex-col justify-center">
              <i className="fa-solid fa-handshake-angle text-amberGold text-3xl sm:text-4xl mb-4"></i>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white">
                Kemitraan dengan Tukang Vermak
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-3">
                Tukang vermak punya keterampilan jahit yang persis dibutuhkan
                CARRYA. Dengan menjadikan mereka mitra penjahitan, kami berharap
                dapat membuka peluang pendapatan tambahan sekaligus menjaga
                kualitas produk. Rencana ini sedang kami rancang dan belum
                berjalan.
              </p>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10">
              <h4 className="text-xs uppercase tracking-widest text-amberGold font-bold mb-5">
                Rencana Bertahap
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {roadmap.map((r) => (
                  <div key={r.step} className="flex gap-4">
                    <span className="font-heading text-2xl font-extrabold text-amberGold/70 shrink-0">
                      {r.step}
                    </span>
                    <div>
                      <h5 className="font-bold text-white text-sm">{r.title}</h5>
                      <p className="text-slate-400 text-xs leading-relaxed mt-1">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-[11px] sm:text-xs text-slate-500 mt-6">
          <i className="fa-solid fa-circle-info mr-1.5 text-amberGold/70"></i>
          Inisiatif kemitraan UMKM masih dalam tahap perencanaan. Angka dampak
          akan dipublikasikan setelah program berjalan.
        </p>
      </div>
    </section>
  );
}
