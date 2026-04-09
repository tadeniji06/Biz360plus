import { Metadata } from 'next';
import B360TVClient from '@/components/B360TVClient';

export const metadata: Metadata = {
  title: 'B360TV | Business Intelligence & Insight',
  description: 'Watch content and podcasts spanning business, startups, investments, and technology.',
};

export default function B360TVPage() {
  return <B360TVClient />;
}
