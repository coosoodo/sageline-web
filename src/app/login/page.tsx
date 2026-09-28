import type { Metadata } from 'next';
import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';
import LoginForm from './LoginForm';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: '로그인 · 회원가입',
  path: '/login',
  description: 'Google 계정으로 SAGE LINE에 로그인하거나 가입합니다.',
});

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-600">
      {/* 배경 효과 */}
      <div className="fixed top-0 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-[140px] pointer-events-none" />

      {/* 네비게이션 */}
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-xl">
        <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
          <BrandLogo priority />
          <Link href="/" className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.15em] text-slate-500 hover:text-teal-600 transition-colors">
            홈으로
          </Link>
        </nav>
      </header>

      {/* 본문 */}
      <main className="flex flex-grow items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* 헤더 */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center space-x-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              <span>Sign In</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">로그인</h1>
            <p className="mt-3 text-sm text-slate-500">SAGE LINE에 오신 것을 환영합니다.</p>
          </div>

          {/* 폼 카드 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
            {error && (
              <p role="alert" className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-center text-xs font-medium text-red-600">
                로그인을 완료하지 못했습니다. 잠시 후 다시 시도해 주세요.
              </p>
            )}
            <LoginForm />
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="py-8 text-center text-[10px] text-slate-400 font-medium tracking-widest border-t border-slate-100">
        COPYRIGHT © 2026 SAGELINE. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
