const fs = require('fs');
const path = require('path');

const manualPath = path.join(__dirname, '../src/content/manual.md');
const content = fs.readFileSync(manualPath, 'utf8');

const lines = content.split('\n');
lines.forEach((line, i) => {
    if (line.trim().startsWith('###')) {
        console.log(`Line ${i + 1}: [${line}]`);
    }
});
