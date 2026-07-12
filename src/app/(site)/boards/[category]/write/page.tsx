import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import { BOARD_CATEGORY_IDS } from '@/lib/boards';
import BoardHeader from '@/components/BoardHeader';
import BoardForm from '@/components/BoardForm';

interface Props {
  params: Promise<{ category: string }>;
}

export default async function WritePage({ params }: Props) {
  const { category } = await params;

  // 정의되지 않은 카테고리는 404
  if (!BOARD_CATEGORY_IDS.includes(category)) notFound();

  // 서버측 인증 가드 — 비로그인 사용자는 로그인 페이지로
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-600">
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto max-w-4xl px-8">
          
          <BoardHeader category={category} />

          <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-10">
            <h2 className="text-xl font-black text-slate-900 mb-10 border-b border-slate-200 pb-6">새 게시글 작성</h2>
            <BoardForm category={category} />
          </div>

        </div>
      </main>
    </div>
  );
}
