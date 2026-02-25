 
"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import BlurFadeImg from "../shared/blur-fade-img";
import BlurFade from "../shared/blur-fade";

interface GlobalSectionProps {
  flexReverse?: boolean;
  image: string;
  title: string;
  description: string[]; // now an array
  titleGradient?: string; // optional custom gradient classes
}

export const GlobalSection = ({
  flexReverse = false,
  image,
  title,
  description,
  titleGradient = "bg-gradient-to-b from-[#536942] via-[#8A9D70] to-[#536942]",
}: GlobalSectionProps) => {
  return (
    <div className="w-full h-full responsive-padding my-8">
      <div
        className={cn(
          "w-full h-full md:h-[58vh] 2xl:h-[50vh] flex items-center justify-between",
          flexReverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
        )}
      >
        {/* IMAGE */}
        <div className="w-full md:w-auto h-full p-5 md:p-0 flex items-center justify-start">
          <BlurFadeImg delay={0.1} inView>
            <Image
              src={image}
              alt="section-image"
              width={500}
              height={500}
              className="pointer-events-none select-none object-contain w-125 h-auto max-w-full max-h-full"
            />
          </BlurFadeImg>
        </div>

        {/* TEXT */}
        <div
          className={cn(
            "flex-1 h-full flex flex-col justify-center py-3",
            flexReverse ? "md:pr-14" : "md:ml-14"
          )}
        >
          <div className="flex flex-col space-y-3 w-full items-start pl-4">

            {/* TITLE */}
            <BlurFade delay={0.2} inView>
              <h1
                className={cn(
                  "text-2xl md:text-3xl font-semibold font-dm-sans text-left bg-clip-text text-transparent",
                  titleGradient
                )}
              >
                {title}
              </h1>
            </BlurFade>

            {/* DESCRIPTION AS LIST */}
            <BlurFade delay={0.25} inView>
              <div className="flex flex-col text-sm md:text-lg font-normal text-light-black font-manrope pt-1 space-y-1.5 max-w-lg">
                {description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </BlurFade>

          </div>
        </div>
      </div>
    </div>
  );
};