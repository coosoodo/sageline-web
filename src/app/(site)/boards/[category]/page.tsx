import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import BoardHeader from '@/components/BoardHeader';
import BoardList from '@/components/BoardList';
import BoardToolbar from '@/components/BoardToolbar';
import Pagination from '@/components/Pagination';
import { BOARD_CATEGORIES, BOARD_CATEGORY_IDS, getBoardCategory } from '@/lib/boards';
import { ChevronRight } from 'lucide-react';

const PAGE_SIZE = 10;

interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string; sort?: string; q?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getBoardCategory(category);
  return {
    title: cat ? cat.title : '게시판',
    description: cat ? cat.description : 'SAGE LINE 커뮤니티 게시판입니다.',
  };
}

export default async function BoardPage({ params, searchParams }: Props) {
  const { category } = await params;
  const { page: pageParam, sort = 'latest', q = '' } = await searchParams;

  // 정의되지 않은 카테고리는 404
  if (!BOARD_CATEGORY_IDS.includes(category)) notFound();

  const page = Math.max(1, Number.parseInt(pageParam || '1', 10) || 1);
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;
  const keyword = q.trim();

  const supabase = await createSupabaseServerClient();

  let query = supabase
    .from('posts')
    .select('*', { count: 'exact' })
    .eq('category', category);

  if (keyword) query = query.ilike('title', `%${keyword}%`);

  // 공지 우선 → 선택한 정렬 기준
  query = query.order('is_announcement', { ascending: false });
  query = sort === 'views'
    ? query.order('view_count', { ascending: false })
    : query.order('created_at', { ascending: false });

  const { data: posts, count, error } = await query.range(from, to);

  if (error) {
    console.error('게시글 목록 조회 실패:', error.message);
  }

  const list = posts ?? [];
  const total = count ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-600">
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* 카테고리 사이드바 */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-32 space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6 ml-4">Categories</p>
                {BOARD_CATEGORIES.map((board) => {
                  const active = board.id === category;
                  return (
                    <Link
                      key={board.id}
                      href={`/boards/${board.id}`}
                      aria-current={active ? 'page' : undefined}
                      className={`group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                        active
                          ? 'bg-teal-50 text-teal-700'
                          : 'text-slate-500 hover:bg-slate-50 hover:text-teal-600'
                      }`}
                    >
                      <span>{board.shortName}</span>
                      <span className={`transition-opacity ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>→</span>
                    </Link>
                  );
                })}
              </div>
            </aside>

            {/* 메인 콘텐츠 */}
            <div className="flex-grow min-w-0">
              <BoardHeader category={category} />

              {/* 도구: 검색 · 정렬 · 글쓰기 */}
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-sm text-slate-500 font-light">
                  총 <span className="text-teal-600 font-bold">{total}</span>개의 게시글
                  {keyword && <span className="text-slate-400"> · &lsquo;{keyword}&rsquo; 검색 결과</span>}
                </div>
                <Link
                  href={`/boards/${category}/write`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-white hover:bg-slate-800 transition-all duration-300"
                >
                  글쓰기 <ChevronRight size={14} />
                </Link>
              </div>

              <BoardToolbar category={category} sort={sort} q={keyword} />

              <BoardList posts={list} category={category} keyword={keyword} />

              <Pagination category={category} page={page} totalPages={totalPages} sort={sort} q={keyword} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
