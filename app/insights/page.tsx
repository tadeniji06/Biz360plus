import React from "react";
import { Metadata } from "next";
import BreakingTicker from "@/components/BreakingTicker";
import HomeHero, { HeroPost } from "@/components/HomeHero";
import ArticleCard from "@/components/ArticleCard";
import AdBanner from "@/components/AdBanner";
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
    manufacturingPosts,
    retailPosts,
    financePosts,
    economyPosts,
    femmebizPosts,
    realEstatePosts,
  ] = await Promise.all([
    fetchPosts("hospitality", 10),
    fetchPosts("tech", 10),
    fetchPosts("marketing", 10),
    fetchPosts("manufacturing", 10),
    fetchPosts("retail", 10),
    fetchPosts("finance", 10),
    fetchPosts("economy", 10),
    fetchPosts("femmebiz", 10),
    fetchPosts("real-estate", 10),
  ]);

  const allValidPosts: HeroPost[] = [
    ...tagPosts(techPosts, "tech"),
    ...tagPosts(hospitalityPosts, "hospitality"),
    ...tagPosts(manufacturingPosts, "manufacturing"),
    ...tagPosts(marketingPosts, "marketing"),
    ...tagPosts(retailPosts, "retail"),
    ...tagPosts(financePosts, "finance"),
    ...tagPosts(economyPosts, "economy"),
    ...tagPosts(femmebizPosts, "femmebiz"),
    ...tagPosts(realEstatePosts, "real-estate"),
  ].sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <>
      <BreakingTicker />

      <div className="container">
        <HomeHero allPosts={allValidPosts} />
      </div>

      <LatestReportSection />

      <div className="container" style={{ padding: "64px 0" }}>
        
        <div style={{ marginBottom: "40px", display: "flex", alignItems: "center", gap: "12px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--color-heading)", letterSpacing: "-0.02em", margin: 0 }}>
            Latest Insights
          </h2>
          <div style={{ height: "1px", flex: 1, background: "var(--color-border)" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "32px",
          marginBottom: "48px"
        }}>
          {allValidPosts.map((post, i) => {
            const showAd = i > 0 && i % 9 === 0;
            return (
              <React.Fragment key={post._id}>
                {showAd && (
                  <div style={{ gridColumn: "1 / -1", margin: "16px 0" }}>
                    <AdBanner variant="inline" forceIndex={(i / 9) % 3} />
                  </div>
                )}
                <ArticleCard
                  {...post}
                  vertical={post.verticalSlug}
                  index={i}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
