"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface ArticleCardProps {
  _id: string;
  title: string;
  slug: { current: string } | null;
  publishedAt?: string;
  excerpt?: string;
  mainImageUrl?: string;
  authorName?: string;
  authorImageUrl?: string;
  categories?: { _id: string; title: string }[];
  vertical: string;
  index?: number;
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function ArticleCard({
  title,
  slug,
  publishedAt,
  excerpt,
  mainImageUrl,
  authorName,
  authorImageUrl,
  categories,
  vertical,
  index = 0,
}: ArticleCardProps) {
  const href = `/${vertical}/${slug?.current ?? ''}`;
  if (!slug?.current) return null; // Don't render cards without a valid slug
  const primaryCategory = categories?.[0];

  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <Link href={href}>
        {mainImageUrl ? (
          <img
            src={mainImageUrl}
            alt={title}
            className="card-image"
            loading="lazy"
          />
        ) : (
          <div
            className="card-image"
            style={{
              background:
                "linear-gradient(135deg, #1a56db 0%, #1e3a8a 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon icon="mdi:newspaper-variant" width={48} color="rgba(255,255,255,0.3)" />
          </div>
        )}
      </Link>

      <div className="card-body">
        {primaryCategory && (
          <div className="card-category">{primaryCategory.title}</div>
        )}
        <h3 className="card-title">
          <Link href={href}>{title}</Link>
        </h3>
        {excerpt && <p className="card-excerpt">{excerpt}</p>}
        <div className="card-meta">
          {authorImageUrl ? (
            <img
              src={authorImageUrl}
              alt={authorName || "Author"}
              className="card-author-avatar"
            />
          ) : (
            <div
              className="card-author-avatar"
              style={{
                background: "var(--color-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "10px",
                fontWeight: 700,
              }}
            >
              {authorName?.[0] || "B"}
            </div>
          )}
          {authorName && <span className="card-author">{authorName}</span>}
          {authorName && publishedAt && (
            <span style={{ color: "var(--color-gray-400)" }}>·</span>
          )}
          {publishedAt && (
            <span className="card-date">{formatDate(publishedAt)}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
