import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9가-힣-]/g, '');

function remarkAddHeadingIds() {
  return (tree) => {
    const counts = {};
    visit(tree, 'heading', (node) => {
      let text = '';
      visit(node, ['text', 'inlineCode'], (child) => {
        if (child.value) text += child.value;
      });
      const cleanText = text.replace(/\*\*/g, '').replace(/\\/g, '');
      const baseId = slugify(cleanText);
      counts[baseId] = (counts[baseId] || 0) + 1;
      const id = counts[baseId] > 1 ? `${baseId}-${counts[baseId]}` : baseId;
      
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.id = id;
    });
  };
}

const markdown = `
# 1. 시작하기 전에
## 1.1 이 문서에 대하여
### 개요
### 개요
`;

unified()
  .use(remarkParse)
  .use(remarkAddHeadingIds)
  .use(remarkRehype)
  .use(rehypeStringify)
  .process(markdown)
  .then((file) => console.log(String(file)));
