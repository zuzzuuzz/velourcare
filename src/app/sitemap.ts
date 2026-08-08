import type { MetadataRoute } from "next";
import { blogPosts } from "@/src/data";
import { siteUrl } from "@/src/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/how-we-treat", "/invisalign", "/kids-ortho", "/adult-ortho", "/about-us", "/contact", "/blogs", "/faqs", "/privacy-policy", "/refund-policy", "/terms-of-service"];
  return [
    ...staticPaths.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...blogPosts.map((post) => ({ url: `${siteUrl}/blogs/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
