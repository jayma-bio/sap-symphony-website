"use client";

import ScienceSystemComponent from "@/components/modules/science-system";
import SectionHeader from "@/components/shared/section-header";
import React from "react";

const ScienceBehind = () => {
  return (
    <section className="w-full responsive-padding  flex flex-col gap-10 py-8 bg-light-white">
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
