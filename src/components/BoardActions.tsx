'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseBrowserClient } from '@/lib/supabase-browser';
import { Edit2, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface BoardActionsProps {
  category: string;
  postId: string;
  isAuthor: boolean;
}

export default function BoardActions({ category, postId, isAuthor }: BoardActionsProps) {
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();
  const [isDeleting, setIsDeleting] = useState(false);

  if (!isAuthor) return null;

  const handleDelete = async () => {
    if (!confirm('정말로 이 게시글을 삭제하시겠습니까?')) return;

    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;

      router.push(`/boards/${category}`);
      router.refresh();
    } catch (error: any) {
      alert('삭제 중 오류가 발생했습니다: ' + error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex gap-3">
      <Link 
        href={`/boards/${category}/${postId}/edit`}
        className="p-2.5 rounded-full border border-white/5 bg-white/5 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
        title="수정하기"
      >
        <Edit2 size={18} />
      </Link>
      <button 
        onClick={handleDelete}
        disabled={isDeleting}
        className="p-2.5 rounded-full border border-white/5 bg-white/5 text-slate-400 hover:text-rose-400 hover:border-rose-500/30 transition-all disabled:opacity-50"
        title="삭제하기"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
