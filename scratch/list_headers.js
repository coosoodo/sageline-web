const fs = require('fs');
const content = fs.readFileSync('c:/Source/sageline-web/src/content/manual.md', 'utf8');
const headingRegex = /^(?:>\s*)?(#{1,3})\s+(.+)$/gm;
let match;
while ((match = headingRegex.exec(content)) !== null) {
  console.log(`${match[1]} ${match[2]}`);
}
