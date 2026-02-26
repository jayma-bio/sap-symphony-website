"use client";

import { GlobalSection } from "@/components/modules/global-section";
import SectionHeader from "@/components/shared/section-header";
import { aboutPageData } from "@/constants/about";

const ChooseUs = () => {
  return (
    <>
      <div className="w-full h-auto  max-w-screen-2xl mx-auto responsive-padding flex items-center flex-col mx-auto gap-8 pt-12">
        <SectionHeader
          tag="CHOOSE US"
          title="Why Sap Symphony?"
          description="Because sometimes… connection begins when we stop trying to control, and start listening."
        />
      </div>
     <div className="max-w-screen-2xl mx-auto">
       {aboutPageData.map((item, index) => (
        <GlobalSection
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          flexReverse={item.flexReverse}
        />
      ))}
     </div>
    </>
  );
};

export default ChooseUs;
