import React from 'react';
import Link from 'next/link';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import LogoutButton from '@/components/LogoutButton';
import MobileNav from '@/components/MobileNav';
import { MAIN_NAV, isExternalHref } from '@/lib/nav';
import BrandLogo from '@/components/BrandLogo';

export default async function Header() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
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

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-xs text-slate-500 hidden md:block">{user.email}</span>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login" className="whitespace-nowrap rounded-full border border-teal-500/30 bg-teal-500/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-600 hover:bg-teal-500/10 transition-all duration-300">로그인</Link>
            </>
          )}
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
