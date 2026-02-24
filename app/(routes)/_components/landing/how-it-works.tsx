
"use client";
import SectionHeader from "@/components/shared/section-header";
import VideoPlayer from "@/components/shared/video-player";
import { useVideos } from "@/hooks/use-videos";


const HowItWorks = () => {

  const {
    data: videos,
    isLoading: videosLoading,
  } = useVideos();
  return (
    <section className="w-full flex flex-col gap-8 responsive-padding min-h-[60vh] bg-light-white py-10">
      <SectionHeader
        tag="How it works"
        title="How to use Sap Symphony?"
      />

      {/* <pre>
        {JSON.stringify(videos, null, 2)}
      </pre> */}
    </section>
  );
};

export default HowItWorks;
