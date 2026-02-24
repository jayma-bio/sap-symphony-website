"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { testimonials } from "@/constants/testimonials";
import SectionHeader from "@/components/shared/section-header";
import { Star } from "lucide-react";
import BlurFade from "@/components/shared/blur-fade";

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(5, 9);
const thirdColumn = testimonials.slice(10, 15);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ name, image, feedback, id, rating }) => (
              <div
                className="p-5 bg-deep-green/10 rounded-md max-w-md w-full"
                key={id}
              >
                <div className="text-deep-white/80 tracking-wide text-[14px] select-none pointer-events-none font-manrope">
                  {feedback}
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Image
                    src={image}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full select-none pointer-events-none object-cover"
                  />
                  <div className="flex flex-col gap-1.5">
                    <div className="text-light-white/80 tracking-tight leading-5 nunito select-none pointer-events-none font-dm-sans">
                      {name}
                    </div>
                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {[...Array(rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="size-3! shrik-0! text-[#FF7F22] fill-[#FF7F22]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="w-full bg-light-black h-auto responsive-padding flex items-center flex-col mx-auto gap-8 py-10"
    >
      <SectionHeader
        tag="Success Stories"
        lineClassName="bg-light-white"
        tagClassName="text-light-white!"
        title="Trusted by Industry Leaders"
        titleClassName="text-light-white!"
      />
      <div className="flex justify-center my-5 gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_65%,transparent)] max-h-[600px] overflow-hidden">
        <BlurFade delay={0.1} inView>
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
        </BlurFade>
        <BlurFade delay={0.15} inView>
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
        </BlurFade>
        <BlurFade delay={0.2} inView>
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </BlurFade>
      </div>
    </div>
  );
};
