import React from 'react';
import Link from 'next/link';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import LogoutButton from '@/components/LogoutButton';

export default async function Header() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="group flex items-center space-x-3 cursor-pointer">
          <div className="relative h-10 w-10 flex-shrink-0">
            {/* SVG 로고 (생략 가능하나 일관성을 위해 유지) */}
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <path d="M6 36 C6 36 8 40 20 40 C32 40 34 36 34 36 L32 20 C32 12 27 7 20 7 C13 7 8 12 8 20 Z" fill="url(#hBody)"/>
              <path d="M11 12 L7 1 L15 10 Z" fill="url(#hGrad)"/>
              <ellipse cx="20" cy="20" rx="11" ry="10" fill="url(#hFace)"/>
              <circle cx="14.5" cy="19" r="5.5" fill="#0d1f2d" stroke="url(#hGrad)" strokeWidth="1"/>
              <circle cx="14.5" cy="19" r="4" fill="url(#hEye)"/>
              <circle cx="25.5" cy="19" r="5.5" fill="#0d1f2d" stroke="url(#hGrad)" strokeWidth="1"/>
              <circle cx="25.5" cy="19" r="4" fill="url(#hEye)"/>
              <path d="M20 24 L17.5 28 L20 26.5 L22.5 28 Z" fill="url(#hGrad)"/>
              <defs>
                <linearGradient id="hGrad" x1="7" y1="1" x2="33" y2="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#34d399"/><stop offset="100%" stopColor="#22d3ee"/>
                </linearGradient>
                <linearGradient id="hBody" x1="6" y1="7" x2="34" y2="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.18"/><stop offset="100%" stopColor="#22d3ee" stopOpacity="0.26"/>
                </linearGradient>
                <radialGradient id="hFace" cx="50%" cy="50%" r="55%"><stop offset="0%" stopColor="#1a3a4a" stopOpacity="0.6"/><stop offset="100%" stopColor="#082030" stopOpacity="0.3"/></radialGradient>
                <radialGradient id="hEye" cx="40%" cy="35%" r="60%"><stop offset="0%" stopColor="#6ee7b7"/><stop offset="100%" stopColor="#065f80"/></radialGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[18px] font-black tracking-[0.08em] text-slate-900 group-hover:text-emerald-500 transition-colors duration-300">
              SAGE<span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent"> LINE</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.25em] text-slate-500 uppercase mt-0.5">Data-Driven Strategy</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          {[
            ['Vision', '/#vision'], 
            ['Business', '/#business'], 
            ['Technology', '/#technology'], 
            ['Manual', '/manual'],
            ['Community', '/boards/free']
          ].map(([item, href]) => (
            <Link key={item} href={href} className="hover:text-emerald-600 transition-all duration-300">
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
              <Link href="/signup" className="rounded-full border border-emerald-500/30 bg-emerald-500/5 px-5 py-2 text-xs font-black uppercase tracking-[0.15em] text-emerald-600 hover:bg-emerald-500/10 transition-all duration-300">회원가입</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
