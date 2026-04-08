import { Metadata } from "next";
import { notFound } from "next/navigation";
import { VERTICALS, getVertical } from "@/lib/verticals";
import { fetchPosts } from "@/lib/sanity";
import { ActiveVertical } from "@/lib/sanity";
import ComingSoon from "@/components/ComingSoon";
import VerticalIndexContent from "@/components/VerticalIndexContent";

interface Props {
  params: Promise<{ vertical: string }>;
}

export async function generateStaticParams() {
  return VERTICALS.map((v) => ({ vertical: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vertical: slug } = await params;
  const vertical = getVertical(slug);
  if (!vertical) return {};
  return {
    title: `${vertical.name} | Business360`,
    description: vertical.description,
  };
}

export const revalidate = 60;

export default async function VerticalPage({ params }: Props) {
  const { vertical: slug } = await params;
  const vertical = getVertical(slug);

  if (!vertical) {
    notFound();
  }

  if (vertical.status === "coming-soon") {
    return <ComingSoon vertical={vertical} />;
  }

  // Active vertical — fetch posts
  const posts = await fetchPosts(vertical.sanityKey as ActiveVertical, 12);

  return <VerticalIndexContent vertical={vertical} posts={posts} />;
}
