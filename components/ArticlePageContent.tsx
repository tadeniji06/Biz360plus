"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Vertical } from "@/lib/verticals";

interface BlockChild {
  _key: string;
  _type: string;
  text: string;
  marks?: string[];
}

interface Block {
  _key: string;
  _type: string;
  style?: string;
  children?: BlockChild[];
  markDefs?: Array<{ _key: string; _type: string; href?: string }>;
  asset?: { url: string };
  alt?: string;
  level?: number;
  listItem?: string;
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  excerpt?: string;
  mainImageUrl?: string;
  authorName?: string;
  authorImageUrl?: string;
  authorBio?: Block[];
  categories?: { _id: string; title: string }[];
  body?: Block[];
}

interface Props {
  post: Post;
  vertical: Vertical;
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderBlock(block: Block): React.ReactNode {
  if (!block) return null;

  // Image blocks
  if (block._type === "image" && block.asset?.url) {
    return (
      <figure key={block._key} style={{ margin: "32px 0" }}>
        <img
          src={block.asset.url}
          alt={block.alt || "Article image"}
          style={{ width: "100%", borderRadius: "4px" }}
        />
        {block.alt && (
          <figcaption
            style={{
              fontSize: "13px",
              color: "var(--color-text-muted)",
              textAlign: "center",
              marginTop: "8px",
              fontStyle: "italic",
            }}
          >
            {block.alt}
          </figcaption>
        )}
      </figure>
    );
  }

  if (block._type !== "block") return null;

  const renderChildren = (children?: BlockChild[], markDefs?: Block["markDefs"]) => {
    return children?.map((child) => {
      if (!child.marks || child.marks.length === 0) {
        return <span key={child._key}>{child.text}</span>;
      }

      let content: React.ReactNode = child.text;

      if (child.marks.includes("strong")) {
        content = <strong key={child._key + "strong"}>{content}</strong>;
      }
      if (child.marks.includes("em")) {
        content = <em key={child._key + "em"}>{content}</em>;
      }
      if (child.marks.includes("code")) {
        content = (
          <code
            key={child._key + "code"}
            style={{
              background: "var(--color-gray-100)",
              padding: "2px 6px",
              borderRadius: "3px",
              fontSize: "0.9em",
              fontFamily: "monospace",
            }}
          >
            {content}
          </code>
        );
      }

      // Check for link marks
      const linkMark = child.marks.find((m) =>
        markDefs?.some((def) => def._key === m && def._type === "link")
      );
      if (linkMark) {
        const linkDef = markDefs?.find((def) => def._key === linkMark);
        if (linkDef?.href) {
          content = (
            <a
              key={child._key + "link"}
              href={linkDef.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          );
        }
      }

      return <span key={child._key}>{content}</span>;
    });
  };

  const children = renderChildren(block.children, block.markDefs);

  switch (block.style) {
    case "h2":
      return <h2 key={block._key}>{children}</h2>;
    case "h3":
      return <h3 key={block._key}>{children}</h3>;
    case "h4":
      return <h4 key={block._key}>{children}</h4>;
    case "blockquote":
      return <blockquote key={block._key}>{children}</blockquote>;
    default:
      // List items handled separately
      if (block.listItem === "bullet") {
        return <li key={block._key}>{children}</li>;
      }
      if (block.listItem === "number") {
        return <li key={block._key}>{children}</li>;
      }
      return <p key={block._key}>{children}</p>;
  }
}

function renderBody(body?: Block[]) {
  if (!body || body.length === 0)
    return (
      <p style={{ color: "var(--color-text-muted)", fontStyle: "italic" }}>
        No content available.
      </p>
    );

  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < body.length) {
    const block = body[i];

    // Group bullet list items
    if (block.listItem === "bullet") {
      const listItems: Block[] = [];
      while (i < body.length && body[i].listItem === "bullet") {
        listItems.push(body[i]);
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`}>
          {listItems.map((item) => renderBlock(item))}
        </ul>
      );
      continue;
    }

    // Group numbered list items
    if (block.listItem === "number") {
      const listItems: Block[] = [];
      while (i < body.length && body[i].listItem === "number") {
        listItems.push(body[i]);
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`}>
          {listItems.map((item) => renderBlock(item))}
        </ol>
      );
      continue;
    }

    elements.push(renderBlock(block));
    i++;
  }

  return elements;
}

export default function ArticlePageContent({ post, vertical }: Props) {
  return (
    <div className="article-page">
      <div className="container">
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
          <Link href={`/${vertical.slug}`} style={{ color: "var(--color-primary)" }}>
            {vertical.name}
          </Link>
          <Icon icon="mdi:chevron-right" width={14} />
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "200px",
            }}
          >
            {post.title}
          </span>
        </nav>

        <div className="article-layout">
          {/* Main Article */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <header className="article-header">
              <div className="article-category-row">
                {post.categories?.map((cat) => (
                  <span key={cat._id} className="article-category-tag">
                    {cat.title}
                  </span>
                ))}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    color: "var(--color-primary)",
                    fontWeight: 600,
                  }}
                >
                  <Icon icon={vertical.icon} width={14} />
                  {vertical.name}
                </span>
              </div>

              <h1 className="article-title">{post.title}</h1>

              {post.excerpt && (
                <p
                  style={{
                    fontSize: "18px",
                    color: "var(--color-gray-700)",
                    lineHeight: "1.7",
                    marginBottom: "20px",
                    fontWeight: 400,
                  }}
                >
                  {post.excerpt}
                </p>
              )}

              <div className="article-meta">
                {post.authorImageUrl ? (
                  <img
                    src={post.authorImageUrl}
                    alt={post.authorName || "Author"}
                    className="article-author-avatar"
                  />
                ) : (
                  <div
                    className="article-author-avatar"
                    style={{
                      background: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: 700,
                    }}
                  >
                    {post.authorName?.[0]?.toUpperCase() || "B"}
                  </div>
                )}
                <div className="article-author-info">
                  <div className="article-author-name">
                    {post.authorName || "Business360 Editorial Team"}
                  </div>
                  <div className="article-date">
                    {formatDate(post.publishedAt)}
                  </div>
                </div>

                {/* Share buttons */}
                <div style={{ display: "flex", gap: "8px", marginLeft: "auto" }}>
                  <button
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`,
                        "_blank"
                      )
                    }
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "var(--color-gray-100)",
                      border: "1px solid var(--color-border)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-gray-600)",
                    }}
                    aria-label="Share on Twitter"
                  >
                    <Icon icon="mdi:twitter" width={14} />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`,
                        "_blank"
                      )
                    }
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "var(--color-gray-100)",
                      border: "1px solid var(--color-border)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-gray-600)",
                    }}
                    aria-label="Share on LinkedIn"
                  >
                    <Icon icon="mdi:linkedin" width={14} />
                  </button>
                </div>
              </div>
            </header>

            {/* Cover Image */}
            {post.mainImageUrl && (
              <img
                src={post.mainImageUrl}
                alt={post.title}
                className="article-cover"
              />
            )}

            {/* Body */}
            <div className="article-body">{renderBody(post.body)}</div>

            {/* Tags */}
            {post.categories && post.categories.length > 0 && (
              <div
                style={{
                  marginTop: "48px",
                  paddingTop: "24px",
                  borderTop: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Tags:
                </span>
                {post.categories.map((cat) => (
                  <span
                    key={cat._id}
                    style={{
                      padding: "4px 12px",
                      background: "var(--color-gray-100)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "2px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--color-gray-700)",
                    }}
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
            )}

            {/* Back link */}
            <div style={{ marginTop: "32px" }}>
              <Link
                href={`/${vertical.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  color: "var(--color-primary)",
                  fontWeight: 600,
                }}
              >
                <Icon icon="mdi:arrow-left" width={16} />
                More from {vertical.name}
              </Link>
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className="sidebar">
            {/* Author card */}
            {post.authorName && (
              <div className="sidebar-widget">
                <div className="sidebar-widget-title">About the Author</div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  {post.authorImageUrl ? (
                    <img
                      src={post.authorImageUrl}
                      alt={post.authorName}
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid var(--color-border)",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        background: "var(--color-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "20px",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {post.authorName[0].toUpperCase()}
                    </div>
                  )}
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "var(--color-heading)",
                      }}
                    >
                      {post.authorName}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--color-text-muted)",
                        marginTop: "2px",
                      }}
                    >
                      {vertical.name} Correspondent
                    </div>
                  </div>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
