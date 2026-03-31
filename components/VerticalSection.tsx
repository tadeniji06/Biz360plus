"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import ArticleCard from "./ArticleCard";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  excerpt?: string;
  mainImageUrl?: string;
  authorName?: string;
  authorImageUrl?: string;
  categories?: { _id: string; title: string }[];
}

interface VerticalSectionProps {
  title: string;
  slug: string;
  icon: string;
  posts: Post[];
}

export default function VerticalSection({
  title,
  slug,
  icon,
  posts,
}: VerticalSectionProps) {
  return (
    <section className="vertical-section">
      <div className="section-header">
        <h2 className="section-title">
          <Icon icon={icon} width={20} color="var(--color-primary)" />
          {title}
        </h2>
        <Link href={`/${slug}`} className="section-link">
          View all
          <Icon icon="mdi:arrow-right" width={14} />
        </Link>
      </div>

      {posts.length > 0 ? (
        <div className="articles-grid-3">
          {posts.map((post, i) => (
            <ArticleCard
              key={post._id}
              {...post}
              vertical={slug}
              index={i}
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            padding: "48px 24px",
            textAlign: "center",
            color: "var(--color-text-muted)",
            background: "var(--color-gray-100)",
            borderRadius: "4px",
            border: "1px solid var(--color-border)",
          }}
        >
          <Icon
            icon={icon}
            width={40}
            color="var(--color-gray-400)"
          />
          <p style={{ marginTop: "12px", fontSize: "14px" }}>
            Stories loading or not yet published.
          </p>
        </div>
      )}
    </section>
  );
}
