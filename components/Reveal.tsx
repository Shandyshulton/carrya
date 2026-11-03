"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: React.ReactNode;
  /** Animation direction the element travels from */
  direction?: Direction;
  /** Delay in ms before the transition starts */
  delay?: number;
  /** Travel distance in px for the slide */
  distance?: number;
  /** Re-animate every time it enters/leaves the viewport */
  once?: boolean;
  className?: string;
};

const hiddenTransform = (dir: Direction, d: number) => {
  switch (dir) {
    case "up":
      return `translate3d(0, ${d}px, 0)`;
    case "down":
      return `translate3d(0, -${d}px, 0)`;
    case "left":
      return `translate3d(${d}px, 0, 0)`;
    case "right":
      return `translate3d(-${d}px, 0, 0)`;
    default:
      return "translate3d(0, 0, 0)";
  }
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  distance = 40,
  once = false,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0, 0, 0)"
          : hiddenTransform(direction, distance),
        transition: `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
