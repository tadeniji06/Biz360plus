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

export const revalidate = 300;

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

  return <ArticlePageContent post={post} vertical={vertical} />;
}
