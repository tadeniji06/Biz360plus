"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { VERTICALS } from "@/lib/verticals";

export default function VerticalsHub() {
  return (
    <section style={{ padding: "40px 0" }}>
      <div className="section-header">
        <h2 className="section-title">
          <Icon icon="mdi:view-grid" width={20} color="var(--color-primary)" />
          Our Verticals
        </h2>
        <span style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
          {VERTICALS.filter((v) => v.status === "active").length} active ·{" "}
          {VERTICALS.filter((v) => v.status === "coming-soon").length} coming soon
        </span>
      </div>

      <div className="verticals-hub">
        {/* Reports Card inserted at the start */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0 }}
        >
          <Link
            href="/reports"
            className="vertical-hub-card"
            title="Go to Intelligence Reports"
            style={{ border: "1px solid var(--color-primary-light)" }}
          >
            <div className="vertical-hub-icon" style={{ color: "var(--color-primary)" }}>
              <Icon icon="mdi:file-chart" width={28} />
            </div>
            <div className="vertical-hub-name">Intelligence Reports</div>
            <div
              className="vertical-hub-status"
              style={{ color: "var(--color-primary)", fontWeight: 600 }}
            >
              Live ↗
            </div>
          </Link>
        </motion.div>

        {VERTICALS.map((vertical, i) => {
          const isActive = vertical.status === "active";

          return (
            <motion.div
              key={vertical.slug}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (i + 1) * 0.04 }}
            >
              {isActive ? (
                <Link
                  href={`/${vertical.slug}`}
                  className="vertical-hub-card"
                  title={`Go to ${vertical.name}`}
                >
                  <div className="vertical-hub-icon">
                    <Icon icon={vertical.icon} width={28} />
                  </div>
                  <div className="vertical-hub-name">{vertical.name}</div>
                  <div
                    className="vertical-hub-status"
                    style={{ color: "var(--color-primary)", fontWeight: 600 }}
                  >
                    Live ↗
                  </div>
                </Link>
              ) : (
                <div
                  className="vertical-hub-card coming-soon-card"
                  title={`${vertical.name} — Coming Soon`}
                >
                  <div
                    className="vertical-hub-icon"
                    style={{ color: "var(--color-gray-400)" }}
                  >
                    <Icon icon={vertical.icon} width={28} />
                  </div>
                  <div
                    className="vertical-hub-name"
                    style={{ color: "var(--color-gray-600)" }}
                  >
                    {vertical.name}
                  </div>
                  <div className="vertical-hub-status">Coming Soon</div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
