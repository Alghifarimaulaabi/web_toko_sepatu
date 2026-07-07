import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://app.sandbox.midtrans.com
    https://app.midtrans.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: http://localhost:5000;
  font-src 'self' data:;
  connect-src 'self'
    http://localhost:5000
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