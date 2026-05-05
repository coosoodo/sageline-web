const fs = require('fs');
const html = fs.readFileSync('c:/Source/my-simple-next/scratch/manual_html.html', 'utf8');
const search = '시작하기 전에';
let index = -1;
while ((index = html.indexOf(search, index + 1)) !== -1) {
    console.log(`Match at index ${index}:`);
    console.log(html.substring(index - 50, index + 100));
    console.log('---');
}
