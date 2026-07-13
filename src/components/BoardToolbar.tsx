'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search, X } from 'lucide-react';

interface BoardToolbarProps {
  category: string;
  sort: string;
  q: string;
}

const SORTS: { key: string; label: string }[] = [
  { key: 'latest', label: '최신순' },
  { key: 'views', label: '조회순' },
];

export default function BoardToolbar({ category, sort, q }: BoardToolbarProps) {
  const router = useRouter();
  const [value, setValue] = useState(q);

  const buildUrl = (next: { sort?: string; q?: string }) => {
    const params = new URLSearchParams();
    const nextSort = next.sort ?? sort;
    const nextQ = next.q ?? q;
    if (nextSort && nextSort !== 'latest') params.set('sort', nextSort);
    if (nextQ) params.set('q', nextQ);
    const qs = params.toString();
    return `/boards/${category}${qs ? `?${qs}` : ''}`;
  };

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(buildUrl({ q: value.trim() }));
  };

  const clearSearch = () => {
    setValue('');
    router.push(buildUrl({ q: '' }));
  };

  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-3">
      {/* 검색 */}
      <form onSubmit={submitSearch} className="relative flex-grow">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="제목으로 검색"
          aria-label="게시글 검색"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3 pl-11 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-teal-500/10 transition-all"
        />
        {value && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="검색어 지우기"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <X size={15} />
          </button>
        )}
      </form>

      {/* 정렬 세그먼트 */}
      <div className="flex flex-shrink-0 items-center gap-1 rounded-2xl border border-slate-200 bg-slate-50/50 p-1">
        {SORTS.map((s) => {
          const active = sort === s.key;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => router.push(buildUrl({ sort: s.key }))}
              aria-pressed={active}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                active ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
