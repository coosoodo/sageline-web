'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert prose-teal max-w-none prose-headings:scroll-mt-24 prose-img:rounded-3xl prose-img:border prose-img:border-white/10 prose-table:border prose-table:border-white/10 prose-th:bg-white/5 prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ src, ...props }) => {
            // Defensive check for empty src or potentially broken local paths
            if (!src) return null;
            
            // If it's a local absolute path that wasn't converted, it won't load anyway.
            // We'll keep it for now but the ideally these are fixed in the markdown source.
            return (
              <img 
                src={src} 
                {...props} 
                loading="lazy" 
                onError={(e) => {
                  // Hide broken images to keep the UI clean
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
