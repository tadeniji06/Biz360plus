import { Metadata } from "next";
import LandingHero from "@/components/landing/LandingHero";
import LandingProblem from "@/components/landing/LandingProblem";
import LandingFeatures from "@/components/landing/LandingFeatures";
import LandingHowItWorks from "@/components/landing/LandingHowItWorks";
import LandingWaitlist from "@/components/landing/LandingPricing";
import LandingFooterCTA from "@/components/landing/LandingFooterCTA";

export const metadata: Metadata = {
  title: "Business360 Data | B2B Business Intelligence Database for Nigeria",
  description:
    "Find, understand and reach Nigerian companies and key decision-makers. The sector-focused B2B business intelligence database built for Nigeria's highest-value industries.",
};

export default function HomePage() {
  return (
    <div style={{ background: "white" }}>
      <LandingHero />
      <LandingProblem />
      <LandingFeatures />
      <LandingHowItWorks />
      <LandingWaitlist />
      <LandingFooterCTA />
    </div>
  );
}
