"use client";

import BlurFade from "@/components/shared/blur-fade";

const UseCasePageHero = () => {
  return (
   <section className="w-full use-case-hero-bg">
     <div className="w-full min-h-[80vh] md:min-h-[90vh] mb-6 max-w-screen-2xl mx-auto flex items-center responsive-padding">
      <div className="flex flex-col space-y-8 mt-42 md:-mt-6">
        <BlurFade delay={0.2} inView>
          <h1 className="heading">Where Does Sap <br /> Symphony Belong?</h1>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <p className="paragraph font-normal leading-7.5 max-w-xl">
            Honestly, Anywhere people are searching for calm.
          </p>
        </BlurFade>
      </div>
    </div>
   </section>
  );
};

export default UseCasePageHero;
