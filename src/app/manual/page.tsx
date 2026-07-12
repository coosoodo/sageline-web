import fs from 'fs';
import path from 'path';
import Link from 'next/link';

import Image from 'next/image';
import ManualRenderer from '@/components/ManualRenderer';
import ManualToC from '@/components/ManualToC';
import logoMark from '@/images/SageLine_Mark.png';
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
              <Image src={logoMark} alt="SAGE LINE 로고" fill sizes="40px" className="object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[18px] font-black tracking-[0.08em] text-navy-700 group-hover:text-navy-500 transition-colors duration-300">
                SAGE<span className="text-teal-500"> LINE</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.25em] text-slate-500 uppercase mt-0.5">User Manual</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-4 text-xs font-bold text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
              <span className="flex items-center gap-1.5"><Tag size={12} className="text-teal-600"/> v{version}</span>
              <span className="h-3 w-px bg-slate-200"></span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-navy-600"/> {lastUpdated}</span>
            </div>
            <Link href="/" className="text-xs font-black uppercase tracking-[0.2em] text-teal-600 hover:text-teal-700 transition-colors">
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
              <ManualToC toc={toc} />
            </div>
          </aside>

          {/* 메인 콘텐츠 */}
          <main className="flex-grow">
            {/* 상단 섹션 */}
            <div className="mb-12 p-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-teal-50 via-navy-50 to-transparent relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <BookOpen size={120} className="text-teal-500" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 mb-4 px-3 py-1 rounded-full bg-teal-100 border border-teal-200">
                  <BookOpen size={14} /> Official Documentation
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  {title}
                </h1>
                <p className="text-lg text-slate-600 font-light max-w-2xl">
                  부엉이 ATS의 설치부터 고급 전략 설정까지 모든 과정을 상세히 안내합니다. 
                  처음 사용하시는 경우 <span className="text-teal-700 font-medium">설치 및 초기 설정</span> 섹션부터 시작해 주세요.
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
                <a href="#" className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-teal-600 transition-colors uppercase tracking-widest">
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
