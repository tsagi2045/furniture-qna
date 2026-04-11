import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "맞춤가구 사업 준비 질문지",
  description: "Phase 0 시작 전 사업자 내부 의사결정 체크리스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
