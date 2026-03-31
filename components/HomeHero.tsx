"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export interface HeroPost {
  _id: string;
  title: string;
  slug: { current: string } | null;
  publishedAt?: string;
  excerpt?: string;
  mainImageUrl?: string;
  authorName?: string;
  categories?: { _id: string; title: string }[];
  verticalSlug: string;
}

interface HomeHeroProps {
  allPosts: HeroPost[];
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const ROTATION_INTERVAL = 6000; // 6 seconds per slide

export default function HomeHero({ allPosts }: HomeHeroProps) {
  const validPosts = allPosts.filter((p) => p.slug?.current);
  const featured = validPosts.slice(0, 6); // up to 6 rotating hero posts
  const sidePosts = validPosts.slice(0, 5); // sidebar: first 5 valid posts

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate
  useEffect(() => {
    if (featured.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % featured.length);
    }, ROTATION_INTERVAL);
    return () => clearInterval(timer);
  }, [featured.length, isPaused]);

  const currentPost = featured[activeIndex] ?? null;

  return (
    <section
      className="hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-grid">
        {/* ── Main rotating feature ── */}
        <div className="hero-main">
          {currentPost ? (
            <div style={{ position: "relative" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPost._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                >
                  <Link
                    href={`/${currentPost.verticalSlug}/${currentPost.slug!.current}`}
                    className="hero-article"
                    style={{ display: "block" }}
                  >
                    <div className="hero-article" style={{ cursor: "pointer" }}>
                      {currentPost.mainImageUrl ? (
                        <img
                          src={currentPost.mainImageUrl}
                          alt={currentPost.title}
                          className="hero-article-image"
                        />
                      ) : (
                        <div
                          className="hero-article-image"
                          style={{
                            background:
                              "linear-gradient(135deg, #0f172a 0%, #1a56db 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: "16px",
                          }}
                        >
                          <Icon
                            icon="mdi:newspaper-variant-multiple"
                            width={72}
                            color="rgba(255,255,255,0.15)"
                          />
                          <span
                            style={{
                              color: "rgba(255,255,255,0.4)",
                              fontSize: "14px",
                            }}
                          >
                            Biz360+ Feature Story
                          </span>
                        </div>
                      )}
                      <div className="hero-article-overlay" />
                      <div className="hero-article-content">
                        {currentPost.categories?.[0] && (
                          <span className="hero-article-category">
                            {currentPost.categories[0].title}
                          </span>
                        )}
                        <h1 className="hero-article-title">
                          {currentPost.title}
                        </h1>
                        <div className="hero-article-meta">
                          {currentPost.authorName && (
                            <span className="hero-article-author">
                              By {currentPost.authorName}
                            </span>
                          )}
                          {currentPost.publishedAt && (
                            <>
                              <span>·</span>
                              <span>{formatDate(currentPost.publishedAt)}</span>
                            </>
                          )}
                          <span
                            style={{
                              marginLeft: "auto",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            Read More
                            <Icon icon="mdi:arrow-right" width={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Dot indicators + prev/next controls */}
              {featured.length > 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    right: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    zIndex: 10,
                  }}
                >
                  {/* Prev */}
                  <button
                    onClick={() =>
                      setActiveIndex(
                        (i) => (i - 1 + featured.length) % featured.length
                      )
                    }
                    aria-label="Previous story"
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "white",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <Icon icon="mdi:chevron-left" width={16} />
                  </button>

                  {/* Dots */}
                  {featured.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Story ${i + 1}`}
                      style={{
                        width: i === activeIndex ? "20px" : "8px",
                        height: "8px",
                        borderRadius: "4px",
                        border: "none",
                        background:
                          i === activeIndex
                            ? "white"
                            : "rgba(255,255,255,0.45)",
                        cursor: "pointer",
                        padding: 0,
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}

                  {/* Next */}
                  <button
                    onClick={() =>
                      setActiveIndex((i) => (i + 1) % featured.length)
                    }
                    aria-label="Next story"
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "white",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <Icon icon="mdi:chevron-right" width={16} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* No valid posts at all */
            <div
              className="hero-article"
              style={{
                background: "var(--color-gray-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "480px",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                style={{ textAlign: "center", color: "var(--color-text-muted)" }}
              >
                <Icon icon="mdi:newspaper-variant" width={48} />
                <p style={{ marginTop: "12px", fontSize: "14px" }}>
                  No stories available yet — check back soon.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── Sidebar: recent articles ── */}
        <motion.aside
          className="hero-sidebar"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {sidePosts.length > 0 ? (
            sidePosts.map((post, i) => (
              <motion.article
                key={post._id}
                className="side-article"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  href={`/${post.verticalSlug}/${post.slug!.current}`}
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
                        background:
                          "linear-gradient(135deg, #1a56db, #0f172a)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        icon="mdi:newspaper"
                        width={28}
                        color="rgba(255,255,255,0.4)"
                      />
                    </div>
                  )}
                </Link>
                <div className="side-article-body">
                  {post.categories?.[0] && (
                    <div className="side-article-category">
                      {post.categories[0].title}
                    </div>
                  )}
                  <h3 className="side-article-title">
                    <Link
                      href={`/${post.verticalSlug}/${post.slug!.current}`}
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <div className="side-article-date">
                    {formatDate(post.publishedAt)}
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            /* Skeleton while empty */
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="side-article">
                <div
                  className="side-article-image skeleton"
                  style={{ borderRadius: "3px" }}
                />
                <div
                  className="side-article-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <div
                    className="skeleton"
                    style={{ height: "10px", width: "60px" }}
                  />
                  <div
                    className="skeleton"
                    style={{ height: "14px", width: "100%" }}
                  />
                  <div
                    className="skeleton"
                    style={{ height: "14px", width: "80%" }}
                  />
                  <div
                    className="skeleton"
                    style={{ height: "11px", width: "40px" }}
                  />
                </div>
              </div>
            ))
          )}
        </motion.aside>
      </div>
    </section>
  );
}
