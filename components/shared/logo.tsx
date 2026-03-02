/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LogoProps {
  className?: string;
  logoPath?: string;
  changeOnScroll?: boolean;
  special_paths?: string[]
}


const Logo = ({ className, special_paths, changeOnScroll, logoPath }: LogoProps) => {
  const pathname = usePathname();
  const isSpecialPath = special_paths?.includes(pathname) || false;
  
  return (
    <Link href={"/"} className={cn("cursor-pointer select-none", className)}>
      <Image
        src={logoPath || (changeOnScroll && isSpecialPath ? "/logo-black.svg" : "/logo.svg")}
        alt="logo"
        width={60}
        height={60}
        className="shrink-0 w-16"
      />
    </Link>
  );
};

export default Logo;
