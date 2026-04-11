# Q&A Site Template

Apple HIG 기반 Q&A / 질문지 웹사이트 템플릿.
`web-qna` 스킬이 이 템플릿을 복사해서 새 프로젝트를 생성합니다.

## Stack
- Next.js 16 + Tailwind CSS v4
- Pretendard (CDN)
- Supabase (PostgreSQL + Storage)

## Structure
- `src/lib/questions.ts` — 카테고리 · 질문 정의
- `src/lib/briefing.ts` — 브리핑 탭 콘텐츠
- `src/lib/storage.ts` — localStorage + Supabase dual storage
- `src/lib/supabase.ts` — Supabase 클라이언트 (환경변수 기반)
- `src/app/globals.css` — 디자인 토큰 (DESIGN.md 기반)
- `src/components/` — Header, CategoryTabs, QuestionCard, BriefingTab, FileUpload, BottomBar, Toast
- `supabase-schema.sql` — answers 테이블 + Storage 버킷 스키마
- `.env.example` — Supabase URL/Key

## Setup
1. `cp .env.example .env.local` 후 Supabase URL/Key 입력
2. Supabase SQL Editor에서 `supabase-schema.sql` 실행
3. `questions.ts`를 프로젝트에 맞게 수정
4. `npm install && npm run dev`
