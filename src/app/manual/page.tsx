import fs from 'fs';
import path from 'path';
import Link from 'next/link';

import ManualRenderer from '@/components/ManualRenderer';
import ManualToC from '@/components/ManualToC';
import { getToc } from '@/lib/manual-utils';
import { ChevronRight, BookOpen, Clock, Tag } from 'lucide-react';

export const dynamic = 'force-static';

export default async function ManualPage() {
  const manualPath = path.join(process.cwd(), 'src/content/manual.md');
  const content = fs.readFileSync(manualPath, 'utf8');

  // Extract metadata from frontmatter (simple split)
  const parts = content.split('---');
  const markdownContent = parts.length > 2 ? parts.slice(2).join('---') : content;
  const metadataStr = parts.length > 2 ? parts[1] : '';
  
  const title = metadataStr.match(/title:\s*(.+)/)?.[1] || '사용자 설명서';
  const version = metadataStr.match(/version:\s*(.+)/)?.[1] || '1.0';
  const lastUpdated = metadataStr.match(/lastUpdated:\s*(.+)/)?.[1] || '2026. 05. 05.';

  const processedContent = markdownContent;
  const toc = getToc(processedContent);

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-600">
      {/* 프리미엄 헤더 */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
          <Link href="/" className="group flex items-center space-x-3 cursor-pointer">
            <div className="relative h-10 w-10 flex-shrink-0">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path d="M6 36 C6 36 8 40 20 40 C32 40 34 36 34 36 L32 20 C32 12 27 7 20 7 C13 7 8 12 8 20 Z" fill="url(#nBody)"/>
                <path d="M11 12 L7 1 L15 10 Z" fill="url(#nGrad)"/>
                <ellipse cx="20" cy="20" rx="11" ry="10" fill="url(#nFace)"/>
                <circle cx="14.5" cy="19" r="5.5" fill="#e2e8f0" stroke="url(#nGrad)" strokeWidth="1"/>
                <circle cx="14.5" cy="19" r="4" fill="url(#nEye)"/>
                <circle cx="14.5" cy="19" r="2" fill="#f8fafc"/>
                <circle cx="25.5" cy="19" r="5.5" fill="#e2e8f0" stroke="url(#nGrad)" strokeWidth="1"/>
                <circle cx="25.5" cy="19" r="4" fill="url(#nEye)"/>
                <circle cx="25.5" cy="19" r="2" fill="#f8fafc"/>
                <path d="M20 24 L17.5 28 L20 26.5 L22.5 28 Z" fill="url(#nGrad)"/>
                <defs>
                  <linearGradient id="nGrad" x1="7" y1="1" x2="33" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#34d399"/><stop offset="100%" stopColor="#22d3ee"/>
                  </linearGradient>
                  <linearGradient id="nBody" x1="6" y1="7" x2="34" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#34d399" stopOpacity="0.18"/><stop offset="100%" stopColor="#22d3ee" stopOpacity="0.26"/>
                  </linearGradient>
                  <radialGradient id="nFace" cx="50%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#1a3a4a" stopOpacity="0.6"/><stop offset="100%" stopColor="#082030" stopOpacity="0.3"/>
                  </radialGradient>
                  <radialGradient id="nEye" cx="40%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#6ee7b7"/><stop offset="60%" stopColor="#0891b2"/><stop offset="100%" stopColor="#065f80"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[18px] font-black tracking-[0.08em] text-slate-900 group-hover:text-emerald-500 transition-colors duration-300">
                SAGE<span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent"> LINE</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.25em] text-slate-500 uppercase mt-0.5">User Manual</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-4 text-xs font-bold text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
              <span className="flex items-center gap-1.5"><Tag size={12} className="text-emerald-600"/> v{version}</span>
              <span className="h-3 w-px bg-slate-200"></span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-cyan-600"/> {lastUpdated}</span>
            </div>
            <Link href="/" className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 hover:text-emerald-700 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-7xl px-8 py-12 flex-grow">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* 사이드바 목차 */}
          <aside className="lg:w-64 flex-shrink-0 lg:sticky lg:top-32 h-fit">
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <ManualToC content={processedContent} toc={toc} />
            </div>
          </aside>

          {/* 메인 콘텐츠 */}
          <main className="flex-grow">
            {/* 상단 섹션 */}
            <div className="mb-12 p-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-emerald-50 via-cyan-50 to-transparent relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <BookOpen size={120} className="text-emerald-500" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 mb-4 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200">
                  <BookOpen size={14} /> Official Documentation
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  {title}
                </h1>
                <p className="text-lg text-slate-600 font-light max-w-2xl">
                  부엉이 ATS의 설치부터 고급 전략 설정까지 모든 과정을 상세히 안내합니다. 
                  처음 사용하시는 경우 <span className="text-emerald-700 font-medium">설치 및 초기 설정</span> 섹션부터 시작해 주세요.
                </p>
              </div>
            </div>

            {/* 마크다운 렌더러 */}
            <ManualRenderer content={processedContent} toc={toc} />
            
            {/* 하단 네비게이션 */}
            <footer className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-sm text-slate-400 font-medium tracking-widest uppercase">
                © 2026 SAGELINE. All rights reserved.
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors uppercase tracking-widest">
                  Top of Page <ChevronRight size={14} />
                </a>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
