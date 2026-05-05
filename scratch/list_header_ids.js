const fs = require('fs');
const content = fs.readFileSync('c:/Source/sageline-web/src/content/manual.md', 'utf8');
const headingRegex = /^(?:>\s*)?(#{1,3})\s+(.+)$/gm;
let match;
const counts = {};
while ((match = headingRegex.exec(content)) !== null) {
  const text = match[2].trim();
  const cleanText = text.replace(/\*\*/g, '').replace(/\\/g, '');
  const baseId = cleanText.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9가-힣-]/g, '');
  counts[baseId] = (counts[baseId] || 0) + 1;
  const id = counts[baseId] > 1 ? `${baseId}-${counts[baseId]}` : baseId;
  console.log(`${id} | ${text}`);
}
