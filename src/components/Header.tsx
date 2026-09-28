import React from 'react';
import Link from 'next/link';
import MobileNav from '@/components/MobileNav';
import { MAIN_NAV, NAVER_CAFE_URL, isExternalHref } from '@/lib/nav';
import BrandLogo from '@/components/BrandLogo';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-8">
        <BrandLogo priority />
        
        <div className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          {MAIN_NAV.map(([item, href]) =>
            isExternalHref(href) ? (
              <a key={item} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-all duration-300">
                {item}
              </a>
            ) : (
              <Link key={item} href={href} className="hover:text-teal-600 transition-all duration-300">
                {item}
              </Link>
            ),
          )}
        </div>

        <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={NAVER_CAFE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex whitespace-nowrap rounded-full border border-teal-500/30 bg-teal-500/5 px-5 py-2 text-xs font-bold tracking-[0.1em] text-teal-700 hover:bg-teal-500/10 transition-all duration-300"
          >
            무료 다운로드
          </a>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
