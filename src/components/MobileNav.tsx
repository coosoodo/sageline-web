'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS: [string, string][] = [
  ['Products', '/#products'],
  ['Vision', '/#vision'],
  ['Technology', '/#technology'],
  ['Manual', '/manual'],
  ['Community', '/boards/free'],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5">
          <nav className="container mx-auto flex flex-col px-8 py-4">
            {NAV_ITEMS.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-600 last:border-b-0 hover:text-emerald-600 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
