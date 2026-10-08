import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/Services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/web-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/service/Web-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/service/App-development",
        destination: "/services/app-development",
        permanent: true,
      },
      {
        source: "/service/app-development",
        destination: "/services/app-development",
        permanent: true,
      },
      {
        source: "/service/Crm-erp",
        destination: "/services/crm-erp",
        permanent: true,
      },
      {
        source: "/service/crm-erp",
        destination: "/services/crm-erp",
        permanent: true,
      },
      {
        source: "/service/Ecommerce",
        destination: "/services/ecommerce",
        permanent: true,
      },
      {
        source: "/service/ecommerce",
        destination: "/services/ecommerce",
        permanent: true,
      },
      {
        source: "/service/Wordpress",
        destination: "/services/wordpress",
        permanent: true,
      },
      {
        source: "/service/wordpress",
        destination: "/services/wordpress",
        permanent: true,
      },
      {
        source: "/service/Cloud",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/Case-Studies",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/Portfolio",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

