"use client";
import { MaxWrapper } from "@/components/shared/max-wrapper";
import UseCasePageHero from "../_components/use-cases/hero";
import { GlobalSection } from "@/components/modules/global-section";
import { useCasePageData } from "@/constants/use-case";
import CtaSection from "@/components/modules/cta";

export default function Home() {
  return (
    <MaxWrapper className="flex flex-col bg-light-white">
      <UseCasePageHero />
     {useCasePageData.map((item, index) => (
        <GlobalSection
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          flexReverse={item.flexReverse}
        />
      ))}
      <CtaSection/>
    </MaxWrapper>
  );
}
