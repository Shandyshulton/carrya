import ClotheslineProcess from "@/components/ClotheslineProcess";

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-14 sm:py-20 bg-sandBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-amberGold font-bold text-xs sm:text-sm uppercase tracking-wider">
            Detail Kualitas
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-denim-950 mt-1 sm:mt-2">
            Alur Proses Produksi CARRYA
          </h2>
          <p className="text-slate-600 mt-2 sm:mt-3 text-xs sm:text-base">
            Dari denim bekas hingga totebag siap pakai — ikuti setiap tahap
            prosesnya, digantung seperti di tali jemuran.
          </p>
        </div>

        {/* Clothesline-style process slider */}
        <ClotheslineProcess />
      </div>
    </section>
  );
}
