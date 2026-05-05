const fs = require('fs');
const html = fs.readFileSync('c:/Source/my-simple-next/scratch/manual_html.html', 'utf8');
const matches = html.match(/시작하기 전에/g);
console.log(`Count: ${matches ? matches.length : 0}`);
