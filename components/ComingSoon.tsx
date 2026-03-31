"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Vertical } from "@/lib/verticals";

export default function ComingSoon({ vertical }: { vertical: Vertical }) {
  return (
    <div className="coming-soon-page">
      <motion.div
        className="coming-soon-inner"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="coming-soon-icon-wrap"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon
            icon={vertical.icon}
            width={40}
            color="var(--color-primary)"
          />
        </motion.div>

        <p className="coming-soon-eyebrow">
          <Icon
            icon="mdi:wrench"
            width={12}
            style={{ display: "inline", verticalAlign: "middle" }}
          />{" "}
          Under Construction
        </p>

        <h1 className="coming-soon-title">{vertical.name}</h1>

        <p className="coming-soon-desc">
          {vertical.description} We&apos;re building something exceptional for
          this vertical. Our editorial team is on it — be the first to know when
          we launch.
        </p>

        <div className="coming-soon-progress">
          <div className="coming-soon-progress-bar" />
        </div>

        <form
          className="coming-soon-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! We'll notify you when this vertical launches.");
          }}
        >
          <input
            type="email"
            className="coming-soon-input"
            placeholder="Your email address"
            id={`notify-email-${vertical.slug}`}
            required
          />
          <button type="submit" className="coming-soon-btn">
            Notify Me
          </button>
        </form>

        <div style={{ marginTop: "32px" }}>
          <Link
            href="/"
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
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
