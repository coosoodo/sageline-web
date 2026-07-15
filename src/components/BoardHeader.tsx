import React from 'react';
import { getBoardView } from '@/lib/boards';

interface BoardHeaderProps {
  category: string;
}

export default function BoardHeader({ category }: BoardHeaderProps) {
  const info = getBoardView(category) || { title: '게시판', description: '커뮤니티 공간입니다.', icon: '📌' };

  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-2xl">
          {info.icon}
        </div>
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">{info.title}</h1>
          <p className="text-xs text-teal-600 font-bold uppercase tracking-widest mt-1">Community</p>
        </div>
      </div>
      <p className="text-slate-500 font-light leading-relaxed">
        {info.description}
      </p>
    </div>
  );
}
