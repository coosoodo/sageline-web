const fs = require('fs');
const html = fs.readFileSync('c:/Source/my-simple-next/scratch/manual_html.html', 'utf8');
const search = '2.1 시스템 요구 사항';
let index = html.indexOf(search);
index = html.indexOf(search, index + 1); // Second occurrence
if (index !== -1) {
    console.log(html.substring(index - 500, index + 200));
} else {
    console.log('Second occurrence not found');
}
