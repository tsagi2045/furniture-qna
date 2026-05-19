import Image from "next/image";
import Link from "next/link";
import { researchTopics, type ResearchTopic } from "@/lib/interior-trend-research";

export default function ResearchTopicArticle({ topic }: { topic: ResearchTopic }) {
  const relatedTopics = researchTopics.filter((item) => item.slug !== topic.slug).slice(0, 3);

  return (
    <main className="mx-auto flex w-full max-w-[980px] flex-col gap-[var(--space-8)] px-[var(--space-6)] py-[var(--space-8)]">
      <section
        style={{
          background: "linear-gradient(180deg, rgba(0,113,227,0.06) 0%, rgba(0,113,227,0.02) 100%)",
          border: "1px solid rgba(0,113,227,0.10)",
          borderRadius: "24px",
          padding: "clamp(24px, 4vw, 40px)",
        }}
      >
        <div className="flex flex-col gap-[var(--space-5)]">
          <div className="flex flex-wrap items-center gap-[var(--space-3)]">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 transition-opacity duration-150 hover:opacity-70"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--text-secondary)",
              }}
            >
              ← 대시보드로 돌아가기
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

          <div className="flex flex-col gap-[var(--space-3)]">
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                lineHeight: 1.5,
                letterSpacing: "0.02em",
                color: "var(--accent)",
                textTransform: "uppercase",
              }}
            >
              {topic.eyebrow}
            </span>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                lineHeight: 1.7,
                color: "var(--text-tertiary)",
              }}
            >
              {topic.question}
            </p>
            <h1
              style={{
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1.2px",
                color: "var(--text-primary)",
              }}
            >
              {topic.title}
            </h1>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: 1.9,
                color: "var(--text-secondary)",
                maxWidth: 820,
              }}
            >
              {topic.excerpt}
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
              읽는 시간 {topic.readingTime}
            </span>
            {topic.stats.map((stat) => (
              <span
                key={stat}
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
                {stat}
              </span>
            ))}
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
            이 글의 핵심
          </h2>
        </div>
        <div className="grid gap-[var(--space-4)] md:grid-cols-3">
          {topic.keyTakeaways.map((item) => (
            <article
              key={item}
              style={{
                background: "var(--bg-primary)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-5)",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                }}
              >
                {item}
              </p>
            </article>
          ))}
        </div>
      </section>

      {topic.sections.map((section) => (
        <section key={section.title} className="flex flex-col gap-[var(--space-4)]">
          <div>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.8px",
                color: "var(--text-primary)",
                marginBottom: section.intro || section.paragraphs ? "var(--space-2)" : 0,
              }}
            >
              {section.title}
            </h2>
            {section.intro && (
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  maxWidth: 780,
                }}
              >
                {section.intro}
              </p>
            )}
          </div>

          {section.paragraphs && section.paragraphs.length > 0 && (
            <div className="flex flex-col gap-[var(--space-3)]">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.9,
                    color: "var(--text-secondary)",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {section.images && section.images.length > 0 && (
            <div
              className={
                section.images.length === 1
                  ? "grid gap-[var(--space-4)]"
                  : "grid gap-[var(--space-4)] md:grid-cols-2"
              }
            >
              {section.images.map((image) => (
                <figure
                  key={image.src}
                  style={{
                    margin: 0,
                    background: "var(--bg-primary)",
                    borderRadius: "var(--radius-xl)",
                    border: "1px solid rgba(0,0,0,0.05)",
                    boxShadow: "var(--shadow-card)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: `${image.width} / ${image.height}`,
                      background: "rgba(0,0,0,0.04)",
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 768px) 480px, 100vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  {image.caption && (
                    <figcaption
                      style={{
                        fontSize: "12px",
                        lineHeight: 1.7,
                        color: "var(--text-tertiary)",
                        padding: "var(--space-3) var(--space-4)",
                        borderTop: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {section.bullets && section.bullets.length > 0 && (
            <article
              style={{
                background: "var(--bg-primary)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-5)",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <ul className="flex flex-col gap-[var(--space-2)]">
                {section.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex gap-[var(--space-2)]"
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.8,
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          )}

          {section.table && (
            <div
              style={{
                background: "var(--bg-primary)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "var(--shadow-card)",
                overflow: "hidden",
              }}
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse">
                  <thead>
                    <tr style={{ background: "rgba(0,113,227,0.04)" }}>
                      {section.table.columns.map((column) => (
                        <th
                          key={column}
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            lineHeight: 1.6,
                            color: "var(--text-primary)",
                            padding: "14px 16px",
                            textAlign: "left",
                            borderBottom: "1px solid rgba(0,0,0,0.06)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rowIdx) => (
                      <tr key={`${section.title}-${rowIdx}`}>
                        {row.map((cell, cellIdx) => (
                          <td
                            key={`${cell}-${cellIdx}`}
                            style={{
                              fontSize: "13px",
                              fontWeight: cellIdx === 0 ? 600 : 400,
                              lineHeight: 1.8,
                              color: "var(--text-secondary)",
                              padding: "14px 16px",
                              borderBottom:
                                rowIdx === section.table!.rows.length - 1
                                  ? "none"
                                  : "1px solid rgba(0,0,0,0.05)",
                              verticalAlign: "top",
                            }}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {section.checklistGroups && section.checklistGroups.length > 0 && (
            <div className="grid gap-[var(--space-4)] md:grid-cols-2">
              {section.checklistGroups.map((group) => (
                <article
                  key={group.title}
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
                      marginBottom: "var(--space-3)",
                    }}
                  >
                    {group.title}
                  </h3>
                  <ul className="flex flex-col gap-[var(--space-2)]">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-[var(--space-2)]"
                        style={{
                          fontSize: "13px",
                          lineHeight: 1.8,
                          color: "var(--text-secondary)",
                        }}
                      >
                        <span style={{ color: "var(--accent)" }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}
        </section>
      ))}

      {topic.sources.length > 0 && (
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
            참고 출처
          </h2>
        </div>
        <article
          style={{
            background: "var(--bg-primary)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-5)",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div className="grid gap-[var(--space-3)] md:grid-cols-2">
            {topic.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 transition-opacity duration-150 hover:opacity-75"
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: 1.7,
                  color: "var(--accent)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
                  <path
                    d="M5 3H3.5A1.5 1.5 0 002 4.5v4A1.5 1.5 0 003.5 10h4A1.5 1.5 0 009 8.5V7M7 2h3v3M6 6l4-4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{source.label}</span>
              </a>
            ))}
          </div>
        </article>
      </section>
      )}

      <section className="flex flex-col gap-[var(--space-4)] border-t border-[rgba(0,0,0,0.06)] pt-[var(--space-6)]">
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
            이어서 읽을 글
          </h2>
        </div>
        <div className="grid gap-[var(--space-4)] md:grid-cols-3">
          {relatedTopics.map((item) => (
            <Link
              key={item.slug}
              href={`/research/${item.slug}`}
              className="flex h-full flex-col rounded-[24px] transition-transform duration-150 hover:-translate-y-[2px]"
              style={{
                background: "var(--bg-primary)",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "var(--shadow-card)",
                padding: "var(--space-5)",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--accent)",
                  background: "rgba(0,113,227,0.08)",
                  borderRadius: "var(--radius-pill)",
                  padding: "4px 8px",
                  alignSelf: "flex-start",
                  marginBottom: "var(--space-3)",
                }}
              >
                {item.eyebrow}
              </span>
              <h3
                style={{
                  fontSize: "16px",
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
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  marginBottom: "var(--space-3)",
                }}
              >
                {item.summary}
              </p>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--accent)",
                  marginTop: "auto",
                }}
              >
                이 글 보기 →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
