/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Science", link: "/" },
  { name: "Use Cases", link: "/use-cases" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const NavItems = ({
  special_paths,
  chageOnScroll,
}: {
  special_paths?: string[];
  chageOnScroll?: boolean;
}) => {
  const pathname = usePathname();
  const isSpecialPath = special_paths?.includes(pathname) || false;
  const isGreen = chageOnScroll && isSpecialPath;

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
              style={
                {
                  "--underline-color": isGreen
                    ? "var(--color-extra-green, #your-green-hex)"
                    : "#ffffff",
                } as React.CSSProperties
              }
              className={cn(
                "font-medium md:flex hidden py-1 font-manrope text-[16px] relative overflow-hidden transition-colors duration-300",
                "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:origin-center after:transition-all after:duration-300",
                // Use CSS variable for underline color — always applied, never purged
                "[&::after]:bg-[var(--underline-color)]",
                isGreen ? "text-extra-green" : "text-white",
                active
                  ? "after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
              )}
            >
              {item.name}
            </Link>

            {/* Mobile Link */}
            <Link
              href={item.link}
              className={cn(
                "font-medium md:hidden p-2 rounded-lg flex justify-center items-center w-full bg-green1/40 text-white relative overflow-hidden",
                "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[20px] after:h-[2px] after:bg-green3 after:origin-center after:transition-all after:duration-300",
                active
                  ? "after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
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