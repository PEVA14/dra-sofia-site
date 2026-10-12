"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES: { src: string; alt: string; position: string }[] = [
  {
    src: "/HeaderIMG.jpeg",
    alt: "La doctora sostiene a un recién nacido mientras sus papás lo miran",
    position: "55% 50%",
  },
  {
    src: "/ShowingBaby.jpeg",
    alt: "La doctora muestra a la mamá a su bebé recién nacido",
    position: "50% 50%",
  },
  {
    src: "/BabyPrep.jpeg",
    alt: "La doctora prepara y revisa a un recién nacido",
    position: "62% 50%",
  },
  {
    src: "/Office01.jpeg",
    alt: "Escritorio y sillas del consultorio, con papel tapiz infantil",
    position: "50% 60%",
  },
  {
    src: "/Office02.jpeg",
    alt: "Área de juegos con resbaladilla junto a la mesa de exploración",
    position: "50% 55%",
  },
];

const INTERVAL_MS = 5000;

export default function AboutCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => setIndex((next + SLIDES.length) % SLIDES.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const id = window.setInterval(() => {
      if (!mq.matches) setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, index]);

  return (
    <div
      role="group"
      aria-roledescription="carrusel"
      aria-label="Fotos de consulta"
      className="relative w-full h-full group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
      }}
    >
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 288px"
          aria-hidden={i !== index}
          className={`object-cover transition-opacity duration-700 motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: slide.position }}
        />
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none bg-gradient-to-t from-slate-900/25 to-transparent"
      />

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Foto anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 text-slate-700 shadow flex items-center justify-center transition-opacity hover:bg-white focus-visible:opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
      >
        <Chevron direction="left" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Foto siguiente"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 text-slate-700 shadow flex items-center justify-center transition-opacity hover:bg-white focus-visible:opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
      >
        <Chevron direction="right" />
      </button>

      <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ir a la foto ${i + 1} de ${SLIDES.length}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white/85"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === "left" ? "M15.75 19.5L8.25 12l7.5-7.5" : "M8.25 4.5l7.5 7.5-7.5 7.5"}
      />
    </svg>
  );
}
