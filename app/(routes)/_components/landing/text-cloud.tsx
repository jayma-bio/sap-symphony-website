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

const LOOP_COUNT = 3;

const TextCloud = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const el = trackRef.current;

    // Pause animation until measurement is done
    el.style.animationPlayState = "paused";

    requestAnimationFrame(() => {
      const width = el.scrollWidth;
      el.style.transform = `translateX(-${width / 3}px)`;

      // Start the animation only AFTER transform is applied
      requestAnimationFrame(() => {
        el.style.animationPlayState = "running";
      });
    });
  }, []);

  const repeated = Array.from({ length: LOOP_COUNT }, () => text).flat();

  return (
    <div className="w-full max-w-screen-2xl relative mx-auto">
      <div className="absolute left-0 top-0 bottom-0 md:w-12 w-6 bg-gradient-to-r from-white via-light-green/80 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 md:w-12 w-6 bg-gradient-to-l from-white via-light-green/80 to-transparent z-10" />

      <div className="overflow-hidden py-2 md:py-4 bg-light-green">
        <div
          ref={trackRef}
          className="flex animate-logo-cloud gap-6 will-change-transform"
        >
          {repeated.map((item, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center gap-6 select-none pointer-events-none text-deepest-green whitespace-nowrap"
            >
              <CustomIcon src="/icons/star.svg" size={10} />
              <span className="text-lg font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextCloud;