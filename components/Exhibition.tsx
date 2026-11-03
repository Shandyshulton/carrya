import Image from "next/image";
import TiktokEmbed from "@/components/TiktokEmbed";

const featured = {
  img: "/bifest-1.jpeg",
  alt: "Booth CARRYA di BIFEST 2025",
  category: "Catatan Event",
  date: "12 Oktober 2025",
  readTime: "4 menit baca",
  title: "CARRYA di BIFEST 2025",
  excerpt:
    "CARRYA membuka booth pada pameran BIFEST 2025. Selama acara, kami memperkenalkan totebag denim upcycle ke pengunjung, menjelaskan proses produksinya, dan menerima masukan langsung lewat sesi coba produk. Beberapa pengunjung juga melakukan pre-order di lokasi.",
};

const articles = [
  {
    img: "/bifest-2.jpeg",
    alt: "Pengunjung mencoba totebag CARRYA",
    category: "Di Balik Booth",
    date: "12 Oktober 2025",
    readTime: "3 menit baca",
    title: "Masukan Pengunjung soal Bahan dan Strap",
    excerpt:
      "Pengunjung dapat memeriksa langsung ketebalan kain denim dan mencoba kenyamanan tali bahu. Masukan yang kami terima dicatat sebagai bahan evaluasi produk.",
  },
  {
    img: "/bifest-3.jpeg",
    alt: "Presentasi produk CARRYA di booth",
    category: "Pre-Order",
    date: "13 Oktober 2025",
    readTime: "2 menit baca",
    title: "Pre-Order Crafted Edition Selama Pameran",
    excerpt:
      "Selama BIFEST 2025, CARRYA membuka pre-order untuk seri Crafted Edition. Pengunjung juga bisa memberi masukan lewat QR code yang tersedia di meja registrasi.",
  },
];

export default function Exhibition() {
  return (
    <section
      id="exhibition"
      className="py-14 sm:py-20 bg-sandBg border-t border-denim-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-amberGold font-bold text-xs sm:text-sm uppercase tracking-wider">
            Blog & Aktivitas
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-denim-950 mt-1">
            Catatan dari BIFEST 2025
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-2">
            Dokumentasi kegiatan CARRYA selama mengikuti pameran BIFEST 2025.
          </p>
        </div>

        {/* Featured article */}
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-denim-100 mb-8 sm:mb-12 group">
          <div className="relative h-56 sm:h-80 lg:h-auto lg:min-h-[360px] overflow-hidden">
            <Image
              src={featured.img}
              alt={featured.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition duration-500"
              priority
            />
            <span className="absolute top-4 left-4 bg-amberGold text-denim-950 text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Featured
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-500 mb-3">
              <span className="text-amberGold font-bold uppercase tracking-wider">
                {featured.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="flex items-center gap-1">
                <i className="fa-regular fa-calendar"></i> {featured.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="flex items-center gap-1">
                <i className="fa-regular fa-clock"></i> {featured.readTime}
              </span>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-denim-950 leading-snug">
              {featured.title}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed mt-3 sm:mt-4">
              {featured.excerpt}
            </p>

            <div className="mt-5 sm:mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-denim-900 text-amberGold flex items-center justify-center font-heading font-extrabold text-sm">
                  C
                </div>
                <div className="leading-tight">
                  <p className="text-xs sm:text-sm font-bold text-denim-950">
                    Tim CARRYA
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-400">
                    Official Report
                  </p>
                </div>
              </div>

              <a
                href="#order-section"
                className="inline-flex items-center gap-2 text-denim-900 font-bold text-xs sm:text-sm hover:text-amberGold transition group/link"
              >
                Baca selengkapnya
                <i className="fa-solid fa-arrow-right group-hover/link:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </article>

        {/* Supporting articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-denim-100 group hover:shadow-xl transition flex flex-col"
            >
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <Image
                  src={article.img}
                  alt={article.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-denim-900/80 backdrop-blur text-white text-[11px] sm:text-xs px-2.5 py-1 rounded-full font-medium">
                  {article.category}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-slate-500 mb-2">
                  <span className="flex items-center gap-1">
                    <i className="fa-regular fa-calendar"></i> {article.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="flex items-center gap-1">
                    <i className="fa-regular fa-clock"></i> {article.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-base sm:text-lg text-denim-950 leading-snug">
                  {article.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 flex-1">
                  {article.excerpt}
                </p>

                <a
                  href="#order-section"
                  className="mt-4 inline-flex items-center gap-2 text-denim-900 font-bold text-xs sm:text-sm hover:text-amberGold transition group/link w-fit"
                >
                  Baca selengkapnya
                  <i className="fa-solid fa-arrow-right group-hover/link:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Social follow */}
        <div className="mt-12 sm:mt-16 text-center">
          <span className="text-amberGold font-bold text-xs sm:text-sm uppercase tracking-wider">
            Ikuti Kami
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-denim-950 mt-1 mb-8">
            Terhubung dengan CARRYA
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            {/* TikTok embed */}
            <div>
              <TiktokEmbed />
            </div>

            {/* Instagram follow card */}
            <a
              href="https://www.instagram.com/carrya.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden border border-denim-100 shadow-md hover:shadow-xl transition bg-white"
            >
              <div className="relative p-8 sm:p-10 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#F77737] text-white min-h-[280px]">
                <i className="fa-brands fa-instagram text-5xl sm:text-6xl mb-4 drop-shadow"></i>
                <p className="font-heading text-xl sm:text-2xl font-extrabold">
                  @carrya.id
                </p>
                <p className="text-white/85 text-xs sm:text-sm mt-2 max-w-xs">
                  Ikuti Instagram CARRYA untuk update koleksi, proses produksi,
                  dan keseharian brand.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 bg-white text-denim-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full group-hover:bg-amberGold transition">
                  <i className="fa-brands fa-instagram"></i>
                  Follow di Instagram
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
