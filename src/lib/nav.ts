// 커뮤니티는 네이버 카페에서 운영한다. (사이트 게시판은 주소로만 접근)
export const NAVER_CAFE_URL = 'https://cafe.naver.com/sageline';

// 헤더·모바일 내비게이션 공용 항목 (label, href)
export const MAIN_NAV: [string, string][] = [
  ['Products', '/#products'],
  ['Updates', '/#updates'],
  ['Technology', '/#technology'],
  ['Vision', '/#vision'],
  ['Support', '/#support'],
  ['Manual', '/manual'],
  ['Community', NAVER_CAFE_URL],
];

/** 사이트 밖으로 나가는 링크인지. 외부 링크는 새 탭으로 연다. */
export const isExternalHref = (href: string) => /^https?:\/\//.test(href);
