"use client";

import { useState } from "react";
import { scrollToOrder } from "@/lib/actions";

const navLinks = [
  { href: "/#about", label: "Tentang Kami" },
  { href: "/#team", label: "Our Team" },
  { href: "/#craftsmanship", label: "Proses & Material" },
  { href: "/#products", label: "Produk & Ukuran" },
  { href: "/#impact", label: "Dampak" },
  { href: "/#exhibition", label: "Exhibition" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-denim-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-widest text-denim-900 border-b-2 border-amberGold pb-0.5 sm:pb-1">
              CARRYA
            </span>
            <span className="text-[10px] sm:text-xs bg-amberGold text-denim-950 font-bold px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-wider">
              Upcycled
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-semibold text-denim-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amberGold transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={scrollToOrder}
              className="bg-denim-900 hover:bg-denim-800 text-white font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md transition flex items-center gap-2 text-xs sm:text-sm border border-amberGold/30"
            >
              <i className="fa-solid fa-bag-shopping text-amberGold"></i> Pesan Sekarang
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle Mobile Menu"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="text-denim-900 focus:outline-none p-2 rounded-lg hover:bg-denim-100"
            >
              <i className="fa-solid fa-bars text-xl sm:text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          mobileOpen ? "block" : "hidden"
        } md:hidden bg-white/95 backdrop-blur-md border-b border-denim-200 px-4 pt-2 pb-6 space-y-3 transition-all duration-300`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMobileMenu}
            className="block py-2 text-denim-800 font-semibold border-b border-slate-100 hover:text-amberGold"
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={() => {
            closeMobileMenu();
            scrollToOrder();
          }}
          className="w-full mt-3 bg-denim-900 text-white font-bold py-3 rounded-xl shadow flex justify-center items-center gap-2 text-sm"
        >
          <i className="fa-solid fa-bag-shopping text-amberGold"></i> Pesan Sekarang
        </button>
      </div>
    </nav>
  );
}
