import type { MetadataRoute } from "next";
import { blogPosts } from "@/src/data";
import { siteUrl } from "@/src/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/how-we-treat", priority: 0.9, changeFrequency: "monthly" },
    { path: "/invisalign", priority: 0.9, changeFrequency: "monthly" },
    { path: "/kids-ortho", priority: 0.9, changeFrequency: "monthly" },
    { path: "/adult-ortho", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blogs", priority: 0.8, changeFrequency: "weekly" },
    { path: "/faqs", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/refund-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}

