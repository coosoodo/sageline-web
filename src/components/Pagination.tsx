import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  category: string;
  page: number;
  totalPages: number;
  sort: string;
  q: string;
}

function pageHref(category: string, page: number, sort: string, q: string) {
  const params = new URLSearchParams();
  if (page > 1) params.set('page', String(page));
  if (sort && sort !== 'latest') params.set('sort', sort);
  if (q) params.set('q', q);
  const qs = params.toString();
  return `/boards/${category}${qs ? `?${qs}` : ''}`;
}

// 현재 페이지 주변 번호 목록 (최대 5개 윈도우)
function pageWindow(page: number, totalPages: number): number[] {
  const span = 2;
  let start = Math.max(1, page - span);
  const end = Math.min(totalPages, start + span * 2);
  start = Math.max(1, end - span * 2);
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export default function Pagination({ category, page, totalPages, sort, q }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = pageWindow(page, totalPages);
  const base = 'inline-flex h-10 min-w-10 items-center justify-center rounded-xl px-3 text-sm font-bold transition-all';

  return (
    <nav className="mt-10 flex items-center justify-center gap-1.5" aria-label="페이지 이동">
      {page > 1 ? (
        <Link href={pageHref(category, page - 1, sort, q)} aria-label="이전 페이지" className={`${base} border border-slate-200 text-slate-500 hover:border-teal-500/40 hover:text-teal-600`}>
          <ChevronLeft size={16} />
        </Link>
      ) : (
        <span className={`${base} border border-slate-100 text-slate-300`}><ChevronLeft size={16} /></span>
      )}

      {pages[0] > 1 && (
        <>
          <Link href={pageHref(category, 1, sort, q)} className={`${base} text-slate-500 hover:bg-slate-50`}>1</Link>
          {pages[0] > 2 && <span className="px-1 text-slate-300">…</span>}
        </>
      )}

      {pages.map((p) => (
        <Link
          key={p}
          href={pageHref(category, p, sort, q)}
          aria-current={p === page ? 'page' : undefined}
          className={`${base} ${p === page ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          {p}
        </Link>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && <span className="px-1 text-slate-300">…</span>}
          <Link href={pageHref(category, totalPages, sort, q)} className={`${base} text-slate-500 hover:bg-slate-50`}>{totalPages}</Link>
        </>
      )}

      {page < totalPages ? (
        <Link href={pageHref(category, page + 1, sort, q)} aria-label="다음 페이지" className={`${base} border border-slate-200 text-slate-500 hover:border-teal-500/40 hover:text-teal-600`}>
          <ChevronRight size={16} />
        </Link>
      ) : (
        <span className={`${base} border border-slate-100 text-slate-300`}><ChevronRight size={16} /></span>
      )}
    </nav>
  );
}
