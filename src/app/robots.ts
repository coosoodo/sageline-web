import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sageline.co.kr';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // 아직 공개 전이거나 개인 기능인 경로는 크롤링 제외
      disallow: ['/manual', '/boards', '/auth/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
