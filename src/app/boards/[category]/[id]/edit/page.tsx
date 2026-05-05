import React from 'react';
import { notFound } from 'next/navigation';
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

  // 작성자 본인 확인
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.id !== post.author_id) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050a14] text-white">
        <div className="text-center">
          <h1 className="text-2xl font-black mb-4">권한이 없습니다.</h1>
          <p className="text-slate-400">자신의 글만 수정할 수 있습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#050a14] text-slate-300">
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto max-w-4xl px-8">
          
          <BoardHeader category={category} />

          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-10">
            <h2 className="text-xl font-black text-white mb-10 border-b border-white/5 pb-6">게시글 수정</h2>
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
