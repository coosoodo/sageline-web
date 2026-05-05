const { getToc } = require('../src/lib/manual-utils');
const fs = require('fs');

const content = fs.readFileSync('src/content/manual.md', 'utf8');
const parts = content.split('---');
const markdownContent = parts.length > 2 ? parts.slice(2).join('---') : content;

const toc = getToc(markdownContent);

console.log('--- TOC Items ---');
toc.forEach(item => {
  console.log(`${'  '.repeat(item.level - 1)}${item.text} -> #${item.id}`);
});

const duplicates = toc.map(i => i.id).filter((id, index, self) => self.indexOf(id) !== index);
console.log('\nDuplicates:', duplicates);

const section2 = toc.find(i => i.text.includes('2. 설치 및 초기 설정'));
console.log('\nSection 2:', section2);
