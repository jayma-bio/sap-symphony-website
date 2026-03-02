"use client";
import { useEffect, useRef } from "react";
import CustomIcon from "@/components/shared/custom-icon";

const text = [
  { name: "Sustainability Matters" },
  { name: "Go Green" },
  { name: "Planet First" },
  { name: "Eco Impact" },
  { name: "Think Forward" },
  { name: "Eco Friendly" },
  { name: "Green Goals" },
  { name: "Future Ready" },
];

// Render 2 copies: first copy is the "visible" set, second is the seamless repeat.
// We animate translateX from 0 → -50% (half of total width = one full set).
const TextCloud = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Measure one set's width (half the total, since we render 2 copies)
    const totalWidth = el.scrollWidth;
    const oneSetWidth = totalWidth / 2;

    // Inject a named keyframe dynamically so the distance is pixel-perfect
    const styleId = "text-cloud-keyframe";
    let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = `
      @keyframes text-cloud-scroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-${oneSetWidth}px); }
      }
    `;

    el.style.animation = `text-cloud-scroll 28s linear infinite`;
  }, []);

  // Two copies for seamless loop
  const doubled = [...text, ...text];

  return (
    <div className="w-full max-w-screen-2xl relative mx-auto">
      <div className="absolute left-0 top-0 bottom-0 md:w-12 w-6 bg-gradient-to-r from-white via-light-green/90 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 md:w-12 w-6 bg-gradient-to-l from-white via-light-green/90 to-transparent z-10" />

      <div className="overflow-hidden py-2 md:py-4 bg-light-green">
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ width: "max-content" }}
        >
          {doubled.map((item, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center gap-6 select-none pointer-events-none text-deepest-green whitespace-nowrap px-6"
            >
              <CustomIcon src="/icons/star.svg" size={10} />
              <span className="text-lg font-medium font-manrope">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextCloud;