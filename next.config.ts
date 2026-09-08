import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
  async redirects() {
    return [
      // Permanent 308 redirects from old Punycode domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "xn--vlourcare-b4a.com" }],
        destination: "https://www.velourcareortho.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xn--vlourcare-b4a.com" }],
        destination: "https://www.velourcareortho.com/:path*",
        permanent: true,
      },
      // Standard path redirects
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/blog/:slug*", destination: "/blogs/:slug*", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/faq", destination: "/faqs", permanent: true },
      { source: "/terms", destination: "/terms-of-service", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/refund", destination: "/refund-policy", permanent: true },
      { source: "/treatment", destination: "/how-we-treat", permanent: true },
      { source: "/treatments", destination: "/how-we-treat", permanent: true },
    ];
  },
};

export default nextConfig;

