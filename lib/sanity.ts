import { createClient } from "@sanity/client";

// Vertical Sanity project IDs
export const SANITY_IDS = {
  hospitality: "pf872mb3",
  tech: "dx9ee77h",
  marketing: "wyavdc9t",
  companies: "yrttf8j1",
  news: "z8q6qns0",
  retail: "ixy48pl4",
  finance: "87y3pr85",
  economy: "ws1y8t2e",
  femmebiz: "6vo13t80",
  "real-estate": "sbhmplpj",
} as const;

export type ActiveVertical = keyof typeof SANITY_IDS;

// Create a Sanity client for a specific project ID
export function getSanityClient(projectId: string) {
  return createClient({
    projectId,
    dataset: "production",
    apiVersion: "2024-01-01",
    // useCdn: false ensures freshly published content is always returned.
    // The Sanity CDN can cache for up to 60s, causing new posts to not appear.
    useCdn: false,
  });
}

// Utility: fetch posts for a vertical
export async function fetchPosts(vertical: ActiveVertical, limit = 10) {
  const client = getSanityClient(SANITY_IDS[vertical]);
  const query = `*[_type == "post"] | order(publishedAt desc)[0...${limit}] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "mainImageUrl": mainImage.asset->url,
    "authorName": author->name,
    "authorImageUrl": author->image.asset->url,
    "categories": categories[]->{ _id, title },
    body
  }`;
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error(`Failed to fetch posts for ${vertical}:`, error);
    return [];
  }
}

// Utility: fetch a single post by slug
export async function fetchPost(vertical: ActiveVertical, slug: string) {
  const client = getSanityClient(SANITY_IDS[vertical]);
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "mainImageUrl": mainImage.asset->url,
    "authorName": author->name,
    "authorImageUrl": author->image.asset->url,
    "authorBio": author->bio,
    "categories": categories[]->{ _id, title },
    body
  }`;
  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error(`Failed to fetch post setup for ${vertical}/${slug}:`, error);
    return null;
  }
}

// Utility: fetch categories
export async function fetchCategories(vertical: ActiveVertical) {
  const client = getSanityClient(SANITY_IDS[vertical]);
  const query = `*[_type == "category"] | order(title asc) { _id, title, description }`;
  try {
    return await client.fetch(query);
  } catch {
    return [];
  }
}

// Utility: fetch posts by category
export async function fetchPostsByCategory(
  vertical: ActiveVertical,
  categoryTitle: string,
  limit = 10
) {
  const client = getSanityClient(SANITY_IDS[vertical]);
  const query = `*[_type == "post" && $categoryTitle in categories[]->title] | order(publishedAt desc)[0...${limit}] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "mainImageUrl": mainImage.asset->url,
    "authorName": author->name,
    "categories": categories[]->{ _id, title }
  }`;
  try {
    return await client.fetch(query, { categoryTitle });
  } catch {
    return [];
  }
}

/**
 * Utility: fetch all posts across all verticals for sitemap.
 * Returns an array of objects with slug, publishedAt, and vertical name.
 */
export async function getAllPostsForSitemap() {
  const activeVerticals = Object.keys(SANITY_IDS) as ActiveVertical[];
  const allPosts: { slug: string; publishedAt: string; vertical: string }[] = [];

  for (const vertical of activeVerticals) {
    const client = getSanityClient(SANITY_IDS[vertical]);
    const query = `*[_type == "post"] {
      "slug": slug.current,
      publishedAt
    }`;
    try {
      const posts = await client.fetch(query);
      if (posts && Array.isArray(posts)) {
        allPosts.push(
          ...posts.map((p: any) => ({
            slug: p.slug,
            publishedAt: p.publishedAt,
            vertical: vertical,
          }))
        );
      }
    } catch (error) {
      console.error(`Failed to fetch sitemap posts for ${vertical}:`, error);
    }
  }
  return allPosts;
}
