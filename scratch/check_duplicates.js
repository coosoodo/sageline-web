const fs = require('fs');
const path = require('path');

const manualPath = path.join(__dirname, '../src/content/manual.md');
const content = fs.readFileSync(manualPath, 'utf8');

const headingRegex = /^(?:>\s*)?(#{1,3})\s+(.+)$/gm;
const items = [];
let match;

while ((match = headingRegex.exec(content)) !== null) {
  const level = match[1].length;
  const text = match[2].trim();
  const cleanText = text.replace(/\*\*/g, '').replace(/\\/g, '');
  const id = cleanText.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9가-힣-]/g, '');
  
  items.push({ id, text: cleanText, level, matchIndex: match.index });
}

const counts = {};
items.forEach(it => {
    const key = `${it.level}-${it.text}`;
    counts[key] = (counts[key] || 0) + 1;
});

console.log('Duplicate Headers in items array:');
Object.entries(counts).forEach(([key, count]) => {
    if (count > 1) {
        console.log(`${key}: ${count} times`);
    }
});
