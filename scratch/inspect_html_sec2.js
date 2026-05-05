const fs = require('fs');
const html = fs.readFileSync('c:/Source/my-simple-next/scratch/manual_html.html', 'utf8');
const search = '2.1 시스템 요구 사항';
const index = html.indexOf(search);
console.log(html.substring(index - 500, index + 200));
