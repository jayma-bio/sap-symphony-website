"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Science",
    link: "/",
  },
  {
    name: "Use Cases",
    link: "/use-cases",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col md:flex-row items-center lg:gap-16 md:gap-6 gap-5">
      {navItems.map((item) => {
        const active =
          pathname === item.link ||
          (pathname.startsWith(item.link) && item.link !== "/");

        return (
          <div key={item.link} className="w-full md:w-auto">
            {/* Desktop Link */}
            <Link
              href={item.link}
              className={cn(
              "text-white font-medium md:flex hidden py-1 font-manrope text-[16px] relative overflow-hidden",
              active 
                ? "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[24px] after:h-[2px] after:bg-white after:scale-x-100 after:origin-center after:transition-all after:duration-300"
                : "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[24px] after:h-[2px] after:bg-white after:origin-center after:scale-x-0 after:transition-all after:duration-300 hover:after:scale-x-100",
              )}
            >
              {item.name}
            </Link>
            {/* Mobile Link */}
            <Link
              href={item.link}
              className={cn(
                "text-green4 font-medium md:hidden p-2 rounded-lg flex justify-center items-center w-full bg-green1/40 relative overflow-hidden",
                active
                  ? "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[20px] after:h-[2px] after:bg-green3 after:scale-x-100 after:origin-center after:transition-all after:duration-300"
                  : "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[20px] after:h-[2px] after:bg-green3 after:origin-center after:scale-x-0 after:transition-all after:duration-300 hover:after:scale-x-100",
              )}
            >
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
