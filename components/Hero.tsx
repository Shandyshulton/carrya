import HeroCarousel from "@/components/HeroCarousel";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-denim-50 via-denim-50/50 to-sandBg">
      {/* Background Elements */}
      <div className="absolute top-10 right-0 -mr-20 w-64 h-64 sm:w-96 sm:h-96 bg-denim-200/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-5 w-48 h-48 sm:w-72 sm:h-72 bg-amberGold/10 rounded-full blur-2xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-denim-950 leading-tight">
              Gaya Modern Dari{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-denim-700 via-denim-800 to-amberGold">
                Recycled Denim.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              CARRYA merubah material jeans repurposed berkualitas tinggi menjadi
              totebag fungsional, stylish, dan tahan lama. Setiap detail dirancang
              dengan cermat untuk menemani aktivitas harianmu.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="bg-denim-900 hover:bg-denim-800 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-3 text-sm sm:text-base group"
              >
                Lihat 3D Model
                <i className="fa-solid fa-cube group-hover:rotate-12 transition-transform"></i>
              </a>
              <a
                href="#craftsmanship"
                className="bg-white hover:bg-denim-50 text-denim-900 font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-denim-200 shadow-sm transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <i className="fa-solid fa-diagram-project text-amberGold"></i> Alur
                Proses Produksi
              </a>
            </div>

            {/* Highlights */}
            <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-2 sm:gap-4 border-t border-denim-200/60 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <h4 className="font-bold text-lg sm:text-2xl text-denim-900">
                  100%
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  Upcycled Denim
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h4 className="font-bold text-lg sm:text-2xl text-denim-900">
                  Handcrafted
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  Jahitan Presisi
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h4 className="font-bold text-lg sm:text-2xl text-denim-900">
                  Eco-Friendly
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  Dukung Bumi
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Main Product Frame (interactive carousel) */}
              <HeroCarousel />

              {/* Floating Card Badge */}
              <div className="absolute -top-4 sm:-top-5 right-2 sm:-right-4 z-20 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-amberGold/40 flex items-center gap-3 max-w-[85%]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amberGold/20 flex items-center justify-center text-amberGold shrink-0">
                  <i className="fa-solid fa-leaf text-base sm:text-xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-denim-950">
                    Zero Waste Concept
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500">
                    Bahan denim daur ulang berkualitas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
