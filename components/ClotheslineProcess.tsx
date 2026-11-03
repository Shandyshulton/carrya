"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Step = {
  no: number;
  phase: string;
  title: string;
  desc: string;
  icon: string;
  img?: string;
};

const steps: Step[] = [
  {
    no: 1,
    phase: "Sourcing",
    title: "Pengumpulan Bahan Jeans",
    desc: "Mengumpulkan celana dan pakaian jeans bekas dari berbagai sumber sebagai bahan baku utama.",
    icon: "fa-box-archive",
    img: "/bahan.jpg",
  },
  {
    no: 2,
    phase: "Cleaning",
    title: "Pencucian & Sanitasi",
    desc: "Seluruh denim bekas dicuci bersih dan disanitasi agar higienis sebelum diproses lebih lanjut.",
    icon: "fa-soap",
    img: "/cuci.jpeg",
  },
  {
    no: 3,
    phase: "Selecting",
    title: "Pemilihan Bahan",
    desc: "Menyortir dan memilih bagian kain yang masih kuat, tebal, serta punya karakter warna terbaik.",
    icon: "fa-hand-pointer",
    img: "/pemilihan.jpeg",
  },
  {
    no: 4,
    phase: "Measuring",
    title: "Pengukuran & Pola",
    desc: "Membuat pola dan mengukur kain sesuai spesifikasi totebag agar presisi dan simetris.",
    icon: "fa-ruler-combined",
    img: "/pola.jpeg",
  },
  {
    no: 5,
    phase: "Cutting",
    title: "Pemotongan",
    desc: "Kain dipotong mengikuti pola dengan cermat untuk meminimalkan sisa bahan.",
    icon: "fa-scissors",
    img: "/pemotongan.jpeg",
  },
  {
    no: 6,
    phase: "Sewing",
    title: "Penjahitan",
    desc: "Potongan dirakit dengan jahitan benang emas kontras, saku depan, dan patch logo CARRYA.",
    icon: "fa-ring",
    img: "/jahit.jpg",
  },
  {
    no: 7,
    phase: "Finished",
    title: "Produk Jadi",
    desc: "Totebag denim upcycle siap pakai, menemani aktivitas harian dengan gaya berkelanjutan.",
    icon: "fa-bag-shopping",
    img: "/model.jpg",
  },
];

function Peg({ className = "" }: { className?: string }) {
  // A simple clothes-peg (clip)
  return (
    <div className={`relative w-3.5 h-6 ${className}`}>
      <div className="absolute inset-x-0 top-0 h-5 bg-amberGold rounded-sm shadow-sm" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0.5 w-0.5 h-4 bg-denim-900/40 rounded-full" />
    </div>
  );
}

export default function ClotheslineProcess() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Drag-to-scroll (mouse / pointer) state
  const isDown = useRef(false);
  const dragged = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const velocity = useRef(0);
  const momentumId = useRef<number | null>(null);

  const DRAG_MULTIPLIER = 1.6; // higher = lighter, moves farther per hand motion

  const stopMomentum = () => {
    if (momentumId.current !== null) {
      cancelAnimationFrame(momentumId.current);
      momentumId.current = null;
    }
  };

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    stopMomentum();
    const amount = Math.min(el.clientWidth * 0.8, 360);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Ignore drag that starts on the control buttons
    if ((e.target as HTMLElement).closest("button")) return;
    const el = scrollRef.current;
    if (!el) return;
    stopMomentum();
    isDown.current = true;
    dragged.current = false;
    startX.current = e.clientX;
    lastX.current = e.clientX;
    lastTime.current = performance.now();
    velocity.current = 0;
    startScroll.current = el.scrollLeft;
    el.style.scrollBehavior = "auto"; // disable smooth while dragging for 1:1 feel
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDown.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const delta = (e.clientX - startX.current) * DRAG_MULTIPLIER;
    if (Math.abs(e.clientX - startX.current) > 4) dragged.current = true;
    el.scrollLeft = startScroll.current - delta;

    // Track velocity for momentum
    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      velocity.current = ((e.clientX - lastX.current) * DRAG_MULTIPLIER) / dt;
    }
    lastX.current = e.clientX;
    lastTime.current = now;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDown.current) return;
    isDown.current = false;
    const el = scrollRef.current;
    if (!el) return;

    // Momentum / inertia: keep gliding based on release velocity
    let v = velocity.current * 16; // px per frame
    const glide = () => {
      if (Math.abs(v) < 0.4) {
        momentumId.current = null;
        el.style.scrollBehavior = "";
        return;
      }
      el.scrollLeft -= v;
      v *= 0.94; // friction
      momentumId.current = requestAnimationFrame(glide);
    };
    if (dragged.current && Math.abs(v) > 0.5) {
      momentumId.current = requestAnimationFrame(glide);
    } else {
      el.style.scrollBehavior = "";
    }

    try {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  // Prevent click/link navigation right after a drag
  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragged.current) {
      e.preventDefault();
      e.stopPropagation();
      dragged.current = false;
    }
  };

  // Clean up any pending momentum animation on unmount
  useEffect(() => stopMomentum, []);

  return (
    <div className="relative">
      <style>{`
        @keyframes carrya-sway {
          0%, 100% { transform: rotate(-1.4deg); }
          50% { transform: rotate(1.4deg); }
        }
        .carrya-hang {
          transform-origin: top center;
          animation: carrya-sway 4s ease-in-out infinite;
        }
      `}</style>

      {/* The clothesline rope */}
      <div className="absolute left-0 right-0 top-6 h-1 bg-gradient-to-r from-transparent via-denim-400 to-transparent rounded-full z-0" />
      {/* Rope end posts */}
      <div className="absolute left-2 top-2 w-3 h-3 rounded-full bg-denim-500 z-0" />
      <div className="absolute right-2 top-2 w-3 h-3 rounded-full bg-denim-500 z-0" />

      {/* Scrollable hanging cards */}
      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className="relative z-10 flex gap-5 sm:gap-7 overflow-x-auto pb-6 pt-6 px-2 touch-pan-x select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
      >
        {steps.map((step, i) => (
          <div
            key={step.no}
            className="snap-center shrink-0 w-56 sm:w-64 flex flex-col items-center"
            style={{ animationDelay: `${(i % 3) * 0.6}s` }}
          >
            {/* Pegs on the rope */}
            <div className="flex justify-between w-24 -mb-2 z-20">
              <Peg />
              <Peg />
            </div>

            {/* Hanging card */}
            <div className="carrya-hang w-full bg-white rounded-2xl shadow-lg border border-denim-100 overflow-hidden">
              <div className="relative h-40 sm:h-44 bg-gradient-to-br from-denim-700 to-denim-900">
                {step.img ? (
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    sizes="256px"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px]" />
                    <i
                      className={`fa-solid ${step.icon} text-white/80 text-4xl sm:text-5xl`}
                    />
                  </div>
                )}

                {/* Step number badge */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-amberGold text-denim-950 font-extrabold text-sm flex items-center justify-center shadow">
                  {step.no}
                </div>
                <span className="absolute top-3 right-3 bg-denim-950/70 backdrop-blur text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {step.phase}
                </span>
              </div>

              <div className="p-4 space-y-1.5">
                <h3 className="font-bold text-denim-950 text-sm sm:text-base flex items-center gap-2">
                  <i className={`fa-solid ${step.icon} text-amberGold text-xs`} />
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          type="button"
          aria-label="Geser ke kiri"
          onClick={() => scrollBy("left")}
          className="w-10 h-10 rounded-full bg-white border border-denim-200 text-denim-900 shadow-md hover:bg-denim-50 transition flex items-center justify-center"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <p className="text-[11px] sm:text-xs text-slate-500 flex items-center gap-1.5">
          <i className="fa-solid fa-arrows-left-right text-amberGold"></i>
          Geser untuk mengikuti alur proses
        </p>
        <button
          type="button"
          aria-label="Geser ke kanan"
          onClick={() => scrollBy("right")}
          className="w-10 h-10 rounded-full bg-white border border-denim-200 text-denim-900 shadow-md hover:bg-denim-50 transition flex items-center justify-center"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
