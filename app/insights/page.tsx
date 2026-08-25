import { Metadata } from "next";
import BreakingTicker from "@/components/BreakingTicker";
import HomeHero, { HeroPost } from "@/components/HomeHero";
import VerticalSection from "@/components/VerticalSection";
import NewsSection from "@/components/NewsSection";
import VerticalsHub from "@/components/VerticalsHub";
import AdBanner from "@/components/AdBanner";
import ArticleAdPopup from "@/components/ArticleAdPopup";
import LatestReportPopup from "@/components/LatestReportPopup";
import LatestReportSection from "@/components/LatestReportSection";
import { fetchPosts } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Insights | Business360",
  description:
    "Business intelligence articles, analysis and insights across Finance, Technology, Retail, FMCG, Hospitality and Economy — from Business360.",
};

// Force dynamic rendering on every request to show live Sanity content instantly
export const dynamic = "force-dynamic";

/** Tag posts with their vertical slug and filter out any with null slugs */
function tagPosts(
  posts: Awaited<ReturnType<typeof fetchPosts>>,
  verticalSlug: string
): HeroPost[] {
  return (posts as HeroPost[])
    .filter((p: HeroPost) => p.slug?.current)
    .map((p: HeroPost) => ({ ...p, verticalSlug }));
}

export default async function InsightsPage() {
  const [
    hospitalityPosts,
    techPosts,
    marketingPosts,
    companiesPosts,
    newsPosts,
    retailPosts,
    financePosts,
    economyPosts,
    femmebizPosts,
    realEstatePosts,
  ] = await Promise.all([
    fetchPosts("hospitality", 6),
    fetchPosts("tech", 6),
    fetchPosts("marketing", 6),
    fetchPosts("companies", 6),
    fetchPosts("news", 8),
    fetchPosts("retail", 6),
    fetchPosts("finance", 6),
    fetchPosts("economy", 6),
    fetchPosts("femmebiz", 6),
    fetchPosts("real-estate", 6),
  ]);

  const allValidPosts: HeroPost[] = [
    ...tagPosts(newsPosts, "news"),
    ...tagPosts(techPosts, "tech"),
    ...tagPosts(hospitalityPosts, "hospitality"),
    ...tagPosts(companiesPosts, "companies"),
    ...tagPosts(marketingPosts, "marketing"),
    ...tagPosts(retailPosts, "retail"),
    ...tagPosts(financePosts, "finance"),
    ...tagPosts(economyPosts, "economy"),
    ...tagPosts(femmebizPosts, "femmebiz"),
    ...tagPosts(realEstatePosts, "real-estate"),
  ];

  return (
    <>
      <BreakingTicker />
      <ArticleAdPopup />
      <LatestReportPopup />

      <div className="container">
        <HomeHero allPosts={allValidPosts} />
        <VerticalsHub />
      </div>

      <LatestReportSection />

      <div className="container">
        <NewsSection
          title="News"
          slug="news"
          icon="mdi:newspaper"
          posts={newsPosts.slice(0, 5)}
        />

        <AdBanner variant="inline" forceIndex={0} />

        <VerticalSection
          title="Technology"
          slug="tech"
          icon="mdi:laptop"
          posts={techPosts.slice(0, 3)}
        />

        <VerticalSection
          title="Hospitality & Tourism"
          slug="hospitality"
          icon="mdi:hotel"
          posts={hospitalityPosts.slice(0, 3)}
        />

        <VerticalSection
          title="Finance"
          slug="finance"
          icon="mdi:chart-line"
          posts={financePosts.slice(0, 3)}
        />

        <AdBanner variant="inline" forceIndex={1} />

        <VerticalSection
          title="Retail"
          slug="retail"
          icon="mdi:store"
          posts={retailPosts.slice(0, 3)}
        />

        <VerticalSection
          title="Economy"
          slug="economy"
          icon="mdi:bank"
          posts={economyPosts.slice(0, 3)}
        />

        <VerticalSection
          title="Manufacturing"
          slug="companies"
          icon="mdi:office-building"
          posts={companiesPosts.slice(0, 3)}
        />

        <VerticalSection
          title="Marketing & Advertising"
          slug="marketing"
          icon="mdi:bullhorn"
          posts={marketingPosts.slice(0, 3)}
        />

        <AdBanner variant="inline" forceIndex={2} />

        <VerticalSection
          title="FemmeBiz"
          slug="femmebiz"
          icon="mdi:account-heart"
          posts={femmebizPosts.slice(0, 3)}
        />

        <VerticalSection
          title="Real Estate"
          slug="real-estate"
          icon="mdi:home-city"
          posts={realEstatePosts.slice(0, 3)}
        />
      </div>
    </>
  );
}
