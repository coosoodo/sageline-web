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
    } catch (error) {
      const message = error instanceof Error ? error.message : '알 수 없는 오류';
      alert('삭제 중 오류가 발생했습니다: ' + message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex gap-2">
      <Link
        href={`/boards/${category}/${postId}/edit`}
        className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-500 hover:text-teal-600 hover:border-teal-500/40 transition-all"
        title="수정하기"
      >
        <Edit2 size={16} />
      </Link>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-500 hover:text-rose-500 hover:border-rose-500/40 transition-all disabled:opacity-50"
        title="삭제하기"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
