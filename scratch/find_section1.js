const fs = require('fs');
const path = require('path');

const mdPath = path.join('c:/Source/my-simple-next/src/manual.md');
const content = fs.readFileSync(mdPath, 'utf8');
const lines = content.split('\n');

console.log('Searching for Section 1 start in the body:');
let foundTOCEnd = false;
lines.forEach((line, index) => {
    if (index > 100 && line.trim().match(/^1\. 시작하기 전에$/)) {
        console.log(`Line ${index + 1}: ${line}`);
    }
});
