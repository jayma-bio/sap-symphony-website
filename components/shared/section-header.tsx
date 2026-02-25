"use client";
import { cn } from "@/lib/utils";
import BlurFade from "./blur-fade";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  lineClassName?: string;
  tag: string;
  title: string;
  description?: string;
  tagClassName?:string;
  titleClassName?:string;
  descriptionClassName?:string;
}

const SectionHeader = ({
  tag,
  title,
  tagClassName,
  lineClassName,
  titleClassName,
  descriptionClassName,
  description,
}: Props) => {
  return (
    <div className="flex flex-col gap-6 w-full">
     <BlurFade inView delay={0.2}>
         <div className="flex gap-3 items-center justify-center md:justify-start">
        <div className={cn("w-14 h-0.5 bg-light-black", lineClassName)} />
        <h1 className={cn("font-manrope text-sm tracking-widest text-light-black uppercase", tagClassName)}>
          {tag}
        </h1>
      </div>
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <h1 className={cn("heading text-[48px]! text-deepest-green", titleClassName)}>
          {title}
        </h1>
      </BlurFade>
      <BlurFade delay={0.3} inView>
        <p className={cn("text-light-black text-center md:text-start md:w-[70%]", descriptionClassName)}>
          {description}
        </p>
        </BlurFade>
    </div>
  );
};

export default SectionHeader;
