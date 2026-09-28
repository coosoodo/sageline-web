'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * 스크롤로 뷰포트에 들어올 때 페이드+슬라이드로 나타나는 래퍼.
 *
 * 숨김 · 등장은 globals.css 의 [data-js] [data-reveal] 규칙이 맡는다. 서버 HTML은
 * 보이는 상태 그대로이고, JS 가 켜진 경우에만(<html data-js>) 숨겼다가 나타낸다.
 * 그래서 JS 를 받기 전이나 실행에 실패해도 내용이 가려지지 않는다.
 * prefers-reduced-motion 사용자에게는 CSS 가 애니메이션 없이 바로 보여 준다.
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
      data-reveal=""
      data-revealed={visible ? '' : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
