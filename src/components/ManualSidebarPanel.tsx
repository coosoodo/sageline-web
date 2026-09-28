'use client';

import { useState } from 'react';
import { ChevronDown, ListTree } from 'lucide-react';

import ManualSidebar from '@/components/ManualSidebar';
import { ToCItem, ManualNavChapter } from '@/lib/manual-utils';

interface ManualSidebarPanelProps {
  nav: ManualNavChapter[];
  currentSlug: string;
  currentChapterSlug: string;
  toc: ToCItem[];
  basePath?: string;
  currentTitle: string; // 모바일 토글 버튼에 표시할 현재 페이지 제목
}

/**
 * 설명서 목차 패널.
 * 데스크톱(lg 이상)에서는 항상 펼쳐 두고, 모바일에서는 접어 두어
 * 목차가 본문보다 먼저 한두 화면을 차지하지 않게 한다.
 */
export default function ManualSidebarPanel({ currentTitle, ...sidebarProps }: ManualSidebarPanelProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="manual-sidebar"
        className="lg:hidden flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left"
      >
        <ListTree size={16} className="flex-shrink-0 text-teal-600" />
        <span className="flex-grow min-w-0">
          <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">설명서 목차</span>
          <span className="block truncate text-sm font-bold text-slate-800">{currentTitle}</span>
        </span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* 목차 링크를 누르면 페이지가 바뀌며 상태가 초기화되므로 모바일에서는 다시 접힌다 */}
      <div id="manual-sidebar" className={`${open ? 'block border-t border-slate-100 lg:border-t-0' : 'hidden'} lg:block`}>
        <ManualSidebar {...sidebarProps} />
      </div>
    </div>
  );
}
