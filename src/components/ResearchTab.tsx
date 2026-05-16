"use client";

import ResearchDashboard from "@/components/ResearchDashboard";
import LegacyResearchArchive from "@/components/LegacyResearchArchive";

export default function ResearchTab({
  showResearchPageLink = true,
}: {
  showResearchPageLink?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[var(--space-10)]">
      <ResearchDashboard embedded showFullscreenLink={showResearchPageLink} />

      <section className="flex flex-col gap-[var(--space-4)]">
        <div>
          <h3
            style={{
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.6px",
              color: "var(--text-primary)",
              marginBottom: "var(--space-2)",
            }}
          >
            기존 고객 VoC·세그먼트 아카이브
          </h3>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              maxWidth: 780,
            }}
          >
            새 대시보드는 의사결정용으로 재구성했고, 아래 카드형 아카이브는 초기 인터뷰와 웹 리서치 원자료 참고용으로 그대로 남겨둡니다.
          </p>
        </div>
        <LegacyResearchArchive />
      </section>
    </div>
  );
}
