import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Biz360+ | Business Intelligence & Insight",
    template: "%s | Biz360+",
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
  authors: [{ name: "Biz360+" }],
  creator: "Biz360+",
  metadataBase: new URL("https://biz360plus.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://biz360plus.com",
    siteName: "Biz360+",
    title: "Biz360+ | Business Intelligence & Insight",
    description:
      "Your all-in-one business publication platform for every vertical of the business world.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biz360+ | Business Intelligence & Insight",
    creator: "@biz360plus",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
