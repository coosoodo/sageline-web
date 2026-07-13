import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sageline.co.kr';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // 개인 기능·내부 경로는 크롤링 제외
      disallow: ['/auth/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
