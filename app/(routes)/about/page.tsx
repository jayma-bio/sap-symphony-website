import { MaxWrapper } from "@/components/shared/max-wrapper";
import CtaSection from "@/components/modules/cta";
import AboutHero from "../_components/about/hero";
import StorySection from "../_components/about/story";
import TeamSection from "../_components/about/team";
import ChooseUs from "../_components/about/choose-us";

export default function Home() {
  return (
    <MaxWrapper className="flex flex-col bg-light-white">
        <AboutHero />
        <StorySection />
        <TeamSection />
        <ChooseUs />
      <CtaSection />
    </MaxWrapper>
  );
}
