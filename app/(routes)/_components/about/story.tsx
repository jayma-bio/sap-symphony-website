/* eslint-disable @next/next/no-img-element */
"use client";

import BlurFade from "@/components/shared/blur-fade";
import SectionHeader from "@/components/shared/section-header";
import { journeyData } from "@/constants/journey";

// Parses content string: text wrapped in '' becomes bold, quotes are removed
const parseContent = (content: string) => {
  const parts = content.split(/('.*?')/g);
  return parts.map((part, index) => {
    if (part.startsWith("'") && part.endsWith("'")) {
      return (
        <strong key={index} className="font-semibold text-deep-gray!">
          {part.slice(1, -1)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

const StorySection = () => {
  return (
    <div className="w-full h-auto responsive-padding max-w-screen-2xl mx-auto flex items-center flex-col mx-auto gap-6 md:gap-8 md:pb-10">
      <SectionHeader
        tag="STORY"
        title="Our Journey"
        description="It started with a question that refused to go away - If plants could communicate… what would they sound like?"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 w-full my-4">
        {journeyData.map((item, index) => (
          <BlurFade key={index} delay={0.15 * index} inView>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={`Journey step ${index + 1}`}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
              <p className="text-sm md:text-lg leading-relaxed font-manrope text-deep-gray!">
                {parseContent(item.content)}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default StorySection;
