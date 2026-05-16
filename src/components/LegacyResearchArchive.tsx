import { researchSections, researchMeta } from "@/lib/research";

export default function LegacyResearchArchive() {
  return (
    <div id="research-legacy" className="flex flex-col gap-[var(--space-8)] scroll-mt-24">
      <div
        style={{
          background: "rgba(0,113,227,0.04)",
          borderRadius: "var(--radius-xl)",
          padding: "var(--space-4) var(--space-5)",
          border: "1px solid rgba(0,113,227,0.08)",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            marginBottom: "var(--space-1)",
          }}
        >
          📊 기존 리서치 아카이브
        </p>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "var(--text-secondary)",
          }}
        >
          웹 리서치 기반 고객 VoC + 세그먼트·수요 분석 ({researchMeta.rawFiles.length}개 원본 파일, 약 {researchMeta.totalSources}개 웹 소스 인용). 업데이트: {researchMeta.updatedAt}.
        </p>
      </div>

      {researchSections.map((section, sectionIdx) => (
        <section key={sectionIdx} className="flex flex-col gap-[var(--space-4)]">
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: "-0.5px",
                color: "var(--text-primary)",
                marginBottom: "var(--space-1)",
              }}
            >
              {section.title}
            </h3>
            {section.subtitle && (
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "var(--text-tertiary)",
                }}
              >
                {section.subtitle}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-[var(--space-3)]">
            {section.cards.map((card, cardIdx) => (
              <article
                key={cardIdx}
                style={{
                  background: "var(--bg-primary)",
                  borderRadius: "var(--radius-xl)",
                  padding: "var(--space-5)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <div className="mb-[var(--space-3)] flex items-start justify-between gap-[var(--space-3)]">
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      lineHeight: 1.4,
                      letterSpacing: "-0.2px",
                      color: "var(--text-primary)",
                      flex: 1,
                    }}
                  >
                    {card.title}
                  </h4>
                  {card.tag && (
                    <span
                      className="shrink-0"
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        padding: "3px 8px",
                        borderRadius: "var(--radius-pill)",
                        background: "rgba(0,113,227,0.08)",
                        color: "var(--accent)",
                        letterSpacing: "-0.1px",
                      }}
                    >
                      {card.tag}
                    </span>
                  )}
                </div>

                <ul className="mb-[var(--space-3)] flex flex-col gap-[var(--space-2)]">
                  {card.summary.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-[var(--space-2)]"
                      style={{
                        fontSize: "13px",
                        fontWeight: 400,
                        lineHeight: 1.7,
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span className="shrink-0 mt-[2px]" style={{ color: "var(--text-tertiary)" }}>
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {card.quotes && card.quotes.length > 0 && (
                  <div className="mb-[var(--space-3)] flex flex-col gap-[var(--space-2)]">
                    {card.quotes.map((quote, i) => (
                      <blockquote
                        key={i}
                        style={{
                          borderLeft: "3px solid var(--accent)",
                          padding: "var(--space-2) var(--space-3)",
                          background: "rgba(0,0,0,0.02)",
                          borderRadius: "0 var(--radius-md) var(--radius-md) 0",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "13px",
                            fontWeight: 400,
                            lineHeight: 1.7,
                            color: "var(--text-secondary)",
                            fontStyle: "italic",
                            marginBottom: "var(--space-1)",
                          }}
                        >
                          &ldquo;{quote.text}&rdquo;
                        </p>
                        <p
                          style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            lineHeight: 1.5,
                            color: "var(--text-tertiary)",
                          }}
                        >
                          — {quote.source}
                        </p>
                      </blockquote>
                    ))}
                  </div>
                )}

                {card.sources && card.sources.length > 0 && (
                  <div
                    className="flex flex-wrap gap-[var(--space-2)]"
                    style={{
                      paddingTop: "var(--space-3)",
                      borderTop: "1px dashed rgba(0,0,0,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "var(--text-tertiary)",
                        paddingTop: "5px",
                      }}
                    >
                      출처:
                    </span>
                    {card.sources.map((source, i) => (
                      <a
                        key={i}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 transition-opacity duration-150 hover:opacity-70"
                        style={{
                          fontSize: "11px",
                          fontWeight: 500,
                          color: "var(--accent)",
                          padding: "4px 10px",
                          borderRadius: "var(--radius-pill)",
                          background: "rgba(0,113,227,0.06)",
                          lineHeight: 1.3,
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                          <path
                            d="M5 3H3.5A1.5 1.5 0 002 4.5v4A1.5 1.5 0 003.5 10h4A1.5 1.5 0 009 8.5V7M7 2h3v3M6 6l4-4"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {source.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
