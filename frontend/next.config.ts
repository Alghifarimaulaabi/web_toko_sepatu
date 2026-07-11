import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://app.sandbox.midtrans.com
    https://app.midtrans.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: http://localhost:5000 https://tokosepatubackend-production.up.railway.app https://res.cloudinary.com;
  font-src 'self' data:;
  connect-src 'self'
    http://localhost:5000
    https://tokosepatubackend-production.up.railway.app
    https://app.sandbox.midtrans.com
    https://app.midtrans.com;
  frame-src
    https://app.sandbox.midtrans.com
    https://app.midtrans.com;
`;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "tokosepatubackend-production.up.railway.app",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;