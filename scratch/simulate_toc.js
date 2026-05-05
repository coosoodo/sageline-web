const fs = require('fs');
const path = require('path');

const manualPath = path.join(__dirname, '../src/content/manual.md');
const content = fs.readFileSync(manualPath, 'utf8');

const headingRegex = /^(?:>\s*)?(#{1,3})\s+(.+)$/gm;
const items = [];
let match;

const lastAtLevel = {};

while ((match = headingRegex.exec(content)) !== null) {
  const level = match[1].length;
  const text = match[2].trim();
  const cleanText = text.replace(/\*\*/g, '').replace(/\\/g, '');
  const id = cleanText.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9가-힣-]/g, '');
  
  const item = { id, text: cleanText, level };
  
  if (level > 1 && lastAtLevel[level - 1]) {
    item.parentId = lastAtLevel[level - 1];
  }
  
  lastAtLevel[level] = id;
  items.push(item);
}

fs.writeFileSync('scratch/toc_output.json', JSON.stringify(items, null, 2));
console.log(`Saved ${items.length} TOC items to scratch/toc_output.json`);
