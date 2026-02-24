"use client";

import BlurFade from "@/components/shared/blur-fade";
import SectionHeader from "@/components/shared/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/constants/faq";

const FaqSection = () => {
  return (
    <div
      id="faq"
      className="w-full bg-white h-auto responsive-padding flex items-center flex-col mx-auto gap-8 py-10"
    >
      <SectionHeader tag="FAQ" title="Your Questions, Answered" />

      <Accordion type="single" collapsible className="w-full space-y-4">
        {FAQ.map((item, index) => (
          <BlurFade key={index} delay={0.1 * index} inView>
            <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-light-gray data-[state=open]:bg-deep-green rounded-md transition-colors duration-200 cursor-pointer!"
          >
            <AccordionTrigger className="px-4">
              <span className="text-light-black font-medium text-start font-dm-sans text-md md:text-lg">
                {item.title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-deep-gray px-4 text-sm md:text-md font-manrope">
              {item.content}
            </AccordionContent>
          </AccordionItem>
          </BlurFade>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;
