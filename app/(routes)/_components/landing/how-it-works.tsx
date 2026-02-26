"use client";

import BlurFade from "@/components/shared/blur-fade";
import SectionHeader from "@/components/shared/section-header";
import VideoPlayer from "@/components/shared/video-player";
import { videosData } from "@/constants/video";

const HowItWorks = () => {
  const sortedVideos = videosData
    ? [...videosData].sort((a, b) => a.index - b.index)
    : [];

  return (
    <section className="w-full flex flex-col gap-10 responsive-padding min-h-[60vh] max-w-screen-2xl mx-auto py-14">
      <SectionHeader tag="How it works" title="How to use Sap Symphony?" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedVideos.map((item, index) => (
          <BlurFade key={item.index} delay={0.15 * index} inView>
            <VideoPlayer item={item} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
