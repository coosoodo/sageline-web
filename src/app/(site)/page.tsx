// src/app/page.tsx (서버 컴포넌트)
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createSupabaseServerClient } from '@/lib/supabase-server';
import Reveal from '@/components/Reveal';
import HeroMockup from '@/components/HeroMockup';
import { NAVER_CAFE_URL } from '@/lib/nav';
import {
  ChevronRight,
  CandlestickChart,
  ShieldCheck,
  BellRing,
  Workflow,
  LineChart,
  Zap,
  Check,
  Minus,
  Sparkles,
  Webhook,
  Plug,
  CodeXml,
  Database,
  Clock,
  MessagesSquare,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: 'SAGE LINE | 현명한 선택, 명확한 길' },
  description:
    '키움증권 REST API 기반 주식 자동매매 프로그램 부엉이 트레이더 — AI 매수의견 판정, 외부 매매신호 연동, 손절·익절·트레일링 스탑까지. 데이터 기반의 통찰력과 전략적 기술로 개인 투자자의 성공을 설계하는 파트너, 세이지라인입니다.',
};

const FULL_FEATURES = [
  'AI 매수의견 판정 — 매수 직전 ChatGPT · Gemini 재검증',
  '조건검색식 · 사용자 정의 · 단일종목 자동매매',
  '조건식 라이브러리와 베팅 · 주문 전략 편집기',
  '일봉 · 주봉 보조지표 조건식 — 기간 · 승수 직접 지정',
  'KRX 애프터마켓(~20:00) 대응 · 미체결 매도 이전',
  '외부 프로그램 매매신호 수신 (REST API)',
  '매매통계 · AI 판정 이력 · 자동매매 수익률 조회',
  'Discord · Telegram 실시간 알림',
];

const LITE_FEATURES = [
  '키움 조건검색식 기반 자동매매에 집중한 경량 설계',
  '손절 · 익절 · 트레일링 스탑 · 분할 매수/매도',
  '매매 설정별 당일청산 — 단타와 스윙을 한 계좌에서',
  '프리마켓 · KRX 애프터마켓(~20:00)까지 매매 · 청산',
  'HTS 매수 종목 감시 · 전략 자동 편입 · 수량 합치기',
  '체결 내역 — 초 단위 체결 시각과 조건검색 신호 대조',
  '계좌별 주문 폭주 방지 하드리밋 · 이상 시세 가드',
  '권리이벤트 감지 시 해당 종목 자동매매 자동 중지',
  'Telegram 실시간 알림 · 매매 통계와 성과 분석',
];

const COMPARISON: { label: string; full: string | boolean; lite: string | boolean }[] = [
  { label: '조건검색식 자동매매', full: true, lite: true },
  { label: '손절 · 익절 · 트레일링 스탑', full: true, lite: true },
  { label: 'AI 매수의견 판정', full: true, lite: false },
  { label: '외부 프로그램 신호 연동 (REST API)', full: true, lite: false },
  { label: '사용자 정의 전략 · 수식 편집기', full: true, lite: false },
  { label: '차트 · 기술적 지표', full: true, lite: false },
  { label: 'KRX 애프터마켓 (16:00~20:00)', full: true, lite: true },
  { label: 'HTS 매수 종목 자동 편입', full: false, lite: true },
  { label: '실시간 감시 종목', full: '190종목', lite: '190종목' },
  { label: '알림', full: 'Discord + Telegram', lite: 'Telegram' },
  { label: '권장 사용자', full: '파워 트레이더', lite: '입문 · 실전 겸용' },
];

type UpdateGroup = {
  product: string;
  version: string;
  date: string;
  href: string;
  badgeClass: string;
  dotClass: string;
  linkClass: string;
  items: { title: string; desc: string }[];
};

const UPDATES: UpdateGroup[] = [
  {
    product: '부엉이 트레이더 프로',
    version: 'v2.5.5',
    date: '2026. 9. 29.',
    href: '/manual/1',
    badgeClass: 'bg-teal-500/10 text-teal-600',
    dotClass: 'bg-teal-500',
    linkClass: 'text-teal-600 hover:text-teal-700',
    items: [
      {
        title: 'KRX 애프터마켓 대응',
        desc: '매매 시간이 20:00까지 늘었습니다. 시간대별로 맞는 거래소로 주문하고, 정규장에서 체결되지 않은 매도 주문을 애프터마켓으로 옮겨 다시 낼 수 있습니다.',
      },
      {
        title: '매매통계 · AI 판정 이력',
        desc: '청산된 매매의 실현손익 · 승률 · MDD를 계좌 · 전략 · 기간별로 봅니다. AI가 기각한 종목까지 판정 뒤 60분의 등락을 기록해, 그 판단이 맞았는지 확인합니다.',
      },
      {
        title: '보조지표를 내 전략에 맞게',
        desc: '볼린저 밴드 · ATR · 일목균형표의 기간과 승수를 조건식에서 직접 정하고, 주봉 기준 지표도 쓸 수 있습니다. 값이 없으면 조건이 통과하지 않습니다.',
      },
      {
        title: '조건별 시간 범위 · 요일 제한',
        desc: '준비 · 실행조건마다 통과 시간대를 따로 걸고, 진입 요일 제한을 추가매수에도 적용할 수 있습니다.',
      },
    ],
  },
  {
    product: '부엉이 트레이더 라이트',
    version: 'v1.7.4',
    date: '2026. 9. 26.',
    href: '/manual-lite/1',
    badgeClass: 'bg-navy-500/10 text-navy-600',
    dotClass: 'bg-navy-500',
    linkClass: 'text-navy-600 hover:text-navy-700',
    items: [
      {
        title: '체결 내역 창',
        desc: '지난 체결을 날짜별로 초 단위까지 보고, 그 체결이 어느 조건검색 신호에서 나왔는지 맞춰 봅니다. CSV로 내보낼 수도 있습니다.',
      },
      {
        title: 'KRX 애프터마켓 대응',
        desc: '16:00 이후 주문은 KRX · NXT 중 더 좋은 호가로 나가고, 당일청산을 애프터마켓까지 미뤄 전 종목을 20:00 전에 정리할 수 있습니다.',
      },
      {
        title: 'HTS 매수 종목 자동 편입 · 합치기',
        desc: 'HTS에서 급히 산 종목을 지정한 전략으로 자동 편입합니다. 앱이 꺼진 동안 더 산 수량은 기존 포지션에 합쳐 전량 매도가 새지 않게 합니다.',
      },
      {
        title: '조건검색 신호 모니터 개편',
        desc: '매수 · 매도 조건식 탭으로 나눠 보고, 지난 신호를 날짜별로 조회하며, 신호가 왔는데 왜 사지 않았는지 사유를 함께 보여 줍니다.',
      },
    ],
  },
];

type SupportTarget = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
};

const SUPPORT_TARGETS: SupportTarget[] = [
  {
    icon: Plug,
    title: '증권사 API 자동화',
    desc: '직접 세운 매매 원칙을 증권사 API 연동 프로그램으로 자동화하려는 분',
  },
  {
    icon: CodeXml,
    title: '수식 → 실거래 코드',
    desc: '백테스팅으로 검증한 매매 수식을 실거래 코드로 이식하는 데 어려움이 있는 분',
  },
  {
    icon: Database,
    title: '데이터 · 주문 설계',
    desc: '조건 검색, 호가 · 체결 데이터 수집, 자동 주문 실행 로직 설계에 조언이 필요한 분',
  },
  {
    icon: Clock,
    title: '시간과 진입장벽',
    desc: '시간이 부족하거나 프로그래밍 진입장벽으로 전략을 직접 코딩하기 어려운 분',
  },
];

const QNA_TOPICS = [
  '구상 중인 로직의 구조 설계',
  '증권사 API 연동 방식',
  '데이터 처리 흐름과 저장 구조',
  '조건 검색 · 신호 판별 설계',
  '자동 주문 실행과 예외 처리',
];

const BUILD_STEPS = [
  { step: '01', title: '요구사항 협의', desc: '매매 원칙과 필요한 기능, 사용 환경을 먼저 정리합니다.' },
  { step: '02', title: '구조 설계', desc: '데이터 수집부터 주문 실행까지의 흐름과 예외 처리를 설계합니다.' },
  { step: '03', title: '개발 · 검증', desc: '전략을 코드로 옮기고 모의투자 · 소액 실거래로 동작을 확인합니다.' },
  { step: '04', title: '인수인계', desc: '실행 방법과 설정 값을 정리해 전달하고 사용 중 문의에 대응합니다.' },
];

function ComparisonCell({ value }: { value: string | boolean }) {
  if (value === true) return <Check size={16} className="mx-auto text-teal-500" />;
  if (value === false) return <Minus size={16} className="mx-auto text-slate-300" />;
  return <span className="text-xs font-medium text-slate-600">{value}</span>;
}

export default async function HomePage({ searchParams }: { searchParams: Promise<{ code?: string }> }) {
  const { code } = await searchParams;
  if (code) redirect(`/auth/callback?code=${code}`);

  const supabase = await createSupabaseServerClient();
  await supabase.auth.getUser();

  return (
    <div className="flex flex-col text-slate-600 selection:bg-teal-500/30">

      <main className="flex-grow">
        {/* 1. Hero 섹션 */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-28 lg:pt-52 lg:pb-36">
          <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-teal-600/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[500px] rounded-full bg-navy-500/5 blur-[120px]" />

          <div className="container mx-auto max-w-5xl text-center">
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center space-x-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-teal-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span>Data-Driven Strategy Partner</span>
              </div>
              <span className="inline-flex items-center rounded-full bg-teal-500 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white shadow-sm shadow-teal-500/30">
                100% 무료
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-[-0.04em] text-slate-900 leading-[1.05]">
              현명한 선택,<br />
              <span className="bg-gradient-to-r from-navy-600 via-navy-500 to-teal-500 bg-clip-text text-transparent">
                명확한 길.
              </span>
            </h1>

            <p className="mt-12 text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
              <span className="text-slate-900 font-semibold italic">SAGELINE</span>은
              기관의 영역이었던 알고리즘 자동매매를{' '}<br className="hidden md:block" />
              개인 투자자의 책상 위로 가져왔습니다.
              <span className="text-teal-600 font-medium"> 부엉이 트레이더</span>와 함께 시작하세요.
            </p>

            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#products"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-900/10"
              >
                제품 살펴보기
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={NAVER_CAFE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-slate-600 hover:border-teal-500/40 hover:text-teal-600 transition-all duration-300"
              >
                커뮤니티
              </a>
            </div>

            <Reveal delay={200} className="mt-24">
              <HeroMockup />
            </Reveal>
          </div>
        </section>

        {/* 2. Products 섹션 */}
        <section id="products" className="container mx-auto max-w-7xl px-6 md:px-8 py-24 border-t border-slate-100 scroll-mt-20">
          <Reveal className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-8">
              <span>Our Products</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              누구나 쓸 수 있는 <span className="text-teal-600">퀀트 투자</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              키움증권 REST API 기반의 주식 자동매매 프로그램. <br className="hidden md:block" />
              투자 스타일에 맞는 부엉이를 선택하세요.
            </p>
          </Reveal>

          {/* 무료 다운로드 하이라이트 */}
          <Reveal className="mb-16">
            <div className="relative overflow-hidden rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/[0.08] via-white to-navy-500/[0.06] px-8 py-10 md:px-12">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-grow">
                  <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-teal-600 mb-5">
                    100% Free
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-3">
                    네이버 카페에서 <span className="text-teal-600">무료로 다운로드</span>
                  </h3>
                  <p className="text-base text-slate-500 font-light leading-relaxed">
                    별도의 결제나 구독 없이, <span className="font-semibold text-slate-700">모든 기능을 무료로</span> 사용할 수 있습니다.
                    지금 바로 내려받아 자동매매를 시작하세요.
                  </p>
                </div>
                <a
                  href={NAVER_CAFE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#03C75A] px-8 py-4 text-sm font-bold tracking-wide text-white hover:bg-[#02b152] transition-all duration-300 shadow-lg shadow-[#03C75A]/20"
                >
                  네이버 카페에서 무료 다운로드
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* 부엉이 트레이더 프로 */}
            <Reveal id="owl-trader" className="group relative h-full scroll-mt-24 rounded-3xl border border-slate-100 bg-slate-50/50 p-10 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300">
              <div className="absolute top-8 right-8 rounded-full bg-teal-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-teal-600">
                All-in-One
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-3xl">🦉</div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">부엉이 트레이더 프로</h3>
                  <p className="text-xs text-teal-600 font-bold uppercase tracking-widest mt-1">Owl Trader Pro</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                자동매매부터 차트 · 기술 지표, 실시간 시세, 조건검색까지 갖춘 종합 트레이딩 스위트입니다.
                코딩 없이 조건식 편집기만으로 나만의 매매 전략을 설계하고 자동으로 실행합니다.
                매수 직전 AI에게 의견을 묻는 판정 단계와 외부 신호 연동을 갖췄고, KRX 애프터마켓이 끝나는 20:00까지 매매합니다.
              </p>
              <ul className="space-y-3 mb-8">
                {FULL_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check size={15} className="mt-0.5 flex-shrink-0 text-teal-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/manual/1"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-600 hover:text-teal-700 transition-colors group/link"
              >
                사용자 설명서 보기 <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </Reveal>

            {/* 부엉이 트레이더 라이트 */}
            <Reveal id="owl-trader-lite" delay={150} className="group relative h-full scroll-mt-24 rounded-3xl border border-slate-100 bg-slate-50/50 p-10 hover:border-navy-500/30 hover:shadow-lg hover:shadow-navy-500/5 transition-all duration-300">
              <div className="absolute top-8 right-8 rounded-full bg-navy-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-600">
                Light &amp; Fast
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-navy-500/10 flex items-center justify-center text-3xl">🪶</div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">부엉이 트레이더 라이트</h3>
                  <p className="text-xs text-navy-600 font-bold uppercase tracking-widest mt-1">Owl Trader Lite</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                조건검색식 자동매매의 핵심만 담아 가볍고 빠르게 새로 설계한 버전입니다.
                복잡한 기능은 덜어내고, 계좌를 지키는 매매 전략에 집중했습니다.
                프리마켓부터 애프터마켓까지, HTS에서 직접 산 종목까지 같은 화면에서 관리합니다.
              </p>
              <ul className="space-y-3 mb-8">
                {LITE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check size={15} className="mt-0.5 flex-shrink-0 text-navy-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/manual-lite/1"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-navy-600 hover:text-navy-700 transition-colors group/link"
              >
                사용자 설명서 보기 <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          {/* 제품 비교 테이블 */}
          {/* 모바일: 행마다 프로 · 라이트를 나란히 보여 주는 카드 목록 */}
          <Reveal className="md:hidden rounded-3xl border border-slate-100 overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-5 py-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">기능 비교</span>
              <div className="flex gap-2 text-xs font-bold">
                <span className="w-16 text-center text-teal-600">프로</span>
                <span className="w-16 text-center text-navy-600">라이트</span>
              </div>
            </div>
            <ul>
              {COMPARISON.map((row) => (
                <li key={row.label} className="flex items-center justify-between gap-3 border-b border-slate-50 px-5 py-3.5 last:border-b-0">
                  <span className="text-sm font-medium text-slate-700">{row.label}</span>
                  <div className="flex flex-shrink-0 gap-2">
                    <span className="w-16 text-center"><ComparisonCell value={row.full} /></span>
                    <span className="w-16 text-center"><ComparisonCell value={row.lite} /></span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* 태블릿 이상: 표 */}
          <Reveal className="hidden md:block rounded-3xl border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/70">
                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">기능 비교</th>
                    <th className="px-6 py-5 text-center text-sm font-bold text-teal-600">프로</th>
                    <th className="px-6 py-5 text-center text-sm font-bold text-navy-600">라이트</th>
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
          </Reveal>
        </section>

        {/* 3. 최신 업데이트 섹션 */}
        <section id="updates" className="container mx-auto max-w-7xl px-6 md:px-8 py-24 border-t border-slate-100 scroll-mt-20">
          <Reveal className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-8">
              <span>Latest Update</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              부엉이는 <span className="text-teal-600">계속 자랍니다</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              사용자들이 장중에 겪은 일들을 그대로 반영합니다. <br className="hidden md:block" />
              최근 릴리즈에서 새로 더해진 기능입니다.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {UPDATES.map((group, gi) => (
              <Reveal
                key={group.product}
                delay={gi * 150}
                className="h-full rounded-3xl border border-slate-100 bg-white p-8 md:p-10"
              >
                <div className="mb-8 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-black text-slate-900">{group.product}</h3>
                  <span className={`rounded-full px-3 py-1 text-[11px] font-black tracking-wide ${group.badgeClass}`}>
                    {group.version}
                  </span>
                  <span className="text-xs text-slate-400">{group.date}</span>
                </div>

                <ol className="relative space-y-6 border-l border-slate-100 pl-6">
                  {group.items.map((item) => (
                    <li key={item.title} className="relative">
                      <span className={`absolute -left-[1.9rem] top-1.5 h-2 w-2 rounded-full ${group.dotClass}`} />
                      <p className="text-sm font-bold text-slate-800 mb-1.5">{item.title}</p>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                    </li>
                  ))}
                </ol>

                <Link
                  href={group.href}
                  className={`mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors group/link ${group.linkClass}`}
                >
                  설명서에서 자세히 보기
                  <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 4. Technology 섹션 */}
        <section id="technology" className="container mx-auto max-w-7xl px-6 md:px-8 py-24 border-t border-slate-100 scroll-mt-20">
          <Reveal className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rounded-full border border-navy-500/20 bg-navy-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-navy-600 mb-8">
              <span>Core Technology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              감정을 배제하고, <span className="text-navy-700">시스템이 매매합니다</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              실시간 시장 데이터를 기반으로 감정을 배제하고 원칙대로 매매하는 시스템의 핵심 기술입니다.
            </p>
          </Reveal>

          {/* 벤토 그리드 */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* 전략 자동화 엔진 — 대형 카드 */}
            <Reveal className="md:col-span-2 md:row-span-2 rounded-3xl border border-slate-100 bg-white p-10 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-navy-500/10 text-teal-600">
                <Workflow size={22} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">전략 자동화 엔진</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-10 max-w-lg">
                키움 조건검색식 신호를 실시간으로 받아 매수·매도 주문까지 사람의 개입 없이 실행합니다.
                코딩 없이 편집기만으로 전략을 완성합니다.
              </p>
              <div className="flex flex-wrap items-center gap-2" aria-hidden="true">
                {['조건검색 신호', '전략 필터', '자동 주문', '체결 알림'].map((step, i, arr) => (
                  <React.Fragment key={step}>
                    <span className="rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-xs font-bold text-teal-700">
                      {step}
                    </span>
                    {i < arr.length - 1 && <ChevronRight size={14} className="text-slate-300" />}
                  </React.Fragment>
                ))}
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  <p className="text-2xl font-black text-slate-900">08~20시</p>
                  <p className="mt-1 text-xs text-slate-500">프리 · 정규 · 애프터마켓</p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  <p className="text-2xl font-black text-slate-900">0줄</p>
                  <p className="mt-1 text-xs text-slate-500">필요한 코딩</p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  <p className="text-2xl font-black text-slate-900">실시간</p>
                  <p className="mt-1 text-xs text-slate-500">신호 → 주문</p>
                </div>
              </div>
            </Reveal>

            {/* 리스크 관리 */}
            <Reveal delay={100} className="rounded-3xl border border-slate-100 bg-white p-8 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-navy-500/10 text-teal-600">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">리스크 관리</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-5">
                계좌를 지키는 매도 전략을 시스템이 대신 지켜봅니다.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['손절', '익절', '트레일링 스탑', '분할매매', '이익보존'].map((t) => (
                  <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-600">{t}</span>
                ))}
              </div>
            </Reveal>

            {/* 차트 · 기술 지표 */}
            <Reveal delay={200} className="rounded-3xl border border-slate-100 bg-white p-8 hover:border-navy-500/30 hover:shadow-xl hover:shadow-navy-500/5 transition-all duration-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500/10 to-blue-500/10 text-navy-600">
                <CandlestickChart size={22} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">차트 · 기술 지표</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                분봉 · 일봉 · 업종 차트와 피벗 · 볼린저밴드 · 일목균형표 등 기술적 지표로 시장의 흐름을 읽습니다.
              </p>
            </Reveal>

            {/* AI 매수의견 판정 — 신규 */}
            <Reveal delay={100} className="md:col-span-2 rounded-3xl border border-slate-100 bg-white p-8 md:p-10 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-navy-500/10 text-teal-600">
                <Sparkles size={22} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">AI 매수의견 판정</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-6 max-w-xl">
                조건검색식은 숫자만 봅니다. 조건은 맞지만 이미 꼭대기까지 올라버린 종목도 똑같이 편입되죠.
                부엉이 트레이더 프로는 최초매수 직전에 한 번 더 묻습니다.
                <span className="font-semibold text-slate-700"> 판정만 기록하고 매수는 그대로 두는 Shadow 모드</span>로 먼저 관찰해 볼 수 있습니다.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['ChatGPT', 'Gemini', '프롬프트 프리셋 5종', 'Shadow 모드', 'AI 판정 이력', '일일 호출 한도'].map((t) => (
                  <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-600">{t}</span>
                ))}
              </div>
            </Reveal>

            {/* 외부 신호 연동 — 신규 */}
            <Reveal delay={200} className="rounded-3xl border border-slate-100 bg-white p-8 hover:border-navy-500/30 hover:shadow-xl hover:shadow-navy-500/5 transition-all duration-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500/10 to-blue-500/10 text-navy-600">
                <Webhook size={22} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">외부 신호 연동</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                직접 만든 프로그램이나 다른 분석 도구가 REST API로 매수 · 매도 시점을 지시합니다.
                얼마나 어떻게 사고팔지는 기존 주문전략이 그대로 결정합니다.
              </p>
            </Reveal>

            {/* 실시간 알림 — 와이드 카드 */}
            <Reveal delay={100} className="md:col-span-3 rounded-3xl border border-slate-100 bg-white p-8 md:p-10 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:max-w-sm flex-shrink-0">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-navy-500/10 text-teal-600">
                    <BellRing size={22} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3">실시간 알림</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                    체결, 신호 포착, 전략 상태 변화를 Discord와 Telegram으로 즉시 전달합니다.
                    자리를 비워도 매매 현황을 놓치지 않습니다.
                  </p>
                </div>
                <div className="flex-grow space-y-2" aria-hidden="true">
                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-xs">
                    <span className="rounded-md bg-[#5865F2]/10 px-2 py-1 font-black text-[#5865F2]">Discord</span>
                    <span className="font-bold text-slate-600">[체결] 매수 주문 체결 — 10주 · 09:32:05</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-xs">
                    <span className="rounded-md bg-[#229ED9]/10 px-2 py-1 font-black text-[#229ED9]">Telegram</span>
                    <span className="font-bold text-slate-600">[신호] 조건검색식 &lsquo;거래량 급증&rsquo; 신규 편입 감지</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-xs">
                    <span className="rounded-md bg-teal-500/10 px-2 py-1 font-black text-teal-600">전략</span>
                    <span className="font-bold text-slate-600">[익절] 목표 수익률 도달 — 전량 매도 완료 (+3.2%)</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. Vision 섹션 */}
        <section id="vision" className="container mx-auto max-w-7xl px-6 md:px-8 py-24 border-t border-slate-100 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal className="rounded-3xl bg-gradient-to-br from-teal-500/[0.07] to-transparent border border-slate-100 p-12">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600">
                <LineChart size={22} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-4">Sage — 지혜</p>
              <h2 className="text-3xl font-black text-slate-900 mb-5 tracking-tight">지혜로운 데이터 분석</h2>
              <p className="text-base leading-relaxed text-slate-500 font-light">
                정보의 홍수 속에서 현상을 꿰뚫어 보는 통찰력을 제공합니다.
                시세와 수급, 지표의 흐름을 데이터로 읽어 소음이 아닌 신호에 집중합니다.
              </p>
            </Reveal>
            <Reveal delay={150} className="rounded-3xl bg-gradient-to-br from-navy-500/[0.07] to-transparent border border-slate-100 p-12">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-500/10 text-navy-600">
                <Zap size={22} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy-600 mb-4">Line — 원칙</p>
              <h2 className="text-3xl font-black text-slate-900 mb-5 tracking-tight">흔들리지 않는 매매 원칙</h2>
              <p className="text-base leading-relaxed text-slate-500 font-light">
                공포와 탐욕 대신 미리 정한 원칙이 매매합니다.
                진입부터 청산까지, 전략이 그린 명확한 선을 시스템이 끝까지 지킵니다.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 6. Development Support 섹션 */}
        <section id="support" className="container mx-auto max-w-7xl px-6 md:px-8 py-24 border-t border-slate-100 scroll-mt-20">
          <Reveal className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-8">
              <span>Development Support</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              전략은 있는데, <span className="text-teal-600">코드가 없다면</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              매매 원칙은 세웠지만 시스템 구현 단계에서 막히는 분들을 위해 <br className="hidden md:block" />
              기술 질의응답과 시스템 제작 대행을 지원합니다.
            </p>
          </Reveal>

          {/* 지원 대상 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {SUPPORT_TARGETS.map((t, i) => (
              <Reveal
                key={t.title}
                delay={i * 100}
                className="h-full rounded-3xl border border-slate-100 bg-white p-8 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-navy-500/10 text-teal-600">
                  <t.icon size={22} />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-3">{t.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{t.desc}</p>
              </Reveal>
            ))}
          </div>

          {/* 두 가지 지원 방식 */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 기술 질의응답 */}
            <Reveal className="h-full rounded-3xl border border-slate-100 bg-slate-50/50 p-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600">
                  <MessagesSquare size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">기술 질의응답</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 mt-1">Q &amp; A</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                개발 중에 생긴 기술적 의문점을 함께 풀어드립니다.
                카페 댓글이나 쪽지로 남겨주시면 확인 후 답변드립니다.
              </p>
              <ul className="space-y-3">
                {QNA_TOPICS.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check size={15} className="mt-0.5 flex-shrink-0 text-teal-500" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* 시스템 제작 대행 */}
            <Reveal delay={150} className="h-full rounded-3xl border border-slate-100 bg-slate-50/50 p-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-navy-500/10 text-navy-600">
                  <Wrench size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">시스템 제작 대행</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-600 mt-1">Custom Build</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                직접 개발하기 어려운 환경이거나 단기간에 완성된 시스템이 필요하다면,
                요구사항 협의를 거쳐 제작을 대행해 드립니다.
              </p>
              <ol className="relative space-y-6 border-l border-slate-200 pl-6">
                {BUILD_STEPS.map((s) => (
                  <li key={s.step} className="relative">
                    <span className="absolute -left-[1.9rem] top-1.5 h-2 w-2 rounded-full bg-navy-500" />
                    <p className="text-sm font-bold text-slate-800 mb-1.5">
                      <span className="text-navy-500 mr-2">{s.step}</span>
                      {s.title}
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">{s.desc}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          {/* 문의 안내 */}
          <Reveal className="mt-8 rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/[0.08] via-white to-navy-500/[0.06] px-8 py-10 md:px-12">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-3">
                  편하게 <span className="text-teal-600">문의 남겨주세요</span>
                </h3>
                <p className="text-base text-slate-500 font-light leading-relaxed">
                  네이버 카페 댓글이나 쪽지로 문의하시면 확인 후 답변드립니다.
                  구상 중인 전략과 현재 막혀 있는 지점을 함께 적어주시면 더 정확하게 안내할 수 있습니다.
                </p>
              </div>
              <a
                href={NAVER_CAFE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#03C75A] px-8 py-4 text-sm font-bold tracking-wide text-white hover:bg-[#02b152] transition-all duration-300 shadow-lg shadow-[#03C75A]/20"
              >
                네이버 카페에서 문의하기
                <ChevronRight size={16} />
              </a>
            </div>
            <p className="mt-8 text-xs text-slate-400 font-light leading-relaxed">
              ※ 세이지라인은 구현에 관한 기술 지원만 제공합니다. 매매 전략의 수익성을 보장하거나 투자를 권유하지 않으며,
              매매 판단과 그 결과에 대한 책임은 이용자 본인에게 있습니다.
            </p>
          </Reveal>
        </section>

        {/* 7. CTA 섹션 */}
        <section className="border-t border-slate-100">
          <div className="container mx-auto max-w-5xl px-6 md:px-8 py-28 text-center">
            <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-20">
              <div className="absolute top-0 left-1/2 -z-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-[100px]" />
              <div className="relative z-10">
                <div className="text-5xl mb-8">🦉</div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                  부엉이는 밤에도 <span className="text-teal-300">시장을 지켜봅니다</span>
                </h2>
                <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-light mb-12">
                  네이버 카페에서 <span className="font-semibold text-teal-300">무료로 다운로드</span>하고 <span className="font-semibold text-teal-300">모든 기능을 무료로</span> 사용하세요. <br className="hidden md:block" />
                  커뮤니티에서 최신 소식과 전략을 사용자들과 나눠보세요.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={NAVER_CAFE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#03C75A] px-8 py-4 text-sm font-bold tracking-wide text-white hover:bg-[#02b152] transition-all duration-300"
                  >
                    네이버 카페 바로가기
                  </a>
                  <Link
                    href="/manual"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-white/10 transition-all duration-300"
                  >
                    사용자 설명서
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
