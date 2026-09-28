-- 홈페이지 방문자 수 (하루 1회 방문자 기준)
-- Supabase 대시보드 > SQL Editor 에서 한 번 실행한다.
--
-- 저장하는 것은 "날짜별 방문자 수" 숫자뿐이다. IP · 브라우저 정보 등 방문자를
-- 식별할 수 있는 값은 저장하지 않는다. 중복 제거는 방문자 브라우저의
-- localStorage(마지막 방문 날짜)로 한다.

create table if not exists public.site_visit_daily (
  day      date   primary key,              -- 한국 시간 기준 날짜
  visitors bigint not null default 0
);

-- RLS 를 켜고 정책을 두지 않는다 → anon · authenticated 키로는 읽기 · 쓰기 모두 불가.
-- 웹사이트 서버(API 라우트)만 service_role 키로 아래 함수를 호출한다.
alter table public.site_visit_daily enable row level security;

-- p_count = true 면 오늘 방문자를 1 올린 뒤, 오늘 · 누적 방문자 수를 돌려준다.
create or replace function public.record_site_visit(p_count boolean)
returns table (today bigint, total bigint)
language plpgsql
security definer
set search_path = public
as $$
declare
  d date := (now() at time zone 'Asia/Seoul')::date;
begin
  if p_count then
    insert into public.site_visit_daily (day, visitors)
    values (d, 1)
    on conflict (day) do update
      set visitors = public.site_visit_daily.visitors + 1;
  end if;

  return query
    select
      coalesce((select v.visitors from public.site_visit_daily v where v.day = d), 0)::bigint,
      coalesce((select sum(v.visitors) from public.site_visit_daily v), 0)::bigint;
end;
$$;

revoke all on function public.record_site_visit(boolean) from public, anon, authenticated;
grant execute on function public.record_site_visit(boolean) to service_role;
