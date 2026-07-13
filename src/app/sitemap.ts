import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sageline.co.kr';

export default function sitemap(): MetadataRoute.Sitemap {
  // 커뮤니티(게시판)는 현재 비공개 — 공개 라우트만 사이트맵에 포함
  const routes = ['', '/privacy', '/terms'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
