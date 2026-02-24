"use client";
import BlurFade from "@/components/shared/blur-fade";
import SectionHeader from "@/components/shared/section-header";
import VideoPlayer from "@/components/shared/video-player";
import { useVideos } from "@/hooks/use-videos";

const HowItWorks = () => {
  const { data: videos, isLoading: videosLoading } = useVideos();


  const sortedVideos = videos?.data?.media
    ? [...videos.data.media].sort((a, b) => a.index - b.index)
    : [];


  const renderVideoItems = () => {


    if (videosLoading) {
      // Show 4 dummy skeleton cards when loading
      const dummyCount = 4;
      return Array.from({ length: dummyCount }, (_, index) => (
        <VideoPlayer item={null} key={index} />
      ));
    }

    if (!videos?.data?.media || videos.data.media.length === 0) {
      // Show skeletons if no videos but not loading
      const dummyCount = 4;
      return Array.from({ length: dummyCount }, (_, index) => (
        <BlurFade key={`empty-${index}`} delay={1 * index} inView>
          <VideoPlayer item={null} />
        </BlurFade>
      ));
    }

    // Show actual videos
    return sortedVideos.map((item, index) => (
      <BlurFade key={item.id} delay={0.15 * index} inView>
        <VideoPlayer item={item} />
      </BlurFade>
    ));
  };

  return (
    <section className="w-full flex flex-col gap-10 responsive-padding min-h-[60vh] bg-light-white py-14">
  <SectionHeader tag="How it works" title="How to use Sap Symphony?" />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {renderVideoItems()}
  </div>
</section>
  );
};

export default HowItWorks;
