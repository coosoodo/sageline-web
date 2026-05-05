/**
 * Extracts plain text from React nodes (children).
 */
export const extractText = (node: any): string => {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return node.toString();
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node.props && node.props.children) return extractText(node.props.children);
  return '';
};

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
