import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['http://172.26.240.1'],
  images: {
    domains: ['i.annihil.us'],  
  },
  /* config options here */
};

export default nextConfig;
