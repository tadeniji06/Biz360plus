"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { ChevronDown, X, Mail, ArrowRight } from "lucide-react";

import { VERTICALS } from "@/lib/verticals";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [newsletterBannerDismissed, setNewsletterBannerDismissed] = useState(false);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const insightsRef = useRef<HTMLLIElement>(null);

  // Close everything on route change
  useEffect(() => {
    setNavOpen(false);
    setSearchOpen(false);
    setSearchValue("");
    setInsightsOpen(false);
    setMobileInsightsOpen(false);
  }, [pathname]);

  // Auto-focus search input when overlay opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  // Close search on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setInsightsOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [navOpen]);

  // Close Insights dropdown on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (insightsRef.current && !insightsRef.current.contains(e.target as Node)) {
        setInsightsOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="navbar-top">
            {/* Logo */}
            <Link href="/" className="navbar-logo" onClick={() => setNavOpen(false)}>
              <Image
                src="/newlogo.png"
                alt="Business360"
                width={260}
                height={72}
                className="navbar-logo-img"
                priority
              />
            </Link>

            {/* Actions */}
            <div className="navbar-actions">
              <button
                className={`btn-search${searchOpen ? " btn-search--active" : ""}`}
                aria-label={searchOpen ? "Close search" : "Open search"}
                aria-expanded={searchOpen}
                onClick={() => { setSearchOpen(!searchOpen); setNavOpen(false); }}
              >
                <Icon icon={searchOpen ? "mdi:close" : "mdi:magnify"} width={18} />
              </button>

              {/* Hamburger */}
              <button
                className="navbar-hamburger"
                onClick={() => setNavOpen(!navOpen)}
                aria-label={navOpen ? "Close menu" : "Open menu"}
                aria-expanded={navOpen}
              >
                <Icon icon={navOpen ? "mdi:close" : "mdi:menu"} width={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="navbar-search-overlay">
            <div className="container">
              <form
                className="navbar-search-form"
                role="search"
                onSubmit={(e) => {
                  e.preventDefault();
                  const trimmed = searchValue.trim();
                  if (trimmed.length < 2) return;
                  setSearchOpen(false);
                  router.push(`/search?q=${encodeURIComponent(trimmed)}`);
                }}
              >
                <Icon icon="mdi:magnify" width={18} className="navbar-search-icon" aria-hidden />
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search articles across all verticals…"
                  className="navbar-search-input"
                  aria-label="Search"
                />
                <button type="submit" className="navbar-search-submit" disabled={searchValue.trim().length < 2}>
                  <Icon icon="mdi:arrow-right" width={18} />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Nav Strip */}
        <nav
          className={`navbar-nav${navOpen ? " navbar-nav--open" : ""}`}
          aria-label="Site navigation"
        >
          <div className="container">
            <ul className="navbar-nav-list">

              {/* DATABASE */}
              <li className="navbar-nav-item">
                <Link
                  href="/database"
                  className={`navbar-nav-link nav-highlight${isActive("/database") ? " active" : ""}`}
                  onClick={() => setNavOpen(false)}
                >
                  <Icon icon="mdi:database" width={14} />
                  Database
                </Link>
              </li>

              {/* INSIGHTS (with dropdown) */}
              <li
                className="navbar-nav-item navbar-insights-item"
                ref={insightsRef}
                onMouseEnter={() => setInsightsOpen(true)}
                onMouseLeave={() => setInsightsOpen(false)}
              >
                {/* Desktop: hover-triggered dropdown */}
                <button
                  className={`navbar-nav-link navbar-insights-btn${isActive("/insights") || insightsOpen ? " active" : ""}`}
                  onClick={() => setInsightsOpen((o) => !o)}
                  aria-expanded={insightsOpen}
                  aria-haspopup="true"
                >
                  <Icon icon="mdi:newspaper-variant" width={14} />
                  Insights
                  <ChevronDown
                    className={`navbar-chevron${insightsOpen ? " navbar-chevron--open" : ""}`}
                    width={13}
                  />
                </button>

                {/* Desktop dropdown panel */}
                {insightsOpen && (
                  <div className="insights-dropdown">
                    {/* Newsletter prompt */}
                    {!newsletterBannerDismissed && (
                      <div className="insights-newsletter-banner">
                        <div className="insights-newsletter-inner">
                          <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                          <p>
                            <strong>Subscribe to our newsletter</strong> — get sector insights
                            delivered to your inbox.
                          </p>
                          <Link
                            href="/insights"
                            className="insights-newsletter-cta"
                            onClick={() => setInsightsOpen(false)}
                          >
                            Subscribe
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                        <button
                          className="insights-newsletter-close"
                          onClick={(e) => {
                            e.stopPropagation();
                            setNewsletterBannerDismissed(true);
                          }}
                          aria-label="Dismiss"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}

                    {/* Verticals grid */}
                    <div className="insights-dropdown-header">Browse by Sector</div>
                    <div className="insights-verticals-grid">
                      {VERTICALS.map((v) => (
                        <Link
                          key={v.slug}
                          href={`/${v.slug}`}
                          className="insights-vertical-link"
                          onClick={() => setInsightsOpen(false)}
                        >
                          <div className="insights-vertical-icon">
                            <Icon icon={v.icon} width={16} />
                          </div>
                          <span>{v.name}</span>
                        </Link>
                      ))}
                    </div>

                    {/* View all */}
                    <div className="insights-dropdown-footer">
                      <Link
                        href="/insights"
                        className="insights-view-all"
                        onClick={() => setInsightsOpen(false)}
                      >
                        View all Insights
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Mobile: collapsible */}
                <div className="navbar-mobile-insights-toggle">
                  <Link
                    href="/insights"
                    className={`navbar-nav-link${isActive("/insights") ? " active" : ""}`}
                    onClick={() => setNavOpen(false)}
                  >
                    <Icon icon="mdi:newspaper-variant" width={14} />
                    Insights
                  </Link>
                  <button
                    className="mobile-chevron-btn"
                    onClick={() => setMobileInsightsOpen((o) => !o)}
                    aria-expanded={mobileInsightsOpen}
                  >
                    <ChevronDown
                      className={`navbar-chevron${mobileInsightsOpen ? " navbar-chevron--open" : ""}`}
                      width={16}
                    />
                  </button>
                </div>

                {mobileInsightsOpen && (
                  <ul className="mobile-insights-sub">
                    {VERTICALS.map((v) => (
                      <li key={v.slug}>
                        <Link
                          href={`/${v.slug}`}
                          className="mobile-insights-link"
                          onClick={() => setNavOpen(false)}
                        >
                          <Icon icon={v.icon} width={13} />
                          {v.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* REPORTS */}
              <li className="navbar-nav-item">
                <Link
                  href="/reports"
                  className={`navbar-nav-link${isActive("/reports") ? " active" : ""}`}
                  onClick={() => setNavOpen(false)}
                >
                  <Icon icon="mdi:file-chart" width={14} />
                  Reports
                </Link>
              </li>

              {/* REPOSITORY */}
              <li className="navbar-nav-item">
                <Link
                  href="/repository"
                  className={`navbar-nav-link${isActive("/repository") ? " active" : ""}`}
                  onClick={() => setNavOpen(false)}
                >
                  <Icon icon="mdi:archive" width={14} />
                  Repository
                </Link>
              </li>

            </ul>
          </div>
        </nav>
      </header>

      {/* Backdrop — closes nav on outside tap (mobile) */}
      {navOpen && (
        <div
          className="navbar-backdrop"
          onClick={() => setNavOpen(false)}
          aria-hidden
        />
      )}

      <style>{`
        /* ── Top bar ── */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 200;
          background: var(--color-white);
          border-bottom: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }
        .navbar-top {
          height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .navbar-logo-img {
          width: auto;
          height: 68px;
          max-width: 300px;
          object-fit: contain;
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .btn-search {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--color-gray-100);
          border: none;
          cursor: pointer;
          color: var(--color-gray-700);
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }
        .btn-search:hover,
        .btn-search--active {
          background: var(--color-primary);
          color: white;
        }
        .navbar-hamburger {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: var(--color-gray-100);
          border: none;
          cursor: pointer;
          color: var(--color-gray-700);
          transition: background var(--transition-fast), color var(--transition-fast);
          flex-shrink: 0;
        }
        .navbar-hamburger:hover,
        .navbar-hamburger[aria-expanded="true"] {
          background: var(--color-primary);
          color: white;
        }

        /* ── Search Overlay ── */
        .navbar-search-overlay {
          background: var(--color-white);
          border-top: 1px solid var(--color-border);
          border-bottom: 2px solid var(--color-primary);
          padding: 12px 0;
          animation: searchSlideDown 0.18s ease;
        }
        @keyframes searchSlideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .navbar-search-form {
          display: flex;
          align-items: center;
          background: var(--color-gray-100);
          border: 1.5px solid var(--color-border);
          border-radius: 6px;
          overflow: hidden;
          transition: border-color 150ms ease, box-shadow 150ms ease;
          max-width: 680px;
        }
        .navbar-search-form:focus-within {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(26,86,219,0.1);
          background: var(--color-white);
        }
        .navbar-search-icon {
          flex-shrink: 0;
          margin: 0 12px;
          color: var(--color-gray-500);
        }
        .navbar-search-input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--color-text);
          padding: 11px 0;
        }
        .navbar-search-input::placeholder { color: var(--color-gray-500); }
        .navbar-search-input::-webkit-search-cancel-button { display: none; }
        .navbar-search-submit {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: var(--color-primary);
          border: none;
          color: white;
          cursor: pointer;
          transition: background 150ms ease, opacity 150ms ease;
        }
        .navbar-search-submit:hover { background: var(--color-primary-dark); }
        .navbar-search-submit:disabled { opacity: 0.35; cursor: default; }

        /* ── Nav strip ── */
        .navbar-nav {
          background: var(--color-dark);
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .navbar-nav-list {
          display: flex;
          align-items: center;
          list-style: none;
          padding: 0;
          margin: 0;
          overflow: visible;
        }
        .navbar-nav-item { position: relative; flex-shrink: 0; }

        .navbar-nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 12px 16px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: color 150ms ease, border-color 150ms ease;
          text-decoration: none;
          cursor: pointer;
          background: none;
          border-top: none;
          border-left: none;
          border-right: none;
        }
        .navbar-nav-link:hover,
        .navbar-nav-link.active {
          color: white;
          border-bottom-color: var(--color-primary-light);
        }
        .navbar-nav-link.nav-highlight {
          color: #60a5fa;
          font-weight: 700;
        }
        .navbar-nav-link.nav-highlight:hover {
          color: white;
        }

        /* Insights button */
        .navbar-insights-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 12px 16px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: color 150ms ease, border-color 150ms ease;
          cursor: pointer;
          background: none;
          border-top: none;
          border-left: none;
          border-right: none;
        }
        .navbar-insights-btn:hover,
        .navbar-insights-btn.active {
          color: white;
          border-bottom-color: var(--color-primary-light);
        }

        /* Chevron rotation */
        .navbar-chevron {
          transition: transform 200ms ease;
        }
        .navbar-chevron--open {
          transform: rotate(180deg);
        }

        /* ── Insights Dropdown ── */
        .navbar-insights-item {
          position: relative;
        }
        .insights-dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          z-index: 300;
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05);
          width: 340px;
          overflow: hidden;
          animation: dropdownFadeIn 0.18s ease;
        }
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Newsletter banner inside dropdown */
        .insights-newsletter-banner {
          background: linear-gradient(135deg, #1e3a8a 0%, #1a56db 100%);
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .insights-newsletter-inner {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .insights-newsletter-inner p {
          font-size: 12px;
          color: rgba(255,255,255,0.85);
          flex: 1;
          min-width: 120px;
          line-height: 1.4;
          margin: 0;
        }
        .insights-newsletter-inner strong { color: white; }
        .insights-newsletter-cta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          color: white;
          border-radius: 6px;
          padding: 5px 10px;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          transition: background 150ms ease;
          white-space: nowrap;
          text-transform: none;
          letter-spacing: 0;
        }
        .insights-newsletter-cta:hover { background: rgba(255,255,255,0.25); }
        .insights-newsletter-close {
          flex-shrink: 0;
          background: none;
          border: none;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          padding: 2px;
          display: flex;
          align-items: center;
          transition: color 150ms ease;
        }
        .insights-newsletter-close:hover { color: white; }

        /* Dropdown header label */
        .insights-dropdown-header {
          padding: 12px 16px 6px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #94a3b8;
        }

        /* Verticals grid */
        .insights-verticals-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          padding: 0 8px 8px;
        }
        .insights-vertical-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          text-decoration: none;
          color: #374151;
          font-size: 13px;
          font-weight: 500;
          transition: background 150ms ease, color 150ms ease;
          text-transform: none;
          letter-spacing: 0;
        }
        .insights-vertical-link:hover {
          background: #f1f5f9;
          color: #1a56db;
        }
        .insights-vertical-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a56db;
          flex-shrink: 0;
          transition: background 150ms ease;
        }
        .insights-vertical-link:hover .insights-vertical-icon {
          background: #dbeafe;
        }

        /* Footer of dropdown */
        .insights-dropdown-footer {
          border-top: 1px solid #f1f5f9;
          padding: 10px 16px;
        }
        .insights-view-all {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          color: #1a56db;
          text-decoration: none;
          text-transform: none;
          letter-spacing: 0;
          transition: gap 150ms ease;
        }
        .insights-view-all:hover { gap: 10px; }

        /* Backdrop */
        .navbar-backdrop {
          position: fixed;
          inset: 0;
          z-index: 199;
          background: rgba(0,0,0,0.4);
        }

        /* ── MOBILE ── */
        /* On desktop, hide mobile-only elements */
        .navbar-mobile-insights-toggle { display: none; }
        .mobile-insights-sub { display: none; }

        @media (max-width: 900px) {
          /* Hide the nav strip by default */
          .navbar-nav {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.35s ease;
            border-top: none;
          }
          .navbar-nav.navbar-nav--open {
            max-height: 700px;
            border-top: 1px solid rgba(255,255,255,0.08);
            overflow-y: auto;
          }
          .navbar-nav-list {
            flex-direction: column;
            align-items: stretch;
            overflow-x: visible;
          }
          .navbar-nav-item { flex-shrink: 1; }
          .navbar-nav-link {
            padding: 13px 20px;
            font-size: 13px;
            border-bottom: none;
            border-left: 3px solid transparent;
            border-radius: 0;
            width: 100%;
            justify-content: flex-start;
          }
          .navbar-nav-link:hover,
          .navbar-nav-link.active {
            border-bottom: none;
            border-left-color: var(--color-primary-light);
            background: rgba(255,255,255,0.05);
          }
          .navbar-nav-item + .navbar-nav-item {
            border-top: 1px solid rgba(255,255,255,0.05);
          }

          /* Insights item on mobile */
          .navbar-insights-item .navbar-insights-btn { display: none; }
          .insights-dropdown { display: none; }

          .navbar-mobile-insights-toggle {
            display: flex;
            align-items: stretch;
            width: 100%;
          }
          .navbar-mobile-insights-toggle .navbar-nav-link {
            flex: 1;
          }
          .mobile-chevron-btn {
            background: none;
            border: none;
            border-left: 1px solid rgba(255,255,255,0.08);
            padding: 13px 16px;
            color: rgba(255,255,255,0.6);
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .mobile-chevron-btn:hover { color: white; }

          .mobile-insights-sub {
            display: block;
            list-style: none;
            padding: 4px 0 8px;
            background: rgba(0,0,0,0.15);
          }
          .mobile-insights-link {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 28px;
            font-size: 12.5px;
            color: rgba(255,255,255,0.65);
            text-decoration: none;
            transition: color 150ms ease, background 150ms ease;
          }
          .mobile-insights-link:hover {
            color: white;
            background: rgba(255,255,255,0.05);
          }
        }
      `}</style>
    </>
  );
}
