"use client"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../shared/section-header";
import BlurFade from "../shared/blur-fade";

const PRODUCT_LINK = process.env.NEXT_PUBLIC_PRODUCT_LINK!;

const CtaSection = () => {
  return (
    <section className={cn("responsive-padding max-w-screen-2xl mx-auto py-10 md:py-12")}>
      <BlurFade delay={0.1} inView>
        <div className="flex md:flex-row flex-col gap-0 md:justify-between rounded-4xl bg-light-black overflow-hidden relative max-w-screen-2xl mx-auto min-h-[280px] md:min-h-0">
          {/* Background image for mobile — sits behind content */}
          <div className="absolute inset-0 flex justify-end md:hidden pointer-events-none select-none">
            <Image
              src="/illus/cta-mask.png"
              alt=""
              width={600}
              height={600}
              className="object-cover object-right h-full w-auto opacity-30"
            />
          </div>

          {/* Text + CTA */}
          <div className="relative z-10 w-full md:w-[55%] px-8 py-10 md:py-14 flex items-start justify-center flex-col gap-3 md:gap-4">
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

          {/* Desktop image */}
          <div className="hidden md:flex w-[40%] justify-end shrink-0">
            <Image
              src="/illus/cta-mask.png"
              alt="experience-now"
              width={600}
              height={600}
              className="object-cover select-none pointer-events-none"
            />
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default CtaSection;