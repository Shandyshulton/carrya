export default function Footer() {
  return (
    <footer className="bg-denim-950 text-white py-8 sm:py-12 border-t border-denim-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Brand Info */}
          <div className="text-center sm:text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold tracking-widest text-white">
              CARRYA
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
              Sustainable Upcycled Denim Totebag Brand.
            </p>
          </div>

          {/* Social & Contact */}
          <div className="flex space-x-6 text-lg sm:text-xl">
            <a
              href="https://www.instagram.com/carrya.id/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram CARRYA"
              className="text-slate-400 hover:text-amberGold transition"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@carrya.id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok CARRYA"
              className="text-slate-400 hover:text-amberGold transition"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a
              href="https://wa.me/6281212181182"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp CARRYA"
              className="text-slate-400 hover:text-amberGold transition"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-denim-900 text-center text-[11px] sm:text-xs text-slate-500">
          <p>
            &copy; 2026 CARRYA Official. All rights reserved. Recycled Denim
            Fashion.
          </p>
        </div>
      </div>
    </footer>
  );
}
