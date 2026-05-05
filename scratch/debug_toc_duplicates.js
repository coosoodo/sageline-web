const fs = require('fs');
const path = require('path');

const manualPath = path.join(__dirname, '../src/content/manual.md');
const content = fs.readFileSync(manualPath, 'utf8');

const headingRegex = /^(?:>\s*)?(#{1,3})\s+(.+)$/gm;
let match;
const entries = [];

while ((match = headingRegex.exec(content)) !== null) {
  const level = match[1].length;
  const text = match[2].trim();
  const cleanText = text.replace(/\*\*/g, '').replace(/\\/g, '');
  const id = cleanText.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9가-힣-]/g, '');
  
  entries.push({ line: content.substring(0, match.index).split('\n').length, level, text, cleanText, id });
}

console.log(`Found ${entries.length} headers total.`);
const groupedByText = {};
entries.forEach(e => {
    if (!groupedByText[e.cleanText]) groupedByText[e.cleanText] = [];
    groupedByText[e.cleanText].push(e.line);
});

Object.entries(groupedByText).forEach(([text, lines]) => {
    if (lines.length > 1) {
        console.log(`Text "${text}" found on lines: ${lines.join(', ')}`);
    }
});
