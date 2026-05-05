import fs from 'fs';
import path from 'path';
import mammoth from 'mammoth';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const DOCX_PATH = './docs/부엉이_ATS_사용자설명서 1.1.docx';
const OUTPUT_MD_PATH = './src/content/manual.md';
const IMAGE_DIR = './public/images/manual';

async function convert() {
  try {
    console.log('Starting conversion...');

    // 1. Ensure directories exist
    if (!fs.existsSync(path.dirname(OUTPUT_MD_PATH))) {
      fs.mkdirSync(path.dirname(OUTPUT_MD_PATH), { recursive: true });
    }
    if (!fs.existsSync(IMAGE_DIR)) {
      fs.mkdirSync(IMAGE_DIR, { recursive: true });
    }

    let imageCounter = 0;
    const imageMap = new Map();

    // 2. Mammoth options to handle images
    const options = {
      convertImage: mammoth.images.inline((element) => {
        return element.read("base64").then((imageBuffer) => {
          imageCounter++;
          const extension = element.contentType.split("/")[1];
          const fileName = `image-${imageCounter}.${extension}`;
          const filePath = path.join(IMAGE_DIR, fileName);
          
          fs.writeFileSync(filePath, Buffer.from(imageBuffer, 'base64'));
          
          const publicPath = `/images/manual/${fileName}`;
          console.log(`Extracted image: ${publicPath}`);
          
          return {
            src: publicPath
          };
        });
      })
    };

    // 3. Convert DOCX to HTML
    const result = await mammoth.convertToHtml({ path: DOCX_PATH }, options);
    const html = result.value;
    const messages = result.messages;
    
    if (messages.length > 0) {
      console.log('Mammoth messages:', messages);
    }

    // 4. Convert HTML to Markdown
    const turndownService = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced'
    });
    turndownService.use(gfm);

    // Custom rule to keep image paths as is from Mammoth
    turndownService.addRule('images', {
      filter: 'img',
      replacement: function (content, node) {
        const alt = node.getAttribute('alt') || '';
        const src = node.getAttribute('src') || '';
        return `![${alt}](${src})`;
      }
    });

    let markdown = turndownService.turndown(html);

    // 5. Post-processing: Add IDs to headings for ToC
    // This is simple: find # Heading and replace with # Heading {#id} or just rely on slugification in the renderer
    // We'll add some frontmatter
    const frontmatter = `---
title: 부엉이 ATS 사용자 설명서
version: 1.1
lastUpdated: ${new Date().toLocaleDateString('ko-KR')}
---

`;

    fs.writeFileSync(OUTPUT_MD_PATH, frontmatter + markdown, 'utf8');
    console.log(`Successfully converted to ${OUTPUT_MD_PATH}`);
    console.log(`Total images extracted: ${imageCounter}`);

  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

convert();
