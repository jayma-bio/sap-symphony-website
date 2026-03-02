"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BlurFade from "../shared/blur-fade";

interface AccordionItem {
  title: string;
  content: string;
  image: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "Light Exposure",
    content:
      "Sap Symphony detects subtle electrical changes in plants caused by variations in light. Using two gentle electrodes placed on the leaves, it captures how plants respond to changing light conditions in real time.",
    image: "/science/1.webp",
  },
  {
    title: "Water Intake",
    content:
      "As plants absorb water, their internal electrical activity shifts. Sap Symphony translates these variations into dynamic wave patterns, which are converted into musical notes through our proprietary sound mapping system.",
    image: "/science/2.webp",
  },
  {
    title: "Touch and Movement",
    content:
      "Physical interaction such as touch, wind, or natural movement alters plant electrical signals. These changes influence musical elements like tempo, rhythm, and modulation, reflecting the plant’s activity.",
    image: "/science/3.webp",
  },
  {
    title: "Temperature Changes",
    content:
      "Environmental temperature affects plant physiology. Sap Symphony captures these responses and expresses them through evolving soundscapes, revealing how plants adapt to their surroundings.",
    image: "/science/4.webp",
  },
  {
    title: "Human Interaction",
    content:
      "When humans engage with plants, measurable bioelectrical responses occur. Sap Symphony transforms this interaction into music creating a unique sonic connection between people and plants.",
    image: "/science/5.webp",
  },
];

interface PlantSignalComponentProps {
  className?: string;
}

const ScienceSystemComponent = ({ className }: PlantSignalComponentProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div
      className={cn(
        "flex flex-col-reverse lg:flex-row gap-8 w-full mx-auto items-center justify-center 2xl:aspect-5/2",
        className,
      )}
    >
      {/* Accordion Section */}
      <div className="w-full lg:w-[65%]">
        <Accordion
          type="single"
          collapsible
          value={`item-${activeIndex}`}
          onValueChange={(value) => {
            const index = parseInt(value?.split("-")[1] || "0");
            setActiveIndex(index);
          }}
          className="w-full space-y-6"
        >
          {accordionData.map((item, index) => (
            <BlurFade key={index} delay={0.1 * index} inView>
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white data-[state=open]:bg-opacity-10 data-[state=open]:bg-deep-green rounded-lg border-none hover:bg-light-gray transition-all duration-200"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex-1 text-left">
                      <h3 className="text-xl font-manrope font-semibold text-light-black">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 md:pb-6 text-sm text-gray font-manrope">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            </BlurFade>
          ))}
        </Accordion>
      </div>

      {/* Fixed Size Image Section */}
      <div className="w-full lg:w-[35%] relative rounded-lg overflow-hidden shrink-0 -mt-2">
        <div className="w-full h-100 lg:h-120 relative">
          <Image
            src={accordionData[activeIndex].image}
            alt={accordionData[activeIndex].title}
            fill
            className="object-cover select-none pointer-events-none"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ScienceSystemComponent;
