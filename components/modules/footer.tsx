"use client";

import React, { useState } from "react";
import { ChevronRight, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useNewsletterMutation } from "@/hooks/use-newsletter";
import { footerData } from "@/constants/footer";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { mutate: subscribe, isPending } = useNewsletterMutation();

  const handleSubmit = (): void => {
    if (email && email.includes("@")) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 600);
      subscribe(
        { email },
        {
          onSuccess: () => {
            setTimeout(() => setEmail(""), 300);
          },
        },
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="bg-white w-full">
      <div className="w-full max-w-screen-2xl mx-auto responsive-padding flex flex-col lg:flex-row-reverse lg:justify-between gap-10 py-8">
        {/* Newsletter Section */}
        <div className="flex flex-col gap-3 w-full lg:max-w-sm">
          <h2 className="text-xl text-light-black font-medium font-dm-sans">
            Stay in the know & connect with us
          </h2>
          <p className="text-light-black text-sm leading-relaxed font-manrope">
            Subscribe to our newsletter. We promise we don&apos;t spam your
            emails!
          </p>

          {/* Email Input */}
          <div className="relative w-full -ml-1 mt-1">
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              onKeyDown={handleKeyDown}
              className={cn(
                "w-full py-3 pl-4 pr-36 rounded-full bg-white border border-[#E4E4E7] text-light-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-light-black transition-all duration-300",
                isClicked && "ring-4 ring-light-black",
              )}
            />
            <Button
              onClick={handleSubmit}
              disabled={isPending}
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full text-sm px-4 active:scale-95 transition-all duration-200 flex items-center gap-1"
            >
              {isPending ? (
                <>
                  <span>Subscribe</span>
                  <Loader2 className="w-4 h-4 shrink-0 animate-spin" />
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16">
          {/* Quick Links */}
          <div className="flex flex-col gap-2 text-sm min-w-[100px]">
            <h2 className="text-base text-light-black font-medium mb-1">
              Quick Links
            </h2>
            {footerData.quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-deep-gray hover:text-deep-gray/70 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2 text-sm min-w-[100px]">
            <h2 className="text-base text-light-black font-medium mb-1">
              Legal
            </h2>
            {footerData.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-deep-gray hover:text-deep-gray/70 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-2 text-sm min-w-[100px]">
            <h2 className="text-base text-light-black font-medium mb-1">
              Explore
            </h2>
            {footerData.explore.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-gray hover:text-deep-gray/70 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
