import React from 'react';

interface BoardHeaderProps {
  category: string;
}

const CATEGORY_MAP: Record<string, { title: string; description: string; icon: string }> = {
  qa: {
    title: 'Q&A 게시판',
    description: '궁금한 점을 자유롭게 질문하고 답변을 받아보세요.',
    icon: '❓'
  },
  resources: {
    title: '자료실',
    description: '필요한 프로그램이나 문서를 공유하는 공간입니다.',
    icon: '📂'
  },
  suggestions: {
    title: '개선제안',
    description: 'SAGE LINE의 발전을 위한 소중한 의견을 들려주세요.',
    icon: '💡'
  },
  bugs: {
    title: '버그신고',
    description: '서비스 이용 중 발생한 불편한 점을 제보해 주세요.',
    icon: '🐛'
  },
  free: {
    title: '자유게시판',
    description: '자유롭게 소통하고 이야기를 나누는 공간입니다.',
    icon: '💬'
  }
};

export default function BoardHeader({ category }: BoardHeaderProps) {
  const info = CATEGORY_MAP[category] || { title: '게시판', description: '커뮤니티 공간입니다.', icon: '📌' };

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
