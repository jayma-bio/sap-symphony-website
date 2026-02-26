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
    title: "Plant Signal Detection",
    content:
      "SapSymphony detects slight electrical variations in a plant via two electrodes placed on the leaves.",
    image: "/science/1.webp",
  },
  {
    title: "Signals to Sound",
    content:
      "These variations are graphed as a wave, which is translated into pitch messages that determine notes played on musical instruments designed by our team.",
    image: "/science/2.webp",
  },
  {
    title: "Dynamic Plant Music",
    content:
      "Other characteristics of the wave related to a plant's activity level change how those instruments are played, including tempo and effects.",
    image: "/science/3.webp",
  },
  {
    title: "Nature's Melody",
    content:
      "The result is a continuous stream of pleasing music that gives you a sonic window into the secret life of plants.",
    image: "/science/4.webp",
  },
  {
    title: "Real-Time Visualization",
    content:
      "Watch as your plant's biorhythms come to life through our interactive display, showing the direct correlation between plant activity and musical output.",
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
                <AccordionContent className="px-6 pb-6 text-sm text-gray font-manrope">
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
