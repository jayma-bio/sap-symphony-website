import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/modules/navbar";
import { QueryProvider } from "@/components/providers/query-provider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const pphatton = localFont({
  src: "./fonts/pphatton.otf",
  variable: "--font-pphatton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sap Symphony",
  description: "Decode Natures Secret Symphony",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body
        className={`${dmSans.variable} ${manrope.variable} ${pphatton.variable} antialiased min-h-screen overflow-x-hidden scroll-smooth`}
        suppressHydrationWarning
      >
        <QueryProvider>

          <NextTopLoader showSpinner={false} />
          <Navbar />
          {children}
          <Toaster />

        </QueryProvider>
      </body>
    </html>
  );
}
