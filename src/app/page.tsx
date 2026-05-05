// src/app/page.tsx (서버 컴포넌트)
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createSupabaseServerClient } from '@/lib/supabase-server';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SAGE LINE | 현명한 선택, 명확한 길',
  description: '데이터 기반의 통찰력과 전략적 기술로 비즈니스의 성공을 설계하는 파트너, 세이지라인입니다.',
};

export default async function HomePage({ searchParams }: { searchParams: Promise<{ code?: string }> }) {
  const { code } = await searchParams;
  if (code) redirect(`/auth/callback?code=${code}`);

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col text-slate-600 selection:bg-emerald-500/30">
      
      <main className="flex-grow">
        {/* 1. Hero 섹션 */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-32 lg:py-52">
          <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-600/10 blur-[140px]" />
          
          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Data-Driven Strategy Partner</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] text-slate-900 leading-[1.05]">
              현명한 선택,<br />
              <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                명확한 길.
              </span>
            </h1>
            
            <p className="mt-12 text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
              <span className="text-slate-900 font-semibold italic">SAGELINE</span>은 
              데이터 기반의 통찰력과 전략적 기술을 결합하여<br className="hidden md:block" />
              고객의 <span className="text-emerald-600 font-medium">투자 효율성</span>과 성공을 위한 최적의 솔루션을 설계합니다.
            </p>
          </div>
        </section>

        {/* 2. Business 섹션 */}
        <section id="business" className="container mx-auto max-w-7xl px-8 py-24 border-t border-slate-100">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-8">
              <span>Our Business</span>
            </div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-6">
              누구나 쓸 수 있는 <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">퀀트 투자</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              기관 투자자만의 영역이었던 자동화 알고리즘 매매를 <br className="hidden md:block" />
              개인 투자자도 쉽게 활용할 수 있도록 설계했습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-10 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-2xl">🦉</div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">부엉이 ATS</h3>
                  <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest">Auto Trading System</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-6">
                키움증권 REST API 기반의 주식 자동매매 소프트웨어입니다.
                코딩 없이 조건식 편집기만으로 나만의 매매 전략을 설계하고 자동으로 실행합니다.
              </p>
              <Link 
                href="/manual" 
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-emerald-600 hover:text-emerald-700 transition-colors group/link"
              >
                사용자 설명서 보기 <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-2xl">🤖</div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">AI 전략 컨설팅</h3>
                  <p className="text-xs text-cyan-600 font-bold uppercase tracking-widest">Strategy Consulting</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-6">
                Google Gemini AI와 실시간 시장 데이터를 결합하여
                데이터 기반 인사이트를 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Vision 섹션 */}
        <section id="vision" className="container mx-auto max-w-7xl px-8 py-24 border-t border-slate-100">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">지혜로운 데이터 분석 (Sage)</h2>
              <p className="text-lg leading-relaxed text-slate-500 font-light">
                정보의 홍수 속에서 현상을 꿰뚫어 보는 통찰력을 제공합니다.
              </p>
            </div>
            <div className="h-64 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-slate-100 flex items-center justify-center">
              <span className="text-8xl opacity-10 font-black text-emerald-500">SAGE</span>
            </div>
          </div>
        </section>

        {/* 4. Technology 섹션 */}
        <section id="technology" className="container mx-auto max-w-7xl px-8 py-24 border-t border-slate-100">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-6">Core Technology</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              실시간 시장 데이터와 AI 분석을 결합한 자동매매 시스템을 제공합니다.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}