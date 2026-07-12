import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import BoardHeader from '@/components/BoardHeader';
import BoardList from '@/components/BoardList';
import { BOARD_CATEGORY_IDS } from '@/lib/boards';
import { ChevronRight } from 'lucide-react';

// 한 번에 불러올 최대 게시글 수 (무제한 로드 방지)
const POST_LIMIT = 100;

interface Props {
  params: Promise<{ category: string }>;
}

export default async function BoardPage({ params }: Props) {
  const { category } = await params;

  // 정의되지 않은 카테고리는 404
  if (!BOARD_CATEGORY_IDS.includes(category)) notFound();

  const supabase = await createSupabaseServerClient();

  // 게시글 가져오기 (공지사항 우선, 그 다음 최신순)
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('category', category)
    .order('is_announcement', { ascending: false })
    .order('created_at', { ascending: false })
    .limit(POST_LIMIT);

  if (error) {
    console.error('게시글 목록 조회 실패:', error.message);
  }

  const list = posts ?? [];

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-600">
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto max-w-6xl px-8">

          {/* 상단 헤더 */}
          <BoardHeader category={category} />

          {/* 게시판 도구 (검색, 글쓰기 등) */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm text-slate-500 font-light">
              총 <span className="text-teal-600 font-bold">{list.length}</span>개의 게시글
            </div>
            <Link
              href={`/boards/${category}/write`}
              className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-6 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-teal-600 hover:bg-teal-500/20 transition-all duration-300 shadow-lg shadow-teal-500/10"
            >
              글쓰기 <ChevronRight size={14} />
            </Link>
          </div>

          {/* 목록 테이블 */}
          <BoardList posts={list} category={category} />

        </div>
      </main>
    </div>
  );
}
