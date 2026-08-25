import type { MetadataRoute } from "next";
import { getAllPostsForSitemap } from "@/lib/sanity";
import { getActiveVerticals } from "@/lib/verticals";
import { REPORTS } from "@/lib/reports";

/**
 * Sitemap generator for thisisbusiness360.com
 * Includes static pages, active verticals, intelligence reports, and all sanity posts.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://thisisbusiness360.com";

  // 1. Fetch all blog posts across all verticals from Sanity
  const allPosts = await getAllPostsForSitemap();

  // 2. Create sitemap entries for dynamic blog posts (/[vertical]/[slug])
  const blogEntries: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${baseUrl}/${post.vertical}/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 3. Get all active verticals (/[vertical])
  const activeVerticals = getActiveVerticals();
  const verticalEntries: MetadataRoute.Sitemap = activeVerticals.map((v) => ({
    url: `${baseUrl}/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 4. Intelligence Reports (/[reports]/[slug])
  const reportEntries: MetadataRoute.Sitemap = REPORTS.map((report) => ({
    url: `${baseUrl}/reports/${report.slug}`,
    lastModified: new Date(report.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 5. Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/advertise`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/b360tv`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reports`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // The user requested /blog, even though it's currently handled by verticals
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // New routes added during landing page integration
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/database`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/repository`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Combine all entries: Static -> Verticals -> Reports -> Posts
  return [
    ...staticPages,
    ...verticalEntries,
    ...reportEntries,
    ...blogEntries,
  ];
}
