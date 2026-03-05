"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import BlurFadeImg from "../shared/blur-fade-img";
import BlurFade from "../shared/blur-fade";

interface GlobalSectionProps {
  flexReverse?: boolean;
  image: string;
  title: string;
  description: string[];
  titleGradient?: string;
}

const parseTitleWithQuotes = (title: string) => {
  const parts = title.split(/('[^']*')/).map(part => part.trim()).filter(Boolean);
  const result: { text: string; isQuoted: boolean }[] = [];

  parts.forEach(part => {
    if (part.startsWith("'") && part.endsWith("'")) {
      result.push({ text: part.slice(1, -1), isQuoted: true });
    } else {
      result.push({ text: part, isQuoted: false });
    }
  });

  return result;
};

export const GlobalSection = ({
  flexReverse = false,
  image,
  title,
  description,
  titleGradient = "bg-gradient-to-b from-[#536942] via-[#8A9D70] to-[#536942]",
}: GlobalSectionProps) => {
  const titleParts = parseTitleWithQuotes(title);

  return (
    <div className="w-full responsive-padding my-2 md:my-8">
      <div
        className={cn(
          "w-full flex items-center justify-between gap-6 md:gap-0",
          flexReverse
            ? "flex-col md:flex-row-reverse"
            : "flex-col md:flex-row"
        )}
      >
        {/* IMAGE */}
        <div className="w-full md:w-auto flex items-center justify-center md:justify-start shrink-0">
          <BlurFadeImg delay={0.1} inView>
            <Image
              src={image}
              alt="section-image"
              width={500}
              height={500}
              className="pointer-events-none select-none object-contain w-full max-w-[340px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px] h-auto rounded-xl"
            />
          </BlurFadeImg>
        </div>

        {/* TEXT */}
        <div
          className={cn(
            "flex-1 flex flex-col justify-center",
            flexReverse ? "md:pr-14" : "md:ml-14"
          )}
        >
          <div className="flex flex-col space-y-4 w-full items-start">

            {/* TITLE */}
            <BlurFade delay={0.2} inView>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-semibold font-dm-sans text-left max-w-lg"
              >
                {titleParts.map((part, i) => (
                  <span
                    key={i}
                    className={cn(
                      part.isQuoted
                        ? "text-inherit mr-1"
                        : cn("bg-clip-text text-transparent", titleGradient)
                    )}
                  >
                    {part.text}
                  </span>
                ))}
              </h2>
            </BlurFade>

            {/* DESCRIPTION */}
            <BlurFade delay={0.25} inView>
              <div className="flex flex-col text-base md:text-lg font-normal text-light-black font-manrope pt-1 space-y-2 max-w-lg">
                {description.map((line, i) => (
                  <p key={i} className="leading-relaxed">{line}</p>
                ))}
              </div>
            </BlurFade>

          </div>
        </div>
      </div>
    </div>
  );
};