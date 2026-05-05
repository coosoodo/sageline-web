import React from 'react';
import Link from 'next/link';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import BoardHeader from '@/components/BoardHeader';
import BoardList from '@/components/BoardList';
import { ChevronRight } from 'lucide-react';

interface Props {
  params: Promise<{ category: string }>;
}

export default async function BoardPage({ params }: Props) {
  const { category } = await params;
  const supabase = await createSupabaseServerClient();

  // 게시글 가져오기 (공지사항 우선, 그 다음 최신순)
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('category', category)
    .order('is_announcement', { ascending: false })
    .order('created_at', { ascending: false });

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-600">
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto max-w-6xl px-8">
          
          {/* 상단 헤더 */}
          <BoardHeader category={category} />

          {/* 게시판 도구 (검색, 글쓰기 등) */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm text-slate-500 font-light">
              총 <span className="text-emerald-400 font-bold">{(posts || []).length}</span>개의 게시글
            </div>
            <Link 
              href={`/boards/${category}/write`}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300 shadow-lg shadow-emerald-500/10"
            >
              글쓰기 <ChevronRight size={14} />
            </Link>
          </div>

          {/* 목록 테이블 */}
          <BoardList posts={posts || []} category={category} />

        </div>
      </main>
    </div>
  );
}
