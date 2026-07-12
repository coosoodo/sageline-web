import React from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  author_name: string | null;
  created_at: string;
  view_count: number;
  is_announcement: boolean;
}

interface BoardListProps {
  posts: Post[];
  category: string;
}

export default function BoardList({ posts, category }: BoardListProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  };

  return (
    <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50/50">
            <th className="px-8 py-5 text-xs font-black uppercase tracking-[0.2em] text-slate-500 w-16 text-center">No.</th>
            <th className="px-8 py-5 text-xs font-black uppercase tracking-[0.2em] text-slate-500">제목</th>
            <th className="px-8 py-5 text-xs font-black uppercase tracking-[0.2em] text-slate-500 w-32">작성자</th>
            <th className="px-8 py-5 text-xs font-black uppercase tracking-[0.2em] text-slate-500 w-32 text-center">날짜</th>
            <th className="px-8 py-5 text-xs font-black uppercase tracking-[0.2em] text-slate-500 w-24 text-center">조회</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {posts.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-8 py-20 text-center text-slate-500 font-light">
                등록된 게시글이 없습니다.
              </td>
            </tr>
          ) : (
            posts.map((post, index) => (
              <tr 
                key={post.id} 
                className={`group hover:bg-slate-50 transition-colors ${post.is_announcement ? 'bg-teal-50/30' : ''}`}
              >
                <td className="px-8 py-5 text-sm font-medium text-slate-500 text-center">
                  {post.is_announcement ? (
                    <span className="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-0.5 text-[10px] font-black text-teal-700 border border-teal-200">
                      공지
                    </span>
                  ) : (
                    posts.length - index
                  )}
                </td>
                <td className="px-8 py-5">
                  <Link 
                    href={`/boards/${category}/${post.id}`}
                    className="text-sm font-bold text-slate-900 group-hover:text-teal-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </td>
                <td className="px-8 py-5 text-sm text-slate-600 font-light">
                  {post.author_name || '익명'}
                </td>
                <td className="px-8 py-5 text-sm text-slate-500 text-center font-light">
                  {formatDate(post.created_at)}
                </td>
                <td className="px-8 py-5 text-sm text-slate-500 text-center font-light">
                  {post.view_count.toLocaleString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
