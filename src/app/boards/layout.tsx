import React from 'react';
import Link from 'next/link';

const BOARDS = [
  { id: 'free', name: '자유게시판' },
  { id: 'qa', name: 'Q&A' },
  { id: 'resources', name: '자료실' },
  { id: 'suggestions', name: '개선제안' },
  { id: 'bugs', name: '버그신고' },
];

export default function BoardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 게시판 전용 서브 네비게이션 (데스크톱 사이드바 또는 상단 탭) */}
      <div className="container mx-auto max-w-7xl px-8 pt-32">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* 사이드바 메뉴 */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-6 ml-4">Categories</p>
              {BOARDS.map((board) => (
                <Link
                  key={board.id}
                  href={`/boards/${board.id}`}
                  className="group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-emerald-600 transition-all duration-300"
                >
                  <span>{board.name}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              ))}
            </div>
          </aside>

          {/* 메인 콘텐츠 영역 */}
          <div className="flex-grow">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
