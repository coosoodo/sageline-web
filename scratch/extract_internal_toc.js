const fs = require('fs');
const content = fs.readFileSync('c:/Source/my-simple-next/src/manual.md', 'utf8');
const lines = content.split('\n');
const toc = [];
let inTOC = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.includes('사용자 설명서 목차')) {
        inTOC = true;
        continue;
    }
    if (inTOC) {
        // Detect section headers in TOC
        const match = line.match(/^\*\*(\d+)\\\. (.*)\*\*$/);
        if (match) {
            toc.push({ level: 1, number: match[1], title: match[2].trim() });
        } else {
            const subMatch = line.match(/^\*   \*\*(\d+\.\d+) (.*)\*\*:/);
            if (subMatch) {
                toc.push({ level: 2, number: subMatch[1], title: subMatch[2].trim() });
            }
        }
        // Stop after Section 8
        if (line.includes('8.4 로그 파일 업로드 방법')) {
            break;
        }
    }
}

console.log(JSON.stringify(toc, null, 2));
