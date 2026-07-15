import React from 'react';
import Link from 'next/link';
import { Eye, MessageSquareText, Pin } from 'lucide-react';
import { getBoardCategory } from '@/lib/boards';

interface Post {
  id: string;
  title: string;
  content: string | null;
  author_name: string | null;
  created_at: string;
  view_count: number | null;
  is_announcement: boolean;
  category?: string | null;
}

interface BoardListProps {
  posts: Post[];
  category: string;
  keyword?: string;
  // 전체글 보기: 각 글에 소속 카테고리 뱃지를 표시하고, 원래 카테고리로 링크한다
  showCategory?: boolean;
}

// 마크다운/HTML을 제거해 본문 미리보기 텍스트를 만든다
function toExcerpt(md: string | null, max = 120): string {
  if (!md) return '';
  const text = md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // 이미지
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // 링크 → 텍스트
    .replace(/<[^>]+>/g, ' ') // HTML 태그
    .replace(/[#>*_`~-]/g, ' ') // 마크다운 기호
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

function initials(name: string | null): string {
  const n = (name || '익명').trim();
  return n.slice(0, 1).toUpperCase();
}

// "3일 전" 형태의 상대 시간 (7일 이후는 날짜)
function relativeTime(iso: string): string {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diff = Math.floor((now - then) / 1000);
  if (diff < 60) return '방금 전';
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}일 전`;
  return new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(iso));
}

export default function BoardList({ posts, category, keyword, showCategory = false }: BoardListProps) {
  if (posts.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/40 py-20 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-500">
          <MessageSquareText size={26} />
        </div>
        <p className="text-slate-600 font-bold mb-1">
          {keyword ? '검색 결과가 없습니다' : '아직 등록된 게시글이 없습니다'}
        </p>
        <p className="text-sm text-slate-400 font-light">
          {keyword ? '다른 검색어로 시도해 보세요.' : '첫 번째 글을 남겨보세요.'}
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {posts.map((post) => {
        const excerpt = toExcerpt(post.content);
        const postCategory = post.category ?? category;
        const catInfo = showCategory ? getBoardCategory(postCategory) : undefined;
        return (
          <li key={post.id}>
            <Link
              href={`/boards/${postCategory}/${post.id}`}
              className={`group block rounded-2xl border p-5 md:p-6 transition-all duration-300 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5 ${
                post.is_announcement ? 'border-teal-200 bg-teal-50/40' : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* 아바타 */}
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500/15 to-navy-500/15 text-sm font-bold text-teal-700">
                  {initials(post.author_name)}
                </div>

                <div className="min-w-0 flex-grow">
                  {/* 제목 */}
                  <div className="flex items-center gap-2 mb-1">
                    {catInfo && (
                      <span className="inline-flex flex-shrink-0 items-center gap-1 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600">
                        <span aria-hidden>{catInfo.icon}</span> {catInfo.shortName}
                      </span>
                    )}
                    {post.is_announcement && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-teal-100 px-1.5 py-0.5 text-[10px] font-bold text-teal-700">
                        <Pin size={10} /> 공지
                      </span>
                    )}
                    <h3 className="truncate text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {post.title}
                    </h3>
                  </div>

                  {/* 본문 미리보기 */}
                  {excerpt && (
                    <p className="mb-3 line-clamp-2 text-sm font-light leading-relaxed text-slate-500">
                      {excerpt}
                    </p>
                  )}

                  {/* 메타 */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                    <span className="font-medium text-slate-600">{post.author_name || '익명'}</span>
                    <span className="h-0.5 w-0.5 rounded-full bg-slate-300" />
                    <span>{relativeTime(post.created_at)}</span>
                    <span className="h-0.5 w-0.5 rounded-full bg-slate-300" />
                    <span className="inline-flex items-center gap-1">
                      <Eye size={12} /> {(post.view_count ?? 0).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
