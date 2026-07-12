import React from 'react';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import BoardHeader from '@/components/BoardHeader';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import BoardActions from '@/components/BoardActions';
import { ChevronLeft, Edit2, Trash2 } from 'lucide-react';

interface Props {
  params: Promise<{ category: string; id: string }>;
}

export default async function PostDetailPage({ params }: Props) {
  const { category, id } = await params;
  const supabase = await createSupabaseServerClient();

  // 게시글 가져오기
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (!post || error) {
    notFound();
  }

  // 조회수 증가
  await supabase
    .from('posts')
    .update({ view_count: (post.view_count || 0) + 1 })
    .eq('id', id);

  // 현재 사용자 확인
  const { data: { user } } = await supabase.auth.getUser();
  const isAuthor = user && user.id === post.author_id;

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-600">
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto max-w-4xl px-8">
          
          <Link 
            href={`/boards/${category}`}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-teal-400 transition-colors mb-8 group"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 목록으로 돌아가기
          </Link>

          <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            {/* 게시글 헤더 */}
            <div className="p-10 border-b border-slate-200 bg-slate-50/30">
              <div className="flex items-center gap-3 mb-6">
                {post.is_announcement && (
                  <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-[10px] font-black text-teal-700 border border-teal-200 uppercase tracking-widest">
                    공지사항
                  </span>
                )}
                <span className="text-xs font-bold text-teal-600 uppercase tracking-[0.2em]">{category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-8">{post.title}</h1>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-slate-500 font-light">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span>작성자: <span className="text-slate-900 font-medium">{post.author_name || '익명'}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span>날짜: <span className="text-slate-900 font-medium">{new Date(post.created_at).toLocaleDateString('ko-KR')}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span>조회수: <span className="text-slate-900 font-medium">{(post.view_count ?? 0).toLocaleString()}</span></span>
                  </div>
                </div>

                {isAuthor && (
                  <BoardActions category={category} postId={id} isAuthor={true} />
                )}
              </div>
            </div>

            {/* 게시글 본문 */}
            <div className="p-10 md:p-16">
              <MarkdownRenderer content={post.content} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
