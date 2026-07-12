import React from 'react';
import Link from 'next/link';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import Image from 'next/image';
import LogoutButton from '@/components/LogoutButton';
import MobileNav from '@/components/MobileNav';
import { MAIN_NAV } from '@/lib/nav';
import logoMark from '@/images/SageLine_Mark.png';

export default async function Header() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="group flex items-center space-x-3 cursor-pointer">
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image src={logoMark} alt="SAGE LINE 로고" fill sizes="40px" className="object-contain" priority />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[18px] font-black tracking-[0.08em] text-navy-700 group-hover:text-navy-500 transition-colors duration-300">
              SAGE<span className="text-teal-500"> LINE</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.25em] text-slate-500 uppercase mt-0.5">Consulting &amp; Technology</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          {MAIN_NAV.map(([item, href]) => (
            <Link key={item} href={href} className="hover:text-teal-600 transition-all duration-300">
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-xs text-slate-500 hidden md:block">{user.email}</span>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login" className="px-5 py-2 text-xs font-black uppercase tracking-[0.15em] text-slate-500 hover:text-slate-900 transition-all duration-300">로그인</Link>
              <Link href="/signup" className="hidden sm:block rounded-full border border-teal-500/30 bg-teal-500/5 px-5 py-2 text-xs font-black uppercase tracking-[0.15em] text-teal-600 hover:bg-teal-500/10 transition-all duration-300">회원가입</Link>
            </>
          )}
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
