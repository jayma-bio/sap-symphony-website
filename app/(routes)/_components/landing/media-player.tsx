"use client";

import BlurFade from "@/components/shared/blur-fade";

// import BlurFade from "@/components/shared/blur-fade";

const MediaPlayer = () => {
  return (
    <div className="w-full min-h-svh md:min-h-screen media-player-bg relative flex items-center responsive-padding">
      <div className="flex flex-col space-y-6 w-full items-center justify-center">
        <BlurFade delay={0.2} inView>
          <h1 className="heading text-4xl md:text-5xl! text-center leading-12">
            Connecting people with <br /> the nature
          </h1>
        </BlurFade>
        <BlurFade delay={0.25} inView>
          <p className="paragraph text-white! font-medium! leading-7.5 max-w-3xl text-center">
            Sap Symphony transforms plant bioelectric signals into therapeutic
            music. Using proprietary bio-acoustic technology
          </p>
        </BlurFade>
      </div>
      <div className="absolute inset-0 bg-light-black/10 pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-light-white" />
    </div>
  );
};

export default MediaPlayer;
