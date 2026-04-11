-- Q&A 웹사이트 Supabase 스키마
-- Supabase SQL Editor 또는 `supabase db query --linked` 로 실행

-- 1. answers 테이블 (복합 응답 객체를 text 컬럼에 JSON으로 저장)
create table if not exists public.answers (
  question_id text primary key,
  answer text not null,
  updated_at timestamptz not null default now()
);

-- 2. RLS 활성화 + "Allow all" 정책 (내부 Q&A 용도 — 공개 접근 허용)
alter table public.answers enable row level security;

drop policy if exists "Allow all" on public.answers;
create policy "Allow all" on public.answers
  for all
  using (true)
  with check (true);

-- 3. Storage 버킷 (파일 첨부용)
insert into storage.buckets (id, name, public)
values ('attachments', 'attachments', true)
on conflict (id) do nothing;

-- 4. Storage RLS 정책
drop policy if exists "Public read attachments" on storage.objects;
create policy "Public read attachments" on storage.objects
  for select
  using (bucket_id = 'attachments');

drop policy if exists "Public upload attachments" on storage.objects;
create policy "Public upload attachments" on storage.objects
  for insert
  with check (bucket_id = 'attachments');

drop policy if exists "Public delete attachments" on storage.objects;
create policy "Public delete attachments" on storage.objects
  for delete
  using (bucket_id = 'attachments');
