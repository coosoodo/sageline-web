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
      prose-headings:font-bold prose-headings:tracking-tight
      prose-h1:text-4xl prose-h1:lg:text-5xl prose-h1:mb-8 prose-h1:bg-gradient-to-r prose-h1:from-teal-600 prose-h1:to-navy-600 prose-h1:bg-clip-text prose-h1:text-transparent
      prose-h2:text-2xl prose-h2:lg:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-3 prose-h2:text-slate-900
      prose-h3:text-lg prose-h3:lg:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-teal-700
      prose-p:text-slate-600 prose-p:leading-[1.75] prose-p:text-base prose-p:my-4
      prose-li:text-slate-600 prose-li:text-base prose-li:leading-[1.75] prose-li:my-1
      prose-ul:my-4 prose-ol:my-4
      prose-strong:text-teal-700 prose-strong:font-semibold
      prose-table:border-collapse prose-table:border prose-table:border-slate-200 prose-table:my-6 prose-table:text-sm
      prose-th:bg-slate-50 prose-th:px-4 prose-th:py-2.5 prose-th:text-teal-700 prose-th:font-bold prose-th:text-xs prose-th:uppercase prose-th:tracking-wide prose-th:text-left
      prose-td:px-4 prose-td:py-2.5 prose-td:border prose-td:border-slate-200 prose-td:text-slate-700 prose-td:align-top
      prose-img:rounded-2xl prose-img:border prose-img:border-slate-200 prose-img:shadow-md prose-img:my-8
      prose-pre:bg-slate-50 prose-pre:border prose-pre:border-slate-200 prose-pre:rounded-xl prose-pre:p-5 prose-pre:my-6
      prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:bg-teal-50 prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-slate-600 prose-blockquote:my-5
      prose-hr:border-slate-100 prose-hr:my-10
      [&_td_p]:my-0 [&_th_p]:my-0 [&_td_p]:leading-relaxed [&_blockquote_p]:my-0
      [&>*]:[content-visibility:auto] [&>*]:[contain-intrinsic-size:auto_200px]
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
