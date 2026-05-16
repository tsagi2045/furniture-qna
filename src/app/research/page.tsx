import type { Metadata } from "next";
import ResearchDashboard from "@/components/ResearchDashboard";

export const metadata: Metadata = {
  title: "리서치 대시보드",
  description:
    "트렌드, 시장성, 배송·설치, 제작 가능성, 최종 우선순위를 주제별 글로 정리한 인테리어 리서치 대시보드",
};

export default function ResearchPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1120px] flex-col gap-[var(--space-10)] px-[var(--space-6)] py-[var(--space-8)]">
      <ResearchDashboard />
    </main>
  );
}
