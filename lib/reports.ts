import { StaticImageData } from 'next/image';
import { m1, m2 } from '@/assets';

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
    category: 'Hospitality & Tech',
    tags: ['Digital Transformation', 'Hospitality', 'Technology', 'Africa', 'Innovation'],
    accentColor: '#dc2626',
  },
];

export function getReport(slug: string): Report | undefined {
  return REPORTS.find((r) => r.slug === slug);
}
