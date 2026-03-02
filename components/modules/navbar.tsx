"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "../shared/logo";
import NavItems, { navItems } from "./nav-items";

const PRODUCT_LINK = process.env.NEXT_PUBLIC_PRODUCT_LINK!;

const SPECIAL_PATHS = ["/contact", "/about"];

const NavContent = ({ closeSheet }: { closeSheet: () => void }) => {


  return (
    <section className="flex h-full flex-col gap-6 pt-7">
      {navItems.map((item) => (
        <ul key={item.link}>
          <li>
            <Link
              href={item.link}
              className="text-[1.1em] font-manrope text-light-black hover:opacity-90 font-medium list-none"
              onClick={closeSheet}
            >
              {item.name}
            </Link>
          </li>
        </ul>
      ))}
    </section>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const isSpecialPath = SPECIAL_PATHS.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2; // 20vh
      setIsScrolled(window.scrollY >= scrollThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-0 left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xs"
          : ""
      }`}
    >
      <div className="max-w-screen-2xl mx-auto responsive-padding flex items-center justify-between w-full py-3">
        <Logo special_paths={SPECIAL_PATHS} changeOnScroll={!isScrolled} />

        {/* Desktop links */}
        <div className="md:flex hidden">
          <NavItems special_paths={SPECIAL_PATHS} changeOnScroll={!isScrolled} />
        </div>

        {/* Mobile Sheet Trigger (hamburger icon) */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger >
        
                <AlignJustify
                  className={cn(
                    "size-6 text-white!",
                    isSpecialPath && "text-light-black!"
                  )}
                />
              
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-background flex flex-col gap-2 max-w-[80vw]"
            >
              <div className="flex flex-col space-y-4 p-5">
                <Logo
                logoPath="/logo-black.svg"
                  special_paths={SPECIAL_PATHS}
                  changeOnScroll={false}
                  className="w-56"
                />
                <NavContent closeSheet={() => setIsSheetOpen(false)} />
                <Button
                  size="lg"
                  variant="default"
                  className={cn(
                    "mt-6",
                    (isSpecialPath && !isScrolled)
                      ? "bg-deepest-green text-white hover:bg-deepest-green/90"
                      : ""
                  )}
                  asChild
                >
                  <Link target="_blank" href={PRODUCT_LINK}>
                    Shop Now
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop "Shop Now" button */}
        <div className="hidden md:block">
          <Link target="_blank" href={PRODUCT_LINK}>
            <Button
              size="lg"
              variant="white"
              className={cn(
                (isSpecialPath && !isScrolled)
                  ? "bg-deepest-green text-white hover:bg-deepest-green/90"
                  : ""
              )}
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
