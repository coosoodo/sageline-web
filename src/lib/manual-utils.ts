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
