"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { VERTICALS } from "@/lib/verticals";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  // Close nav on route change
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [navOpen]);

  const navItems = [
    { label: "Home", href: "/", icon: "mdi:home" },
    ...VERTICALS.map((v) => ({
      label: v.name,
      href: v.status === "active" ? `/${v.slug}` : null,
      icon: v.icon,
      soon: v.status === "coming-soon",
    })),
    { label: "Reports", href: "/reports", icon: "mdi:file-chart", highlight: true },
  ];

  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="navbar-top">
            {/* Logo */}
            <Link href="/" className="navbar-logo" onClick={() => setNavOpen(false)}>
              <div className="navbar-logo-text">
                Business<span>360</span>
              </div>
              <div className="navbar-logo-sub">
                Business News, Intelligence &amp; Insights
              </div>
            </Link>

            {/* Actions */}
            <div className="navbar-actions">
              <button className="btn-search" aria-label="Search">
                <Icon icon="mdi:magnify" width={18} />
              </button>

              {/* Hamburger — always visible, toggles the dark nav strip */}
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

        {/* ── Dark verticals strip (desktop: always visible / mobile: toggle) ── */}
        <nav
          className={`navbar-nav${navOpen ? " navbar-nav--open" : ""}`}
          aria-label="Site navigation"
        >
          <div className="container">
            <ul className="navbar-nav-list">
              {navItems.map((item) => {
                const isActive = item.href
                  ? item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)
                  : false;

                return (
                  <li key={item.label} className="navbar-nav-item">
                    {item.href && !("soon" in item && item.soon) ? (
                      <Link
                        href={item.href}
                        className={`navbar-nav-link${isActive ? " active" : ""}${"highlight" in item && item.highlight ? " nav-highlight" : ""}`}
                        onClick={() => setNavOpen(false)}
                      >
                        <Icon icon={item.icon} width={14} />
                        {item.label}
                      </Link>
                    ) : (
                      <span className="navbar-nav-link coming-soon-nav">
                        <Icon icon={item.icon} width={14} />
                        {item.label}
                        <span className="coming-soon-badge">Soon</span>
                      </span>
                    )}
                  </li>
                );
              })}
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
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .navbar-logo {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          flex-shrink: 0;
          line-height: 1;
        }
        .navbar-logo-text {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.04em;
          color: var(--color-black);
        }
        .navbar-logo-text span { color: var(--color-primary); }
        .navbar-logo-sub {
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin-top: 2px;
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
        .btn-search:hover {
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

        /* ── Verticals nav strip ── */
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
          /* Desktop: horizontal scroll if needed */
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .navbar-nav-list::-webkit-scrollbar { display: none; }

        .navbar-nav-item { position: relative; flex-shrink: 0; }

        .navbar-nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 11px 14px;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: color 150ms ease, border-color 150ms ease;
          text-decoration: none;
          cursor: pointer;
        }
        .navbar-nav-link:hover,
        .navbar-nav-link.active {
          color: white;
          border-bottom-color: var(--color-primary-light);
        }
        .navbar-nav-link.coming-soon-nav {
          opacity: 0.5;
          cursor: default;
        }
        .navbar-nav-link.nav-highlight {
          color: var(--color-primary-light);
          font-weight: 700;
        }
        .navbar-nav-link.nav-highlight:hover {
          color: white;
        }
        .coming-soon-badge {
          display: inline-flex;
          align-items: center;
          padding: 1px 6px;
          background: rgba(255,255,255,0.12);
          border-radius: 10px;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.6);
        }

        /* ── Backdrop ── */
        .navbar-backdrop {
          position: fixed;
          inset: 0;
          z-index: 199;
          background: rgba(0,0,0,0.4);
        }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          /* Hide the nav strip by default */
          .navbar-nav {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.35s ease;
            border-top: none;
          }
          /* Open state */
          .navbar-nav.navbar-nav--open {
            max-height: 600px;
            border-top: 1px solid rgba(255,255,255,0.08);
          }

          /* Stack vertically */
          .navbar-nav-list {
            flex-direction: column;
            align-items: stretch;
            overflow-x: visible;
            overflow-y: auto;
            max-height: 70vh;
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
          /* Divider between items */
          .navbar-nav-item + .navbar-nav-item {
            border-top: 1px solid rgba(255,255,255,0.05);
          }
        }
      `}</style>
    </>
  );
}
