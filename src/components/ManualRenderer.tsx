import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { ToCItem } from '@/lib/manual-utils';

interface ManualRendererProps {
  content: string;
  toc: ToCItem[];
}

// 서버 컴포넌트: 마크다운은 빌드/서버에서 한 번만 파싱되고
// 클라이언트에는 완성된 HTML만 전달된다 (원문 재전송·재파싱 없음).
export default function ManualRenderer({ content, toc }: ManualRendererProps) {
  const nodeMap = new Map<number, string>();
  let headerIndex = 0;

  const getHeaderIdForNode = (node?: { position?: { start: { offset?: number } } }) => {
    if (!node || !node.position) return '';
    const pos = node.position.start.offset ?? -1;

    if (nodeMap.has(pos)) {
      return nodeMap.get(pos);
    }

    const item = toc[headerIndex];
    if (item) {
      headerIndex++;
      nodeMap.set(pos, item.id);
      return item.id;
    }
    return '';
  };

  return (
    <div className="prose prose-slate max-w-none
      prose-headings:font-black prose-headings:tracking-tight
      prose-h1:text-5xl prose-h1:lg:text-6xl prose-h1:mb-16 prose-h1:bg-gradient-to-r prose-h1:from-teal-600 prose-h1:to-navy-600 prose-h1:bg-clip-text prose-h1:text-transparent
      prose-h2:text-3xl prose-h2:lg:text-4xl prose-h2:mt-24 prose-h2:mb-8 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-6 prose-h2:text-slate-900
      prose-h3:text-2xl prose-h3:mt-16 prose-h3:mb-6 prose-h3:text-teal-700
      prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:text-[1.1rem] prose-p:mb-8
      prose-li:text-slate-600 prose-li:text-[1.1rem] prose-li:leading-[1.8] prose-li:mb-2
      prose-strong:text-teal-700 prose-strong:font-bold
      prose-table:border-collapse prose-table:border prose-table:border-slate-200 prose-table:my-12
      prose-th:bg-slate-50 prose-th:px-6 prose-th:py-4 prose-th:text-teal-700 prose-th:font-black prose-th:text-sm prose-th:uppercase prose-th:tracking-wider
      prose-td:px-6 prose-td:py-4 prose-td:border prose-td:border-slate-200 prose-td:text-sm prose-td:text-slate-700
      prose-img:rounded-3xl prose-img:border prose-img:border-slate-200 prose-img:shadow-xl prose-img:my-16
      prose-pre:bg-slate-50 prose-pre:border prose-pre:border-slate-200 prose-pre:rounded-2xl prose-pre:p-8 prose-pre:my-12
      prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:bg-teal-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:my-10
      prose-hr:border-slate-100 prose-hr:my-20
      [&>*]:[content-visibility:auto] [&>*]:[contain-intrinsic-size:auto_320px]
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ children, ...props }) {
            return (
              <code className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded-md font-mono text-sm border border-teal-100" {...props}>
                {children}
              </code>
            );
          },
          img({ src, alt }) {
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={typeof src === 'string' ? src : undefined} alt={alt || '매뉴얼 스크린샷'} loading="lazy" decoding="async" />
            );
          },
          h1: ({ node, children }) => <h1 id={getHeaderIdForNode(node)} className="scroll-mt-32">{children}</h1>,
          h2: ({ node, children }) => <h2 id={getHeaderIdForNode(node)} className="scroll-mt-32">{children}</h2>,
          h3: ({ node, children }) => <h3 id={getHeaderIdForNode(node)} className="scroll-mt-32">{children}</h3>,
          table: ({ children }) => (
            <div className="overflow-x-auto my-12 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full divide-y divide-slate-100">
                {children}
              </table>
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
