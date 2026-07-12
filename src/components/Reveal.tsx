'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * 스크롤로 뷰포트에 들어올 때 페이드+슬라이드로 나타나는 래퍼.
 * prefers-reduced-motion 사용자에게는 애니메이션 없이 즉시 표시한다.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const raf = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(raf);
    }

    let fired = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        fired = true;
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);

    // IntersectionObserver는 관찰 시작 직후 항상 초기 콜백을 발화한다.
    // 콜백이 전혀 오지 않는 비정상 환경에서 콘텐츠가 영구히 숨겨지지 않도록 폴백.
    const fallback = window.setTimeout(() => {
      if (!fired) setVisible(true);
    }, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}
