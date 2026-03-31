"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const TICKER_ITEMS = [
  "Markets rally as inflation data surprises analysts across emerging economies",
  "Tech startups raise record funding in hospitality AI sector this quarter",
  "Global retail giants eye Africa expansion amid rising middle class",
  "Central banks signal cautious pivot as growth concerns mount worldwide",
  "Biz360+ launches comprehensive coverage of Africa's fastest-growing verticals",
  "Real estate investment surges in secondary cities across West Africa",
  "Marketing spend shifts to digital-first strategies as ROI pressures intensify",
  "Companies report strong Q1 earnings despite macroeconomic headwinds",
];

export default function BreakingTicker() {
  const [items] = useState([...TICKER_ITEMS, ...TICKER_ITEMS]);

  return (
    <div className="ticker-wrapper">
      <div className="ticker-label">
        <Icon icon="mdi:lightning-bolt" width={14} />
        Breaking
      </div>
      <div className="ticker-track">
        <div className="ticker-inner">
          {items.map((item, i) => (
            <span key={i} className="ticker-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
