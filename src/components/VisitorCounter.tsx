'use client';

import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';

const STORAGE_KEY = 'sl-visit-day';

/** 한국 시간 기준 오늘 날짜 (YYYY-MM-DD). 서버 집계(Asia/Seoul)와 기준을 맞춘다. */
const todayKst = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(new Date());

const isBot = () =>
  navigator.webdriver || /bot|crawl|spider|slurp|headless|lighthouse/i.test(navigator.userAgent);

type Stats = { today: number; total: number };

// 페이지를 여는 동안 한 번만 요청한다. (개발 모드의 effect 이중 실행이나
// 컴포넌트 재마운트로 한 방문이 두 번 세어지지 않게)
let request: Promise<Stats | null> | null = null;

function loadStats(): Promise<Stats | null> {
  if (request) return request;

  const today = todayKst();
  let storageOk = true;
  let countedToday = false;
  try {
    countedToday = localStorage.getItem(STORAGE_KEY) === today;
  } catch {
    storageOk = false;
  }
  const count = storageOk && !countedToday && !isBot();

  request = fetch('/api/visit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ count }),
  })
    .then((res) => (res.ok ? res.json() : null))
    .then((data) => {
      if (!data || typeof data.today !== 'number') return null;
      if (count) {
        try {
          localStorage.setItem(STORAGE_KEY, today);
        } catch {
          // 저장 실패는 무시한다 (다음 방문에 한 번 더 셀 뿐)
        }
      }
      return { today: data.today, total: data.total };
    })
    .catch(() => null);
  return request;
}

/**
 * 오늘 · 누적 방문자 수. 같은 브라우저는 하루 한 번만 센다.
 *
 * 브라우저에는 "마지막으로 센 날짜"만 저장한다(localStorage). 저장소를 쓸 수 없는
 * 환경(일부 사생활 보호 모드)에서는 새로고침마다 부풀지 않도록 세지 않고 조회만 한다.
 * 집계가 설정되지 않았거나 실패하면 아무것도 표시하지 않는다.
 */
export default function VisitorCounter() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    let alive = true;
    loadStats().then((s) => {
      if (alive) setStats(s);
    });
    return () => {
      alive = false;
    };
  }, []);

  if (!stats) return null;

  const fmt = (n: number) => n.toLocaleString('ko-KR');
  return (
    <p className="inline-flex items-center gap-2 text-xs tracking-normal text-slate-500" aria-label={`오늘 방문자 ${fmt(stats.today)}명, 전체 방문자 ${fmt(stats.total)}명`}>
      <Users size={14} className="text-teal-700" aria-hidden="true" />
      <span>
        오늘 <strong className="font-semibold text-slate-700">{fmt(stats.today)}</strong>
      </span>
      <span className="text-slate-300" aria-hidden="true">|</span>
      <span>
        전체 <strong className="font-semibold text-slate-700">{fmt(stats.total)}</strong>
      </span>
    </p>
  );
}
