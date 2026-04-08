import { Metadata } from "next";
import BreakingTicker from "@/components/BreakingTicker";
import HomeHero, { HeroPost } from "@/components/HomeHero";
import VerticalSection from "@/components/VerticalSection";
import VerticalsHub from "@/components/VerticalsHub";
import { fetchPosts } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Business360 | Business Intelligence & Insight",
  description:
    "Africa's premier all-in-one business publication covering Hospitality, Tech, Retail, Finance, Marketing, Companies, News, Economy, Real Estate, and FemmeBiz.",
};

// Revalidate every 60s so newly published Sanity content shows quickly
export const revalidate = 60;

/** Tag posts with their vertical slug and filter out any with null slugs */
function tagPosts(posts: Awaited<ReturnType<typeof fetchPosts>>, verticalSlug: string): HeroPost[] {
  return (posts as HeroPost[])
    .filter((p: HeroPost) => p.slug?.current)
    .map((p: HeroPost) => ({ ...p, verticalSlug }));
}

export default async function HomePage() {
  const [
    hospitalityPosts,
    techPosts,
    marketingPosts,
    companiesPosts,
    newsPosts,
    retailPosts,
    financePosts,
    economyPosts,
  ] = await Promise.all([
    fetchPosts("hospitality", 6),
    fetchPosts("tech", 6),
    fetchPosts("marketing", 6),
    fetchPosts("companies", 6),
    fetchPosts("news", 8),
    fetchPosts("retail", 6),
    fetchPosts("finance", 6),
    fetchPosts("economy", 6),
  ]);

  // Merge all valid posts from every vertical into one hero pool
  const allValidPosts: HeroPost[] = [
    ...tagPosts(newsPosts, "news"),
    ...tagPosts(techPosts, "tech"),
    ...tagPosts(hospitalityPosts, "hospitality"),
    ...tagPosts(companiesPosts, "companies"),
    ...tagPosts(marketingPosts, "marketing"),
    ...tagPosts(retailPosts, "retail"),
    ...tagPosts(financePosts, "finance"),
    ...tagPosts(economyPosts, "economy"),
  ];

  return (
    <>
      <BreakingTicker />

      <div className="container">
        {/* Hero — rotates through all valid posts from every vertical */}
        <HomeHero allPosts={allValidPosts} />

        {/* Verticals Hub Overview */}
        <VerticalsHub />

        {/* News Section */}
        <VerticalSection
          title="News"
          slug="news"
          icon="mdi:newspaper"
          posts={newsPosts.slice(0, 3)}
        />

        {/* Tech Section */}
        <VerticalSection
          title="Technology"
          slug="tech"
          icon="mdi:laptop"
          posts={techPosts.slice(0, 3)}
        />

        {/* Hospitality Section */}
        <VerticalSection
          title="Hospitality & Tourism"
          slug="hospitality"
          icon="mdi:hotel"
          posts={hospitalityPosts.slice(0, 3)}
        />

        {/* Finance Section */}
        <VerticalSection
          title="Finance"
          slug="finance"
          icon="mdi:chart-line"
          posts={financePosts.slice(0, 3)}
        />

        {/* Retail Section */}
        <VerticalSection
          title="Retail"
          slug="retail"
          icon="mdi:store"
          posts={retailPosts.slice(0, 3)}
        />

        {/* Economy Section */}
        <VerticalSection
          title="Economy"
          slug="economy"
          icon="mdi:bank"
          posts={economyPosts.slice(0, 3)}
        />

        {/* Companies Section */}
        <VerticalSection
          title="Manufacturing"
          slug="companies"
          icon="mdi:office-building"
          posts={companiesPosts.slice(0, 3)}
        />

        {/* Marketing Section */}
        <VerticalSection
          title="Marketing & Advertising"
          slug="marketing"
          icon="mdi:bullhorn"
          posts={marketingPosts.slice(0, 3)}
        />
      </div>
    </>
  );
}
