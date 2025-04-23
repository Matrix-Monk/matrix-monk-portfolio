"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { imageSources } from "@/assets/assets";



export default function ScrollingImageStrip() {
  const stripRef = useRef(null);
  const speed = 2;
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    let offset = 0;
    const strip = stripRef.current;

    const animate = () => {
      offset -= speed;
      const stripWidth = strip.scrollWidth / 2;

      if (Math.abs(offset) >= stripWidth) {
        offset = 0;
      }

      strip.style.transform = `translateX(${offset}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const allImages = [...imageSources, ...imageSources, ...imageSources]; // for seamless loop

  return (
    <div className="relative w-screen h-24 my-4 overflow-hidden">
      <div
        ref={stripRef}
        className="absolute top-0 left-0 flex items-center gap-6 h-full will-change-transform px-4"
      >
        {allImages.map((src, i) => {
          const isHovered = i === hoverIndex;
          const isNeighbor = i === hoverIndex - 1 || i === hoverIndex + 1;

          return (
            <div
              key={i}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className={clsx(
                "w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-transform duration-300 ease-out",
                {
                  "scale-[1.8] z-20": isHovered,
                  "scale-[1.3] z-10": isNeighbor,
                  "z-0": !isHovered && !isNeighbor,
                }
              )}
            >
              <Image
                src={src}
                alt={`logo-${i}`}
                width={48}
                height={48}
                className="object-contain max-w-full max-h-full pointer-events-none"
              />
            </div>
          );
        })}
      </div>

      {/* Gradient fades on sides */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white/70 to-transparent dark:from-black/70 pointer-events-none z-30" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white/70 to-transparent dark:from-black/70 pointer-events-none z-30" />
    </div>
  );
}
