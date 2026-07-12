'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { ToCItem } from '@/lib/manual-utils';

interface ChapterLink {
  slug: string;
  title: string;
}

interface ManualSidebarProps {
  chapters: ChapterLink[];
  currentSlug: string;
  toc: ToCItem[]; // 현재 장의 h2/h3
}

export default function ManualSidebar({ chapters, currentSlug, toc }: ManualSidebarProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (toc.length === 0) return;
    let rafId = 0;

    const updateActive = () => {
      rafId = 0;
      const scrollPosition = window.scrollY + 140;
      // toc는 문서 순서이므로, 지나온 마지막 헤딩이 현재 활성 항목이다.
      let current = '';
      for (const item of toc) {
        const heading = document.getElementById(item.id);
        if (!heading) continue;
        const top = heading.getBoundingClientRect().top + window.scrollY;
        if (top <= scrollPosition) current = item.id;
        else break;
      }
      if (current) setActiveId(current);
    };

    const handleScroll = () => {
      if (!rafId) rafId = window.requestAnimationFrame(updateActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [toc]);

  const handleTocClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="py-6">
      {/* 장 목록 */}
      <div className="flex items-center gap-2 mb-5 px-4">
        <div className="h-4 w-1 bg-gradient-to-b from-teal-400 to-navy-400 rounded-full"></div>
        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">설명서 목차</h3>
      </div>

      <div className="space-y-0.5">
        {chapters.map((ch) => {
          const isCurrent = ch.slug === currentSlug;
          return (
            <div key={ch.slug}>
              <Link
                href={`/manual/${ch.slug}`}
                className={`flex items-center py-2 px-3 text-sm rounded-lg transition-all duration-200 ${
                  isCurrent
                    ? 'font-black text-teal-700 bg-teal-50'
                    : 'font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className="truncate">{ch.title}</span>
              </Link>

              {/* 현재 장의 하위 목차 */}
              {isCurrent && toc.length > 0 && (
                <div className="mt-1 mb-2 ml-3 border-l border-slate-100 pl-2 max-h-[calc(100vh-320px)] overflow-y-auto scrollbar-hide">
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
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
