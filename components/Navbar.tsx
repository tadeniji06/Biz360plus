"use client";

import Link from "next/link";
import { useState } from "react";
import { VERTICALS } from "@/lib/verticals";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-top">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <div>
              <div className="navbar-logo-text">
                Business<span>360</span>
              </div>
              <div className="navbar-logo-sub">
                Business Intelligence &amp; Insight
              </div>
            </div>
          </Link>

          {/* Desktop actions */}
          <nav className="navbar-actions">
            <button
              className="btn-search"
              aria-label="Search"
              title="Search articles"
            >
              <Icon icon="mdi:magnify" width={18} />
            </button>
            <Link href="/subscribe" className="btn-subscribe">
              <Icon icon="mdi:lightning-bolt" width={14} />
              Subscribe
            </Link>
            <button
              className="navbar-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <Icon
                icon={mobileOpen ? "mdi:close" : "mdi:menu"}
                width={24}
              />
            </button>
          </nav>
        </div>
      </div>

      {/* Verticals Nav */}
      <div className="navbar-nav">
        <div className="container">
          <div className="navbar-nav-inner">
            <div className="navbar-nav-item">
              <Link href="/" className="navbar-nav-link">
                <Icon icon="mdi:home" width={14} />
                Home
              </Link>
            </div>
            {VERTICALS.map((vertical) => (
              <div key={vertical.slug} className="navbar-nav-item">
                {vertical.status === "active" ? (
                  <Link
                    href={`/${vertical.slug}`}
                    className="navbar-nav-link"
                  >
                    {vertical.name}
                  </Link>
                ) : (
                  <span className="navbar-nav-link coming-soon-nav">
                    {vertical.name}
                    <span className="coming-soon-badge">Soon</span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
