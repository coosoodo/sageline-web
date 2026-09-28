import Link from 'next/link';
import Image from 'next/image';

import logoMark from '@/images/SageLine_Mark.png';

/** 부엉이 마크 + "SAGE LINE" 워드마크. 사이트 헤더와 로그인 화면이 함께 쓴다. */
export default function BrandLogo({
  subtitle = 'Consulting & Technology',
  priority = false,
}: {
  subtitle?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" className="group flex flex-shrink-0 items-center space-x-3 cursor-pointer">
      <div className="relative h-10 w-10 flex-shrink-0">
        <Image src={logoMark} alt="SAGE LINE 로고" fill sizes="40px" className="object-contain" priority={priority} />
      </div>
      <div className="flex flex-col leading-none">
        <span className="whitespace-nowrap text-[18px] font-black tracking-[0.08em] text-navy-700 group-hover:text-navy-500 transition-colors duration-300">
          SAGE<span className="text-teal-500"> LINE</span>
        </span>
        <span className="whitespace-nowrap text-[8px] font-bold tracking-[0.15em] sm:tracking-[0.25em] text-slate-500 uppercase mt-0.5">{subtitle}</span>
      </div>
    </Link>
  );
}
