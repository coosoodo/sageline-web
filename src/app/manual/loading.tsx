import { BookOpen, Loader2 } from 'lucide-react';

export default function ManualLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050a14] text-slate-300 relative overflow-hidden">
      {/* 프리미엄 로딩 오버레이 (가장 눈에 띄는 요소) */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050a14]/60 backdrop-blur-md">
        <div className="relative mb-8">
          {/* 외부 광채 효과 */}
          <div className="absolute inset-0 bg-emerald-500/20 blur-[60px] animate-pulse" />
          
          <div className="relative">
            <div className="h-24 w-24 flex-shrink-0 animate-bounce-slow">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path d="M6 36 C6 36 8 40 20 40 C32 40 34 36 34 36 L32 20 C32 12 27 7 20 7 C13 7 8 12 8 20 Z" fill="url(#lBody)"/>
                <path d="M11 12 L7 1 L15 10 Z" fill="url(#lGrad)"/>
                <ellipse cx="20" cy="20" rx="11" ry="10" fill="url(#lFace)"/>
                <circle cx="14.5" cy="19" r="5.5" fill="#0d1f2d" stroke="url(#lGrad)" strokeWidth="1"/>
                <circle cx="14.5" cy="19" r="4" fill="url(#lEye)"/>
                <circle cx="14.5" cy="19" r="2" fill="#050a14"/>
                <circle cx="25.5" cy="19" r="5.5" fill="#0d1f2d" stroke="url(#lGrad)" strokeWidth="1"/>
                <circle cx="25.5" cy="19" r="4" fill="url(#lEye)"/>
                <circle cx="25.5" cy="19" r="2" fill="#050a14"/>
                <path d="M20 24 L17.5 28 L20 26.5 L22.5 28 Z" fill="url(#lGrad)"/>
                <defs>
                  <linearGradient id="lGrad" x1="7" y1="1" x2="33" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#34d399"/><stop offset="100%" stopColor="#22d3ee"/>
                  </linearGradient>
                  <linearGradient id="lBody" x1="6" y1="7" x2="34" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#34d399" stopOpacity="0.18"/><stop offset="100%" stopColor="#22d3ee" stopOpacity="0.26"/>
                  </linearGradient>
                  <radialGradient id="lFace" cx="50%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#1a3a4a" stopOpacity="0.6"/><stop offset="100%" stopColor="#082030" stopOpacity="0.3"/>
                  </radialGradient>
                  <radialGradient id="lEye" cx="40%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#6ee7b7"/><stop offset="60%" stopColor="#0891b2"/><stop offset="100%" stopColor="#065f80"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute -bottom-2 -right-2">
              <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-black text-white tracking-tight">
            사용자 설명서를 <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent italic">불러오는 중</span>입니다
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px]">
            잠시만 기다려 주세요. 대용량 문서를 최적화하고 있습니다.
          </p>
          
          <div className="mt-8 w-64 h-1 bg-white/5 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 animate-loading-progress w-full origin-left" />
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
