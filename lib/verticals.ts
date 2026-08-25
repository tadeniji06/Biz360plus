export type VerticalStatus = "active" | "coming-soon";

export interface Vertical {
  slug: string;
  name: string;
  status: VerticalStatus;
  sanityKey?: string;
  description: string;
  icon: string; // Iconify icon name
  color: string; // accent color for the vertical
}

export const VERTICALS: Vertical[] = [
  {
    slug: "economy",
    name: "Economy",
    status: "active",
    sanityKey: "economy",
    description: "Macroeconomics, policy, trade, and economic indicators.",
    icon: "mdi:bank",
    color: "#1a56db",
  },
  {
    slug: "finance",
    name: "Financial Services",
    status: "active",
    sanityKey: "finance",
    description: "Banking, investments, fintech, and financial markets.",
    icon: "mdi:chart-line",
    color: "#1a56db",
  },
  {
    slug: "tech",
    name: "Technology",
    status: "active",
    sanityKey: "tech",
    description: "Innovation, startups, digital transformation, and the tech ecosystem.",
    icon: "mdi:laptop",
    color: "#1a56db",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    status: "active",
    sanityKey: "manufacturing",
    description: "Industrial trends, production, FMCG, and manufacturing news.",
    icon: "mdi:factory",
    color: "#1a56db",
  },
  {
    slug: "retail",
    name: "Retail",
    status: "active",
    sanityKey: "retail",
    description: "Consumer trends, e-commerce, and retail industry news.",
    icon: "mdi:store",
    color: "#1a56db",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    status: "active",
    sanityKey: "hospitality",
    description: "Hotels, travel, tourism trends, and the hospitality industry.",
    icon: "mdi:hotel",
    color: "#1a56db",
  },
];

export function getVertical(slug: string): Vertical | undefined {
  return VERTICALS.find((v) => v.slug === slug);
}

export function getActiveVerticals(): Vertical[] {
  return VERTICALS.filter((v) => v.status === "active");
}
