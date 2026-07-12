import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import logoMark from '@/images/SageLine_Mark.png';

export default function ManualLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050a14] text-slate-300 relative overflow-hidden">
      {/* 프리미엄 로딩 오버레이 (가장 눈에 띄는 요소) */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050a14]/60 backdrop-blur-md">
        <div className="relative mb-8">
          {/* 외부 광채 효과 */}
          <div className="absolute inset-0 bg-teal-500/20 blur-[60px] animate-pulse" />
          
          <div className="relative">
            <div className="relative h-24 w-24 flex-shrink-0 animate-bounce-slow">
              <Image src={logoMark} alt="SAGE LINE 로고" fill sizes="96px" className="object-contain rounded-2xl" />
            </div>
            <div className="absolute -bottom-2 -right-2">
              <Loader2 className="w-8 h-8 text-teal-400 animate-spin" />
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-black text-white tracking-tight">
            사용자 설명서를 <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent italic">불러오는 중</span>입니다
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px]">
            잠시만 기다려 주세요. 대용량 문서를 최적화하고 있습니다.
          </p>
          
          <div className="mt-8 w-64 h-1 bg-white/5 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-teal-400 to-teal-600 animate-loading-progress w-full origin-left" />
          </div>
        </div>
      </div>

      {/* 헤더 스켈레톤 (배경으로 보임) */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050a14]/90 backdrop-blur-xl opacity-50">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-white/5" />
            <div className="flex flex-col gap-2">
              <div className="h-4 w-24 bg-white/5 rounded" />
              <div className="h-2 w-16 bg-white/5 rounded" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-7xl px-8 py-12 flex-grow opacity-30">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-white/5 rounded w-full" />
              ))}
            </div>
          </aside>
          <main className="flex-grow">
            <div className="mb-12 h-64 rounded-3xl border border-white/5 bg-white/[0.02]" />
            <div className="space-y-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-8 w-1/3 bg-white/5 rounded" />
                  <div className="h-4 w-full bg-white/5 rounded" />
                  <div className="h-4 w-full bg-white/5 rounded" />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
