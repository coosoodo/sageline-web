'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { ToCItem, ManualNavChapter } from '@/lib/manual-utils';

interface ManualSidebarProps {
  nav: ManualNavChapter[];
  currentSlug: string; // 현재 페이지 슬러그 (장 "2" 또는 절 "5-3")
  currentChapterSlug: string; // 현재 페이지가 속한 장 슬러그
  toc: ToCItem[]; // 현재 페이지의 h2/h3
}

export default function ManualSidebar({ nav, currentSlug, currentChapterSlug, toc }: ManualSidebarProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (toc.length === 0) return;

    const order = toc.map((t) => t.id);
    const visible = new Set<string>();
    let lastPassedId = order[0];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) visible.add(id);
          else {
            visible.delete(id);
            if (entry.boundingClientRect.top < 0) lastPassedId = id;
          }
        }
        const firstVisible = order.find((id) => visible.has(id));
        setActiveId(firstVisible || lastPassedId);
      },
      { rootMargin: '-90px 0px -80% 0px', threshold: 0 },
    );

    for (const id of order) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [toc]);

  const handleTocClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const renderToc = () => (
    <div className="mt-1 mb-2 ml-3 border-l border-slate-100 pl-2 max-h-[60vh] overflow-y-auto scrollbar-hide">
      {toc.map((item) => {
        const active = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            title={item.text}
            onClick={(e) => handleTocClick(e, item.id)}
            className={`block py-1.5 px-3 text-xs rounded-md transition-all duration-200 truncate ${
              item.level === 3 ? 'pl-6' : ''
            } ${
              active
                ? 'text-teal-700 bg-teal-50 font-bold'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-medium'
            }`}
          >
            {item.text}
          </a>
        );
      })}
    </div>
  );

  return (
    <nav className="py-6">
      <div className="flex items-center gap-2 mb-5 px-4">
        <div className="h-4 w-1 bg-gradient-to-b from-teal-400 to-navy-400 rounded-full"></div>
        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">설명서 목차</h3>
      </div>

      <div className="space-y-0.5">
        {nav.map((ch) => {
          const isCurrentChapter = ch.slug === currentChapterSlug;
          return (
            <div key={ch.slug}>
              <Link
                href={ch.href}
                className={`flex items-center py-2 px-3 text-sm rounded-lg transition-all duration-200 ${
                  isCurrentChapter
                    ? 'font-black text-teal-700 bg-teal-50'
                    : 'font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className="truncate">{ch.title}</span>
              </Link>

              {/* 절이 없는 장: 현재 장이면 그 장의 목차 */}
              {isCurrentChapter && ch.sections.length === 0 && toc.length > 0 && renderToc()}

              {/* 절이 있는 장: 현재 장이면 절 목록 표시 */}
              {isCurrentChapter && ch.sections.length > 0 && (
                <div className="ml-3 border-l border-slate-100 pl-1 mt-1 mb-2">
                  {ch.sections.map((s) => {
                    const isCurrentSection = s.slug === currentSlug;
                    // 현재 페이지가 이 절이거나 이 절의 세부인지
                    const inThisSection = currentSlug === s.slug || currentSlug.startsWith(`${s.slug}-`);
                    return (
                      <div key={s.slug}>
                        <Link
                          href={`/manual/${s.slug}`}
                          className={`flex items-center py-1.5 px-3 text-xs rounded-md transition-all duration-200 ${
                            isCurrentSection
                              ? 'font-bold text-teal-700 bg-teal-50'
                              : 'font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          <span className="truncate">{s.title}</span>
                        </Link>
                        {isCurrentSection && toc.length > 0 && renderToc()}

                        {/* 세부 절(subs): 이 절 계열이 열렸을 때만 표시 */}
                        {s.subs.length > 0 && inThisSection && (
                          <div className="ml-3 border-l border-slate-100 pl-1 mt-0.5">
                            {s.subs.map((sub) => {
                              const isCurrentSub = sub.slug === currentSlug;
                              return (
                                <div key={sub.slug}>
                                  <Link
                                    href={`/manual/${sub.slug}`}
                                    className={`flex items-center py-1.5 px-3 text-[11px] rounded-md transition-all duration-200 ${
                                      isCurrentSub
                                        ? 'font-bold text-teal-700 bg-teal-50'
                                        : 'font-medium text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                                  >
                                    <span className="truncate">{sub.title}</span>
                                  </Link>
                                  {isCurrentSub && toc.length > 0 && renderToc()}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
