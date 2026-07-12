import type { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: '로그인 | SAGE LINE',
  description: 'SAGE LINE 로그인 페이지입니다.',
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-600">
      {/* 배경 효과 */}
      <div className="fixed top-0 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-[140px] pointer-events-none" />

      {/* 네비게이션 */}
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-xl">
        <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
          <a href="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-teal-500 to-navy-600 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-white">
                <div className="h-4 w-4 rounded-full bg-teal-500" />
              </div>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">SAGE LINE</span>
          </a>
        </nav>
      </header>

      {/* 본문 */}
      <main className="flex flex-grow items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* 헤더 */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center space-x-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-teal-400 mb-6">
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
