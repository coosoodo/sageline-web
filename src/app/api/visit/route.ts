import { NextResponse, type NextRequest } from 'next/server';

import { SITE_URL } from '@/lib/metadata';

/**
 * 방문자 수 집계 · 조회.
 *
 * POST { count: boolean }
 *   count=true  → 오늘 방문자를 1 올리고 오늘 · 누적 수를 돌려준다 (그날 첫 방문)
 *   count=false → 수만 돌려준다 (이미 센 방문자)
 *
 * 중복 제거는 브라우저 localStorage 가 맡는다(VisitorCounter). 서버는 방문자를
 * 식별하는 값을 받지도 저장하지도 않는다. Supabase 는 service_role 키로만 호출하며
 * 이 키는 서버 환경변수(SUPABASE_SERVICE_ROLE_KEY)에만 둔다.
 */
export async function POST(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: 'not configured' }, { status: 503 });
  }

  // 다른 사이트에서 보내는 요청으로 숫자를 부풀리지 못하게 같은 출처만 받는다
  const origin = request.headers.get('origin');
  const allowed = new Set([new URL(SITE_URL).origin, request.nextUrl.origin]);
  if (origin && !allowed.has(origin)) {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 });
  }

  let count = false;
  try {
    const body = await request.json();
    count = body?.count === true;
  } catch {
    // 본문이 없거나 잘못되면 조회만 한다
  }

  // 새 방식 secret 키(sb_secret_...)는 JWT 가 아니라 apikey 헤더로만 보낸다.
  // 예전 방식 service_role 키(JWT, eyJ...)는 Authorization 에도 실어야 역할이 적용된다.
  const headers: Record<string, string> = { apikey: key, 'Content-Type': 'application/json' };
  if (key.startsWith('eyJ')) headers.Authorization = `Bearer ${key}`;

  const res = await fetch(`${url}/rest/v1/rpc/record_site_visit`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ p_count: count }),
    cache: 'no-store',
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'upstream' }, { status: 502 });
  }

  const rows: { today: number; total: number }[] = await res.json();
  const row = rows[0] ?? { today: 0, total: 0 };
  return NextResponse.json(
    { today: Number(row.today), total: Number(row.total) },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
