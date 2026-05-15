import type { Metadata } from "next";
import { searchPosts } from "@/lib/sanity";
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `"${q}" — Search | Business360` : "Search | Business360",
    description: q
      ? `Search results for "${q}" across all Business360 verticals.`
      : "Search articles across all Business360 verticals.",
  };
}

export const revalidate = 0; // Always fresh — search is real-time

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  // Fan out to all Sanity projects on the server
  const results = query.length >= 2 ? await searchPosts(query) : [];

  return (
    <>
      {/* Page Header */}
      <div className="search-page-header">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="search-breadcrumb" aria-label="Breadcrumb">
            <Link href="/" className="search-breadcrumb-link">Home</Link>
            <Icon icon="mdi:chevron-right" width={14} aria-hidden />
            <span>Search</span>
          </nav>

          <h1 className="search-page-title">
            <Icon icon="mdi:magnify" width={28} aria-hidden />
            Search
          </h1>
          <p className="search-page-subtitle">
            Find articles across all Business360 verticals — News, Tech, Finance, and more.
          </p>

          {/* Search bar — pre-filled with the current query */}
          <div className="search-page-bar">
            <SearchBar initialValue={query} autoFocus={!query} />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container search-page-results">
        <SearchResults results={results} query={query} />
      </div>

      <style>{`
        .search-page-header {
          background: var(--color-gray-100);
          border-bottom: 1px solid var(--color-border);
          padding: 32px 0 40px;
        }
        .search-breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--color-text-muted);
          margin-bottom: 20px;
        }
        .search-breadcrumb-link {
          color: var(--color-primary);
          font-weight: 500;
          transition: opacity 150ms ease;
        }
        .search-breadcrumb-link:hover { opacity: 0.75; }
        .search-page-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 30px;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: var(--color-heading);
          margin-bottom: 6px;
        }
        .search-page-subtitle {
          font-size: 14px;
          color: var(--color-text-muted);
          margin-bottom: 24px;
        }
        .search-page-bar {
          max-width: 680px;
        }
        .search-page-results {
          padding-top: 36px;
          padding-bottom: 80px;
          max-width: 860px;
        }
      `}</style>
    </>
  );
}
