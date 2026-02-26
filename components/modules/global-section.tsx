
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

// Extract content between single quotes, rest gets gradient
const parseTitleWithQuotes = (title: string) => {
  // Split title by quoted sections, remove quotes from output
  const parts = title.split(/('[^']*')/).map(part => part.trim()).filter(Boolean);
  const result: { text: string; isQuoted: boolean }[] = [];
  
  parts.forEach(part => {
    if (part.startsWith("'") && part.endsWith("'")) {
      result.push({ text: part.slice(1, -1), isQuoted: true }); // Remove quotes
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
          <div className="flex flex-col space-y-4 w-full items-start pl-4">

            {/* TITLE */}
            <BlurFade delay={0.2} inView>
              <h1
                className={cn(
                  "text-2xl md:text-4xl font-semibold font-dm-sans text-left max-w-lg inline"
                )}
              >
                {titleParts.map((part, i) => (
                  <span
                    key={i}
                    className={cn(
                      part.isQuoted
                        ? "text-inherit mr-2"  // Shows 🌿 naturally, no quotes visible
                        : cn("bg-clip-text text-transparent", titleGradient)
                    )}
                  >
                    {part.text}
                  </span>
                ))}
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
