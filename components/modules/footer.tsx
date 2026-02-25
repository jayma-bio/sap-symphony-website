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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="bg-white flex items-center justify-center w-full mx-auto">
      <div className="w-full responsive-padding flex flex-col-reverse lg:flex-row justify-between gap-8 my-6">
        {/* Links Section */}
        <div className="flex gap-12 lg:gap-16">
          {/* Quick Links */}
          <div className="flex flex-col gap-2 text-sm text-center md:text-start">
            <h1 className="text-lg text-light-black font-medium mb-2">Quick Links</h1>
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
          <div className="flex flex-col gap-2 text-sm text-center md:text-start">
            <h1 className="text-lg text-light-black font-medium mb-2">Legal</h1>
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
          <div className="flex flex-col gap-2 text-sm text-center md:text-start">
            <h1 className="text-lg text-light-black font-medium mb-2">Explore</h1>
            {footerData.explore.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="text-deep-gray hover:text-deep-gray/70 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-4 items-end">
          <h1 className="text-lg text-light-black font-medium text-center md:text-right">
            Stay in the know & connect with us
          </h1>
          <p className="text-light-black text-sm text-center md:text-right w-full md:w-[85%]">
            Subscribe to our newsletter.
            We promise we don’t spam your emails!
          </p>

          {/* Email Input with Button */}
          <div className="relative -mr-2">
            <div className="relative w-full md:w-92 transition-all duration-300">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                onKeyPress={handleKeyPress}
                className={cn("w-full md:w-92 p-3 pr-32 rounded-full bg-white border border-[#E4E4E7] text-light-black placeholder:light-gray focus:outline-none focus:ring-1 focus:ring-light-black transition-all duration-300", isClicked &&
                  "ring-4 ring-light-black")}
              />
              <Button
                onClick={handleSubmit}
                disabled={isPending}
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full active:scale-95 transition-all duration-200"
              >
                {isPending ? (
                  <>
                    Subscribe
                    <Loader2 className="w-5 h-5 shrink-0 animate-spin" />
                  </>
                ) : (
                  <>
                    Subscribe
                    <ChevronRight className="w-5 h-5 shrink-0" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
