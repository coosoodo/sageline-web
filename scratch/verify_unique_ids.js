const fs = require('fs');
const path = require('path');

const manualPath = path.join(__dirname, '../src/content/manual.md');
const content = fs.readFileSync(manualPath, 'utf8');

const headingRegex = /^(?:>\s*)?(#{1,3})\s+(.+)$/gm;
const counts = {};
const ids = [];
let match;

while ((match = headingRegex.exec(content)) !== null) {
  const level = match[1].length;
  const text = match[2].trim();
  const cleanText = text.replace(/\*\*/g, '').replace(/\\/g, '');
  const baseId = cleanText.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9가-힣-]/g, '');
  
  counts[baseId] = (counts[baseId] || 0) + 1;
  const id = counts[baseId] > 1 ? `${baseId}-${counts[baseId]}` : baseId;
  ids.push({ id, text: cleanText });
}

const duplicateIds = ids.filter((v, i, a) => a.findIndex(t => t.id === v.id) !== i);

if (duplicateIds.length === 0) {
    console.log('SUCCESS: All IDs are unique!');
} else {
    console.log('FAILURE: Duplicate IDs found:', duplicateIds);
}

const overviewItems = ids.filter(it => it.text === '개요');
console.log('Overview items:');
overviewItems.forEach(it => console.log(`- ${it.id}`));
