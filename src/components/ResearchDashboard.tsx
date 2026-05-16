import Link from "next/link";
import {
  legacyResearchArchive,
  researchDashboardHighlights,
  researchDashboardMeta,
  researchTopics,
  shippingPriorityItems,
} from "@/lib/interior-trend-research";

export default function ResearchDashboard({
  embedded = false,
  showFullscreenLink = false,
  showArchiveLink = true,
}: {
  embedded?: boolean;
  showFullscreenLink?: boolean;
  showArchiveLink?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[var(--space-8)]">
      {showFullscreenLink && (
        <div
          style={{
            background: "rgba(52,199,89,0.06)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-4) var(--space-5)",
            border: "1px solid rgba(52,199,89,0.12)",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              marginBottom: "var(--space-2)",
            }}
          >
            새 리서치 대시보드
          </p>
          <div className="flex flex-col gap-[var(--space-3)] md:flex-row md:items-center md:justify-between">
            <p
              style={{
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "var(--text-secondary)",
              }}
            >
              이제 리서치 결과를 한 장짜리 보고서가 아니라, 주제별 글을 눌러 들어가는 대시보드 형태로 볼 수 있습니다.
            </p>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 self-start transition-opacity duration-150 hover:opacity-75"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--accent)",
                whiteSpace: "nowrap",
              }}
            >
              전체 화면으로 보기
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 6h7M6.5 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}

      <section
        style={{
          background: embedded
            ? "rgba(0,113,227,0.04)"
            : "linear-gradient(180deg, rgba(0,113,227,0.06) 0%, rgba(0,113,227,0.02) 100%)",
          border: embedded
            ? "1px solid rgba(0,113,227,0.08)"
            : "1px solid rgba(0,113,227,0.10)",
          borderRadius: "24px",
          padding: embedded ? "var(--space-5)" : "clamp(24px, 4vw, 40px)",
        }}
      >
        <div className="flex flex-col gap-[var(--space-5)]">
          {!embedded && (
            <div className="flex flex-wrap items-center gap-[var(--space-3)]">
              <Link
                href="/"
                className="inline-flex items-center gap-2 transition-opacity duration-150 hover:opacity-70"
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                }}
              >
                ← 질문지로 돌아가기
              </Link>
              <Link
                href="/#research"
                className="inline-flex items-center gap-2 transition-opacity duration-150 hover:opacity-70"
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                }}
              >
                메인 탭에서 보기
              </Link>
            </div>
          )}

          <div className="flex flex-col gap-[var(--space-3)]">
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                lineHeight: 1.5,
                letterSpacing: "0.02em",
                color: "var(--accent)",
                textTransform: "uppercase",
              }}
            >
              Research Dashboard
            </p>
            <h1
              style={{
                fontSize: embedded ? "clamp(24px, 3vw, 32px)" : "clamp(30px, 4vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: embedded ? "-0.8px" : "-1.2px",
                color: "var(--text-primary)",
              }}
            >
              {researchDashboardMeta.title}
            </h1>
            <p
              style={{
                fontSize: embedded ? "14px" : "15px",
                fontWeight: 400,
                lineHeight: 1.9,
                color: "var(--text-secondary)",
                maxWidth: 860,
              }}
            >
              {researchDashboardMeta.oneLineConclusion}
            </p>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 500,
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                maxWidth: 860,
              }}
            >
              운영 모델 제안: {researchDashboardMeta.operatingModel}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-[var(--space-3)]">
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--text-secondary)",
                padding: "6px 12px",
                borderRadius: "var(--radius-pill)",
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              업데이트 {researchDashboardMeta.updatedAt}
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--text-secondary)",
                padding: "6px 12px",
                borderRadius: "var(--radius-pill)",
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              출처 문서 {researchDashboardMeta.sourceDocument}
            </span>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[var(--space-4)]">
        <div>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              color: "var(--text-primary)",
              marginBottom: "var(--space-2)",
            }}
          >
            지금 먼저 볼 핵심 요약
          </h2>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              maxWidth: 780,
            }}
          >
            트렌드 결론과 운영 현실이 충돌하는 지점을 먼저 잡아야 이후 아이템 선택이 흔들리지 않습니다.
          </p>
        </div>
        <div className="grid gap-[var(--space-4)] md:grid-cols-3">
          {researchDashboardHighlights.map((item) => (
            <article
              key={item.title}
              style={{
                background: "var(--bg-primary)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-5)",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  lineHeight: 1.4,
                  color: "var(--text-primary)",
                  marginBottom: "var(--space-2)",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                }}
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[var(--space-4)]">
        <div>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              color: "var(--text-primary)",
              marginBottom: "var(--space-2)",
            }}
          >
            주제별 글 보기
          </h2>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              maxWidth: 780,
            }}
          >
            의사결정 기준별로 글을 나눴습니다. 카드 하나가 하나의 블로그 글이며, 들어가면 표와 체크리스트까지 한 번에 볼 수 있습니다.
          </p>
        </div>

        <div className="grid gap-[var(--space-4)] lg:grid-cols-2 xl:grid-cols-3">
          {researchTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/research/${topic.slug}`}
              className="group flex h-full flex-col rounded-[24px] transition-transform duration-150 hover:-translate-y-[2px]"
              style={{
                background: "var(--bg-primary)",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "var(--shadow-card)",
                padding: "var(--space-5)",
              }}
            >
              <div className="mb-[var(--space-3)] flex items-center justify-between gap-[var(--space-3)]">
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--accent)",
                    background: "rgba(0,113,227,0.08)",
                    borderRadius: "var(--radius-pill)",
                    padding: "4px 8px",
                  }}
                >
                  {topic.eyebrow}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "var(--text-tertiary)",
                  }}
                >
                  {topic.readingTime}
                </span>
              </div>

              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: 1.6,
                  color: "var(--text-tertiary)",
                  marginBottom: "var(--space-2)",
                }}
              >
                {topic.question}
              </p>

              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  letterSpacing: "-0.5px",
                  color: "var(--text-primary)",
                  marginBottom: "var(--space-2)",
                }}
              >
                {topic.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  marginBottom: "var(--space-4)",
                }}
              >
                {topic.summary}
              </p>

              <div className="mb-[var(--space-4)] flex flex-wrap gap-2">
                {topic.stats.map((stat) => (
                  <span
                    key={stat}
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: "var(--radius-pill)",
                      background: "rgba(0,0,0,0.04)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {stat}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-[var(--space-3)] border-t border-[rgba(0,0,0,0.06)] pt-[var(--space-4)]">
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: 1.6,
                    color: "var(--accent)",
                  }}
                >
                  글 보러 가기
                </span>
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="transition-transform duration-150 group-hover:translate-x-0.5">
                  <path
                    d="M2.5 6h7M6.5 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--accent)" }}
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[var(--space-4)]">
        <div>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              color: "var(--text-primary)",
              marginBottom: "var(--space-2)",
            }}
          >
            배송 기준으로 다시 뽑은 1차 주력 후보
          </h2>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              maxWidth: 780,
            }}
          >
            이 5개는 대형 히어로 제품보다 먼저 포장, 배송, 반품, 고객 조립을 검증하기 좋은 순서입니다.
          </p>
        </div>
        <div className="grid gap-[var(--space-4)] md:grid-cols-2 xl:grid-cols-5">
          {shippingPriorityItems.map((item) => (
            <article
              key={item.title}
              style={{
                background: "var(--bg-primary)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-5)",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="mb-[var(--space-3)] flex items-center justify-between gap-[var(--space-2)]">
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--accent)",
                    background: "rgba(0,113,227,0.08)",
                    borderRadius: "var(--radius-pill)",
                    padding: "4px 8px",
                  }}
                >
                  #{item.rank}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "var(--text-tertiary)",
                  }}
                >
                  {item.shippingModel}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  lineHeight: 1.4,
                  color: "var(--text-primary)",
                  marginBottom: "var(--space-2)",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: 1.6,
                  color: "var(--text-tertiary)",
                  marginBottom: "var(--space-2)",
                }}
              >
                조립: {item.assembly}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  marginBottom: "var(--space-3)",
                }}
              >
                {item.reason}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: 1.7,
                  color: "var(--text-tertiary)",
                }}
              >
                주의: {item.caution}
              </p>
            </article>
          ))}
        </div>
      </section>

      {showArchiveLink && (
        <section
          style={{
            background: "rgba(0,0,0,0.02)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-5)",
            border: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          <div className="flex flex-col gap-[var(--space-3)] md:flex-row md:items-center md:justify-between">
            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  lineHeight: 1.5,
                  letterSpacing: "0.02em",
                  color: "var(--text-tertiary)",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-1)",
                }}
              >
                Archive
              </p>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: 1.35,
                  color: "var(--text-primary)",
                  marginBottom: "var(--space-1)",
                }}
              >
                {legacyResearchArchive.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  maxWidth: 680,
                }}
              >
                {legacyResearchArchive.description}
              </p>
            </div>
            <Link
              href={legacyResearchArchive.href}
              className="inline-flex items-center gap-2 self-start transition-opacity duration-150 hover:opacity-75"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--accent)",
                whiteSpace: "nowrap",
              }}
            >
              아카이브 보기
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 6h7M6.5 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
