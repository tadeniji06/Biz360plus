"use client";

import { useState, useEffect } from "react";
import type { StaticImageData } from "next/image";
import { buma, crm, hrm, leadgen } from "@/assets";

export type AdVariant = "inline" | "sidebar";

interface AdConfig {
  image: StaticImageData;
  url: string;
  name: string;
  tagline: string;
  cta: string;
  accent: string;
}

const ADS: AdConfig[] = [
  {
    image: buma,
    url: "https://mybuma.com",
    name: "MyBuma",
    tagline: "Your all-in-one business platform",
    cta: "Get Started Free →",
    accent: "#1a56db",
  },
  {
    image: crm,
    url: "https://crm360online.com",
    name: "CRM360",
    tagline: "Smarter customer relationships",
    cta: "Try CRM360 →",
    accent: "#0ea5e9",
  },
  {
    image: hrm,
    url: "https://thehrm360.com",
    name: "HRM360",
    tagline: "Next-gen human resource management",
    cta: "Explore HRM360 →",
    accent: "#7c3aed",
  },
  {
    image: leadgen,
    url: "https://theleadgen360.com",
    name: "LeadGen360",
    tagline: "Turn prospects into loyal customers",
    cta: "Generate Leads →",
    accent: "#059669",
  },
];

interface Props {
  variant?: AdVariant;
  forceIndex?: number;
}

export default function AdBanner({ variant = "inline", forceIndex }: Props) {
  // When forceIndex is set, pick deterministically (SSR-safe).
  // When random, start with index 0 on server, then pick randomly on client
  // to avoid hydration mismatches from Math.random().
  const [ad, setAd] = useState<AdConfig>(
    ADS[forceIndex !== undefined ? forceIndex % ADS.length : 0]
  );

  useEffect(() => {
    if (forceIndex === undefined) {
      setAd(ADS[Math.floor(Math.random() * ADS.length)]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (variant === "sidebar") {
    return (
      <div className="ad-sidebar-wrap">
        <span className="ad-label">Sponsored</span>
        <a
          href={ad.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="ad-sidebar-card"
          style={{ "--ad-accent": ad.accent } as React.CSSProperties}
          aria-label={`Advertisement: ${ad.name}`}
        >
          <div className="ad-sidebar-img-wrap">
            <img
              src={ad.image.src}
              alt={`${ad.name} advertisement`}
              className="ad-sidebar-img"
            />
          </div>
          <div className="ad-sidebar-body">
            <span className="ad-sidebar-name">{ad.name}</span>
            <span className="ad-sidebar-tagline">{ad.tagline}</span>
            <span className="ad-sidebar-cta" style={{ color: ad.accent }}>
              {ad.cta}
            </span>
          </div>
        </a>
      </div>
    );
  }

  // Inline — full-width, 3:1 image, bold standout design
  return (
    <div className="ad-inline-wrap">
      <div className="ad-inline-label-row">
        <span className="ad-label">Sponsored</span>
      </div>
      <a
        href={ad.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="ad-inline-card"
        style={{ "--ad-accent": ad.accent } as React.CSSProperties}
        aria-label={`Advertisement: ${ad.name} — ${ad.tagline}`}
      >
        {/* 3:1 ratio image */}
        <div className="ad-inline-img-wrap">
          <img
            src={ad.image.src}
            alt={`${ad.name} advertisement`}
            className="ad-inline-img"
          />
          {/* gradient overlay for text legibility */}
          <div
            className="ad-inline-gradient"
            style={{
              background: `linear-gradient(to right, ${ad.accent}ee 0%, ${ad.accent}99 30%, transparent 65%)`,
            }}
          />
          {/* Text overlaid on the image */}
          <div className="ad-inline-overlay-body">
            <span className="ad-inline-pretag">Advertisement</span>
            <span className="ad-inline-name">{ad.name}</span>
            <span className="ad-inline-tagline">{ad.tagline}</span>
            <span className="ad-inline-cta-pill">{ad.cta}</span>
          </div>
        </div>
      </a>
    </div>
  );
}
