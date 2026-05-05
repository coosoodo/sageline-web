const fs = require('fs');
fetch('http://localhost:3000/manual')
  .then(r => r.text())
  .then(t => {
    const matches = t.match(/<h[1-3][^>]*id="([^"]*)"[^>]*>([^<]*)<\/h/g);
    if (matches) {
      fs.writeFileSync('c:\\Source\\sageline-web\\scratch\\fetch-headers.txt', matches.join('\n'));
    }
  })
  .catch(console.error);
