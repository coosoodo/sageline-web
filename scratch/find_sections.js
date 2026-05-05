const fs = require('fs');
const path = require('path');

const mdPath = path.join('c:/Source/my-simple-next/src/manual.md');
const content = fs.readFileSync(mdPath, 'utf8');
const lines = content.split('\n');

console.log('Searching for Section 1/2/3 starts in the body:');
lines.forEach((line, index) => {
    if (index > 100) {
        if (line.trim().match(/^\d+(\\\.)? /)) {
            if (index < 1000 || index > 2000) {
                 // console.log(`Line ${index + 1}: ${line}`);
            }
        }
        if (line.includes('시작하기 전에') || line.includes('설치 및 초기 설정') || line.includes('로그인')) {
             console.log(`Line ${index + 1}: ${line}`);
        }
    }
});
