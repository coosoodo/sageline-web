"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { extractText, ToCItem } from '@/lib/manual-utils';

interface ManualRendererProps {
  content: string;
  toc: ToCItem[];
}

export default function ManualRenderer({ content, toc }: ManualRendererProps) {
  const lastContentRef = React.useRef(content);
  const nodeMap = React.useRef(new Map<number, string>());
  const headerIndexRef = React.useRef(0);

  if (lastContentRef.current !== content) {
    lastContentRef.current = content;
    nodeMap.current.clear();
    headerIndexRef.current = 0;
  }

  const getHeaderIdForNode = (node: any) => {
    if (!node || !node.position) return '';
    const pos = node.position.start.offset;
    
    if (nodeMap.current.has(pos)) {
      return nodeMap.current.get(pos);
    }
    
    const item = toc[headerIndexRef.current];
    if (item) {
      headerIndexRef.current++;
      nodeMap.current.set(pos, item.id);
      return item.id;
    }
    return '';
  };

  return (
    <div className="prose prose-slate max-w-none 
      prose-headings:font-black prose-headings:tracking-tight 
      prose-h1:text-5xl prose-h1:lg:text-6xl prose-h1:mb-16 prose-h1:bg-gradient-to-r prose-h1:from-emerald-600 prose-h1:to-cyan-600 prose-h1:bg-clip-text prose-h1:text-transparent
      prose-h2:text-3xl prose-h2:lg:text-4xl prose-h2:mt-24 prose-h2:mb-8 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-6 prose-h2:text-slate-900
      prose-h3:text-2xl prose-h3:mt-16 prose-h3:mb-6 prose-h3:text-emerald-700
      prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:text-[1.1rem] prose-p:mb-8
      prose-li:text-slate-600 prose-li:text-[1.1rem] prose-li:leading-[1.8] prose-li:mb-2
      prose-strong:text-emerald-700 prose-strong:font-bold
      prose-table:border-collapse prose-table:border prose-table:border-slate-200 prose-table:my-12
      prose-th:bg-slate-50 prose-th:px-6 prose-th:py-4 prose-th:text-emerald-700 prose-th:font-black prose-th:text-sm prose-th:uppercase prose-th:tracking-wider
      prose-td:px-6 prose-td:py-4 prose-td:border prose-td:border-slate-200 prose-td:text-sm prose-td:text-slate-700
      prose-img:rounded-3xl prose-img:border prose-img:border-slate-200 prose-img:shadow-xl prose-img:my-16
      prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:my-10
      prose-hr:border-slate-100 prose-hr:my-20
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <div className="relative group my-12">
                <div className="relative">
                  <div className="flex items-center justify-between px-6 py-2 bg-slate-50 border-x border-t border-slate-200 rounded-t-2xl text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span>{match[1]}</span>
                    <span className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
                    </span>
                  </div>
                  <SyntaxHighlighter
                    style={vs}
                    language={match[1]}
                    PreTag="div"
                    className="!rounded-b-2xl !bg-slate-50/30 !m-0 !p-8 border border-slate-200"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              </div>
            ) : (
              <code className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md font-mono text-sm border border-emerald-100" {...props}>
                {children}
              </code>
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
