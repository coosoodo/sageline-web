/**
 * Standard slugify function for manual headers.
 * Keeps same logic as original to maintain compatibility but more robust.
 */
export const slugify = (text: string): string => {
  return text
    .replace(/\*\*/g, '')      // Remove bold
    .replace(/\\/g, '')        // Remove backslashes
    .toLowerCase()
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/[^a-z0-9가-힣-]/g, ''); // Remove non-alphanumeric chars (except hyphens and Korean)
};

export interface ToCItem {
  id: string;
  text: string;
  level: number;
  parentId?: string;
}

export interface ManualMeta {
  title: string;
  version: string;
  lastUpdated: string;
}

export interface ManualChapter {
  slug: string;        // 장 번호 기반 URL 슬러그, 예: "1"
  title: string;       // 전체 제목, 예: "1. 시작하기 전에"
  shortTitle: string;  // 번호 제외 제목, 예: "시작하기 전에"
  content: string;     // h1(장 제목) 이후 본문
  toc: ToCItem[];      // 장 내부 h2/h3 목차
  sections: string[];  // h2 제목 목록 (개요 카드 미리보기용)
}

/**
 * frontmatter(--- ... ---)와 본문을 분리한다.
 * 본문에 hr(---)이 있어도 slice(2).join으로 보존된다.
 */
export const parseManual = (raw: string): { meta: ManualMeta; body: string } => {
  const parts = raw.split('---');
  const hasFrontmatter = parts.length > 2 && parts[0].trim() === '';
  const metaStr = hasFrontmatter ? parts[1] : '';
  const body = hasFrontmatter ? parts.slice(2).join('---') : raw;

  return {
    meta: {
      title: metaStr.match(/title:\s*(.+)/)?.[1]?.trim() || '사용자 설명서',
      version: metaStr.match(/version:\s*(.+)/)?.[1]?.trim() || '1.0',
      lastUpdated: metaStr.match(/lastUpdated:\s*(.+)/)?.[1]?.trim() || '',
    },
    body,
  };
};

/**
 * 본문을 h1(장) 단위로 분할한다. 각 장은 번호 기반 슬러그를 갖는다.
 */
export const getChapters = (raw: string): ManualChapter[] => {
  const { body } = parseManual(raw);
  const lines = body.split('\n');

  const chapters: ManualChapter[] = [];
  let current: { title: string; lines: string[] } | null = null;

  const flush = () => {
    if (!current) return;
    const content = current.lines.join('\n').trim();
    const numMatch = current.title.match(/^\s*(\d+)/);
    const slug = numMatch ? numMatch[1] : slugify(current.title);
    const shortTitle = current.title.replace(/^\s*\d+[.\s]*/, '').trim() || current.title;
    const toc = getToc(content);
    const sections = toc.filter((t) => t.level === 2).map((t) => t.text);
    chapters.push({ slug, title: current.title, shortTitle, content, toc, sections });
    current = null;
  };

  for (const line of lines) {
    const h1 = line.match(/^#\s+(.+)$/);
    if (h1) {
      flush();
      current = { title: h1[1].trim(), lines: [] };
    } else if (current) {
      current.lines.push(line);
    }
  }
  flush();

  return chapters;
};

export const getChapter = (raw: string, slug: string): ManualChapter | undefined =>
  getChapters(raw).find((c) => c.slug === slug);

/**
 * 하나의 열람 페이지. 큰 장은 여러 절 페이지로, 작은 장은 장 전체가 한 페이지.
 */
export interface ManualPage {
  slug: string; // 절 페이지는 "5-1", 장 페이지는 "2"
  title: string; // "5.1 자동 매매 전략이란?" 또는 "2. 설치 및 초기 설정"
  shortTitle: string; // 번호 제외 제목
  chapterSlug: string; // 소속 장 슬러그, 예: "5"
  chapterTitle: string; // 소속 장 제목 (사이드바 그룹 라벨)
  isSection: boolean; // 절 페이지 여부
  content: string;
  toc: ToCItem[];
  sections: string[]; // h2 제목 목록 (개요 미리보기용)
}

// 이 글자 수를 초과하는 장/절은 다음 단계 번호(N.M → N.M.K)로 더 분할한다.
const CHAPTER_SPLIT_THRESHOLD = 30000;
// 재귀 분할 최대 깊이 (2=절 N.M, 3=세부 N.M.K)
const MAX_SPLIT_DEPTH = 3;

const parseHeadingNums = (text: string): string[] => {
  const m = text.match(/^\s*(\d+(?:\.\d+)*)/);
  return m ? m[1].split('.') : [];
};

/**
 * content를 depth 자리 절 번호(예: depth 2 → "5.3")로 그룹화한다.
 * 첫 그룹 이전의 도입부 텍스트는 intro로 반환한다.
 */
const groupByDepth = (content: string, depth: number) => {
  const lines = content.split('\n');
  const intro: string[] = [];
  const groups: { minor: string; title: string; lines: string[] }[] = [];
  let group: (typeof groups)[number] | null = null;
  let lastKey = '';

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      const nums = parseHeadingNums(h2[1]);
      const key = nums.slice(0, depth).join('.');
      if (nums.length >= depth && key !== lastKey) {
        // 새 절 시작 — 대표 h2는 제목으로만 쓰고 본문에서는 제외
        lastKey = key;
        group = { minor: nums[depth - 1], title: h2[1].trim(), lines: [] };
        groups.push(group);
        continue;
      }
    }
    if (group) group.lines.push(line);
    else intro.push(line);
  }

  return { intro: intro.join('\n').trim(), groups };
};

/**
 * content가 임계 초과이면 절 번호 경계로 재귀 분할한다.
 * 큰 절(5.3)은 세부 절(5.3.2 …)까지 나뉘고, 절 도입부는 대표 페이지가 된다.
 */
const buildPages = (
  content: string,
  slug: string,
  title: string,
  chapterSlug: string,
  chapterTitle: string,
  isSection: boolean,
  depth: number,
): ManualPage[] => {
  const makePage = (s: string, t: string, c: string, section: boolean): ManualPage => {
    const toc = getToc(c);
    return {
      slug: s,
      title: t,
      shortTitle: t.replace(/^\s*[\d.]+\s*/, '').trim() || t,
      chapterSlug,
      chapterTitle,
      isSection: section,
      content: c,
      toc,
      sections: toc.filter((x) => x.level === 2).map((x) => x.text),
    };
  };

  if (content.length <= CHAPTER_SPLIT_THRESHOLD || depth > MAX_SPLIT_DEPTH) {
    return [makePage(slug, title, content, isSection)];
  }

  const { intro, groups } = groupByDepth(content, depth);
  if (groups.length <= 1) {
    return [makePage(slug, title, content, isSection)];
  }

  const pages: ManualPage[] = [];
  if (intro) pages.push(makePage(slug, title, intro, isSection));
  for (const g of groups) {
    pages.push(
      ...buildPages(g.lines.join('\n').trim(), `${slug}-${g.minor}`, g.title, chapterSlug, chapterTitle, true, depth + 1),
    );
  }
  return pages;
};

/**
 * 전체 문서를 열람 페이지 목록(평면, 순서대로)으로 만든다.
 */
export const getPages = (raw: string): ManualPage[] => {
  const pages: ManualPage[] = [];
  for (const ch of getChapters(raw)) {
    pages.push(...buildPages(ch.content, ch.slug, ch.title, ch.slug, ch.title, false, 2));
  }
  return pages;
};

export interface ManualNavSection {
  slug: string;
  title: string;
  shortTitle: string;
  subs: { slug: string; title: string; shortTitle: string }[];
}

export interface ManualNavChapter {
  slug: string; // 장 슬러그
  title: string; // 장 제목
  href: string; // 장 진입 링크 (분할된 장이면 첫 페이지)
  sections: ManualNavSection[];
}

/**
 * 사이드바/개요용 장→절→세부 계층 내비게이션을 만든다.
 * slug의 하이픈 개수로 깊이를 판정한다("5"=장, "5-3"=절, "5-3-2"=세부).
 */
export const getManualNav = (raw: string): ManualNavChapter[] => {
  const order: string[] = [];
  const map = new Map<string, ManualNavChapter>();

  for (const p of getPages(raw)) {
    if (!map.has(p.chapterSlug)) {
      map.set(p.chapterSlug, { slug: p.chapterSlug, title: p.chapterTitle, href: `/manual/${p.slug}`, sections: [] });
      order.push(p.chapterSlug);
    }
    if (!p.isSection) continue;

    const chapter = map.get(p.chapterSlug)!;
    const parts = p.slug.split('-');
    if (parts.length === 2) {
      chapter.sections.push({ slug: p.slug, title: p.title, shortTitle: p.shortTitle, subs: [] });
    } else if (parts.length >= 3) {
      const parentSlug = parts.slice(0, parts.length - 1).join('-');
      const parent = chapter.sections.find((s) => s.slug === parentSlug);
      if (parent) parent.subs.push({ slug: p.slug, title: p.title, shortTitle: p.shortTitle });
      else chapter.sections.push({ slug: p.slug, title: p.title, shortTitle: p.shortTitle, subs: [] });
    }
  }

  return order.map((s) => map.get(s)!);
};

/**
 * Extracts TOC items from markdown content.
 * Centralized logic to ensure consistency between sidebar and renderer.
 */
export const getToc = (content: string): ToCItem[] => {
  const headingRegex = /^(?:>\s*)?(#{1,3})\s+(.+)$/gm;
  const items: ToCItem[] = [];
  let match;
  
  const counts: { [key: string]: number } = {};
  const lastAtLevel: { [key: number]: string } = {};

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const cleanText = text.replace(/\*\*/g, '').replace(/\\/g, '');
    const id = (() => {
      const baseId = slugify(cleanText);
      counts[baseId] = (counts[baseId] || 0) + 1;
      return counts[baseId] > 1 ? `${baseId}-${counts[baseId]}` : baseId;
    })();
    
    const item: ToCItem = { id, text: cleanText, level };
    
    if (level > 1 && lastAtLevel[level - 1]) {
      item.parentId = lastAtLevel[level - 1];
    }
    
    lastAtLevel[level] = id;
    items.push(item);
  }
  
  return items;
};
