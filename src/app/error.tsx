'use client';

import { useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 text-center">
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-teal-600 mb-4">Something went wrong</div>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
        일시적인 오류가 발생했습니다
      </h1>
      <p className="text-lg text-slate-500 font-light max-w-md mb-10">
        잠시 후 다시 시도해 주세요. 문제가 계속되면 커뮤니티로 문의해 주세요.
      </p>
      <button
        onClick={reset}
        className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white hover:bg-slate-800 transition-all duration-300"
      >
        <RotateCcw size={16} className="group-hover:-rotate-45 transition-transform" />
        다시 시도
      </button>
    </div>
  );
}
