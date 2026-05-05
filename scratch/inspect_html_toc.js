const fs = require('fs');
const html = fs.readFileSync('c:/Source/my-simple-next/scratch/manual_html.html', 'utf8');
console.log(html.substring(378000, 385000));
