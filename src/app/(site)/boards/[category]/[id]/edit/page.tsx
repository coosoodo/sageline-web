import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import BoardHeader from '@/components/BoardHeader';
import BoardForm from '@/components/BoardForm';

interface Props {
  params: Promise<{ category: string; id: string }>;
}

export default async function EditPage({ params }: Props) {
  const { category, id } = await params;
  const supabase = await createSupabaseServerClient();

  // 게시글 데이터 불러오기
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (!post || error) {
    notFound();
  }

  // 작성자 본인 확인 — 권한 없으면 상세 페이지로 되돌림
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.id !== post.author_id) {
    redirect(`/boards/${category}/${id}`);
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-600">
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto max-w-4xl px-8">
          
          <BoardHeader category={category} />

          <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-10">
            <h2 className="text-xl font-black text-slate-900 mb-10 border-b border-slate-200 pb-6">게시글 수정</h2>
            <BoardForm 
              category={category} 
              isEdit={true} 
              initialData={{
                id: post.id,
                title: post.title,
                content: post.content,
                is_announcement: post.is_announcement
              }} 
            />
          </div>

        </div>
      </main>
    </div>
  );
}
