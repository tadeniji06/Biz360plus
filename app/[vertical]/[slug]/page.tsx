import { Metadata } from "next";
import { notFound } from "next/navigation";
import { VERTICALS, getVertical } from "@/lib/verticals";
import { fetchPost } from "@/lib/sanity";
import { ActiveVertical } from "@/lib/sanity";
import ArticlePageContent from "@/components/ArticlePageContent";

interface Props {
  params: Promise<{ vertical: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vertical: verticalSlug, slug } = await params;
  const vertical = getVertical(verticalSlug);
  if (!vertical || vertical.status !== "active") return {};

  const post = await fetchPost(vertical.sanityKey as ActiveVertical, slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${vertical.name} | Business360`,
    description: post.excerpt || `Read about ${post.title} on Business360`,
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      images: post.mainImageUrl ? [post.mainImageUrl] : [],
    },
  };
}

export const revalidate = 60;

export default async function ArticlePage({ params }: Props) {
  const { vertical: verticalSlug, slug } = await params;
  const vertical = getVertical(verticalSlug);

  if (!vertical || vertical.status !== "active") {
    notFound();
  }

  const post = await fetchPost(vertical.sanityKey as ActiveVertical, slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || "",
    image: post.mainImageUrl || "https://www.thisisbusiness360.com/logo.png",
    datePublished: post.publishedAt || new Date().toISOString(),
    dateModified: post.publishedAt || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: post.authorName || "Business360 Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Business 360",
      logo: {
        "@type": "ImageObject",
        url: "https://www.thisisbusiness360.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.thisisbusiness360.com/${verticalSlug}/${slug}`,
    },
    url: `https://www.thisisbusiness360.com/${verticalSlug}/${slug}`,
    articleSection: vertical.name,
    keywords: post.categories?.map((c: { title: string }) => c.title).join(", ") || vertical.name,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ArticlePageContent post={post} vertical={vertical} />
    </>
  );
}
