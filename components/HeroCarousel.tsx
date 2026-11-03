"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  { src: "/tote-1.jpeg", alt: "CARRYA Upcycled Denim Totebag - Tampak Depan" },
  { src: "/tote-2.jpeg", alt: "CARRYA Upcycled Denim Totebag - Detail Saku" },
  { src: "/tote-3.jpg", alt: "CARRYA Upcycled Denim Totebag - Tampak Samping" },
];

const AUTOPLAY_MS = 4000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [dragPx, setDragPx] = useState(0); // live drag offset in px
  const [isDragging, setIsDragging] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const autoplayRef = useRef<number | null>(null);

  const total = slides.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay — pauses while dragging
  useEffect(() => {
    if (isDragging) return;
    autoplayRef.current = window.setTimeout(() => {
      setCurrent((c) => (c + 1) % total);
    }, AUTOPLAY_MS);
    return () => {
      if (autoplayRef.current) window.clearTimeout(autoplayRef.current);
    };
  }, [current, isDragging, total]);

  // Pointer drag with live tracking
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    dragStartX.current = e.clientX;
    setIsDragging(true);
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    setDragPx(e.clientX - dragStartX.current);
  };

  const onPointerUp = () => {
    if (dragStartX.current === null) return;
    const width = viewportRef.current?.clientWidth ?? 300;
    const threshold = Math.min(width * 0.18, 60);
    if (dragPx > threshold) prev();
    else if (dragPx < -threshold) next();
    dragStartX.current = null;
    setDragPx(0);
    setIsDragging(false);
  };

  // Combine the slide position with the live drag offset
  const viewportWidth = viewportRef.current?.clientWidth ?? 0;
  const dragPercent = viewportWidth ? (dragPx / viewportWidth) * 100 : 0;
  const translate = -current * 100 + dragPercent;

  return (
    <div className="bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl sm:shadow-2xl border border-denim-200 transform sm:rotate-1 hover:rotate-0 transition duration-500">
      {/* Draggable viewport */}
      <div
        ref={viewportRef}
        className="relative w-full h-72 sm:h-96 md:h-[420px] rounded-xl overflow-hidden shadow-inner cursor-grab active:cursor-grabbing select-none touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* Sliding track */}
        <div
          className="flex h-full"
          style={{
            transform: `translateX(${translate}%)`,
            transition: isDragging
              ? "none"
              : "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {slides.map((slide, i) => {
            // Subtle scale/opacity so the active slide "pops"
            const isActive = i === current && !isDragging;
            return (
              <div
                key={slide.src}
                className="relative w-full h-full shrink-0 overflow-hidden"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover pointer-events-none transition-transform duration-[1200ms] ease-out"
                  style={{ transform: isActive ? "scale(1.06)" : "scale(1)" }}
                  priority={i === 0}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* Prev / Next buttons */}
        <button
          type="button"
          aria-label="Gambar sebelumnya"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute top-1/2 left-2 sm:left-3 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-denim-900 shadow-md flex items-center justify-center transition"
        >
          <i className="fa-solid fa-chevron-left text-sm sm:text-base"></i>
        </button>
        <button
          type="button"
          aria-label="Gambar berikutnya"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute top-1/2 right-2 sm:right-3 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-denim-900 shadow-md flex items-center justify-center transition"
        >
          <i className="fa-solid fa-chevron-right text-sm sm:text-base"></i>
        </button>

        {/* Dots indicator with autoplay progress */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Ke gambar ${i + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                goTo(i);
              }}
              className={`h-2 rounded-full overflow-hidden transition-all duration-300 ${
                i === current ? "w-7 bg-white/40" : "w-2 bg-white/60 hover:bg-white"
              }`}
            >
              {i === current && (
                <span
                  key={`fill-${current}`}
                  className="block h-full bg-amberGold"
                  style={{
                    animation: isDragging
                      ? "none"
                      : `carrya-dot-fill ${AUTOPLAY_MS}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <style>{`
          @keyframes carrya-dot-fill {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
      </div>

      {/* Caption bar */}
      <div className="p-3 sm:p-4 bg-denim-900 rounded-xl mt-2.5 sm:mt-3 text-white flex justify-between items-center">
        <div>
          <p className="text-[10px] sm:text-xs text-amberGold font-semibold">
            CARRYA Signature
          </p>
          <h3 className="font-bold text-sm sm:text-lg">Upcycled Denim Totebag</h3>
        </div>
        <span className="bg-amberGold text-denim-950 font-bold text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg">
          Rp 200.000
        </span>
      </div>
    </div>
  );
}
