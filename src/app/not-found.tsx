import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 text-center">
      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-4">Error 404</div>
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6">
        4<span className="bg-gradient-to-r from-teal-500 to-navy-500 bg-clip-text text-transparent">0</span>4
      </h1>
      <p className="text-lg text-slate-500 font-light max-w-md mb-10">
        요청하신 페이지를 찾을 수 없습니다. 주소가 변경되었거나 삭제되었을 수 있습니다.
      </p>
      <Link
        href="/"
        className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-slate-800 transition-all duration-300"
      >
        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        홈으로 돌아가기
      </Link>
    </div>
  );
}
