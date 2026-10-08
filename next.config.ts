import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/service/:slug*",
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
