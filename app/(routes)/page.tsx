import { MaxWrapper } from "@/components/shared/max-wrapper";
import Hero from "./_components/landing/hero";
import TextCloud from "./_components/landing/text-cloud";
import HowItWorks from "./_components/landing/how-it-works";
import { Testimonials } from "./_components/landing/testimonials";
import FaqSection from "./_components/landing/faq";

export default function Home() {
  return (
    <MaxWrapper className="flex flex-col">
     <Hero/>
     <TextCloud/>
     <HowItWorks/>
     <Testimonials/>
     <FaqSection/>
    </MaxWrapper>
  );
}
