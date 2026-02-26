"use client";

import Image from "next/image";
import BlurFade from "@/components/shared/blur-fade";
import BlurFadeImg from "@/components/shared/blur-fade-img";

const AboutHero = () => {
  return (
    <div className="w-full min-h-svh md:min-h-lvh flex flex-col mt-6 lg:flex-row items-center justify-between responsive-padding max-w-screen-2xl mx-auto py-12">
      <div className="w-full flex-1 flex flex-col space-y-6 mb-8 lg:mb-0 md:pr-20">
        <BlurFade delay={0.2} inView>
          <h1 className="text-3xl md:text-5xl font-medium font-dm-sans text-light-black">
            Our Company
          </h1>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <p className="font-normal md:text-lg leading-8 font-manrope">
            It began with a simple feeling. <br />
            The feeling that plants were never really silent. <br />
            That maybe… we just didn’t know how to listen. <br />
            Sap Symphony was born from this curiosity from the quiet belief that
            nature has always been speaking, responding, expressing… in ways we
            were never trained to notice. <br />
            So we built something that doesn’t speak for plants but lets them be
            heard. <br />
            Through gentle sensing of their bioelectrical signals, Sap Symphony
            turns subtle life responses into music allowing us to experience
            plants not as background… but as presence. <br />
            Not as objects… but as living participants in our world. This is not
            just technology. <br />
            It is a new doorway between humans and nature.
          </p>
        </BlurFade>
      </div>

      <div className="flex items-center justify-end h-full">
        <BlurFadeImg delay={0.3} inView>
          <Image
            src="/bg/company-page-hero.webp" // Replace with your actual image path
            alt="Sap Symphony hero image"
            className="object-cover h-auto"
            width={450}
            height={350}
          />
        </BlurFadeImg>
      </div>
    </div>
  );
};

export default AboutHero;
