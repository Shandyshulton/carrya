"use client";

import dynamic from "next/dynamic";

const ToteBag3D = dynamic(() => import("@/components/ToteBag3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-denim-400 gap-2">
      <i className="fa-solid fa-spinner fa-spin text-2xl"></i>
      <span className="text-xs">Memuat model 3D...</span>
    </div>
  ),
});

export default function ProductShowcase3D() {
  return (
    <div className="relative w-full h-80 sm:h-[440px] cursor-grab active:cursor-grabbing">
      <ToteBag3D />
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-slate-400 flex items-center gap-1.5 pointer-events-none">
        <i className="fa-solid fa-arrows-rotate text-amberGold"></i>
        Geser untuk memutar model
      </span>
    </div>
  );
}
