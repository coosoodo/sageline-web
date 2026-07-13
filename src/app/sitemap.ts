import type { MetadataRoute } from 'next';
import { BOARD_CATEGORY_IDS } from '@/lib/boards';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sageline.co.kr';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/privacy', '/terms'];
  const boardRoutes = BOARD_CATEGORY_IDS.map((id) => `/boards/${id}`);

  return [...staticRoutes, ...boardRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route.startsWith('/boards') ? 'daily' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
