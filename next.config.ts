import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "5e42d78mvz.ufs.sh",
      },
    ],
  },
};

export default nextConfig;