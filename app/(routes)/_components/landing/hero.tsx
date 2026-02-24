"use client";

import BlurFade from "@/components/shared/blur-fade";

const Hero = () => {
  return (
    <div className="w-full min-h-svh md:min-h-[91vh] landing-hero-bg flex items-center responsive-padding">
      <div className="flex flex-col space-y-8 -mt-6">
        <BlurFade delay={0.2} inView>
          <h1 className="heading">
            Decode Nature&apos;s <br /> Secret{" "}
            <span className="font-pphatton">Symphony</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <p className="paragraph font-normal leading-7.5 max-w-xl">
            Sap Symphony transforms plant bioelectric signals into therapeutic
            music. Using proprietary bio-acoustic technology, we capture plants’
            natural electrical impulses and convert them into calming,
            harmonious soundscapes.
          </p>
        </BlurFade>
      </div>
    </div>
  );
};

export default Hero;
