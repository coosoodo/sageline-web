const fs = require('fs');
const content = fs.readFileSync('c:/Source/sageline-web/src/content/manual.md', 'utf8');
const parts = content.split('---');
const markdown = parts.length > 2 ? parts.slice(2).join('---') : content;

// Try to find patterns that look like headers
const lines = markdown.split('\n');
const potentialHeaders = lines.filter(line => {
    const trimmed = line.trim();
    // Pattern 1: **n. text**
    if (/^\*\*(\d+(\.\d+)*)\.?\\?\s+.*?\*\*$/.test(trimmed)) return true;
    // Pattern 2: n. text (on its own line)
    if (/^(\d+(\.\d+)+)\s+.*$/.test(trimmed)) return true; // 1.1, 1.1.1 etc
    return false;
});

console.log(JSON.stringify(potentialHeaders.slice(0, 50), null, 2));
