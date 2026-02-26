"use client";

import { useState, useEffect } from "react";
import Logo from "../shared/logo";
import { Button } from "../ui/button";
import NavItems from "./nav-items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const PRODUCT_LINK = process.env.NEXT_PUBLIC_PRODUCT_LINK!;

const SPECIAL_PATHS = ["/contact","/about"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isSpecialPath = SPECIAL_PATHS.includes(pathname);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2; // 20vh
      setIsScrolled(window.scrollY >= scrollThreshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-0 left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
          ? "bg-linear-to-l from-black/70 via-black/60 to-black/70 backdrop-blur-xs"
          : ""
        // bg-linear-to-l from-black/30 to-black/20
      }`}
    >
      <div className="max-w-screen-2xl mx-auto responsive-padding flex items-center justify-between w-full py-3">
        <Logo special_paths={SPECIAL_PATHS}
        chageOnScroll={!isScrolled} />
        <div className="md:flex hidden">
          <NavItems special_paths={SPECIAL_PATHS}
          chageOnScroll={!isScrolled}
           />
        </div>
        <Link target="_blank" href={PRODUCT_LINK}>
          <Button size={"lg"} variant={"white"}
          className={
            cn((isSpecialPath && !isScrolled) ? "bg-deepest-green text-white hover:bg-deepest-green/90 hover:text-white":"")
          }>
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
