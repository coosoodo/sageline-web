const fs = require('fs');
const content = fs.readFileSync('c:/Source/sageline-web/src/content/manual.md', 'utf8');
const lines = content.split('\n');
const line299 = lines[298]; // 0-indexed
console.log(`Line 299: "${line299}"`);
for (let i = 0; i < line299.length; i++) {
  console.log(`${line299[i]}: ${line299.charCodeAt(i)}`);
}
