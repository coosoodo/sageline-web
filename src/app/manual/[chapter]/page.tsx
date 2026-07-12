import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import ManualHeader from '@/components/ManualHeader';
import ManualSidebar from '@/components/ManualSidebar';
import ManualRenderer from '@/components/ManualRenderer';
import { parseManual, getChapters } from '@/lib/manual-utils';

export const dynamic = 'force-static';
export const dynamicParams = false;

function readManual() {
  const manualPath = path.join(process.cwd(), 'src/content/manual.md');
  return fs.readFileSync(manualPath, 'utf8');
}

export function generateStaticParams() {
  return getChapters(readManual()).map((c) => ({ chapter: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapter: string }>;
}): Promise<Metadata> {
  const { chapter } = await params;
  const ch = getChapters(readManual()).find((c) => c.slug === chapter);
  if (!ch) return { title: '사용자 설명서' };
  return {
    title: `${ch.title} | 부엉이 트레이더 설명서`,
    description: `부엉이 트레이더 사용자 설명서 — ${ch.shortTitle}`,
  };
}

export default async function ManualChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await params;
  const raw = readManual();
  const { meta } = parseManual(raw);
  const chapters = getChapters(raw);

  const index = chapters.findIndex((c) => c.slug === chapter);
  if (index === -1) notFound();

  const current = chapters[index];
  const prev = chapters[index - 1];
  const next = chapters[index + 1];
  const chapterLinks = chapters.map((c) => ({ slug: c.slug, title: c.title }));

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-600">
      <ManualHeader version={meta.version} lastUpdated={meta.lastUpdated} />

      <div className="container mx-auto max-w-7xl px-8 py-12 flex-grow">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* 사이드바 */}
          <aside className="lg:w-64 flex-shrink-0 lg:sticky lg:top-32 h-fit">
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <ManualSidebar chapters={chapterLinks} currentSlug={current.slug} toc={current.toc} />
            </div>
          </aside>

          {/* 본문 */}
          <main className="flex-grow min-w-0">
            {/* 장 히어로 */}
            <div className="mb-12 p-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-teal-50 via-navy-50 to-transparent">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-teal-600 mb-3">
                Chapter {current.slug} / {chapters.length}
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                {current.title}
              </h1>
            </div>

            <ManualRenderer content={current.content} toc={current.toc} />

            {/* 이전 / 다음 장 */}
            <nav className="mt-20 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prev ? (
                <Link
                  href={`/manual/${prev.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 p-5 hover:border-teal-500/40 hover:bg-teal-50/40 transition-all"
                >
                  <ChevronLeft size={20} className="flex-shrink-0 text-slate-400 group-hover:text-teal-600 transition-colors" />
                  <div className="min-w-0">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">이전</div>
                    <div className="text-sm font-bold text-slate-700 truncate">{prev.title}</div>
                  </div>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  href={`/manual/${next.slug}`}
                  className="group flex items-center justify-end gap-3 rounded-2xl border border-slate-200 p-5 text-right hover:border-teal-500/40 hover:bg-teal-50/40 transition-all sm:col-start-2"
                >
                  <div className="min-w-0">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">다음</div>
                    <div className="text-sm font-bold text-slate-700 truncate">{next.title}</div>
                  </div>
                  <ChevronRight size={20} className="flex-shrink-0 text-slate-400 group-hover:text-teal-600 transition-colors" />
                </Link>
              )}
            </nav>

            <footer className="mt-16 pt-8 border-t border-slate-100 text-sm text-slate-400 font-medium tracking-widest uppercase">
              © 2026 SAGELINE. All rights reserved.
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
