import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 bg-white border-y border-denim-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Logo Box Display */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="border border-slate-200 rounded-2xl shadow-sm w-full max-w-md relative overflow-hidden group">
              <Image
                src="/carrya-logo.png"
                alt="CARRYA - Crafted Denim Goods"
                width={640}
                height={640}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="w-full h-auto object-cover transform-gpu group-hover:scale-[1.03] transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Text Story */}
          <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 text-center md:text-left">
            <span className="text-amberGold font-bold text-xs sm:text-sm uppercase tracking-wider">
              Filosofi Brand
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-denim-950">
              Solusi Bergaya Yang Ramah Lingkungan
            </h2>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-base">
              <strong className="text-denim-900">CARRYA</strong> lahir dari
              komitmen untuk mengurangi limbah tekstil industri fashion. Kami
              memanfaatkan ulang (upcycle) celana dan pakaian jeans vintage pilihan
              untuk dirancang kembali menjadi produk totebag eksklusif dengan daya
              tahan ekstra.
            </p>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-base">
              Dilengkapi fitur saku depan (<em>front flap pocket</em>) berlogo
              kancing khas CARRYA, totebag ini fleksibel digunakan untuk aktivitas
              perkuliahan, kerja, maupun bersantai akhir pekan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
