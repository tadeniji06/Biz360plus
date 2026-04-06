import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { REPORTS, getReport } from '@/lib/reports';
import ReportDetailClient from '@/components/reports/ReportDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return REPORTS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const report = getReport(slug);
  if (!report) return {};
  return {
    title: `${report.title} | Business360 Intelligence Reports`,
    description: report.description.slice(0, 160),
    openGraph: {
      title: report.title,
      description: report.description.slice(0, 160),
      images: [report.coverImage.src],
    },
  };
}

export default async function ReportPage({ params }: Props) {
  const { slug } = await params;
  const report = getReport(slug);

  if (!report) notFound();

  return <ReportDetailClient report={report} />;
}
