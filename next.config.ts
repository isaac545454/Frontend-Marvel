import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['http://172.26.240.1'],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.annihil.us',
        pathname: '/**',
      },
    ]
  }
};

export default nextConfig;
