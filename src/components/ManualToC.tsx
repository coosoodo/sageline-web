"use client";

import { useState, useEffect, useMemo } from 'react';
import { ChevronRight, ChevronDown, ChevronsDownUp, ChevronsUpDown } from 'lucide-react';

import { ToCItem } from '@/lib/manual-utils';

interface ManualToCProps {
  content: string;
  toc: ToCItem[];
}

export default function ManualToC({ content, toc }: ManualToCProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Initial expansion: only expand level 1 by default for a cleaner look
    const initialExpanded = new Set<string>();
    toc.forEach(item => {
      if (item.level === 1) initialExpanded.add(item.id);
    });
    setExpandedIds(initialExpanded);

    const handleScroll = () => {
      const headings = toc.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && scrollPosition >= heading.offsetTop) {
          const currentId = toc[i].id;
          setActiveId(currentId);
          
          // Auto-expand parents of active item
          setExpandedIds(prev => {
            const next = new Set(prev);
            let parent = toc.find(it => it.id === currentId)?.parentId;
            while (parent) {
              if (!next.has(parent)) next.add(parent);
              const parentObj = toc.find(it => it.id === parent);
              parent = parentObj?.parentId;
            }
            return next;
          });
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleCollapseAll = () => {
    setExpandedIds(new Set());
  };

  const handleExpandAll = () => {
    const allParentIds = new Set<string>();
    toc.forEach(item => {
      if (toc.some(child => child.parentId === item.id)) {
        allParentIds.add(item.id);
      }
    });
    setExpandedIds(allParentIds);
  };

  const isVisible = (item: ToCItem) => {
    if (item.level === 1) return true;
    let parentId = item.parentId;
    while (parentId) {
      if (!expandedIds.has(parentId)) return false;
      const parent = toc.find(it => it.id === parentId);
      parentId = parent?.parentId;
    }
    return true;
  };

  const hasChildren = (id: string) => toc.some(item => item.parentId === id);

  return (
    <nav className="space-y-1 py-6">
      <div className="flex items-center justify-between mb-8 px-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-1 bg-gradient-to-b from-teal-400 to-navy-400 rounded-full"></div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">
            설명서 목차
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleExpandAll}
            title="모두 펼치기"
            className="p-1.5 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-all duration-200"
          >
            <ChevronsUpDown size={14} />
          </button>
          <button
            onClick={handleCollapseAll}
            title="모두 접기"
            className="p-1.5 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-all duration-200"
          >
            <ChevronsDownUp size={14} />
          </button>
        </div>
      </div>
      <div className="max-h-[calc(100vh-250px)] overflow-y-auto scrollbar-hide pr-2">
        {toc.map((item) => {
          if (!isVisible(item)) return null;

          const isExpanded = expandedIds.has(item.id);
          const active = activeId === item.id;
          const canExpand = hasChildren(item.id);

          return (
            <div key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                title={item.text} // Tooltip for full text
                className={`
                  group flex items-center py-2 px-3 text-sm transition-all duration-300 rounded-lg mb-0.5
                  ${item.level === 1 ? 'font-black' : item.level === 2 ? 'pl-7 font-bold' : 'pl-10 text-xs font-medium'}
                  ${active 
                    ? 'text-teal-700 bg-teal-50 shadow-[inset_0_0_10px_rgba(16,185,129,0.05)]' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.id);
                  if (element) {
                    const offset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
              >
                {active && (
                  <span className="absolute left-1.5 w-1 h-1 bg-teal-600 rounded-full shadow-[0_0_8px_rgba(5,150,105,0.4)]"></span>
                )}
                
                <span className="flex-grow truncate mr-2">
                  {item.text}
                </span>

                {canExpand && (
                  <button
                    onClick={(e) => toggleExpand(item.id, e)}
                    className="p-1 hover:bg-teal-100 rounded transition-colors text-slate-400 hover:text-teal-600"
                  >
                    {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </button>
                )}
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
