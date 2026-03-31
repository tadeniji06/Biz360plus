"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import ArticleCard from "./ArticleCard";
import { Vertical } from "@/lib/verticals";

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

interface Props {
  vertical: Vertical;
  posts: Post[];
}

export default function VerticalIndexContent({ vertical, posts }: Props) {
  return (
    <>
      {/* Vertical Hero Header */}
      <div className="vertical-hero">
        <div className="container">
          <motion.div
            className="vertical-hero-inner"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="vertical-hero-icon">
              <Icon icon={vertical.icon} width={32} color="white" />
            </div>
            <div>
              <div
                className="vertical-badge"
                style={{ marginBottom: "10px" }}
              >
                <Icon icon="mdi:check-circle" width={12} />
                Live Vertical
              </div>
              <h1 className="vertical-hero-title">{vertical.name}</h1>
              <p className="vertical-hero-desc">{vertical.description}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: "80px" }}>
        {/* Breadcrumb */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            color: "var(--color-text-muted)",
            marginBottom: "32px",
          }}
        >
          <Link href="/" style={{ color: "var(--color-primary)" }}>
            Home
          </Link>
          <Icon icon="mdi:chevron-right" width={14} />
          <span>{vertical.name}</span>
        </nav>

        {posts.length > 0 ? (
          <>
            {/* Feature + grid layout */}
            {posts.length >= 2 && (
              <div style={{ marginBottom: "48px" }}>
                <div className="feature-grid">
                  {/* Main feature */}
                  <motion.article
                    className="card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link
                      href={`/${vertical.slug}/${posts[0].slug.current}`}
                    >
                      {posts[0].mainImageUrl ? (
                        <img
                          src={posts[0].mainImageUrl}
                          alt={posts[0].title}
                          className="card-image"
                          style={{ aspectRatio: "16/9" }}
                        />
                      ) : (
                        <div
                          className="card-image"
                          style={{
                            background:
                              "linear-gradient(135deg, #0f172a, #1a56db)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon
                            icon={vertical.icon}
                            width={56}
                            color="rgba(255,255,255,0.2)"
                          />
                        </div>
                      )}
                    </Link>
                    <div className="card-body">
                      {posts[0].categories?.[0] && (
                        <div className="card-category">
                          {posts[0].categories[0].title}
                        </div>
                      )}
                      <h2
                        className="card-title"
                        style={{ fontSize: "22px", lineHeight: "1.25" }}
                      >
                        <Link
                          href={`/${vertical.slug}/${posts[0].slug.current}`}
                        >
                          {posts[0].title}
                        </Link>
                      </h2>
                      {posts[0].excerpt && (
                        <p
                          className="card-excerpt"
                          style={{ WebkitLineClamp: 3 }}
                        >
                          {posts[0].excerpt}
                        </p>
                      )}
                      <div className="card-meta">
                        <span className="card-author">
                          {posts[0].authorName || "Biz360+ Editor"}
                        </span>
                        <span>·</span>
                        <span className="card-date">
                          {posts[0].publishedAt
                            ? new Date(posts[0].publishedAt).toLocaleDateString(
                                "en-GB",
                                { day: "numeric", month: "short", year: "numeric" }
                              )
                            : ""}
                        </span>
                      </div>
                    </div>
                  </motion.article>

                  {/* Right column */}
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: "16px" }}
                  >
                    {posts.slice(1, 4).map((post, i) => (
                      <motion.article
                        key={post._id}
                        className="card"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        style={{ display: "flex", gap: "0" }}
                      >
                        <div style={{ display: "flex", gap: "12px", padding: "12px" }}>
                          {post.mainImageUrl ? (
                            <img
                              src={post.mainImageUrl}
                              alt={post.title}
                              style={{
                                width: "84px",
                                height: "64px",
                                objectFit: "cover",
                                borderRadius: "3px",
                                flexShrink: 0,
                              }}
                            />
                          ) : (
                            <div
                              style={{
                                width: "84px",
                                height: "64px",
                                background: "linear-gradient(135deg, #1a56db, #0f172a)",
                                borderRadius: "3px",
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Icon
                                icon={vertical.icon}
                                width={24}
                                color="rgba(255,255,255,0.4)"
                              />
                            </div>
                          )}
                          <div>
                            {post.categories?.[0] && (
                              <div className="card-category">
                                {post.categories[0].title}
                              </div>
                            )}
                            <h3
                              className="card-title"
                              style={{ fontSize: "14px" }}
                            >
                              <Link
                                href={`/${vertical.slug}/${post.slug.current}`}
                              >
                                {post.title}
                              </Link>
                            </h3>
                            <div
                              className="card-date"
                              style={{ fontSize: "11px" }}
                            >
                              {post.publishedAt
                                ? new Date(post.publishedAt).toLocaleDateString(
                                    "en-GB",
                                    { day: "numeric", month: "short" }
                                  )
                                : ""}
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Remaining articles grid */}
            {posts.length > 4 && (
              <>
                <div className="section-header" style={{ marginBottom: "24px" }}>
                  <h2 className="section-title">Latest Stories</h2>
                </div>
                <div className="articles-grid-3">
                  {posts.slice(4).map((post, i) => (
                    <ArticleCard
                      key={post._id}
                      {...post}
                      vertical={vertical.slug}
                      index={i}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "80px 24px",
              color: "var(--color-text-muted)",
            }}
          >
            <Icon
              icon={vertical.icon}
              width={56}
              color="var(--color-gray-300)"
            />
            <h2
              style={{
                marginTop: "20px",
                fontSize: "24px",
                color: "var(--color-gray-700)",
              }}
            >
              No articles yet
            </h2>
            <p style={{ marginTop: "8px", fontSize: "15px" }}>
              Our editorial team is working on content for this vertical.
              Check back soon.
            </p>
            <Link
              href="/"
              className="btn-subscribe"
              style={{ marginTop: "24px", display: "inline-flex" }}
            >
              <Icon icon="mdi:arrow-left" width={14} />
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
