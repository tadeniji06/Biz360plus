"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { SearchResult } from "@/lib/sanity";
import { VERTICALS } from "@/lib/verticals";

interface Props {
  results: SearchResult[];
  query: string;
  loading?: boolean;
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getVerticalName(slug: string) {
  return VERTICALS.find((v) => v.slug === slug)?.name ?? slug;
}

function getVerticalIcon(slug: string) {
  return VERTICALS.find((v) => v.slug === slug)?.icon ?? "mdi:newspaper";
}

export default function SearchResults({ results, query, loading }: Props) {
  if (loading) {
    return (
      <div className="sr-state">
        <div className="sr-spinner" aria-label="Searching…">
          <Icon icon="mdi:loading" width={36} className="sr-spin" />
        </div>
        <p className="sr-state-text">Searching across all verticals…</p>
      </div>
    );
  }

  if (!query) {
    return (
      <div className="sr-state">
        <Icon icon="mdi:text-search" width={52} color="var(--color-gray-400)" />
        <p className="sr-state-text" style={{ marginTop: "16px" }}>
          Type something above to search articles.
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="sr-state">
        <Icon icon="mdi:file-search-outline" width={52} color="var(--color-gray-400)" />
        <h2 className="sr-state-heading">No results for &ldquo;{query}&rdquo;</h2>
        <p className="sr-state-text">
          Try different keywords, or browse a vertical from the navigation bar.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="sr-count">
        <strong>{results.length}</strong> result{results.length !== 1 ? "s" : ""} for{" "}
        <span className="sr-query">&ldquo;{query}&rdquo;</span>
      </p>

      <AnimatePresence>
        <ul className="sr-list" role="list">
          {results.map((post, i) => (
            <motion.li
              key={`${post.vertical}-${post._id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Link
                href={`/${post.vertical}/${post.slug}`}
                className="sr-card"
                aria-label={post.title}
              >
                {/* Thumbnail */}
                <div className="sr-card-thumb">
                  {post.mainImageUrl ? (
                    <img
                      src={post.mainImageUrl}
                      alt={post.title}
                      className="sr-card-img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="sr-card-img sr-card-placeholder">
                      <Icon
                        icon={getVerticalIcon(post.vertical)}
                        width={28}
                        color="rgba(255,255,255,0.4)"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="sr-card-body">
                  {/* Vertical + Category badges */}
                  <div className="sr-card-badges">
                    <span className="sr-vertical-badge">
                      <Icon icon={getVerticalIcon(post.vertical)} width={11} />
                      {getVerticalName(post.vertical)}
                    </span>
                    {post.categories?.[0] && (
                      <span className="sr-category-badge">
                        {post.categories[0].title}
                      </span>
                    )}
                  </div>

                  <h3 className="sr-card-title">{post.title}</h3>

                  {post.excerpt && (
                    <p className="sr-card-excerpt">{post.excerpt}</p>
                  )}

                  <div className="sr-card-meta">
                    {post.authorName && (
                      <span className="sr-card-author">{post.authorName}</span>
                    )}
                    {post.authorName && post.publishedAt && (
                      <span className="sr-card-dot">·</span>
                    )}
                    {post.publishedAt && (
                      <span className="sr-card-date">
                        {formatDate(post.publishedAt)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div className="sr-card-arrow" aria-hidden>
                  <Icon icon="mdi:arrow-right" width={18} />
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </AnimatePresence>

      <style>{`
        .sr-state {
          text-align: center;
          padding: 72px 24px;
          color: var(--color-text-muted);
        }
        .sr-state-heading {
          font-size: 22px;
          color: var(--color-heading);
          margin: 16px 0 8px;
        }
        .sr-state-text {
          font-size: 15px;
          color: var(--color-text-muted);
          max-width: 400px;
          margin: 0 auto;
        }
        .sr-spinner {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
          color: var(--color-primary);
        }
        .sr-spin {
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .sr-count {
          font-size: 14px;
          color: var(--color-text-muted);
          margin-bottom: 24px;
        }
        .sr-query {
          color: var(--color-primary);
          font-weight: 600;
        }

        /* Results list */
        .sr-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          margin: 0;
        }

        /* Card */
        .sr-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: 6px;
          padding: 14px;
          text-decoration: none;
          color: inherit;
          transition: box-shadow 180ms ease, transform 180ms ease, border-color 180ms ease;
        }
        .sr-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
          border-color: var(--color-primary);
        }
        .sr-card:hover .sr-card-title { color: var(--color-primary); }
        .sr-card:hover .sr-card-arrow { color: var(--color-primary); opacity: 1; }

        /* Thumbnail */
        .sr-card-thumb {
          flex-shrink: 0;
          width: 100px;
          height: 72px;
          border-radius: 4px;
          overflow: hidden;
        }
        .sr-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .sr-card-placeholder {
          background: linear-gradient(135deg, #1a56db, #0f172a);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Body */
        .sr-card-body {
          flex: 1;
          min-width: 0;
        }
        .sr-card-badges {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
          flex-wrap: wrap;
        }
        .sr-vertical-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: var(--color-primary);
          color: #fff;
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 2px;
        }
        .sr-category-badge {
          font-size: 10px;
          font-weight: 600;
          color: var(--color-text-muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .sr-card-title {
          font-size: 15px;
          font-weight: 700;
          line-height: 1.35;
          color: var(--color-heading);
          margin-bottom: 4px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 180ms ease;
        }
        .sr-card-excerpt {
          font-size: 12.5px;
          color: var(--color-text-muted);
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 6px;
        }
        .sr-card-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
        }
        .sr-card-author { font-weight: 600; color: var(--color-gray-700); }
        .sr-card-dot { color: var(--color-gray-400); }
        .sr-card-date { color: var(--color-gray-500); }

        /* Arrow */
        .sr-card-arrow {
          flex-shrink: 0;
          color: var(--color-gray-400);
          opacity: 0.4;
          transition: color 180ms ease, opacity 180ms ease;
        }

        /* Mobile */
        @media (max-width: 640px) {
          .sr-card-thumb { width: 76px; height: 56px; }
          .sr-card-title { font-size: 14px; }
          .sr-card-excerpt { display: none; }
          .sr-card-arrow { display: none; }
        }
      `}</style>
    </div>
  );
}
