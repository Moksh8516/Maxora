import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    META_PIXEL_ID: process.env.META_PIXEL_ID,
  },
  async redirects() {
    return [
      {
        source: "/Service/:slug*",
        destination: "/Services/:slug*",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

