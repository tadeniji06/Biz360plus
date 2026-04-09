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

interface NewsSectionProps {
  title: string;
  slug: string;
  icon: string;
  posts: Post[];
}

export default function NewsSection({
  title,
  slug,
  icon,
  posts,
}: NewsSectionProps) {
  if (!posts || posts.length === 0) {
    return (
      <section className="vertical-section">
        <div className="section-header">
          <h2 className="section-title">
            <Icon icon={icon} width={20} color="var(--color-primary)" />
            {title}
          </h2>
          <Link href={`/${slug}`} className="section-link">
            View all <Icon icon="mdi:arrow-right" width={14} />
          </Link>
        </div>
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
          <Icon icon={icon} width={40} color="var(--color-gray-400)" />
          <p style={{ marginTop: "12px", fontSize: "14px" }}>
            Stories loading or not yet published.
          </p>
        </div>
      </section>
    );
  }

  const featured = posts[0];
  const sidePosts = posts.slice(1, 5); // display up to 4 on the side

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

      <div className="feature-grid">
        {/* Main Featured Article */}
        <div className="feature-main">
          <ArticleCard {...featured} vertical={slug} index={0} />
        </div>

        {/* Side Stacked Articles */}
        <div className="feature-side">
          {sidePosts.map((post) => (
            <Link
              key={post._id}
              href={`/${slug}/${post.slug.current}`}
              className="side-article"
            >
              {post.mainImageUrl ? (
                <img
                  src={post.mainImageUrl}
                  alt={post.title}
                  className="side-article-image"
                />
              ) : (
                <div
                  className="side-article-image"
                  style={{
                    backgroundColor: "var(--color-gray-200)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon icon="mdi:newspaper" width={24} color="#9ca3af" />
                </div>
              )}
              <div className="side-article-body">
                <div className="side-article-category">{title}</div>
                <h3 className="side-article-title">{post.title}</h3>
                {post.publishedAt && (
                  <div className="side-article-date">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
