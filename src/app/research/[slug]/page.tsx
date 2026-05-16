import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResearchTopicArticle from "@/components/ResearchTopicArticle";
import {
  getResearchTopicBySlug,
  researchDashboardMeta,
  researchTopics,
} from "@/lib/interior-trend-research";

export function generateStaticParams() {
  return researchTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getResearchTopicBySlug(slug);

  if (!topic) {
    return {
      title: "리서치 글을 찾을 수 없음",
    };
  }

  return {
    title: `${topic.title} | ${researchDashboardMeta.title}`,
    description: topic.summary,
  };
}

export default async function ResearchTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getResearchTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  return <ResearchTopicArticle topic={topic} />;
}
