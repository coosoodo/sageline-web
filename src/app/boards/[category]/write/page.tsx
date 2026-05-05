import React from 'react';
import BoardHeader from '@/components/BoardHeader';
import BoardForm from '@/components/BoardForm';

interface Props {
  params: Promise<{ category: string }>;
}

export default async function WritePage({ params }: Props) {
  const { category } = await params;

  return (
    <div className="flex min-h-screen flex-col bg-[#050a14] text-slate-300">
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto max-w-4xl px-8">
          
          <BoardHeader category={category} />

          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-10">
            <h2 className="text-xl font-black text-white mb-10 border-b border-white/5 pb-6">새 게시글 작성</h2>
            <BoardForm category={category} />
          </div>

        </div>
      </main>
    </div>
  );
}
