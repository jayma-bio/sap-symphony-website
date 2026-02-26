"use client"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../shared/section-header";
import BlurFade from "../shared/blur-fade";

const PRODUCT_LINK = process.env.NEXT_PUBLIC_PRODUCT_LINK!;

const CtaSection = () => {
  return (
    <section className={cn("responsive-padding max-w-screen-2xl mx-auto py-12")}>
     <BlurFade delay={0.1} inView>
       <div className="flex md:flex-row flex-col-reverse gap-6 md:justify-between rounded-4xl bg-light-black overflow-hidden relative max-w-screen-2xl mx-auto">
        <div className="w-full md:w-[55%] px-10 flex items-start justify-center flex-col gap-5">
          <SectionHeader
            tag="experience now"
            lineClassName="bg-light-white"
            tagClassName="text-light-white!"
            title="Ready to Experience Plant Music?"
            titleClassName="text-light-white!"
          />
          <Link
            href={PRODUCT_LINK}
            target="_blank"
            className="text-deepest-green font-medium bg-white rounded-md py-2 px-6 flex w-fit items-center"
          >
            Shop Now
          </Link>
        </div>
        <div className="w-[40%] md:flex justify-end hidden">
          <Image
            src="/illus/cta-mask.png"
            alt="experience-now"
            width={600}
            height={600}
            className="shrink-0 object-cover select-none pointer-events-none"
          />
        </div>
        <div className="w-full flex justify-end md:hidden absolute top-0 ring-0">
          <Image
            src="/illus/cta-mask.png"
            alt="experience-now"
            width={600}
            height={600}
            className="shrink-0 object-cover select-none pointer-events-none"
          />
        </div>
      </div>
     </BlurFade>
    </section>
  );
};

export default CtaSection;
