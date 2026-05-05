const fs = require('fs');
const path = require('path');

const mdPath = path.join('c:/Source/my-simple-next/src/manual.md');
const content = fs.readFileSync(mdPath, 'utf8');

const lines = content.split('\n');
console.log('First 10 lines:');
console.log(lines.slice(0, 10).join('\n'));

console.log('\nSearching for Section 1 header-like lines:');
lines.forEach((line, index) => {
    if (line.match(/^\d+(\\\.)? /) || line.match(/^\*\*\d+(\\\.)? /)) {
        if (index < 200 || (index > 2100 && index < 2200)) {
             console.log(`Line ${index + 1}: ${line}`);
        }
    }
});
