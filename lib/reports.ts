import { StaticImageData } from 'next/image';
import { m1, m2, c1, c2, c3, c4, r1,r2, k1, k2 } from '@/assets';

export interface Report {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  keyInsights: string[];
  pdfFile: string;
  coverImage: StaticImageData;
  publishedDate: string;
  pages: number;
  category: string;
  tags: string[];
  accentColor: string;
}

export const REPORTS: Report[] = [
  {
    slug: 'revenue-sustainability-across-technology-business-models-in-african-markets',
    title: 'Revenue Sustainability Across Technology Business Models In African Markets',
    subtitle: 'A B360Intel Intelligence Report · 2026',
    description:
      'The African venture capital ecosystem is undergoing a dramatic paradigm shift. Moving away from a pure growth-at-all-costs mindset, investors are now prioritizing unit economics, operational resilience, and clear paths to profitability. This comprehensive February 2026 report dives deep into the shifting investment thesis across Tier-1 and Tier-2 tech hubs. Through analyses of recent mega-rounds, rising M&A activity, and the emergence of specialized local micro-VCs, this document unpacks where the smart money is moving next—highlighting overlooked niches like climate-tech, health-tech, and cross-border logistics that are capturing the attention of institutional LPs.',
    keyInsights: [
      'M&A exits in the African tech ecosystem have increased by 45% year-on-year',
      'Early-stage climate-tech rounds accounted for 18% of total Q1 funding',
      'Valuation multiples have normalized, prioritizing EBITDA over top-line revenue',
      'Local micro-VC funds now lead 30% of all Seed to Series A tech deals',
    ],
    pdfFile: '/may_report2.pdf',
    coverImage: k2,
    publishedDate: 'May 2026',
    pages: 48,
    category: 'Technology & Startups',
    tags: ['Fintech', 'Embedded Finance', 'B2B', 'Banking', 'Innovation'],  
    accentColor: '#ff0000',
  },
  {
    slug: 'aligning-production-capacity-market-demand-signals',
    title: 'Aligning Production Capacity With Market Demand Signals',
    subtitle: 'A B360Intel Intelligence Report · 2026',
    description:
      'As the global economy navigates inflation and geopolitical shifts, Africa’s growth narrative is being rewritten. This January 2026 outlook report provides an incisive analysis of the macroeconomic forces shaping the continent’s key markets. By tracking FDI flows, currency stabilization efforts, and the rise of intra-African trade under the AfCFTA, the report identifies the precise sectors—agritech, green energy, and digital infrastructure—that are primed for exponential growth. Armed with proprietary executive surveys and predictive modeling, this report equips investors and policymakers with a definitive roadmap for capturing alpha in an evolving economic landscape.',
    keyInsights: [
      'Intra-African trade volume is projected to increase by 14% this fiscal year',
      'Green energy infrastructure will attract $4.2B in foreign direct investment',
      'Currency stabilization measures have reduced import costs by 8% in key hubs',
      'Agritech sector funding is expected to outpace traditional fintech growth',
    ],
    pdfFile: '/may_report1.pdf',
    coverImage: k1,
    publishedDate: 'May 2026',
    pages: 48,
    category: 'Marketing & Advertising',
    tags: ['Fintech', 'Embedded Finance', 'B2B', 'Banking', 'Innovation'],  
    accentColor: '#ff0000',
  },
  {
    slug: 'embedded-finance-b2b-payments-african-sme',
    title: 'Embedded Finance And B2B Payments For African SMEs',
    subtitle: 'A B360Intel Intelligence Report · 2026',
    description:
      'The African venture capital ecosystem is undergoing a dramatic paradigm shift. Moving away from a pure growth-at-all-costs mindset, investors are now prioritizing unit economics, operational resilience, and clear paths to profitability. This comprehensive February 2026 report dives deep into the shifting investment thesis across Tier-1 and Tier-2 tech hubs. Through analyses of recent mega-rounds, rising M&A activity, and the emergence of specialized local micro-VCs, this document unpacks where the smart money is moving next—highlighting overlooked niches like climate-tech, health-tech, and cross-border logistics that are capturing the attention of institutional LPs.',
    keyInsights: [
      'M&A exits in the African tech ecosystem have increased by 45% year-on-year',
      'Early-stage climate-tech rounds accounted for 18% of total Q1 funding',
      'Valuation multiples have normalized, prioritizing EBITDA over top-line revenue',
      'Local micro-VC funds now lead 30% of all Seed to Series A tech deals',
    ],
    pdfFile: '/april_report2.pdf',
    coverImage: r2,
    publishedDate: 'April 2026',
    pages: 48,
    category: 'Fintech & Startups',
    tags: ['Fintech', 'Embedded Finance', 'B2B', 'Banking', 'Innovation'],  
    accentColor: '#ff0000',
  },
    {
    slug: 'omnichannel-retail-retailtech-adoption-africa',
    title: 'Omnichannel Retail And Retailtech Adoption In Africa',
    subtitle: 'A B360Intel Intelligence Report · 2026',
    description:
      'The African retail landscape is undergoing a seismic transformation as omnichannel strategies and retail technology adoption accelerate across the continent. This comprehensive B360Intel report delves into the evolving dynamics of African retail, examining how traditional brick-and-mortar stores are integrating digital channels to meet the demands of a new generation of consumers. Through in-depth case studies, consumer surveys, and market analysis, the report uncovers the key drivers behind omnichannel success in Africa, including mobile commerce, social media influence, and last-mile delivery innovations. It also highlights the challenges retailers face in implementing seamless customer experiences across physical and digital touchpoints, providing actionable insights for industry stakeholders looking to thrive in this rapidly changing environment.',
    keyInsights: [
      'Over 70% of African retailers have adopted an omnichannel strategy in the past 2 years',
      'Mobile commerce accounts for 45% of total retail sales in key African markets',
      'Social media platforms drive 30% of online retail traffic across the continent',
      'Last-mile delivery innovations have reduced delivery times by 25% on average',
      'Only 40% of retailers have fully integrated their inventory management systems',
      'Consumer demand for seamless experiences is the top driver of omnichannel adoption',
    ],
    pdfFile: '/april_report1.pdf',
    coverImage: r1,
    publishedDate: 'April 2026',
    pages: 48,
    category: 'Retail & Tech',
    tags: ['Omnichannel Retail', 'Retail Technology', 'Africa', 'E-commerce', 'Consumer Behavior'],
    accentColor: '#dc2626',
  },
  {
    slug: 'african-businesses-misjudging-risk-exposure',
    title: 'How African Businesses Are Misjudging Risk Exposure',
    subtitle: 'A B360Intel Intelligence Report · 2026',
    description:
      'Across the African continent, a silent crisis is brewing beneath the surface of boardrooms and balance sheets. Businesses — from Lagos fintechs to Nairobi manufacturers and Accra retailers — are systematically underestimating the compounding nature of risk. This landmark B360Intel report dissects the structural blind spots in enterprise risk frameworks across key African markets, revealing how currency volatility, regulatory ambiguity, political risk, supply chain fragility, and reputational exposure are too often treated as separate, manageable silos rather than the deeply interconnected threats they truly are. Drawing on proprietary surveys, executive interviews, and cross-sector financial data, this report arms risk officers, CFOs, board members, and investors with the intelligence to rebuild their risk architecture from the ground up — before the next shock makes it unavoidable.',
    keyInsights: [
      'Over 60% of African SMEs have no formal enterprise risk management framework',
      'Currency devaluation risk is underpriced by an average of 2.4× across surveyed firms',
      'Regulatory change ranks as the #1 unforeseen risk across Nigeria, Kenya, and Ghana',
      'Only 18% of boards receive structured risk reporting on a monthly basis',
      'Supply chain risk is siloed from financial risk in 74% of mid-market companies',
      'Companies with integrated risk frameworks outperformed peers by 31% over 3 years',
    ],
    pdfFile: '/march report1.pdf',
    coverImage: m1,
    publishedDate: 'March 2026',
    pages: 48,
    category: 'Risk & Finance',
    tags: ['Risk Management', 'African Business', 'Enterprise Risk', 'Finance', 'Strategy'],
    accentColor: '#1a56db',
  },
  {
    slug: 'digital-transformation-hospitality-sector',
    title: 'Digital Transformation in the Hospitality Sector',
    subtitle: 'How Technology Is Shaping Guest Experiences in Africa',
    description:
      'Africa\'s hospitality sector is at a defining inflection point. As global travel brands expand their footprint and a new generation of digitally sophisticated travellers demands seamless, technology-powered experiences, hotels, resorts, and lodges that cling to analog operations are rapidly falling behind. This authoritative B360Intel report maps the full digital transformation landscape across Africa\'s hospitality industry — from AI-driven personalisation and contactless check-in to revenue management systems, IoT room automation, and the rise of direct booking channels. Through in-depth operator surveys, guest experience data, and case studies of leading African hospitality brands, the report identifies the specific digital investments delivering the highest ROI and outlines a practical transformation roadmap for properties at every stage of their digital journey.',
    keyInsights: [
      'Properties with digital check-in report 22% higher guest satisfaction scores',
      'AI-powered revenue management boosts occupancy rates by up to 17% on average',
      'Only 34% of African hotels have a mobile-first booking experience',
      'WhatsApp-based guest communication reduces support costs by up to 40%',
      'Digital loyalty programmes drive 2.8× higher repeat booking rates',
      'Cloud PMS adoption in Africa grew 89% year-on-year in 2025',
    ],
    pdfFile: '/march report2.pdf',
    coverImage: m2,
    publishedDate: 'March 2026',
    pages: 52,
    category: 'Hospitality & Tourism',
    tags: ['Digital Transformation', 'Hospitality', 'Technology', 'Africa', 'Innovation'],
    accentColor: '#dc2626',
  },
  {
    slug: 'future-of-africas-digital-economy',
    title: 'The Future of Africa\'s Digital Economy: Key Drivers and Opportunities',
    subtitle: 'A B360Intel Intelligence Report · January 2026',
    description:
      'As the global economy navigates inflation and geopolitical shifts, Africa’s growth narrative is being rewritten. This January 2026 outlook report provides an incisive analysis of the macroeconomic forces shaping the continent’s key markets. By tracking FDI flows, currency stabilization efforts, and the rise of intra-African trade under the AfCFTA, the report identifies the precise sectors—agritech, green energy, and digital infrastructure—that are primed for exponential growth. Armed with proprietary executive surveys and predictive modeling, this report equips investors and policymakers with a definitive roadmap for capturing alpha in an evolving economic landscape.',
    keyInsights: [
      'Intra-African trade volume is projected to increase by 14% this fiscal year',
      'Green energy infrastructure will attract $4.2B in foreign direct investment',
      'Currency stabilization measures have reduced import costs by 8% in key hubs',
      'Agritech sector funding is expected to outpace traditional fintech growth',
    ],
    pdfFile: '/jan_report.pdf',
    coverImage: c4,
    publishedDate: 'January 2026',
    pages: 36,
    category: 'Economy & Markets',
    tags: ['Economic Outlook', 'Africa', 'FDI', 'Green Energy', 'Trade'],
    accentColor: '#10b981',
  },
  {
    slug: 'blockchain-cryptocurrency-new-frontier',
    title: 'Blockchain & Cryptocurrency: The New Frontier in African Finance',
    subtitle: 'A B360Intel Intelligence Report · February 2026',
    description:
      'The African venture capital ecosystem is undergoing a dramatic paradigm shift. Moving away from a pure growth-at-all-costs mindset, investors are now prioritizing unit economics, operational resilience, and clear paths to profitability. This comprehensive February 2026 report dives deep into the shifting investment thesis across Tier-1 and Tier-2 tech hubs. Through analyses of recent mega-rounds, rising M&A activity, and the emergence of specialized local micro-VCs, this document unpacks where the smart money is moving next—highlighting overlooked niches like climate-tech, health-tech, and cross-border logistics that are capturing the attention of institutional LPs.',
    keyInsights: [
      'M&A exits in the African tech ecosystem have increased by 45% year-on-year',
      'Early-stage climate-tech rounds accounted for 18% of total Q1 funding',
      'Valuation multiples have normalized, prioritizing EBITDA over top-line revenue',
      'Local micro-VC funds now lead 30% of all Seed to Series A tech deals',
    ],
    pdfFile: '/feb_report.pdf',
    coverImage: c3,
    publishedDate: 'February 2026',
    pages: 42,
    category: 'Venture Capital',
    tags: ['Venture Capital', 'Startups', 'M&A', 'Tech Ecosystem', 'Funding'],
    accentColor: '#8b5cf6',
  },
  {
    slug: 'payment-infrastructure-digital-markets',
    title: 'How Payment Infrastructure Shapes Control of Digital Markets',
    subtitle: 'A B360Intel Intelligence Report · December 2025',
    description:
      'Fintech remains the undisputed heavyweight of African innovation, but 2025 witnessed a significant pivot from simple consumer payments to complex B2B infrastructure and embedded finance. This definitive year-end report chronicles the maturation of the continent\'s financial technology landscape. From the proliferation of digital neo-banks serving SMEs to the regulatory sandboxes fostering blockchain innovation, we break down the operational strategies of the year’s top-performing startups. By analyzing user acquisition costs, regulatory hurdles, and cross-border expansion playbooks, this document serves as the ultimate retrospective and forward-looking guide for fintech founders and institutional investors.',
    keyInsights: [
      'B2B embedded finance revenue grew by 110% compared to consumer payments',
      'Customer Acquisition Costs (CAC) for digital lending dropped by 15%',
      'Regulatory compliance costs now consume 22% of early-stage operational budgets',
      'Over 40% of Tier-1 banks formed strategic API partnerships with fintechs',
    ],
    pdfFile: '/dec_report.pdf',
    coverImage: c1,
    publishedDate: 'December 2025',
    pages: 60,
    category: 'Fintech & Startups',
    tags: ['Fintech', 'Embedded Finance', 'B2B', 'Banking', 'Innovation'],
    accentColor: '#000000',
  },
  {
    slug: 'profitable-commerce-2025-playbook',
    title: 'Profitable Commerce: How 2025 Is Rewriting the Playbook for African Commerce in 2026',
    subtitle: 'A B360Intel Intelligence Report · December 2025',
    description:
      'As power deficits constrain industrial growth, West Africa is rapidly pivoting toward decentralized, sustainable energy solutions. This strategic December 2025 report examines the accelerating deployment of solar micro-grids, commercial and industrial (C&I) sustainable power purchase agreements (PPAs), and utility-scale renewable projects. We provide granular case studies on how off-grid solutions are unlocking productivity for manufacturing hubs and rural enterprises alike. Through insights from energy ministers, project developers, and climate financiers, the report maps the policy incentives and financial instruments making the clean energy transition practically viable across the region.',
    keyInsights: [
      'Commercial Solar PPAs increased by 300% across West African manufacturing hubs',
      'Grid unreliability costs the regional economy an estimated $28B annually',
      'Decentralized mini-grids now reach 4.5 million previously underserved households',
      'Carbon credit financing subsidized 12% of new renewable deployments',
    ],
    pdfFile: '/dec_report2.pdf',
    coverImage: c2,
    publishedDate: 'December 2025',
    pages: 38,
    category: 'Energy & Infrastructure',
    tags: ['Renewable Energy', 'Infrastructure', 'West Africa', 'Sustainability', 'Minigrids'],
    accentColor: '#dc2626',
  },
];

export function getReport(slug: string): Report | undefined {
  return REPORTS.find((r) => r.slug === slug);
}
