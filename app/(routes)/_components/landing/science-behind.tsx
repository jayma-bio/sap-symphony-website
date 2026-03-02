"use client";

import ScienceSystemComponent from "@/components/modules/science-system";
import SectionHeader from "@/components/shared/section-header";


const ScienceBehind = () => {
  return (
    <section className="w-full responsive-padding  flex flex-col gap-6 md:gap-10 py-6 md:py-8 max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-5">
        <SectionHeader
          tag="SCIENCE BEHIND IT"
          title="From Electrical Signals to Wondrous Music"
          description="Sap Symphony operates on the principles of bioelectric signal translation. Plants naturally
generate tiny electrical impulses as they interact with their environment. These signals fluctuate
based on factors like:"
          descriptionClassName="max-w-2xl"
        />
      </div>
      <div className="w-full">
        <ScienceSystemComponent />
      </div>
    </section>
  );
};

export default ScienceBehind;
