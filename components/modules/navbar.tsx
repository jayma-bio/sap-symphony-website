"use client";

import { useState, useEffect } from "react";
import Logo from "../shared/logo";
import { Button } from "../ui/button";
import NavItems from "./nav-items";
import Link from "next/link";

const PRODUCT_LINK = process.env.NEXT_PUBLIC_PRODUCT_LINK!;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <div className={`fixed right-0 left-0 top-0 z-10 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-linear-to-l from-black/70 via-black/60 to-black/70 backdrop-blur-xss" 
        : "bg-linear-to-l from-black/30 to-black/20"
    }`}>
      <div className="max-w-screen-2xl mx-auto responsive-padding flex items-center justify-between w-full py-3">
        <Logo />
        <div className="md:flex hidden">
          <NavItems />
        </div>
        <Link target="_blank" href={PRODUCT_LINK}>
          <Button size={"lg"} variant={"white"}>
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
