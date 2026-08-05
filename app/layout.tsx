import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterPopup from "@/components/NewsletterPopup";
import AnalyticsScript from "@/components/AnalyticsScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Business360 | Business Intelligence & Insight",
    template: "%s | Business360",
  },
  description:
    "Your all-in-one business publication platform covering Hospitality & Tourism, Technology, Retail, Finance, Marketing & Advertising, Companies, News, FemmeBiz, Economy, and Real Estate.",
  keywords: [
    "business news",
    "Africa business",
    "hospitality",
    "tech",
    "finance",
    "marketing",
    "real estate",
    "companies",
    "economy",
  ],
  authors: [{ name: "Business360" }],
  creator: "Business360",
  metadataBase: new URL("https://thisisbusiness360.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://thisisbusiness360.com",
    siteName: "Business360",
    title: "Business360 | Business Intelligence & Insight",
    description:
      "Your all-in-one business publication platform for every vertical of the business world.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business360 | Business Intelligence & Insight",
    creator: "@business360ng",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Business 360",
    url: "https://thisisbusiness360.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://thisisbusiness360.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Business 360",
    url: "https://thisisbusiness360.com",
    logo: "https://thisisbusiness360.com/logo.png",
    sameAs: [
      "https://www.facebook.com/business360ng",
      "https://www.twitter.com/business360ng",
      "https://www.linkedin.com/company/business360ng",
      "https://www.instagram.com/business360ng",
    ],
    description:
      "Business 360 is a platform providing insights, strategies, and practical guidance for navigating the modern business and digital economy.",
  };

  return (
    <html lang="en" className={inter.variable}>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Sitewide structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <NewsletterPopup />
        <AnalyticsScript />
      </body>
    </html>
  );
}
