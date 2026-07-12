// src/app/page.tsx (서버 컴포넌트)
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createSupabaseServerClient } from '@/lib/supabase-server';
import {
  ChevronRight,
  Bot,
  ShieldCheck,
  BellRing,
  Workflow,
  LineChart,
  Zap,
  Check,
  Minus,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'SAGE LINE | 현명한 선택, 명확한 길',
  description:
    '키움증권 REST API 기반 주식 자동매매 프로그램 부엉이 트레이더 — 데이터 기반의 통찰력과 전략적 기술로 개인 투자자의 성공을 설계하는 파트너, 세이지라인입니다.',
};

const FULL_FEATURES = [
  '조건검색식 · 사용자 정의 · 단일종목 자동매매',
  '조건식 라이브러리와 베팅 · 주문 전략 편집기',
  'AI 실시간 뉴스 분석 및 AI 종목 추천 (Gemini)',
  '분봉 · 일봉 · 업종 차트와 기술적 지표',
  '실시간 순위 · 시간외단일가 · VI 발동종목 조회',
  'Discord · Telegram 실시간 알림',
];

const LITE_FEATURES = [
  '키움 조건검색식 기반 자동매매에 집중한 경량 설계',
  '손절 · 익절 · 트레일링 스탑 · 분할 매수/매도',
  '당일청산 · 재매수 제한 · 미체결 자동취소',
  '계좌 · 보유종목 · 체결 현황 실시간 대시보드',
  '매매 설정 프로필 관리와 매매 통계',
  'Telegram 실시간 알림',
];

const COMPARISON: { label: string; full: string | boolean; lite: string | boolean }[] = [
  { label: '조건검색식 자동매매', full: true, lite: true },
  { label: '손절 · 익절 · 트레일링 스탑', full: true, lite: true },
  { label: '사용자 정의 전략 · 수식 편집기', full: true, lite: false },
  { label: 'AI 뉴스 분석 · 종목 추천', full: true, lite: false },
  { label: '차트 · 기술적 지표', full: true, lite: false },
  { label: '알림', full: 'Discord + Telegram', lite: 'Telegram' },
  { label: '권장 사용자', full: '파워 트레이더', lite: '입문 · 실전 겸용' },
];

const TECHNOLOGIES = [
  {
    icon: Workflow,
    title: '전략 자동화 엔진',
    desc: '키움 조건검색식 신호를 실시간으로 받아 매수·매도 주문까지 사람의 개입 없이 실행합니다. 코딩 없이 편집기만으로 전략을 완성합니다.',
  },
  {
    icon: ShieldCheck,
    title: '리스크 관리',
    desc: '손절 · 익절 · 트레일링 스탑 · 이익보존 · 분할매매까지, 계좌를 지키는 매도 전략을 시스템이 24시간 대신 지켜봅니다.',
  },
  {
    icon: Bot,
    title: 'AI 시장 분석',
    desc: 'Google Gemini와 실시간 뉴스 데이터를 결합해 시장의 맥락을 읽고, 데이터에 근거한 종목 인사이트를 제공합니다.',
  },
  {
    icon: BellRing,
    title: '실시간 알림',
    desc: '체결, 신호 포착, 전략 상태 변화를 Discord와 Telegram으로 즉시 전달합니다. 자리를 비워도 매매 현황을 놓치지 않습니다.',
  },
];

function ComparisonCell({ value }: { value: string | boolean }) {
  if (value === true) return <Check size={16} className="mx-auto text-emerald-500" />;
  if (value === false) return <Minus size={16} className="mx-auto text-slate-300" />;
  return <span className="text-xs font-medium text-slate-600">{value}</span>;
}

export default async function HomePage({ searchParams }: { searchParams: Promise<{ code?: string }> }) {
  const { code } = await searchParams;
  if (code) redirect(`/auth/callback?code=${code}`);

  const supabase = await createSupabaseServerClient();
  await supabase.auth.getUser();

  return (
    <div className="flex flex-col text-slate-600 selection:bg-emerald-500/30">

      <main className="flex-grow">
        {/* 1. Hero 섹션 */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-28 lg:pt-52 lg:pb-36">
          <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-600/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />

          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Data-Driven Strategy Partner</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-[-0.04em] text-slate-900 leading-[1.05]">
              현명한 선택,<br />
              <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                명확한 길.
              </span>
            </h1>

            <p className="mt-12 text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
              <span className="text-slate-900 font-semibold italic">SAGELINE</span>은
              기관의 영역이었던 알고리즘 자동매매를<br className="hidden md:block" />
              개인 투자자의 책상 위로 가져왔습니다.
              <span className="text-emerald-600 font-medium"> 부엉이 트레이더</span>와 함께 시작하세요.
            </p>

            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#products"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-900/10"
              >
                제품 살펴보기
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/manual"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-slate-600 hover:border-emerald-500/40 hover:text-emerald-600 transition-all duration-300"
              >
                사용자 설명서
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Products 섹션 */}
        <section id="products" className="container mx-auto max-w-7xl px-6 md:px-8 py-24 border-t border-slate-100 scroll-mt-20">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-8">
              <span>Our Products</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              누구나 쓸 수 있는 <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">퀀트 투자</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              키움증권 REST API 기반의 주식 자동매매 프로그램. <br className="hidden md:block" />
              투자 스타일에 맞는 부엉이를 선택하세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* 부엉이 트레이더 (풀) */}
            <div className="group relative rounded-3xl border border-slate-100 bg-slate-50/50 p-10 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300">
              <div className="absolute top-8 right-8 rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                All-in-One
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-3xl">🦉</div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">부엉이 트레이더</h3>
                  <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest mt-1">Owl Trader</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                자동매매부터 AI 분석, 차트, 실시간 시세까지 갖춘 종합 트레이딩 스위트입니다.
                코딩 없이 조건식 편집기만으로 나만의 매매 전략을 설계하고 자동으로 실행합니다.
              </p>
              <ul className="space-y-3 mb-8">
                {FULL_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check size={15} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/manual"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-emerald-600 hover:text-emerald-700 transition-colors group/link"
              >
                사용자 설명서 보기 <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 부엉이 트레이더 라이트 */}
            <div className="group relative rounded-3xl border border-slate-100 bg-slate-50/50 p-10 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300">
              <div className="absolute top-8 right-8 rounded-full bg-cyan-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-cyan-600">
                Light &amp; Fast
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl">🪶</div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">부엉이 트레이더 라이트</h3>
                  <p className="text-xs text-cyan-600 font-bold uppercase tracking-widest mt-1">Owl Trader Lite</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                조건검색식 자동매매의 핵심만 담아 가볍고 빠르게 새로 설계한 버전입니다.
                복잡한 기능은 덜어내고, 계좌를 지키는 매매 전략에 집중했습니다.
              </p>
              <ul className="space-y-3 mb-8">
                {LITE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check size={15} className="mt-0.5 flex-shrink-0 text-cyan-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/boards/free"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-cyan-600 hover:text-cyan-700 transition-colors group/link"
              >
                커뮤니티에서 알아보기 <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 제품 비교 테이블 */}
          <div className="rounded-3xl border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/70">
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">기능 비교</th>
                    <th className="px-6 py-5 text-center text-sm font-black text-emerald-600">부엉이 트레이더</th>
                    <th className="px-6 py-5 text-center text-sm font-black text-cyan-600">라이트</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.label} className="border-b border-slate-50 last:border-b-0 hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-4 text-sm font-medium text-slate-700">{row.label}</td>
                      <td className="px-6 py-4 text-center"><ComparisonCell value={row.full} /></td>
                      <td className="px-6 py-4 text-center"><ComparisonCell value={row.lite} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3. Technology 섹션 */}
        <section id="technology" className="container mx-auto max-w-7xl px-6 md:px-8 py-24 border-t border-slate-100 scroll-mt-20">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8">
              <span>Core Technology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              감정을 배제하고, <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">시스템이 매매합니다</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              실시간 시장 데이터와 AI 분석을 결합한 자동매매 시스템의 핵심 기술입니다.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHNOLOGIES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-100 bg-white p-8 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 text-emerald-600">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Vision 섹션 */}
        <section id="vision" className="container mx-auto max-w-7xl px-6 md:px-8 py-24 border-t border-slate-100 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-500/[0.07] to-transparent border border-slate-100 p-12">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                <LineChart size={22} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-4">Sage — 지혜</p>
              <h2 className="text-3xl font-black text-slate-900 mb-5 tracking-tight">지혜로운 데이터 분석</h2>
              <p className="text-base leading-relaxed text-slate-500 font-light">
                정보의 홍수 속에서 현상을 꿰뚫어 보는 통찰력을 제공합니다.
                뉴스와 시세, 수급의 흐름을 데이터로 읽어 소음이 아닌 신호에 집중합니다.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-cyan-500/[0.07] to-transparent border border-slate-100 p-12">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600">
                <Zap size={22} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-4">Line — 원칙</p>
              <h2 className="text-3xl font-black text-slate-900 mb-5 tracking-tight">흔들리지 않는 매매 원칙</h2>
              <p className="text-base leading-relaxed text-slate-500 font-light">
                공포와 탐욕 대신 미리 정한 원칙이 매매합니다.
                진입부터 청산까지, 전략이 그린 명확한 선을 시스템이 끝까지 지킵니다.
              </p>
            </div>
          </div>
        </section>

        {/* 5. CTA 섹션 */}
        <section className="border-t border-slate-100">
          <div className="container mx-auto max-w-5xl px-6 md:px-8 py-28 text-center">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-20">
              <div className="absolute top-0 left-1/2 -z-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[100px]" />
              <div className="relative z-10">
                <div className="text-5xl mb-8">🦉</div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                  부엉이는 밤에도 <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">시장을 지켜봅니다</span>
                </h2>
                <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-light mb-12">
                  네이버 카페에서 최신 소식과 다운로드 안내를 확인하고, <br className="hidden md:block" />
                  커뮤니티에서 사용자들과 전략을 나눠보세요.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://cafe.naver.com/sageline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#03C75A] px-8 py-4 text-sm font-black tracking-wide text-white hover:bg-[#02b152] transition-all duration-300"
                  >
                    네이버 카페 바로가기
                  </a>
                  <Link
                    href="/boards/free"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white hover:bg-white/10 transition-all duration-300"
                  >
                    커뮤니티
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
