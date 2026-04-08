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
    slug: "news",
    name: "News",
    status: "active",
    sanityKey: "news",
    description:
      "Breaking news, top stories, and in-depth business reporting.",
    icon: "mdi:newspaper",
    color: "#1a56db",
  },
  {
    slug: "hospitality",
    name: "Hospitality & Tourism",
    status: "active",
    sanityKey: "hospitality",
    description:
      "Hotels, travel, tourism trends, and the hospitality industry.",
    icon: "mdi:hotel",
    color: "#1a56db",
  },
  {
    slug: "tech",
    name: "Technology",
    status: "active",
    sanityKey: "tech",
    description:
      "Innovation, startups, digital transformation, and the tech ecosystem.",
    icon: "mdi:laptop",
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
    slug: "finance",
    name: "Finance",
    status: "active",
    sanityKey: "finance",
    description: "Banking, investments, fintech, and financial markets.",
    icon: "mdi:chart-line",
    color: "#1a56db",
  },
  {
    slug: "marketing",
    name: "Marketing & Advertising",
    status: "active",
    sanityKey: "marketing",
    description:
      "Brand strategy, advertising campaigns, digital marketing, and PR.",
    icon: "mdi:bullhorn",
    color: "#1a56db",
  },
  {
    slug: "companies",
    name: "Manufacturing",
    status: "active",
    sanityKey: "companies",
    description: "Corporate news, leadership, mergers, and business profiles.",
    icon: "mdi:office-building",
    color: "#1a56db",
  },
  {
    slug: "femmebiz",
    name: "FemmeBiz",
    status: "active",
    sanityKey: "femmebiz",
    description: "Women in business, leadership stories, and entrepreneurship.",
    icon: "mdi:account-heart",
    color: "#1a56db",
  },
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
    slug: "real-estate",
    name: "Real Estate",
    status: "active",
    sanityKey: "real-estate",
    description:
      "Property markets, housing, commercial real estate, and development.",
    icon: "mdi:home-city",
    color: "#1a56db",
  },
];

export function getVertical(slug: string): Vertical | undefined {
  return VERTICALS.find((v) => v.slug === slug);
}

export function getActiveVerticals(): Vertical[] {
  return VERTICALS.filter((v) => v.status === "active");
}
