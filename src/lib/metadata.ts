import type { Metadata } from 'next';

export const SITE_NAME = 'SAGE LINE';

/**
 * 공유 미리보기 이미지. app/opengraph-image.png 파일 규칙으로 제공되지만,
 * 페이지가 openGraph 를 직접 지정하면 파일 규칙 이미지가 빠지므로 명시한다.
 */
const OG_IMAGE = { url: '/opengraph-image.png', width: 1200, height: 655, type: 'image/png', alt: SITE_NAME };

/** 모든 페이지가 공유하는 Open Graph 기본값 (제목 · 설명은 페이지마다 채운다) */
export const BASE_OPEN_GRAPH = {
  locale: 'ko_KR',
  type: 'website' as const,
  siteName: SITE_NAME,
  images: [OG_IMAGE],
};

/**
 * 페이지 메타데이터를 만든다.
 *
 * Next 의 메타데이터 병합은 얕아서, 페이지가 title 만 바꾸면 루트 layout 의
 * openGraph 가 그대로 남는다. 그러면 카카오톡 · 검색 미리보기가 모든 페이지에서
 * 홈 제목을 보여 주므로, 제목 · 설명을 openGraph 에도 함께 싣는다.
 */
export function pageMetadata({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string;
  description: string;
  /** 사이트 기준 경로. og:url 에 쓰인다. */
  path?: string;
  /** true 면 " | SAGE LINE" 접미사를 붙이지 않는다. */
  absolute?: boolean;
}): Metadata {
  const fullTitle = absolute ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    openGraph: {
      ...BASE_OPEN_GRAPH,
      title: fullTitle,
      description,
      ...(path ? { url: path } : {}),
    },
  };
}
