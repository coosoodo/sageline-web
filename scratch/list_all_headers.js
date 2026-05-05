const fs = require('fs');
const path = require('path');

const manualPath = path.join(__dirname, '../src/content/manual.md');
const content = fs.readFileSync(manualPath, 'utf8');

const headingRegex = /^(?:>\s*)?(#{1,3})\s+(.+)$/gm;
let match;
let count = 0;

console.log('--- START HEADERS ---');
while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    console.log(`${match.index}: [L${level}] ${text}`);
    count++;
}
console.log('--- END HEADERS ---');
console.log(`Total headers found: ${count}`);
