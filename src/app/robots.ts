import type { MetadataRoute } from "next";
import { siteUrl } from "@/src/lib/site";

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.VERCEL_ENV === "preview";

  if (isPreview) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/favicon.png",
          "/favicon.ico",
          "/favicon-48x48.png",
          "/favicon-96x96.png",
          "/favicon-192x192.png",
          "/favicon-512x512.png",
          "/apple-touch-icon.png",
          "/_next/static/",
          "/agents.md",
          "/llms.txt",
          "/llms-full.txt",
          "/sitemap.xml",
          "/policies/",
        ],
        disallow: ["/api/", "/private/", "/admin/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "anthropic-ai",
          "Claude-Web",
          "PerplexityBot",
          "Perplexity-User",
          "CCBot",
          "Google-Extended",
          "cohere-ai",
          "Applebot-Extended",
          "Bytespider",
          "Amazonbot",
          "meta-externalagent",
        ],
        allow: [
          "/agents.md",
          "/llms.txt",
          "/llms-full.txt",
          "/sitemap.xml",
          "/policies/",
        ],
        disallow: ["/private/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}



